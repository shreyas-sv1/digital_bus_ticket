'use client';

import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (text: string) => void;
  onError?: (message: string) => void;
}

export default function QRScanner({ onScan, onError }: QRScannerProps) {
  const readerId = useRef(`qr-reader-${Math.random().toString(36).slice(2)}`);
  useEffect(() => {
    let qr: Html5Qrcode | null = null;
    let cancelled = false;

    const start = async () => {
      try {
        qr = new Html5Qrcode(readerId.current);
        await qr.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 240, height: 240 } },
          (decodedText) => {
            if (cancelled) return;
            onScan(decodedText);
            qr?.stop().catch(() => undefined);
          },
          () => undefined,
        );
      } catch (err: any) {
        onError?.(err?.message || 'Unable to access camera');
      }
    };

    start();

    return () => {
      cancelled = true;
      if (qr) {
        qr.stop().catch(() => undefined);
      }
    };
  }, [onScan, onError]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div id={readerId.current} className="w-full rounded-2xl overflow-hidden bg-black" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-56 border-2 border-emerald-400 rounded-2xl relative">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400" />
        </div>
      </div>
    </div>
  );
}
