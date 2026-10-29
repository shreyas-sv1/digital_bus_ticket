import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PaymentsModule } from '../payments/payments.module';
import { SocketModule } from '../socket/socket.module';
import { RoutesModule } from '../routes/routes.module';

@Module({
  imports: [PrismaModule, PaymentsModule, SocketModule, RoutesModule],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
