import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { FareService } from './fare.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RoutesService, FareService],
  controllers: [RoutesController],
  exports: [FareService], // shared across SessionsModule & TicketsModule
})
export class RoutesModule {}
