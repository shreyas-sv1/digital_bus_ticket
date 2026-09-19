import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateFareDto {
  @IsInt()
  @Min(1)
  fromStopOrder: number;

  @IsInt()
  @Min(1)
  toStopOrder: number;

  @IsNumber()
  @Min(1)
  amount: number;
}
