import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateStopDto } from './dto/create-stop.dto';
import { CreateFareDto } from './dto/create-fare.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  // Public — traveler needs to see routes
  @Get()
  getAllRoutes() {
    return this.routesService.getAllRoutes();
  }

  @Get(':id')
  getRouteById(@Param('id') id: string) {
    return this.routesService.getRouteById(id);
  }

  @Get(':id/stops')
  getStops(@Param('id') id: string) {
    return this.routesService.getStopsByRoute(id);
  }

  @Get(':id/fare')
  calculateFare(
    @Param('id') id: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.routesService.calculateFare(id, parseInt(from), parseInt(to));
  }

  // Admin only
  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  createRoute(@Body() dto: CreateRouteDto) {
    return this.routesService.createRoute(dto);
  }

  @Post(':id/stops')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  addStop(@Param('id') id: string, @Body() dto: CreateStopDto) {
    return this.routesService.addStop(id, dto);
  }

  @Post(':id/fares')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  setFare(@Param('id') id: string, @Body() dto: CreateFareDto) {
    return this.routesService.setFare(id, dto);
  }
}
