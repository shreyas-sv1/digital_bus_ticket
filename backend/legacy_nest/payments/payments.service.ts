import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import Razorpay from 'razorpay';

@Injectable()
export class PaymentsService {
  private razorpay: Razorpay;

  constructor(private config: ConfigService) {
    this.razorpay = new Razorpay({
      key_id: this.config.get('RAZORPAY_KEY_ID') || 'fake_key',
      key_secret: this.config.get('RAZORPAY_KEY_SECRET') || 'fake_secret',
    });
  }

  async createOrder(amount: number, sessionId: string) {
    const order = await this.razorpay.orders.create({
      amount: amount * 100, // Razorpay uses paise
      currency: 'INR',
      receipt: `session_${sessionId}`,
      notes: { sessionId },
    });

    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: this.config.get('RAZORPAY_KEY_ID'),
    };
  }

  verifyWebhookSignature(body: string, signature: string): boolean {
    const expectedSignature = crypto
      .createHmac(
        'sha256',
        this.config.get('RAZORPAY_WEBHOOK_SECRET') || 'fake_webhook_secret',
      )
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  }

  verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string,
  ): boolean {
    const body = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac(
        'sha256',
        this.config.get('RAZORPAY_KEY_SECRET') || 'fake_secret',
      )
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  }
}
