import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateConductorDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(6)
  password: string;
}
