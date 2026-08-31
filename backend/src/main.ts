import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = Number(process.env.PORT || 3001);

const requiredEnv = ['JWT_SECRET', 'QR_SIGN_SECRET'];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.warn(`Missing environment variable: ${key}`);
  }
}

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'transport-backend',
    framework: 'express',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Node.js + Express backend is running',
    prisma: 'connected via Prisma client',
  });
});

app.get('/api/users', async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true },
    });

    res.json(users);
  } catch (error) {
    console.error('Failed to load users:', error);
    res.status(500).json({ message: 'Unable to fetch users' });
  }
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', err);

  const message = err instanceof Error ? err.message : 'Internal server error';
  res.status(500).json({ message });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
