'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Html5Qrcode } from 'html5-qrcode';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import api from '@/lib/api';

export default function ScanTicket() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode('qr-reader');
    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(() => undefined);
      }
    };
  }, []);

  const handleScan = async (decodedText: string) => {
    if (isScanning) return;
    setIsScanning(true);
    if (scannerRef.current?.isScanning) {
      await scannerRef.current.stop().catch(console.error);
    }

    try {
      const response = await api.post('/verification/scan', { qrData: decodedText });
      const data = response.data;
      
      // Store result in session storage to display on result page
      sessionStorage.setItem('scanResult', JSON.stringify({
        status: data.result || 'INVALID',
        message: data.message || 'Verification Failed',
        ticket: data.ticket || null
      }));

      router.push('/supervisor/result');
    } catch (err: any) {
      console.error(err);
      sessionStorage.setItem('scanResult', JSON.stringify({
        status: 'INVALID',
        message: err.response?.data?.message || 'Network Error: Could not verify ticket.',
        ticket: null
      }));
      router.push('/supervisor/result');
    }
  };

  const startScanner = async () => {
    try {
      await scannerRef.current?.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => handleScan(decodedText),
        (errorMessage) => {
          // ignore frame errors
        }
      );
    } catch (err: any) {
      setError('Camera access denied or device not found. Please enable camera permissions.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      <Link href="/supervisor" className="absolute top-6 left-6 text-white p-2 rounded-full bg-white/20 hover:bg-white/40">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      
      <div className="w-full max-w-sm flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold mb-8 uppercase tracking-wider">Point at QR Code</h1>
        
        {error ? (
          <div className="text-red-500 text-center bg-white p-6 rounded-xl font-medium w-full">
            {error}
          </div>
        ) : (
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border-4 border-white/10">
            <div id="qr-reader" className="w-full"></div>
            {isScanning && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-sm z-50">
                <Loader2 className="w-12 h-12 animate-spin mb-4" />
                <p className="font-bold text-xl pulsing">Verifying...</p>
              </div>
            )}
          </div>
        )}
      </div>
      
      {!error && !isScanning && (
        <div className="absolute bottom-10 flex flex-col items-center animate-pulse">
           <p className="text-white bg-green-600 px-6 py-2 rounded-full font-bold shadow-lg">Scanning Active</p>
        </div>
      )}
    </div>
  );
}
