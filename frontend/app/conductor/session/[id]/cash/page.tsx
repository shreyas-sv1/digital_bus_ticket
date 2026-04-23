'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { CheckCircle, Banknote, AlertTriangle } from 'lucide-react';

export default function CashPaymentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [session, setSession] = useState<any>(null);
  const [status, setStatus] = useState<'ready' | 'success' | 'error'>('ready');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || user.role !== 'CONDUCTOR') {
      router.push('/login');
      return;
    }

    const stored = localStorage.getItem('scannedSession');
    if (!stored) {
      router.push('/conductor/scan');
      return;
    }

    const parsed = JSON.parse(stored);
    if (parsed.sessionId !== sessionId) {
      router.push('/conductor/scan');
      return;
    }

    setSession(parsed);
  }, [user, router, sessionId]);

  const handleGenerate = async () => {
    try {
      await api.post('/tickets/generate-cash', { sessionId });
      setStatus('success');
      setTimeout(() => router.push('/conductor/scan'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to generate ticket');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-emerald-900 text-white flex flex-col items-center justify-center px-6 text-center">
        <CheckCircle className="w-14 h-14 text-emerald-200 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Ticket Issued</h1>
        <p className="text-emerald-100">Redirecting to scanner...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-red-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <AlertTriangle className="w-12 h-12 text-red-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Error</h1>
        <p className="text-red-200 mb-6">{error}</p>
        <button
          onClick={() => router.push('/conductor/scan')}
          className="bg-white text-red-800 font-bold px-6 py-3 rounded-xl"
        >
          Back to Scan
        </button>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col">
      <div className="text-center mb-10">
        <Banknote className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Cash Payment</h1>
        <p className="text-slate-400">Collect cash before issuing ticket</p>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center mb-8">
        <p className="text-slate-400 text-sm">Fare Amount</p>
        <p className="text-5xl font-bold mt-2">₹{session.fare}</p>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-emerald-500 text-slate-950 font-bold py-5 rounded-2xl text-lg"
      >
        Generate Ticket
      </button>
    </div>
  );
}
