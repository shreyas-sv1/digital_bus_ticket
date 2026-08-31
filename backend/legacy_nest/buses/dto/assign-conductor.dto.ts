import { IsUUID } from 'class-validator';

export class AssignConductorDto {
  @IsUUID()
  conductorId: string;
}
