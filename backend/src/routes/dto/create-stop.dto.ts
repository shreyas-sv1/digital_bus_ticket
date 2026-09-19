import { IsString, IsInt, IsNumber, Min } from 'class-validator';

export class CreateStopDto {
  @IsString()
  stopName: string;

  @IsInt()
  @Min(1)
  stopOrder: number;

  @IsNumber()
  @Min(0)
  distanceFromStart: number;
}
