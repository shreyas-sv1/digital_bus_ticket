'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import SessionCard from '@/components/conductor/SessionCard';
import { Banknote, CreditCard, AlertTriangle } from 'lucide-react';

export default function ConductorSessionPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [session, setSession] = useState<any>(null);
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
    approveSession(parsed.sessionId);
  }, [user, router, sessionId]);

  const approveSession = async (id: string) => {
    try {
      await api.patch(`/tickets/sessions/${id}/approve`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to approve session');
    }
  };

  const handlePaymentSelect = async (method: 'CASH' | 'ONLINE') => {
    if (!session) return;
    try {
      await api.patch(`/tickets/sessions/${session.sessionId}/payment-method`, {
        paymentMethod: method,
      });
      if (method === 'CASH') router.push(`/conductor/session/${session.sessionId}/cash`);
      else router.push(`/conductor/session/${session.sessionId}/online`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to set payment method');
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

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-6">
      <SessionCard
        travelerName={session.traveler?.name}
        travelerPhone={session.traveler?.phone}
        boardingStop={session.boardingStop}
        destinationStop={session.destinationStop}
        fare={session.fare}
      />

      <div className="space-y-4">
        <button
          onClick={() => handlePaymentSelect('CASH')}
          className="w-full bg-emerald-500 text-slate-950 font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <Banknote className="w-6 h-6" />
          Cash Payment
        </button>
        <button
          onClick={() => handlePaymentSelect('ONLINE')}
          className="w-full bg-indigo-500 text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <CreditCard className="w-6 h-6" />
          Online Payment
        </button>
      </div>
    </div>
  );
}
