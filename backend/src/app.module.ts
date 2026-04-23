import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';
import { BusesModule } from './buses/buses.module';
import { SessionsModule } from './sessions/sessions.module';
import { TicketsModule } from './tickets/tickets.module';
import { SocketModule } from './socket/socket.module';
import { PaymentsModule } from './payments/payments.module';
import { VerificationModule } from './verification/verification.module';

import { AdminModule } from './admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
      global: true,
    }),
    PrismaModule,
    AuthModule,
    RoutesModule,
    BusesModule,
    SessionsModule,
    TicketsModule,
    SocketModule,
    PaymentsModule,
    VerificationModule,
    AdminModule,
  ],
})
export class AppModule {}
