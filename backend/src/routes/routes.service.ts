import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateStopDto } from './dto/create-stop.dto';
import { CreateFareDto } from './dto/create-fare.dto';

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) {

  }

  async getAllRoutes() {
    return this.prisma.route.findMany({
      include: {
        stops: { orderBy: { stopOrder: 'asc' } },
        fares: { orderBy: [{ fromStopOrder: 'asc' }, { toStopOrder: 'asc' }] },
      },
    });
  }

  async getRouteById(id: string) {
    const route = await this.prisma.route.findUnique({
      where: { id },
      include: {
        stops: { orderBy: { stopOrder: 'asc' } },
        fares: { orderBy: [{ fromStopOrder: 'asc' }, { toStopOrder: 'asc' }] },
      },
    });
    if (!route) throw new NotFoundException('Route not found');
    return route;
  }

  async createRoute(dto: CreateRouteDto) {
    return this.prisma.route.create({ data: dto });
  }

  async getStopsByRoute(routeId: string) {
    const route = await this.prisma.route.findUnique({ where: { id: routeId } });
    if (!route) throw new NotFoundException('Route not found');
    return this.prisma.stop.findMany({
      where: { routeId },
      orderBy: { stopOrder: 'asc' },
    });
  }

  async addStop(routeId: string, dto: CreateStopDto) {
    const route = await this.prisma.route.findUnique({ where: { id: routeId } });
    if (!route) throw new NotFoundException('Route not found');

    const existing = await this.prisma.stop.findFirst({
      where: { routeId, stopOrder: dto.stopOrder },
    });
    if (existing) throw new BadRequestException(`Stop order ${dto.stopOrder} already exists on this route`);

    return this.prisma.stop.create({ data: { ...dto, routeId } });
  }

  async setFare(routeId: string, dto: CreateFareDto) {
    const route = await this.prisma.route.findUnique({ where: { id: routeId } });
    if (!route) throw new NotFoundException('Route not found');

    if (dto.fromStopOrder >= dto.toStopOrder)
      throw new BadRequestException('fromStopOrder must be less than toStopOrder');

    const existing = await this.prisma.fare.findFirst({
      where: { routeId, fromStopOrder: dto.fromStopOrder, toStopOrder: dto.toStopOrder },
    });

    if (existing) {
      return this.prisma.fare.update({
        where: { id: existing.id },
        data: { amount: dto.amount },
      });
    }

    return this.prisma.fare.create({ data: { ...dto, routeId } });
  }

  async calculateFare(routeId: string, fromStopOrder: number, toStopOrder: number) {
    if (fromStopOrder >= toStopOrder)
      throw new BadRequestException('fromStopOrder must be less than toStopOrder');

    // First check for exact fare entry
    const exactFare = await this.prisma.fare.findFirst({
      where: { routeId, fromStopOrder, toStopOrder },
    });
    if (exactFare) return { fare: exactFare.amount, fromStopOrder, toStopOrder };

    // Fallback: calculate by distance
    const fromStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: fromStopOrder } });
    const toStop = await this.prisma.stop.findFirst({ where: { routeId, stopOrder: toStopOrder } });

    if (!fromStop || !toStop) throw new NotFoundException('Stops not found');

    const distance = toStop.distanceFromStart - fromStop.distanceFromStart;

    // BMTC fare formula: base ₹5 + ₹1.5 per km
    const fare = Math.ceil(5 + distance * 1.5);
    return { fare, fromStopOrder, toStopOrder, distance };
  }
}
