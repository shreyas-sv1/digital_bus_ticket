import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as crypto from 'crypto';

interface VerifyTicketDto {
  qrData: string;
}

@Injectable()
export class VerificationService {
  constructor(private prisma: PrismaService) {}

  async verifyTicket(supervisorId: string, dto: VerifyTicketDto) {
    // ── Step 1: Parse QR data ──────────────────────────────────────────────
    let parsed: { payload: string; signature: string };

    try {
      parsed = JSON.parse(dto.qrData);
    } catch {
      return this.buildResult('INVALID', null, 'QR code is malformed or tampered');
    }

    if (!parsed.payload || !parsed.signature) {
      return this.buildResult('INVALID', null, 'QR code is missing required fields');
    }

    // ── Step 2: Verify HMAC signature ─────────────────────────────────────
    if (!process.env.QR_SIGN_SECRET) {
      throw new Error('QR_SIGN_SECRET environment variable is required');
    }
    const secret = process.env.QR_SIGN_SECRET;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(parsed.payload)
      .digest('hex');

    if (expectedSignature !== parsed.signature) {
      await this.logVerification(supervisorId, null, 'INVALID');
      return this.buildResult('INVALID', null, 'QR signature is invalid. Ticket may be forged.');
    }

    // ── Step 3: Parse payload ──────────────────────────────────────────────
    let ticketPayload: {
      ticketId: string;
      travelerId: string;
      busId: string;
      boardingStop: string;
      destinationStop: string;
      fare: number;
      issuedAt: string;
    };

    try {
      ticketPayload = JSON.parse(parsed.payload);
    } catch {
      return this.buildResult('INVALID', null, 'QR payload could not be parsed');
    }

    // ── Step 4: Find ticket in DB ──────────────────────────────────────────
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: ticketPayload.ticketId },
      include: {
        traveler: { select: { id: true, name: true, phone: true } },
        bus: { include: { route: true } },
        conductor: { select: { id: true, name: true } },
      },
    });

    if (!ticket) {
      await this.logVerification(supervisorId, null, 'INVALID');
      return this.buildResult('INVALID', null, 'Ticket not found in system');
    }

    // ── Step 5: Check payment status ──────────────────────────────────────
    if (ticket.paymentStatus !== 'PAID') {
      await this.logVerification(supervisorId, ticket.id, 'INVALID');
      return this.buildResult('INVALID', ticket, 'Ticket payment is not completed');
    }

    // ── Step 6: Check if already verified ─────────────────────────────────
    if (ticket.isVerified) {
      await this.logVerification(supervisorId, ticket.id, 'ALREADY_CHECKED');
      return this.buildResult('ALREADY_CHECKED', ticket, `Already verified at ${ticket.verifiedAt?.toLocaleString('en-IN')}`);
    }

    // ── Step 7: Check ticket age — reject if older than 3 hours ──────────
    const issuedAt = new Date(ticket.issuedAt);
    const ageInHours = (Date.now() - issuedAt.getTime()) / (1000 * 60 * 60);

    if (ageInHours > 3) {
      await this.logVerification(supervisorId, ticket.id, 'INVALID');
      return this.buildResult('INVALID', ticket, 'Ticket has expired (older than 3 hours)');
    }

    // ── Step 8: Mark as verified ───────────────────────────────────────────
    await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        isVerified: true,
        verifiedAt: new Date(),
        verifiedBy: supervisorId,
      },
    });

    await this.logVerification(supervisorId, ticket.id, 'VALID');

    return this.buildResult('VALID', ticket, 'Ticket is valid');
  }

  // ── Get verification history for supervisor ────────────────────────────────
  async getVerificationHistory(supervisorId: string) {
    const logs = await this.prisma.verificationLog.findMany({
      where: { supervisorId },
      include: {
        ticket: {
          include: {
            traveler: { select: { id: true, name: true, phone: true } },
            bus: { include: { route: true } },
          },
        },
      },
      orderBy: { scannedAt: 'desc' },
      take: 50,
    });

    return logs.map((log) => ({
      id: log.id,
      result: log.result,
      scannedAt: log.scannedAt,
      ticket: log.ticket
        ? {
            id: log.ticket.id,
            busNumber: log.ticket.bus.busNumber,
            routeName: log.ticket.bus.route.routeName,
            boardingStop: log.ticket.boardingStop,
            destinationStop: log.ticket.destinationStop,
            fare: log.ticket.fare,
            paymentMethod: log.ticket.paymentMethod,
            traveler: log.ticket.traveler,
            issuedAt: log.ticket.issuedAt,
          }
        : null,
    }));
  }

  // ── Get supervisor daily stats ─────────────────────────────────────────────
  async getSupervisorStats(supervisorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const logs = await this.prisma.verificationLog.findMany({
      where: {
        supervisorId,
        scannedAt: { gte: today },
      },
    });

    const total = logs.length;
    const valid = logs.filter((l) => l.result === 'VALID').length;
    const invalid = logs.filter((l) => l.result === 'INVALID').length;
    const alreadyChecked = logs.filter((l) => l.result === 'ALREADY_CHECKED').length;

    return {
      date: today.toDateString(),
      totalScanned: total,
      valid,
      invalid,
      alreadyChecked,
      fraudRate: total > 0 ? ((invalid / total) * 100).toFixed(1) + '%' : '0%',
    };
  }

  // ── Helper: Build result response ─────────────────────────────────────────
  private buildResult(
    result: 'VALID' | 'INVALID' | 'ALREADY_CHECKED',
    ticket: any,
    message: string,
  ) {
    const colors = {
      VALID: '#16a34a',
      INVALID: '#dc2626',
      ALREADY_CHECKED: '#d97706',
    };

    const icons = {
      VALID: '✅',
      INVALID: '❌',
      ALREADY_CHECKED: '⚠️',
    };

    return {
      result,
      message,
      color: colors[result],
      icon: icons[result],
      ticket: ticket
        ? {
            id: ticket.id,
            busNumber: ticket.bus?.busNumber,
            routeName: ticket.bus?.route?.routeName,
            boardingStop: ticket.boardingStop,
            destinationStop: ticket.destinationStop,
            fare: ticket.fare,
            paymentMethod: ticket.paymentMethod,
            paymentStatus: ticket.paymentStatus,
            issuedAt: ticket.issuedAt,
            isVerified: ticket.isVerified,
            verifiedAt: ticket.verifiedAt,
            traveler: ticket.traveler,
            conductor: ticket.conductor,
          }
        : null,
    };
  }

  // ── Helper: Log verification ───────────────────────────────────────────────
  private async logVerification(
    supervisorId: string,
    ticketId: string | null,
    result: 'VALID' | 'INVALID' | 'ALREADY_CHECKED',
  ) {
    if (!ticketId) return;

    await this.prisma.verificationLog.create({
      data: {
        ticketId,
        supervisorId,
        result,
      },
    });
  }
}
