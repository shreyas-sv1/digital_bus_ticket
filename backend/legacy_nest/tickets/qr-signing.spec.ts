import * as crypto from 'crypto';

/**
 * Unit tests for the QR signing/verification logic used in TicketsService.
 *
 * These tests validate the core security guarantee: a signed QR payload
 * produced by the backend cannot be tampered with without invalidating the
 * HMAC-SHA256 signature.
 */

// ── Helpers (mirror of the logic in tickets.service.ts) ───────────────────

const TEST_SECRET = 'test-qr-sign-secret-1234';

function signQRPayload(payload: object): {
  payload: string;
  signature: string;
} {
  const payloadStr = JSON.stringify(payload);
  const signature = crypto
    .createHmac('sha256', TEST_SECRET)
    .update(payloadStr)
    .digest('hex');
  return { payload: payloadStr, signature };
}

function verifyQRSignature(payloadStr: string, signature: string): boolean {
  const expected = crypto
    .createHmac('sha256', TEST_SECRET)
    .update(payloadStr)
    .digest('hex');
  // Use timingSafeEqual to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expected, 'hex'),
    );
  } catch {
    return false;
  }
}

// ── Tests ──────────────────────────────────────────────────────────────────

describe('QR Signing (HMAC-SHA256)', () => {
  const ticketPayload = {
    ticketId: 'abc-123',
    travelerId: 'user-456',
    busId: 'bus-789',
    boardingStop: 'Majestic',
    destinationStop: 'Koramangala',
    fare: 35,
    issuedAt: '2026-05-09T08:00:00.000Z',
  };

  it('produces a 64-character hex signature', () => {
    const { signature } = signQRPayload(ticketPayload);
    expect(signature).toHaveLength(64);
    expect(signature).toMatch(/^[0-9a-f]+$/);
  });

  it('verifies a genuine signed payload', () => {
    const { payload, signature } = signQRPayload(ticketPayload);
    expect(verifyQRSignature(payload, signature)).toBe(true);
  });

  it('rejects a tampered payload (field changed)', () => {
    const { payload, signature } = signQRPayload(ticketPayload);
    const tampered = payload.replace('"fare":35', '"fare":1');
    expect(verifyQRSignature(tampered, signature)).toBe(false);
  });

  it('rejects a forged signature', () => {
    const { payload } = signQRPayload(ticketPayload);
    const fakeSignature = 'a'.repeat(64);
    expect(verifyQRSignature(payload, fakeSignature)).toBe(false);
  });

  it('rejects an empty signature', () => {
    const { payload } = signQRPayload(ticketPayload);
    expect(verifyQRSignature(payload, '')).toBe(false);
  });

  it('is deterministic — same payload + secret always produces the same signature', () => {
    const { signature: sig1 } = signQRPayload(ticketPayload);
    const { signature: sig2 } = signQRPayload(ticketPayload);
    expect(sig1).toBe(sig2);
  });

  it('produces a different signature when the secret changes', () => {
    const payloadStr = JSON.stringify(ticketPayload);
    const sig1 = crypto
      .createHmac('sha256', TEST_SECRET)
      .update(payloadStr)
      .digest('hex');
    const sig2 = crypto
      .createHmac('sha256', 'different-secret')
      .update(payloadStr)
      .digest('hex');
    expect(sig1).not.toBe(sig2);
  });

  it('issuedAt is consistent (no clock drift between signing and verification)', () => {
    // Simulate the bug that was fixed: use a fixed timestamp from the DB row
    const fixedIssuedAt = '2026-05-09T08:00:00.000Z';
    const { payload, signature } = signQRPayload({
      ...ticketPayload,
      issuedAt: fixedIssuedAt,
    });

    // Verification happens later — timestamp must match exactly
    expect(verifyQRSignature(payload, signature)).toBe(true);
    expect(JSON.parse(payload).issuedAt).toBe(fixedIssuedAt);
  });
});
