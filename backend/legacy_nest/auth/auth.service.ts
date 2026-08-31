import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // ── Helpers ───────────────────────────────────────────────────────────────
  private signToken(user: {
    id: string;
    role: string;
    name: string;
    email: string;
  }) {
    return this.jwtService.sign({
      sub: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    });
  }

  private userResponse(user: {
    id: string;
    name: string;
    email: string;
    role: string;
  }) {
    return { id: user.id, name: user.name, email: user.email, role: user.role };
  }

  // ── Auth flows ────────────────────────────────────────────────────────────
  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { phone: dto.phone }] },
    });
    if (exists)
      throw new ConflictException('Email or phone already registered');

    const hashed = await bcrypt.hash(dto.password, 12);
    const user = await this.prisma.user.create({
      data: { ...dto, password: hashed, role: 'TRAVELER' },
    });

    const token = this.signToken(user);
    return { token, user: this.userResponse(user) };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const token = this.signToken(user);
    return { token, user: this.userResponse(user) };
  }

  async refresh(oldToken: string) {
    let payload: any;
    try {
      payload = this.jwtService.decode(oldToken);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }

    if (!payload?.sub) throw new UnauthorizedException('Invalid token payload');

    const issuedAt: number = payload.iat ?? 0;
    const sevenDaysAgo = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
    if (issuedAt < sevenDaysAgo) {
      throw new UnauthorizedException(
        'Token too old to refresh — please log in again',
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) throw new UnauthorizedException('User no longer exists');

    const token = this.signToken(user);
    return { token, user: this.userResponse(user) };
  }

  // ── Password reset (token-based, no email server required for demo) ───────
  /**
   * Generates a short-lived reset token (1 hour) and stores its HMAC
   * hash in the DB.  In production you would email the raw token; here
   * we return it directly so the frontend/demo can consume it without
   * an SMTP server.
   */
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    // Never reveal whether the email exists — always return the same shape
    if (!user) {
      return {
        message: 'If that email is registered you will receive a reset link.',
      };
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.prisma.user.update({
      where: { id: user.id },
      data: { resetToken: tokenHash, resetTokenExpiresAt: expiresAt },
    });

    // In production: send email with rawToken link here
    // For demo: return the token so it can be used immediately
    return {
      message: 'If that email is registered you will receive a reset link.',
      // Only exposed in non-production for demo / testing:
      ...(process.env.NODE_ENV !== 'production'
        ? { resetToken: rawToken }
        : {}),
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const tokenHash = crypto
      .createHash('sha256')
      .update(dto.token)
      .digest('hex');

    const user = await this.prisma.user.findFirst({
      where: {
        resetToken: tokenHash,
        resetTokenExpiresAt: { gt: new Date() },
      },
    });

    if (!user) {
      throw new BadRequestException('Reset token is invalid or has expired');
    }

    const hashed = await bcrypt.hash(dto.newPassword, 12);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashed, resetToken: null, resetTokenExpiresAt: null },
    });

    return { message: 'Password updated successfully. Please log in.' };
  }

  // ── Profile management ────────────────────────────────────────────────────
  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // If changing password, validate current password first
    if (dto.newPassword) {
      if (!dto.currentPassword) {
        throw new BadRequestException(
          'Current password is required to set a new one',
        );
      }
      const valid = await bcrypt.compare(dto.currentPassword, user.password);
      if (!valid)
        throw new UnauthorizedException('Current password is incorrect');
    }

    // Check phone uniqueness if changing it
    if (dto.phone && dto.phone !== user.phone) {
      const conflict = await this.prisma.user.findUnique({
        where: { phone: dto.phone },
      });
      if (conflict) throw new ConflictException('Phone number already in use');
    }

    const newHash = dto.newPassword
      ? await bcrypt.hash(dto.newPassword, 12)
      : undefined;

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(dto.name ? { name: dto.name } : {}),
        ...(dto.phone ? { phone: dto.phone } : {}),
        ...(newHash ? { password: newHash } : {}),
      },
      select: { id: true, name: true, email: true, phone: true, role: true },
    });

    // Return a fresh token so the auth context reflects any name change immediately
    const token = this.signToken(updated);
    return { user: updated, token };
  }
}
