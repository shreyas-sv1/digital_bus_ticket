import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { SessionsCron } from './sessions.cron';
import { PrismaModule } from '../prisma/prisma.module';
import { RoutesModule } from '../routes/routes.module';

@Module({
  imports: [PrismaModule, ScheduleModule.forRoot(), RoutesModule],
  controllers: [SessionsController],
  providers: [SessionsService, SessionsCron],
  exports: [SessionsService],
})
export class SessionsModule {}
