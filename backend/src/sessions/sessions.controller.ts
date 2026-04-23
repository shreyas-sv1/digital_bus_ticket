import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { StartSessionDto } from './dto/start-session.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('sessions')
@UseGuards(AuthGuard('jwt'))
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  // Traveler starts a session
  @Post('start')
  @Roles('TRAVELER')
  @UseGuards(RolesGuard)
  startSession(@Request() req: any, @Body() dto: StartSessionDto) {
    return this.sessionsService.startSession(req.user.userId, dto);
  }

  // Conductor scans QR — gets session details
  @Get('scan/:qrCode')
  @Roles('CONDUCTOR')
  @UseGuards(RolesGuard)
  getSessionByQR(@Param('qrCode') qrCode: string) {
    return this.sessionsService.getSessionByQR(qrCode);
  }

  // Traveler views their active sessions
  @Get('my/active')
  @Roles('TRAVELER')
  @UseGuards(RolesGuard)
  getActiveSessions(@Request() req: any) {
    return this.sessionsService.getMyActiveSessions(req.user.userId);
  }

  // Traveler views session history
  @Get('my/history')
  @Roles('TRAVELER')
  @UseGuards(RolesGuard)
  getSessionHistory(@Request() req: any) {
    return this.sessionsService.getMySessionHistory(req.user.userId);
  }

  // Traveler cancels a session
  @Patch(':id/cancel')
  @Roles('TRAVELER')
  @UseGuards(RolesGuard)
  cancelSession(@Request() req: any, @Param('id') id: string) {
    return this.sessionsService.cancelSession(req.user.userId, id);
  }

  // Traveler refreshes expired QR
  @Patch(':id/refresh-qr')
  @Roles('TRAVELER')
  @UseGuards(RolesGuard)
  refreshQR(@Request() req: any, @Param('id') id: string) {
    return this.sessionsService.refreshQR(req.user.userId, id);
  }
}
