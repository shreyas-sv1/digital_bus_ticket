import { IsEnum } from 'class-validator';

export enum PaymentMethodEnum {
  CASH = 'CASH',
  ONLINE = 'ONLINE',
}

export class SetPaymentMethodDto {
  @IsEnum(PaymentMethodEnum)
  paymentMethod: PaymentMethodEnum;
}
