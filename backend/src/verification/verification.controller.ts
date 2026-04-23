import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { VerificationService } from './verification.service';

import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

// DTO imported from file


@Controller('verification')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('SUPERVISOR')
export class VerificationController {
  constructor(private verificationService: VerificationService) {}

  // Supervisor scans ticket QR
@Post('scan')
  verifyTicket(@Request() req: any, @Body() dto: any) {
    return this.verificationService.verifyTicket(req.user.userId, dto);
  }

  // Supervisor views their scan history
  @Get('history')
  getHistory(@Request() req: any) {
    return this.verificationService.getVerificationHistory(req.user.userId);
  }

  // Supervisor daily stats
  @Get('stats')
  getStats(@Request() req: any) {
    return this.verificationService.getSupervisorStats(req.user.userId);
  }
}
