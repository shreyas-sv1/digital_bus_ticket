import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GenerateCashTicketDto } from './dto/generate-cash-ticket.dto';
import { SetPaymentMethodDto } from './dto/set-payment-method.dto';
import { PaymentsService } from '../payments/payments.service';
import { SocketGateway } from '../socket/socket.gateway';
import * as crypto from 'crypto';
import * as QRCode from 'qrcode';

@Injectable()
export class TicketsService {
  constructor(
    private prisma: PrismaService,
    private paymentsService: PaymentsService,
    private socketGateway: SocketGateway,
  ) {}

  // ─── Conductor: Approve Session ───────────────────────────────────────────
  async approveSession(conductorId: string, sessionId: string) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: sessionId },
      include: {
        bus: true,
        traveler: { select: { id: true, name: true, phone: true } },
        boardingStop: true,
        destinationStop: true,
      },
    });

    if (!session) throw new NotFoundException('Session not found');

    // Verify conductor belongs to this bus
    if (session.bus.conductorId !== conductorId)
      throw new ForbiddenException('You are not the conductor of this bus');

    if (session.status !== 'PENDING')
      throw new BadRequestException(`Session is already ${session.status}`);

    // Check QR expiry
    if (new Date() > session.qrExpiresAt)
      throw new BadRequestException('QR code has expired. Ask traveler to refresh.');

    const updated = await this.prisma.travelSession.update({
      where: { id: sessionId },
      data: { status: 'APPROVED' },
      include: {
        traveler: { select: { id: true, name: true, phone: true } },
        boardingStop: true,
        destinationStop: true,
        bus: { include: { route: true } },
      },
    });

    // Calculate fare
    const fare = await this.calculateFare(
      updated.bus.routeId,
      updated.boardingStop.stopOrder,
      updated.destinationStop.stopOrder,
    );

    return {
      sessionId: updated.id,
      status: updated.status,
      traveler: updated.traveler,
      bus: {
        busNumber: updated.bus.busNumber,
        routeName: updated.bus.route.routeName,
      },
      boardingStop: updated.boardingStop.stopName,
      destinationStop: updated.destinationStop.stopName,
      fare,
    };
  }

  // ─── Conductor: Set Payment Method ────────────────────────────────────────
  async setPaymentMethod(conductorId: string, sessionId: string, dto: SetPaymentMethodDto) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: sessionId },
      include: { bus: true },
    });

    if (!session) throw new NotFoundException('Session not found');
    if (session.bus.conductorId !== conductorId)
      throw new ForbiddenException('You are not the conductor of this bus');
    if (session.status !== 'APPROVED')
      throw new BadRequestException('Session must be approved before setting payment method');

    return {
      sessionId,
      paymentMethod: dto.paymentMethod,
      message:
        dto.paymentMethod === 'CASH'
          ? 'Collect cash from traveler and click Generate Ticket'
          : 'Traveler will pay online via Razorpay',
    };
  }

  // ─── Conductor: Generate Cash Ticket ──────────────────────────────────────
  async generateCashTicket(conductorId: string, dto: GenerateCashTicketDto) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: dto.sessionId },
      include: {
        bus: { include: { route: true } },
        traveler: { select: { id: true, name: true, phone: true } },
        boardingStop: true,
        destinationStop: true,
        ticket: true,
      },
    });

    if (!session) throw new NotFoundException('Session not found');
    if (session.bus.conductorId !== conductorId)
      throw new ForbiddenException('You are not the conductor of this bus');
    if (session.status !== 'APPROVED')
      throw new BadRequestException('Session must be approved before generating ticket');
    if (session.ticket)
      throw new BadRequestException('Ticket already issued for this session');

    // Calculate fare
    const fare = await this.calculateFare(
      session.bus.routeId,
      session.boardingStop.stopOrder,
      session.destinationStop.stopOrder,
    );

    // Generate signed QR payload
    const ticketId = crypto.randomUUID();
    const payload = JSON.stringify({
      ticketId,
      travelerId: session.travelerId,
      busId: session.busId,
      boardingStop: session.boardingStop.stopName,
      destinationStop: session.destinationStop.stopName,
      fare,
      issuedAt: new Date().toISOString(),
    });

    // Sign with HMAC-SHA256
    if (!process.env.QR_SIGN_SECRET) {
      throw new Error('QR_SIGN_SECRET environment variable is required');
    }
    const secret = process.env.QR_SIGN_SECRET;
    const signature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    const signedQRData = JSON.stringify({ payload, signature });

    // Generate QR image
    const signedQRCode = await QRCode.toDataURL(signedQRData, {
      width: 300,
      margin: 2,
      color: { dark: '#1a1a2e', light: '#ffffff' },
    });

    // Create ticket in DB
    const ticket = await this.prisma.ticket.create({
      data: {
        id: ticketId,
        sessionId: session.id,
        travelerId: session.travelerId,
        conductorId,
        busId: session.busId,
        boardingStop: session.boardingStop.stopName,
        destinationStop: session.destinationStop.stopName,
        fare,
        paymentMethod: 'CASH',
        paymentStatus: 'PAID',
        signedQRCode: signedQRData,
      },
    });

    // Update session status
    await this.prisma.travelSession.update({
      where: { id: session.id },
      data: { status: 'TICKET_ISSUED' },
    });

    // Emit ticket to traveler via Socket.io
    this.socketGateway.emitTicketIssued(session.id, {
      id: ticket.id,
      busNumber: session.bus.busNumber,
      routeName: session.bus.route.routeName,
      boardingStop: ticket.boardingStop,
      destinationStop: ticket.destinationStop,
      fare: ticket.fare,
      paymentMethod: ticket.paymentMethod,
      paymentStatus: ticket.paymentStatus,
      issuedAt: ticket.issuedAt,
      traveler: session.traveler,
      qrCodeImage: signedQRCode,
    });

    return {
      ticket: {
        id: ticket.id,
        busNumber: session.bus.busNumber,
        routeName: session.bus.route.routeName,
        boardingStop: ticket.boardingStop,
        destinationStop: ticket.destinationStop,
        fare: ticket.fare,
        paymentMethod: ticket.paymentMethod,
        paymentStatus: ticket.paymentStatus,
        issuedAt: ticket.issuedAt,
        traveler: session.traveler,
      },
      signedQRCode, // base64 PNG — render on traveler screen
    };
  }

  // ─── Traveler: Get Ticket by ID ────────────────────────────────────────────
  async getTicketById(ticketId: string, userId: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        traveler: { select: { id: true, name: true, phone: true } },
        conductor: { select: { id: true, name: true } },
        bus: { include: { route: true } },
        session: true,
      },
    });

    if (!ticket) throw new NotFoundException('Ticket not found');
    if (ticket.travelerId !== userId && ticket.conductorId !== userId)
      throw new ForbiddenException('Access denied');

    // Regenerate QR image from stored signed data
    const qrCodeImage = await QRCode.toDataURL(ticket.signedQRCode, {
      width: 300,
      margin: 2,
    });

    return {
      id: ticket.id,
      busNumber: ticket.bus.busNumber,
      routeName: ticket.bus.route.routeName,
      boardingStop: ticket.boardingStop,
      destinationStop: ticket.destinationStop,
      fare: ticket.fare,
      paymentMethod: ticket.paymentMethod,
      paymentStatus: ticket.paymentStatus,
      issuedAt: ticket.issuedAt,
      isVerified: ticket.isVerified,
      traveler: ticket.traveler,
      qrCodeImage,
    };
  }

  // ─── Traveler: Get My Tickets ──────────────────────────────────────────────
  async getMyTickets(travelerId: string) {
    const tickets = await this.prisma.ticket.findMany({
      where: { travelerId },
      include: {
        bus: { include: { route: true } },
      },
      orderBy: { issuedAt: 'desc' },
      take: 20,
    });

    return tickets.map((t) => ({
      id: t.id,
      busNumber: t.bus.busNumber,
      routeName: t.bus.route.routeName,
      boardingStop: t.boardingStop,
      destinationStop: t.destinationStop,
      fare: t.fare,
      paymentMethod: t.paymentMethod,
      paymentStatus: t.paymentStatus,
      issuedAt: t.issuedAt,
      isVerified: t.isVerified,
    }));
  }

  // ─── Conductor: Daily Summary ──────────────────────────────────────────────
  async getConductorSummary(conductorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tickets = await this.prisma.ticket.findMany({
      where: {
        conductorId,
        issuedAt: { gte: today },
        paymentStatus: 'PAID',
      },
      include: {
        bus: { include: { route: true } },
      },
    });

    const totalTickets = tickets.length;
    const totalRevenue = tickets.reduce((sum: number, t) => sum + t.fare, 0);
    const cashTickets = tickets.filter((t) => t.paymentMethod === 'CASH').length;
    const onlineTickets = tickets.filter((t) => t.paymentMethod === 'ONLINE').length;
    const cashRevenue = tickets
      .filter((t) => t.paymentMethod === 'CASH')
      .reduce((sum: number, t: any) => sum + t.fare, 0);
    const onlineRevenue = tickets
      .filter((t: any) => t.paymentMethod === 'ONLINE')
      .reduce((sum: number, t: any) => sum + t.fare, 0);

    return {
      date: today.toDateString(),
      totalTickets,
      totalRevenue,
      cashTickets,
      onlineTickets,
      cashRevenue,
      onlineRevenue,
      tickets: tickets.map((t: any) => ({
        id: t.id,
        busNumber: t.bus?.busNumber,
        routeName: t.bus?.route?.routeName,
        boardingStop: t.boardingStop,
        destinationStop: t.destinationStop,
        fare: t.fare,
        paymentMethod: t.paymentMethod,
        issuedAt: t.issuedAt,
      })),
    };
  }

  // ─── Helper: Calculate Fare ────────────────────────────────────────────────
  async calculateFare(routeId: string, fromStopOrder: number, toStopOrder: number) {
    const exactFare = await this.prisma.fare.findFirst({
      where: { routeId, fromStopOrder, toStopOrder },
    });
    if (exactFare) return exactFare.amount;

    const fromStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: fromStopOrder } });
    const toStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: toStopOrder } });
    if (!fromStop || !toStop) return 10;

    const distance = toStop.distanceFromStart - fromStop.distanceFromStart;
    return Math.ceil(5 + distance * 1.5);
  }

  // ─── Conductor: Create Razorpay Order for Online Payment ──────────────────
  async createOnlineOrder(conductorId: string, sessionId: string) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: sessionId },
      include: {
        bus: { include: { route: true } },
        boardingStop: true,
        destinationStop: true,
        ticket: true,
      },
    });

    if (!session) throw new NotFoundException('Session not found');
    if (session.bus.conductorId !== conductorId)
      throw new ForbiddenException('You are not the conductor of this bus');
    if (session.status !== 'APPROVED')
      throw new BadRequestException('Session must be approved first');
    if (session.ticket)
      throw new BadRequestException('Ticket already issued for this session');

    const fare = await this.calculateFare(
      session.bus.routeId,
      session.boardingStop.stopOrder,
      session.destinationStop.stopOrder,
    );

    // Create Razorpay order
    const order = await this.paymentsService.createOrder(fare, sessionId);

    // Store orderId temporarily on session (add razorpayOrderId to TravelSession or use a temp store)
    // We'll store it on a pending ticket record
    const ticketId = crypto.randomUUID();

    // Create a pending ticket record
    await this.prisma.ticket.create({
      data: {
        id: ticketId,
        sessionId: session.id,
        travelerId: session.travelerId,
        conductorId,
        busId: session.busId,
        boardingStop: session.boardingStop.stopName,
        destinationStop: session.destinationStop.stopName,
        fare,
        paymentMethod: 'ONLINE',
        paymentStatus: 'PENDING',
        razorpayOrderId: order.orderId,
        signedQRCode: `PENDING_${ticketId}`, // unique placeholder

      },
    });

    return {
      ...order,
      sessionId,
      ticketId,
      fare,
    };
  }

  // ─── Verify Razorpay Payment (called from frontend after payment) ──────────
  async verifyAndCompleteOnlinePayment(
    razorpayOrderId: string,
    razorpayPaymentId: string,
    razorpaySignature: string,
  ) {
    // Verify signature
    const isValid = this.paymentsService.verifyPaymentSignature(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    );

    if (!isValid) throw new BadRequestException('Invalid payment signature');

    // Find the pending ticket
    const ticket = await this.prisma.ticket.findFirst({
      where: { razorpayOrderId, paymentStatus: 'PENDING' },
      include: {
        session: {
          include: {
            bus: { include: { route: true } },
            traveler: { select: { id: true, name: true, phone: true } },
            boardingStop: true,
            destinationStop: true,
          },
        },
      },
    });

    if (!ticket) throw new NotFoundException('Pending ticket not found');

    // Generate signed QR
    const { signedQRData, qrCodeImage } = await this.generateSignedQR(ticket);

    // Update ticket — mark as paid and add signed QR
    const updatedTicket = await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        paymentStatus: 'PAID',
        razorpayPaymentId,
        signedQRCode: signedQRData,
      },
    });

    // Update session status
    await this.prisma.travelSession.update({
      where: { id: ticket.sessionId },
      data: { status: 'TICKET_ISSUED' },
    });

    const ticketData = {
      id: updatedTicket.id,
      busNumber: ticket.session.bus.busNumber,
      routeName: ticket.session.bus.route.routeName,
      boardingStop: updatedTicket.boardingStop,
      destinationStop: updatedTicket.destinationStop,
      fare: updatedTicket.fare,
      paymentMethod: updatedTicket.paymentMethod,
      paymentStatus: updatedTicket.paymentStatus,
      issuedAt: updatedTicket.issuedAt,
      traveler: ticket.session.traveler,
      qrCodeImage,
    };

    // Emit ticket to traveler via Socket.io
    this.socketGateway.emitTicketIssued(ticket.sessionId, ticketData);
    this.socketGateway.emitPaymentReceived(ticket.sessionId);

    return ticketData;
  }

  // ─── Razorpay Webhook Handler ──────────────────────────────────────────────
  async handleRazorpayWebhook(body: string, signature: string) {
    const isValid = this.paymentsService.verifyWebhookSignature(body, signature);
    if (!isValid) throw new BadRequestException('Invalid webhook signature');

    const event = JSON.parse(body);

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;

      // Find pending ticket
      const ticket = await this.prisma.ticket.findFirst({
        where: { razorpayOrderId: orderId, paymentStatus: 'PENDING' },
        include: {
          session: {
            include: {
              bus: { include: { route: true } },
              traveler: { select: { id: true, name: true, phone: true } },
              boardingStop: true,
              destinationStop: true,
            },
          },
        },
      });

      if (!ticket) return { status: 'already processed' };

      // Generate signed QR
      const { signedQRData, qrCodeImage } = await this.generateSignedQR(ticket);

      // Update ticket
      const updatedTicket = await this.prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          paymentStatus: 'PAID',
          razorpayPaymentId: paymentId,
          signedQRCode: signedQRData,
        },
      });

      // Update session
      await this.prisma.travelSession.update({
        where: { id: ticket.sessionId },
        data: { status: 'TICKET_ISSUED' },
      });

      // Emit to traveler via Socket.io
      this.socketGateway.emitTicketIssued(ticket.sessionId, {
        id: updatedTicket.id,
        busNumber: ticket.session.bus.busNumber,
        routeName: ticket.session.bus.route.routeName,
        boardingStop: updatedTicket.boardingStop,
        destinationStop: updatedTicket.destinationStop,
        fare: updatedTicket.fare,
        paymentMethod: updatedTicket.paymentMethod,
        paymentStatus: updatedTicket.paymentStatus,
        issuedAt: updatedTicket.issuedAt,
        traveler: ticket.session.traveler,
        qrCodeImage,
      });
    }

    return { status: 'ok' };
  }

  // ─── Helper: Generate Signed QR ───────────────────────────────────────────
  private async generateSignedQR(ticket: any) {
    const payload = JSON.stringify({
      ticketId: ticket.id,
      travelerId: ticket.travelerId,
      busId: ticket.busId,
      boardingStop: ticket.boardingStop,
      destinationStop: ticket.destinationStop,
      fare: ticket.fare,
      issuedAt: new Date().toISOString(),
    });

    if (!process.env.QR_SIGN_SECRET) {
      throw new Error('QR_SIGN_SECRET environment variable is required');
    }
    const secret = process.env.QR_SIGN_SECRET;
    const signature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    const signedQRData = JSON.stringify({ payload, signature });

    const qrCodeImage = await QRCode.toDataURL(signedQRData, {
      width: 300,
      margin: 2,
      color: { dark: '#1a1a2e', light: '#ffffff' },
    });

    return { signedQRData, qrCodeImage };
  }
}
