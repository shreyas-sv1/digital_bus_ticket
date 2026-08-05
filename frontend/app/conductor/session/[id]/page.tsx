'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import SessionCard from '@/components/conductor/SessionCard';
import { Banknote, CreditCard, AlertTriangle, Loader2 } from 'lucide-react';

export default function ConductorSessionPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [session, setSession] = useState<any>(null);
  const [approvedData, setApprovedData] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [settingMethod, setSettingMethod] = useState(false);

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
    approveSession(parsed.sessionId);
  }, [user, router, sessionId]);

  const approveSession = async (id: string) => {
    try {
      const res = await api.patch(`/tickets/sessions/${id}/approve`);
      // Store approved data (includes confirmed fare from backend)
      const data = res.data;
      setApprovedData(data);
      // Update localStorage with confirmed fare & details
      const updated = {
        ...JSON.parse(localStorage.getItem('scannedSession') || '{}'),
        fare: data.fare,
        boardingStop: data.boardingStop,
        destinationStop: data.destinationStop,
        traveler: data.traveler,
      };
      localStorage.setItem('scannedSession', JSON.stringify(updated));
      setSession(updated);
    } catch (err: any) {
      // If already approved, still continue — show existing data
      const msg = err.response?.data?.message || '';
      if (msg.toLowerCase().includes('already approved') || msg.toLowerCase().includes('already')) {
        // session is approved, just show what we have
      } else {
        setError(msg || 'Unable to approve session');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSelect = async (method: 'CASH' | 'ONLINE') => {
    if (!session) return;
    setSettingMethod(true);
    try {
      await api.patch(`/tickets/sessions/${session.sessionId}/payment-method`, {
        paymentMethod: method,
      });
      if (method === 'CASH') router.push(`/conductor/session/${session.sessionId}/cash`);
      else router.push(`/conductor/session/${session.sessionId}/online`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to set payment method');
    } finally {
      setSettingMethod(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-red-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <AlertTriangle className="w-12 h-12 text-red-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Session Error</h1>
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

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-emerald-400 animate-spin mb-4" />
        <p className="text-slate-400">Verifying session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-6">
      {/* Approved badge */}
      <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl px-4 py-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-300 text-sm font-semibold">Session Verified & Approved</span>
      </div>

      <SessionCard
        travelerName={session.traveler?.name}
        travelerPhone={session.traveler?.phone}
        boardingStop={session.boardingStop}
        destinationStop={session.destinationStop}
        fare={session.fare}
      />

      <div className="space-y-3">
        <p className="text-slate-400 text-sm text-center">Choose payment method</p>
        <button
          onClick={() => handlePaymentSelect('CASH')}
          disabled={settingMethod}
          className="w-full bg-emerald-500 text-slate-950 font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 disabled:opacity-60"
        >
          <Banknote className="w-6 h-6" />
          Cash Payment
        </button>
        <button
          onClick={() => handlePaymentSelect('ONLINE')}
          disabled={settingMethod}
          className="w-full bg-indigo-500 text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 disabled:opacity-60"
        >
          <CreditCard className="w-6 h-6" />
          Online Payment
        </button>
      </div>
    </div>
  );
}
