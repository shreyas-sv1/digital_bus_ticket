import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { AssignConductorDto } from './dto/assign-conductor.dto';

@Injectable()
export class BusesService {
  constructor(private prisma: PrismaService) {

  }

  async getAllBuses() {
    return this.prisma.bus.findMany({
      include: {
        route: true,
        conductor: { select: { id: true, name: true, phone: true } },
      },
    });
  }

  async getActiveBuses() {
    return this.prisma.bus.findMany({
      where: { isActive: true },
      include: {
        route: { include: { stops: { orderBy: { stopOrder: 'asc' } } } },
        conductor: { select: { id: true, name: true, phone: true } },
      },
    });
  }

  async getBusByNumber(busNumber: string) {
    const bus = await this.prisma.bus.findUnique({
      where: { busNumber },
      include: {
        route: { include: { stops: { orderBy: { stopOrder: 'asc' } } } },
        conductor: { select: { id: true, name: true } },
      },
    });
    if (!bus) throw new NotFoundException('Bus not found');
    return bus;
  }

  async createBus(dto: CreateBusDto) {
    const route = await this.prisma.route.findUnique({ where: { id: dto.routeId } });
    if (!route) throw new NotFoundException('Route not found');

    return this.prisma.bus.create({
      data: dto,
      include: { route: true },
    });
  }

  async assignConductor(busId: string, dto: AssignConductorDto) {
    const bus = await this.prisma.bus.findUnique({ where: { id: busId } });
    if (!bus) throw new NotFoundException('Bus not found');

    const conductor = await this.prisma.user.findUnique({ where: { id: dto.conductorId } });
    if (!conductor) throw new NotFoundException('Conductor not found');
    if (conductor.role !== 'CONDUCTOR') throw new BadRequestException('User is not a conductor');

    return this.prisma.bus.update({
      where: { id: busId },
      data: { conductorId: dto.conductorId },
      include: { conductor: { select: { id: true, name: true } }, route: true },
    });
  }

  async toggleBusStatus(busId: string) {
    const bus = await this.prisma.bus.findUnique({ where: { id: busId } });
    if (!bus) throw new NotFoundException('Bus not found');

    return this.prisma.bus.update({
      where: { id: busId },
      data: { isActive: !bus.isActive },
    });
  }
}
