import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
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

  @Get('dashboard')
  getDashboard() {
    return this.adminService.getDashboard();
  }

  @Get('buses')
  getBuses() {
    return this.adminService.getBuses();
  }

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

  @Get('fraud')
  getFraud(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.adminService.getFraudReport(startDate, endDate);
  }

  @Get('fraud-report')
  getFraudReport(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.adminService.getFraudReport(startDate, endDate);
  }
}
