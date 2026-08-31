import { IsUUID } from 'class-validator';

export class GenerateCashTicketDto {
  @IsUUID()
  sessionId: string;
}
