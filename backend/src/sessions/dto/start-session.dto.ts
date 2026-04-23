import { IsUUID, IsInt, Min } from 'class-validator';

export class StartSessionDto {
  @IsUUID()
  busId: string;

  @IsInt()
  @Min(1)
  boardingStopOrder: number;

  @IsInt()
  @Min(1)
  destinationStopOrder: number;
}
