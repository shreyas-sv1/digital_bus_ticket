'use client';

import { useEffect, useRef } from 'react';
import type { Html5Qrcode } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (text: string) => void;
  onError?: (message: string) => void;
}

export default function QRScanner({ onScan, onError }: QRScannerProps) {
  const readerId = useRef(`qr-reader-${Math.random().toString(36).slice(2)}`);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isInitializing = useRef(false);

  useEffect(() => {
    let mounted = true;

    const start = async () => {
      // Prevent double initialization
      if (isInitializing.current || scannerRef.current) return;
      isInitializing.current = true;

      try {
        const { Html5Qrcode } = await import('html5-qrcode');
        if (!mounted) {
          isInitializing.current = false;
          return;
        }

        const container = document.getElementById(readerId.current);
        if (!container) {
          isInitializing.current = false;
          return;
        }

        const qr = new Html5Qrcode(readerId.current);
        scannerRef.current = qr;

        let hasScanned = false;

        await qr.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 240, height: 240 } },
          (decodedText) => {
            if (!mounted || hasScanned) return;
            hasScanned = true;
            onScan(decodedText);
            
            // Stop scanner after a successful scan
            if (qr.isScanning) {
              qr.stop()
                .then(() => {
                  try {
                    qr.clear();
                  } catch {}
                })
                .catch(() => undefined);
            }
          },
          () => undefined,
        );
      } catch (err: any) {
        isInitializing.current = false;
        scannerRef.current = null;
        if (mounted) {
          const errMsg = err?.message || err || 'Camera access denied or device not found. Please enable camera permissions.';
          onError?.(errMsg);
        }
      }
    };

    start();

    return () => {
      mounted = false;
      isInitializing.current = false;
      
      const qr = scannerRef.current;
      if (qr) {
        scannerRef.current = null;
        if (qr.isScanning) {
          qr.stop()
            .then(() => {
              try {
                qr.clear();
              } catch {}
            })
            .catch(() => undefined);
        } else {
          try {
            qr.clear();
          } catch {}
        }
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
