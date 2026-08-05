import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/decorators/roles.decorator';
import { CreateConductorDto } from './dto/create-conductor.dto';

@Controller('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('ADMIN')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // ── Dashboard ─────────────────────────────────────────────────────────────
  @Get('dashboard')
  getDashboard() {
    return this.adminService.getDashboard();
  }

  /** 7-day revenue trend + ticket counts for analytics charts */
  @Get('analytics')
  getAnalytics() {
    return this.adminService.getAnalytics();
  }

  // ── Buses ─────────────────────────────────────────────────────────────────
  @Get('buses')
  getBuses() {
    return this.adminService.getBuses();
  }

  // ── Conductors (legacy endpoints kept for backwards compat) ───────────────
  @Get('conductors')
  getConductors() {
    return this.adminService.getConductors();
  }

  @Post('conductors')
  createConductor(@Body() dto: CreateConductorDto) {
    return this.adminService.createConductor(dto);
  }

  @Patch('conductors/:id/unassign')
  unassignConductor(@Param('id') id: string) {
    return this.adminService.unassignConductor(id);
  }

  // ── Staff management (supervisors + admins) ───────────────────────────────
  /** List all staff users. Optional ?role=SUPERVISOR|CONDUCTOR|ADMIN filter. */
  @Get('staff')
  getStaff(@Query('role') role?: 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN') {
    return this.adminService.getStaffUsers(role);
  }

  /** Create a SUPERVISOR or ADMIN account (or CONDUCTOR via this unified endpoint). */
  @Post('staff')
  createStaff(
    @Query('role') role: 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN' = 'CONDUCTOR',
    @Body() dto: CreateConductorDto,
  ) {
    return this.adminService.createStaffUser(dto, role);
  }

  /** Delete any non-traveler staff account. */
  @Delete('staff/:id')
  deleteStaff(@Param('id') id: string) {
    return this.adminService.deleteUser(id);
  }

  // ── Fraud report ─────────────────────────────────────────────────────────
  @Get('fraud')
  getFraud(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('cursor') cursor?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.adminService.getFraudReport(
      startDate,
      endDate,
      cursor,
      pageSize ? parseInt(pageSize, 10) : 50,
    );
  }

  @Get('fraud-report')
  getFraudReport(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('cursor') cursor?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.adminService.getFraudReport(
      startDate,
      endDate,
      cursor,
      pageSize ? parseInt(pageSize, 10) : 50,
    );
  }
}
