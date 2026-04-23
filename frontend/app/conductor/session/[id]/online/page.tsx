'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { joinSession, onPaymentReceived } from '@/lib/socket';
import { CheckCircle, AlertTriangle, CreditCard } from 'lucide-react';

export default function OnlinePaymentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [status, setStatus] = useState<'waiting' | 'success' | 'error'>('waiting');
  const [error, setError] = useState('');
  const [order, setOrder] = useState<any>(null);

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

    joinSession(parsed.sessionId);
    const unsubscribe = onPaymentReceived((data) => {
      if (data?.sessionId === parsed.sessionId) {
        setStatus('success');
        setTimeout(() => router.push('/conductor/scan'), 3000);
      }
    });

    createOrder(parsed.sessionId);

    return () => {
      unsubscribe();
    };
  }, [user, router, sessionId]);

  const createOrder = async (id: string) => {
    try {
      const res = await api.post(`/tickets/sessions/${id}/create-order`);
      setOrder(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to create payment order');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-emerald-900 text-white flex flex-col items-center justify-center px-6 text-center">
        <CheckCircle className="w-14 h-14 text-emerald-200 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Payment Received</h1>
        <p className="text-emerald-100">Ticket issued. Redirecting to scanner...</p>
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

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col items-center text-center">
      <CreditCard className="w-10 h-10 text-indigo-400 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Waiting for Payment</h1>
      <p className="text-slate-400 mb-6">
        Ask the traveler to complete payment on their phone.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 w-full max-w-sm">
        <p className="text-sm text-slate-400">Order ID</p>
        <p className="font-mono text-sm break-all">{order?.orderId || 'Creating...'}</p>
        <p className="text-sm text-slate-400 mt-4">Amount</p>
        <p className="text-3xl font-bold">
          ₹{order ? Math.round(order.amount / 100) : 0}
        </p>
      </div>

      <div className="mt-8 w-full max-w-sm bg-indigo-500/20 border border-indigo-400/40 rounded-2xl p-4">
        <p className="text-indigo-100 font-semibold">Payment in progress...</p>
        <p className="text-indigo-200 text-sm mt-1">Waiting for confirmation</p>
      </div>
    </div>
  );
}
