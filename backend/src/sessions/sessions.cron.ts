import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessionsCron {
  constructor(private prisma: PrismaService) {}

  // Runs every 5 minutes — cancels expired pending sessions
  @Cron(CronExpression.EVERY_5_MINUTES)
  async cancelExpiredSessions() {
    const result = await this.prisma.travelSession.updateMany({
      where: {
        status: 'PENDING',
        qrExpiresAt: { lt: new Date() },
      },
      data: { status: 'CANCELLED' },
    });

    if (result.count > 0)
      console.log(`🧹 Cancelled ${result.count} expired sessions`);
  }
}
