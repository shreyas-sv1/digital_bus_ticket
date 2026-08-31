import { IsString } from 'class-validator';

export class VerifyTicketDto {
  @IsString()
  qrData!: string; // raw string scanned from ticket QR
}
