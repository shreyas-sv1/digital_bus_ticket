import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Request,
  Headers,
} from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { GenerateCashTicketDto } from './dto/generate-cash-ticket.dto';
import { SetPaymentMethodDto } from './dto/set-payment-method.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  // ─── Conductor Routes ──────────────────────────────────────────────────────

  @Patch('sessions/:id/approve')
  @Roles('CONDUCTOR')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  approveSession(@Request() req: any, @Param('id') id: string) {
    return this.ticketsService.approveSession(req.user.userId, id);
  }

  @Patch('sessions/:id/payment-method')
  @Roles('CONDUCTOR')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  setPaymentMethod(
    @Request() req: any,
    @Param('id') id: string,
    @Body() dto: SetPaymentMethodDto,
  ) {
    return this.ticketsService.setPaymentMethod(req.user.userId, id, dto);
  }

  @Post('generate-cash')
  @Roles('CONDUCTOR')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  generateCashTicket(@Request() req: any, @Body() dto: GenerateCashTicketDto) {
    return this.ticketsService.generateCashTicket(req.user.userId, dto);
  }

  @Get('conductor/summary')
  @Roles('CONDUCTOR')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  getConductorSummary(@Request() req: any) {
    return this.ticketsService.getConductorSummary(req.user.userId);
  }

  // ─── Online Payment Routes ─────────────────────────────────────────────────

  // Conductor creates Razorpay order
  @Post('sessions/:id/create-order')
  @Roles('CONDUCTOR')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  createOnlineOrder(@Request() req: any, @Param('id') id: string) {
    return this.ticketsService.createOnlineOrder(req.user.userId, id);
  }

  // Frontend verifies payment after Razorpay checkout completes
  @Post('verify-payment')
  @UseGuards(AuthGuard('jwt'))
  verifyPayment(
    @Body() body: {
      razorpayOrderId: string;
      razorpayPaymentId: string;
      razorpaySignature: string;
    },
  ) {
    return this.ticketsService.verifyAndCompleteOnlinePayment(
      body.razorpayOrderId,
      body.razorpayPaymentId,
      body.razorpaySignature,
    );
  }

  // Razorpay webhook — no JWT needed, verified by signature
  @Post('webhook/razorpay')
  razorpayWebhook(
    @Headers('x-razorpay-signature') signature: string,
    @Body() body: any,
    @Request() req: RawBodyRequest<any>,
  ) {
    const rawBody = req.rawBody?.toString() || JSON.stringify(body);
    return this.ticketsService.handleRazorpayWebhook(rawBody, signature);
  }

  // ─── Traveler Routes ───────────────────────────────────────────────────────

  @Get('my')
  @Roles('TRAVELER')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  getMyTickets(@Request() req: any) {
    return this.ticketsService.getMyTickets(req.user.userId);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getTicketById(@Request() req: any, @Param('id') id: string) {
    return this.ticketsService.getTicketById(id, req.user.userId);
  }
}
