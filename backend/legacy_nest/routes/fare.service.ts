import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Shared fare calculation service — single source of truth for the
 * BMTC pricing formula so it doesn't have to be duplicated in every module
 * that needs a fare (SessionsService, TicketsService, etc.).
 */
@Injectable()
export class FareService {
  constructor(private prisma: PrismaService) {}

  /**
   * Returns the fare amount (in ₹) for a given segment.
   * Looks up an exact admin-defined fare first; falls back to the
   * distance-based formula: base ₹5 + ₹1.5 per km.
   */
  async calculateFare(
    routeId: string,
    fromStopOrder: number,
    toStopOrder: number,
  ): Promise<number> {
    // 1. Prefer an exact admin-set fare
    const exactFare = await this.prisma.fare.findFirst({
      where: { routeId, fromStopOrder, toStopOrder },
    });
    if (exactFare) return exactFare.amount;

    // 2. Fall back to distance-based calculation
    const [fromStop, toStop] = await Promise.all([
      this.prisma.stop.findFirst({
        where: { routeId, stopOrder: fromStopOrder },
      }),
      this.prisma.stop.findFirst({
        where: { routeId, stopOrder: toStopOrder },
      }),
    ]);

    if (!fromStop || !toStop) return 10; // safe fallback
    const distance = toStop.distanceFromStart - fromStop.distanceFromStart;
    return Math.ceil(5 + distance * 1.5);
  }
}
