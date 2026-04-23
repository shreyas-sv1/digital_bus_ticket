import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StartSessionDto } from './dto/start-session.dto';
import { v4 as uuidv4 } from 'uuid';
import * as QRCode from 'qrcode';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) {}

  async startSession(travelerId: string, dto: StartSessionDto) {
    // Validate bus exists and is active
    const bus = await this.prisma.bus.findUnique({
      where: { id: dto.busId },
      include: { route: true },
    });
    if (!bus) throw new NotFoundException('Bus not found');
    if (!bus.isActive) throw new BadRequestException('Bus is not active');

    // Validate stop orders
    if (dto.boardingStopOrder >= dto.destinationStopOrder)
      throw new BadRequestException('Destination must be ahead of boarding stop');

    // Get boarding stop
    const boardingStop = await this.prisma.stop.findFirst({
      where: { routeId: bus.routeId, stopOrder: dto.boardingStopOrder },
    });
    if (!boardingStop) throw new NotFoundException('Boarding stop not found');

    // Get destination stop
    const destinationStop = await this.prisma.stop.findFirst({
      where: { routeId: bus.routeId, stopOrder: dto.destinationStopOrder },
    });
    if (!destinationStop) throw new NotFoundException('Destination stop not found');

    // Cancel any existing PENDING session for this traveler on this bus
    await this.prisma.travelSession.updateMany({
      where: {
        travelerId,
        busId: dto.busId,
        status: 'PENDING',
      },
      data: { status: 'CANCELLED' },
    });

    // Generate unique temp QR code string
    const tempQRCode = uuidv4();
    const qrExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Create session
    const session = await this.prisma.travelSession.create({
      data: {
        travelerId,
        busId: dto.busId,
        boardingStopId: boardingStop.id,
        destinationStopId: destinationStop.id,
        status: 'PENDING',
        tempQRCode,
        qrExpiresAt,
      },
      include: {
        bus: { include: { route: true } },
        boardingStop: true,
        destinationStop: true,
        traveler: { select: { id: true, name: true, phone: true } },
      },
    });

    // Calculate fare
    const fareData = await this.calculateFare(
      bus.routeId,
      dto.boardingStopOrder,
      dto.destinationStopOrder,
    );

    // Generate QR code image (base64)
    const qrCodeImage = await QRCode.toDataURL(tempQRCode, {
      width: 300,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
    });

    return {
      session: {
        id: session.id,
        status: session.status,
        tempQRCode,
        qrExpiresAt,
        bus: {
          busNumber: session.bus.busNumber,
          routeName: session.bus.route.routeName,
        },
        boardingStop: session.boardingStop.stopName,
        destinationStop: session.destinationStop.stopName,
        fare: fareData.fare,
        traveler: session.traveler,
      },
      qrCodeImage, // base64 PNG — render directly in frontend
    };
  }

  async getSessionByQR(qrCode: string) {
    const session = await this.prisma.travelSession.findUnique({
      where: { tempQRCode: qrCode },
      include: {
        traveler: { select: { id: true, name: true, phone: true } },
        bus: { include: { route: true } },
        boardingStop: true,
        destinationStop: true,
      },
    });

    if (!session) throw new NotFoundException('Invalid QR code');

    // Check expiry
    if (new Date() > session.qrExpiresAt)
      throw new BadRequestException('QR code has expired. Ask traveler to generate a new one.');

    // Check status
    if (session.status === 'CANCELLED')
      throw new BadRequestException('This session has been cancelled');

    if (session.status === 'TICKET_ISSUED')
      throw new BadRequestException('Ticket already issued for this session');

    // Calculate fare
    const fareData = await this.calculateFare(
      session.bus.routeId,
      session.boardingStop.stopOrder,
      session.destinationStop.stopOrder,
    );

    return {
      sessionId: session.id,
      status: session.status,
      traveler: session.traveler,
      bus: {
        busNumber: session.bus.busNumber,
        routeName: session.bus.route.routeName,
      },
      boardingStop: session.boardingStop.stopName,
      destinationStop: session.destinationStop.stopName,
      fare: fareData.fare,
      qrExpiresAt: session.qrExpiresAt,
    };
  }

  async getMyActiveSessions(travelerId: string) {
    const sessions = await this.prisma.travelSession.findMany({
      where: {
        travelerId,
        status: { in: ['PENDING', 'APPROVED'] },
      },
      include: {
        bus: { include: { route: true } },
        boardingStop: true,
        destinationStop: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return sessions;
  }

  async getMySessionHistory(travelerId: string) {
    return this.prisma.travelSession.findMany({
      where: { travelerId },
      include: {
        bus: { include: { route: true } },
        boardingStop: true,
        destinationStop: true,
        ticket: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
  }

  async cancelSession(travelerId: string, sessionId: string) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) throw new NotFoundException('Session not found');
    if (session.travelerId !== travelerId)
      throw new ForbiddenException('Not your session');
    if (session.status === 'TICKET_ISSUED')
      throw new BadRequestException('Cannot cancel after ticket is issued');

    return this.prisma.travelSession.update({
      where: { id: sessionId },
      data: { status: 'CANCELLED' },
    });
  }

  async refreshQR(travelerId: string, sessionId: string) {
    const session = await this.prisma.travelSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) throw new NotFoundException('Session not found');
    if (session.travelerId !== travelerId)
      throw new ForbiddenException('Not your session');
    if (session.status !== 'PENDING')
      throw new BadRequestException('Can only refresh QR for pending sessions');

    // Generate new QR
    const tempQRCode = uuidv4();
    const qrExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const updated = await this.prisma.travelSession.update({
      where: { id: sessionId },
      data: { tempQRCode, qrExpiresAt },
    });

    const qrCodeImage = await QRCode.toDataURL(tempQRCode, {
      width: 300,
      margin: 2,
    });

    return {
      tempQRCode,
      qrExpiresAt,
      qrCodeImage,
    };
  }

  // Helper: calculate fare
  private async calculateFare(routeId: string, fromStopOrder: number, toStopOrder: number) {
    const exactFare = await this.prisma.fare.findFirst({
      where: { routeId, fromStopOrder, toStopOrder },
    });
    if (exactFare) return { fare: exactFare.amount };

    const fromStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: fromStopOrder } });
    const toStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: toStopOrder } });

    if (!fromStop || !toStop) return { fare: 10 }; // fallback

    const distance = toStop.distanceFromStart - fromStop.distanceFromStart;
    const fare = Math.ceil(5 + distance * 1.5);
    return { fare };
  }
}
