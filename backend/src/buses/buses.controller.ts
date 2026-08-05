import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { AssignConductorDto } from './dto/assign-conductor.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('buses')
export class BusesController {
  constructor(private busesService: BusesService) {}

  @Get()
  getActiveBuses() {
    return this.busesService.getActiveBuses();
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  getAllBuses() {
    return this.busesService.getAllBuses();
  }

  @Get(':busNumber')
  getBusByNumber(@Param('busNumber') busNumber: string) {
    return this.busesService.getBusByNumber(busNumber);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  createBus(@Body() dto: CreateBusDto) {
    return this.busesService.createBus(dto);
  }

  @Patch(':id/assign-conductor')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  assignConductor(@Param('id') id: string, @Body() dto: AssignConductorDto) {
    return this.busesService.assignConductor(id, dto);
  }

  @Patch(':id/toggle-status')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  toggleStatus(@Param('id') id: string) {
    return this.busesService.toggleBusStatus(id);
  }
}
