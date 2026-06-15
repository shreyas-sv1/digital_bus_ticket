import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });

  // Validate required env vars AFTER ConfigModule has loaded .env
  const requiredEnv = ['JWT_SECRET', 'QR_SIGN_SECRET', 'DATABASE_URL', 'FRONTEND_URL'];
  for (const key of requiredEnv) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  await app.listen(process.env.PORT || 3001);
  console.log(`Backend running on port ${process.env.PORT || 3001}`);
}
bootstrap();
