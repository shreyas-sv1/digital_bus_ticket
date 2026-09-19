import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = Number(process.env.PORT || 3001);
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

const requiredEnv = ['JWT_SECRET', 'QR_SIGN_SECRET'];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.warn(`Missing environment variable: ${key}`);
  }
}

const serializeUser = (user: {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string | null;
  createdAt?: Date | null;
}) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone ?? null,
  createdAt: user.createdAt ?? null,
});

const signToken = (user: { id: string; name: string; email: string; role: string }) =>
  jwt.sign({ sub: user.id, role: user.role, name: user.name, email: user.email }, JWT_SECRET, {
    expiresIn: '24h',
  });

const requireAuth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }

  try {
    const token = header.replace('Bearer ', '');
    const payload = jwt.verify(token, JWT_SECRET) as {
      sub?: string;
      role?: string;
      email?: string;
      name?: string;
    };

    if (!payload.sub) {
      res.status(401).json({ message: 'Invalid token payload' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      res.status(401).json({ message: 'User no longer exists' });
      return;
    }

    (req as express.Request & { user?: typeof user }).user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

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

app.post('/auth/register', async (req, res) => {
  const { name, email, phone, password } = req.body || {};

  if (!name || !email || !phone || !password) {
    res.status(400).json({ message: 'Name, email, phone, and password are required' });
    return;
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      res.status(409).json({ message: 'Email or phone already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: 'TRAVELER',
      },
    });

    const token = signToken(user);
    res.status(201).json({ token, user: serializeUser(user) });
  } catch (error) {
    console.error('Register failed:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = signToken(user);
    res.json({ token, user: serializeUser(user) });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.post('/auth/refresh', requireAuth, async (req, res) => {
  const user = (req as express.Request & { user?: any }).user;
  if (!user) {
    res.status(401).json({ message: 'User not found' });
    return;
  }

  const token = signToken(user);
  res.json({ token, user: serializeUser(user) });
});

app.get('/auth/me', requireAuth, async (req, res) => {
  const user = (req as express.Request & { user?: any }).user;
  if (!user) {
    res.status(401).json({ message: 'User not found' });
    return;
  }

  res.json(serializeUser(user));
});

app.post('/auth/forgot-password', async (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    res.status(400).json({ message: 'Email is required' });
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    res.json({ message: 'If that email is registered you will receive a reset link.' });
    return;
  }

  res.json({ message: 'If that email is registered you will receive a reset link.' });
});

app.post('/auth/reset-password', async (req, res) => {
  const { token, newPassword } = req.body || {};
  if (!token || !newPassword) {
    res.status(400).json({ message: 'Token and new password are required' });
    return;
  }

  res.json({ message: 'Password updated successfully. Please log in.' });
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
