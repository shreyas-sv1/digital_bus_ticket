'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { CheckCircle, Banknote, AlertTriangle, Loader2, ArrowLeft, User, MapPin } from 'lucide-react';

export default function CashPaymentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [session, setSession] = useState<any>(null);
  const [status, setStatus] = useState<'ready' | 'generating' | 'success' | 'error'>('ready');
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
    setStatus('generating');
    try {
      await api.post('/tickets/generate-cash', { sessionId });
      setStatus('success');
      localStorage.removeItem('scannedSession');
      setTimeout(() => router.push('/conductor/scan'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to generate ticket');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-emerald-900 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-14 h-14 text-emerald-200" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Ticket Issued!</h1>
        <p className="text-emerald-200 mb-1">Cash collected · ₹{session?.fare}</p>
        <p className="text-emerald-300 text-sm mt-2">Ticket sent to traveler's device</p>
        <p className="text-emerald-400 text-xs mt-6">Redirecting to scanner...</p>
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
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.back()}
          className="text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Banknote className="w-6 h-6 text-emerald-400" />
          <h1 className="text-xl font-bold">Cash Payment</h1>
        </div>
      </div>

      {/* Traveler Info */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <User className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="font-semibold">{session.traveler?.name}</p>
            <p className="text-slate-400 text-sm">{session.traveler?.phone}</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-3 flex items-center gap-2 text-sm text-slate-300">
          <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span>{session.boardingStop}</span>
          <span className="text-slate-600">→</span>
          <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
          <span>{session.destinationStop}</span>
        </div>
      </div>

      {/* Fare Amount — big and bold */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center mb-8">
        <p className="text-emerald-400 text-sm font-semibold mb-2 uppercase tracking-widest">Collect from Traveler</p>
        <p className="text-7xl font-black text-white">₹{session.fare}</p>
        <p className="text-slate-400 text-sm mt-2">Cash only</p>
      </div>

      <div className="flex-1" />

      <p className="text-slate-400 text-sm text-center mb-4">
        Collect cash, then tap <strong className="text-white">Generate Ticket</strong> to issue.
      </p>

      <button
        onClick={handleGenerate}
        disabled={status === 'generating'}
        className="w-full bg-emerald-500 text-slate-950 font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 disabled:opacity-60"
      >
        {status === 'generating' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Issuing Ticket...
          </>
        ) : (
          <>
            <Banknote className="w-6 h-6" />
            Generate Ticket
          </>
        )}
      </button>
    </div>
  );
}
