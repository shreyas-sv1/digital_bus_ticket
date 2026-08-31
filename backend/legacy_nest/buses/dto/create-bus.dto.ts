import { IsString, IsUUID } from 'class-validator';

export class CreateBusDto {
  @IsString()
  busNumber: string;

  @IsUUID()
  routeId: string;
}
