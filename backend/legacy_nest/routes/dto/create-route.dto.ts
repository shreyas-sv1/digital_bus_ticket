import { IsString, IsInt, Min } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  routeName: string;

  @IsInt()
  @Min(2)
  totalStops: number;
}
