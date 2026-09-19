'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import QRScanner from '@/components/conductor/QRScanner';
import { AlertTriangle, QrCode } from 'lucide-react';

export default function ConductorScanPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');
  const [assignedBus, setAssignedBus] = useState<any>(null);

  useEffect(() => {
    if (!user || user.role !== 'CONDUCTOR') {
      router.push('/login');
      return;
    }
    loadAssignedBus();
  }, [user, router]);

  const loadAssignedBus = async () => {
    const cached = localStorage.getItem('conductorBus');
    if (cached) {
      setAssignedBus(JSON.parse(cached));
      return;
    }
    try {
      const res = await api.get('/buses');
      const assigned = res.data.find((b: any) => b.conductor?.id === user?.id);
      if (assigned) {
        setAssignedBus(assigned);
        localStorage.setItem('conductorBus', JSON.stringify(assigned));
      }
    } catch {}
  };

  const handleScan = async (qrText: string) => {
    try {
      const res = await api.get(`/sessions/scan/${encodeURIComponent(qrText)}`);
      const session = res.data;

      if (assignedBus && session.bus?.busNumber !== assignedBus.busNumber) {
        setError('This traveler is not on your bus');
        return;
      }

      localStorage.setItem('scannedSession', JSON.stringify(session));
      router.push(`/conductor/session/${session.sessionId}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid QR code');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-red-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <AlertTriangle className="w-12 h-12 text-red-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Scan Failed</h1>
        <p className="text-red-200 mb-6">{error}</p>
        <button
          onClick={() => setError('')}
          className="bg-white text-red-800 font-bold px-6 py-3 rounded-xl"
        >
          Scan Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <QrCode className="w-6 h-6 text-emerald-400" />
        <h1 className="text-xl font-bold">Scan Traveler QR</h1>
      </div>
      <p className="text-slate-400 text-sm mb-6">
        Align the QR code inside the frame. Rear camera will be used by default.
      </p>

      <QRScanner onScan={handleScan} onError={(msg) => setError(msg)} />
    </div>
  );
}
