import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

const requiredEnv = ['JWT_SECRET', 'QR_SIGN_SECRET'];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });

  // ── Global Pipes ──────────────────────────────────────────────────────────
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // ── Global Exception Filter ───────────────────────────────────────────────
  app.useGlobalFilters(new GlobalExceptionFilter());

  // ── CORS ──────────────────────────────────────────────────────────────────
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // ── Swagger / OpenAPI ────────────────────────────────────────────────────
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('BMTC SmartTicket API')
      .setDescription(
        'REST + WebSocket API for the BMTC SmartTicket bus-ticketing system.\n\n' +
          '**Auth:** JWT Bearer token (obtained from POST /auth/login).\n\n' +
          '**Roles:** TRAVELER · CONDUCTOR · SUPERVISOR · ADMIN',
      )
      .setVersion('1.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'JWT',
      )
      .addTag('auth', 'Registration, login, and token refresh')
      .addTag('sessions', 'Traveler journey sessions (QR lifecycle)')
      .addTag('tickets', 'Ticket issuance and Razorpay payment flow')
      .addTag('routes', 'Route, stop, and fare management')
      .addTag('buses', 'Bus fleet management')
      .addTag('admin', 'Admin dashboard, conductors, and fraud report')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: { persistAuthorization: true },
    });
    console.log(
      `Swagger docs available at http://localhost:${process.env.PORT ?? 3001}/api/docs`,
    );
  }

  await app.listen(process.env.PORT || 3001);
  console.log(`Backend running on port ${process.env.PORT || 3001}`);
}
bootstrap();
