import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
      this.prisma.ticket.count({ where: { paymentStatus: 'PAID', issuedAt: { gte: today } } }),
      this.prisma.ticket.aggregate({ where: { paymentStatus: 'PAID' }, _sum: { fare: true } }),
      this.prisma.ticket.aggregate({ where: { paymentStatus: 'PAID', issuedAt: { gte: today } }, _sum: { fare: true } }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'CASH' },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'ONLINE' },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'CASH', issuedAt: { gte: today } },
        _sum: { fare: true },
      }),
      this.prisma.ticket.aggregate({
        where: { paymentStatus: 'PAID', paymentMethod: 'ONLINE', issuedAt: { gte: today } },
        _sum: { fare: true },
      }),
      this.prisma.verificationLog.count({ where: { result: 'INVALID', scannedAt: { gte: today } } }),
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
        invalidRateToday: todayTickets > 0 ? Number(((invalidScans / todayTickets) * 100).toFixed(2)) : 0,
        cashShareToday:
          todayRevenueValue > 0
            ? Number((((todayCashRevenue._sum.fare || 0) / todayRevenueValue) * 100).toFixed(2))
            : 0,
        onlineShareToday:
          todayRevenueValue > 0
            ? Number((((todayOnlineRevenue._sum.fare || 0) / todayRevenueValue) * 100).toFixed(2))
            : 0,
      },
    };
  }

  async getBuses() {
    return this.prisma.bus.findMany({
      include: {
        route: true,
        conductor: { select: { id: true, name: true, email: true, phone: true } },
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
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { phone: dto.phone }] },
    });
    if (existing) throw new ConflictException('Email or phone already registered');

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const conductor = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        password: hashedPassword,
        role: 'CONDUCTOR',
      },
      select: { id: true, name: true, email: true, phone: true, role: true, createdAt: true },
    });

    return conductor;
  }

  async unassignConductor(conductorId: string) {
    const conductor = await this.prisma.user.findUnique({ where: { id: conductorId } });
    if (!conductor || conductor.role !== 'CONDUCTOR') {
      throw new NotFoundException('Conductor not found');
    }

    await this.prisma.bus.updateMany({
      where: { conductorId },
      data: { conductorId: null },
    });

    return { success: true };
  }

  async getFraudReport(startDate?: string, endDate?: string) {
    const scannedAtFilter: { gte?: Date; lte?: Date } = {};
    if (startDate) scannedAtFilter.gte = new Date(startDate);
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      scannedAtFilter.lte = end;
    }

    const logs = await this.prisma.verificationLog.findMany({
      where: {
        result: 'INVALID',
        scannedAt: Object.keys(scannedAtFilter).length ? scannedAtFilter : undefined,
      },
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
      take: 500,
    });

    return {
      totalInvalidScans: logs.length,
      logs: logs.map((log: any) => ({
        id: log.id,
      scannedAt: log.scannedAt,
      supervisorName: log.supervisor.name,
      ticketId: log.ticketId,
      traveler: log.ticket?.traveler,
      busNumber: log.ticket?.bus?.busNumber,
      })),
    };
  }
}
