import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateConductorDto } from './dto/create-conductor.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [
      totalTickets,
      todayTickets,
      totalRevenue,
      todayRevenue,
      totalCashRevenue,
      totalOnlineRevenue,
      todayCashRevenue,
      todayOnlineRevenue,
      invalidScans,
      activeBuses,
    ] = await Promise.all([
      this.prisma.ticket.count({ where: { paymentStatus: 'PAID' } }),
      this.prisma.ticket.count({
        where: { paymentStatus: 'PAID', issuedAt: { gte: today } },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID' },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', issuedAt: { gte: today } },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'CASH' },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'ONLINE' },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: {
          paymentStatus: 'PAID',
          paymentMethod: 'CASH',
          issuedAt: { gte: today },
        },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: {
          paymentStatus: 'PAID',
          paymentMethod: 'ONLINE',
          issuedAt: { gte: today },
        },
        _sum: { fare: true },
      }),
      this.prisma.verificationLog.count({
        where: { result: 'INVALID', scannedAt: { gte: today } },
      }),
      this.prisma.bus.count({ where: { isActive: true } }),
    ]);

    const todayRevenueValue = todayRevenue._sum.fare || 0;
    const allTimeRevenueValue = totalRevenue._sum.fare || 0;

    return {
      tickets: {
        today: todayTickets,
        allTime: totalTickets,
      },
      revenue: {
        today: todayRevenueValue,
        allTime: allTimeRevenueValue,
      },
      split: {
        cash: {
          today: todayCashRevenue._sum.fare || 0,
          allTime: totalCashRevenue._sum.fare || 0,
        },
        online: {
          today: todayOnlineRevenue._sum.fare || 0,
          allTime: totalOnlineRevenue._sum.fare || 0,
        },
      },
      invalidScansToday: invalidScans,
      activeBuses,
      trends: {
        invalidRateToday:
          todayTickets > 0
            ? Number(((invalidScans / todayTickets) * 100).toFixed(2))
            : 0,
        cashShareToday:
          todayRevenueValue > 0
            ? Number(
                (
                  ((todayCashRevenue._sum.fare || 0) / todayRevenueValue) *
                  100
                ).toFixed(2),
              )
            : 0,
        onlineShareToday:
          todayRevenueValue > 0
            ? Number(
                (
                  ((todayOnlineRevenue._sum.fare || 0) / todayRevenueValue) *
                  100
                ).toFixed(2),
              )
            : 0,
      },
    };
  }

  async getBuses() {
    return this.prisma.bus.findMany({
      include: {
        route: true,
        conductor: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getConductors() {
    const conductors = await this.prisma.user.findMany({
      where: { role: 'CONDUCTOR' },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
        buses: {
          select: {
            id: true,
            busNumber: true,
          },
        },
      },
    });

    return conductors.map((conductor: any) => ({
      ...conductor,
      assignedBus: conductor.buses[0] || null,
    }));
  }

  async createConductor(dto: CreateConductorDto) {
    return this.createStaffUser(dto, 'CONDUCTOR');
  }

  /**
   * Generic staff account creation used by createConductor and the
   * supervisor/admin management endpoints.
   */
  async createStaffUser(
    dto: CreateConductorDto,
    role: 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN',
  ) {
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { phone: dto.phone }] },
    });
    if (existing)
      throw new ConflictException('Email or phone already registered');

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    return this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  /** Returns all non-traveler users, optionally filtered by role. */
  async getStaffUsers(role?: 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN') {
    return this.prisma.user.findMany({
      where: { role: role ?? { in: ['CONDUCTOR', 'SUPERVISOR', 'ADMIN'] } },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  /** Permanently removes a staff user account (cannot delete TRAVELER via this path). */
  async deleteUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.role === 'TRAVELER') {
      throw new NotFoundException('Staff user not found');
    }
    await this.prisma.user.delete({ where: { id: userId } });
    return { success: true };
  }

  async unassignConductor(conductorId: string) {
    const conductor = await this.prisma.user.findUnique({
      where: { id: conductorId },
    });
    if (!conductor || conductor.role !== 'CONDUCTOR') {
      throw new NotFoundException('Conductor not found');
    }

    await this.prisma.bus.updateMany({
      where: { conductorId },
      data: { conductorId: null },
    });

    return { success: true };
  }

  async getFraudReport(
    startDate?: string,
    endDate?: string,
    cursor?: string,
    pageSize = 50,
  ) {
    const scannedAtFilter: { gte?: Date; lte?: Date } = {};
    if (startDate) scannedAtFilter.gte = new Date(startDate);
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      scannedAtFilter.lte = end;
    }

    const where = {
      result: 'INVALID' as const,
      scannedAt: Object.keys(scannedAtFilter).length
        ? scannedAtFilter
        : undefined,
    };

    // Total count for the filter (independent of current page)
    const totalInvalidScans = await this.prisma.verificationLog.count({
      where,
    });

    const logs = await this.prisma.verificationLog.findMany({
      where,
      include: {
        supervisor: { select: { name: true } },
        ticket: {
          include: {
            bus: true,
            traveler: { select: { name: true, phone: true } },
          },
        },
      },
      orderBy: { scannedAt: 'desc' },
      take: pageSize + 1, // fetch one extra to detect next page
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasNextPage = logs.length > pageSize;
    const page = hasNextPage ? logs.slice(0, pageSize) : logs;
    const nextCursor = hasNextPage ? page[page.length - 1].id : null;

    return {
      totalInvalidScans,
      nextCursor,
      logs: page.map((log: any) => ({
        id: log.id,
        scannedAt: log.scannedAt,
        supervisorName: (log.supervisor as { name: string }).name,
        ticketId: log.ticketId,
        traveler: log.ticket?.traveler as
          | { name: string; phone: string }
          | undefined,
        busNumber: (log.ticket?.bus as { busNumber: string } | undefined)
          ?.busNumber,
      })),
    };
  }

  /**
   * Returns per-day analytics for the last 7 days.
   * Each entry contains: date, totalRevenue, cashRevenue, onlineRevenue,
   * ticketCount, and invalidScans.  Used by the admin dashboard charts.
   */
  async getAnalytics() {
    const days: {
      date: string;
      totalRevenue: number;
      cashRevenue: number;
      onlineRevenue: number;
      ticketCount: number;
      invalidScans: number;
    }[] = [];

    for (let i = 6; i >= 0; i--) {
      const dayStart = new Date();
      dayStart.setDate(dayStart.getDate() - i);
      dayStart.setHours(0, 0, 0, 0);

      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      const [totalRev, cashRev, onlineRev, tickets, invalid] =
        await Promise.all([
          this.prisma.ticket.aggregate({
            where: {
              paymentStatus: 'PAID',
              issuedAt: { gte: dayStart, lte: dayEnd },
            },
            _sum: { fare: true },
          }),
          this.prisma.ticket.aggregate({
            where: {
              paymentStatus: 'PAID',
              paymentMethod: 'CASH',
              issuedAt: { gte: dayStart, lte: dayEnd },
            },
            _sum: { fare: true },
          }),
          this.prisma.ticket.aggregate({
            where: {
              paymentStatus: 'PAID',
              paymentMethod: 'ONLINE',
              issuedAt: { gte: dayStart, lte: dayEnd },
            },
            _sum: { fare: true },
          }),
          this.prisma.ticket.count({
            where: {
              paymentStatus: 'PAID',
              issuedAt: { gte: dayStart, lte: dayEnd },
            },
          }),
          this.prisma.verificationLog.count({
            where: {
              result: 'INVALID',
              scannedAt: { gte: dayStart, lte: dayEnd },
            },
          }),
        ]);

      days.push({
        date: dayStart.toISOString().slice(0, 10),
        totalRevenue: totalRev._sum.fare ?? 0,
        cashRevenue: cashRev._sum.fare ?? 0,
        onlineRevenue: onlineRev._sum.fare ?? 0,
        ticketCount: tickets,
        invalidScans: invalid,
      });
    }

    return { days };
  }
}
