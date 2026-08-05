'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { joinSession, onPaymentReceived } from '@/lib/socket';
import { CheckCircle, AlertTriangle, CreditCard, Loader2, ArrowLeft, User, MapPin, Wifi } from 'lucide-react';

export default function OnlinePaymentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const sessionId = params?.id as string;
  const [session, setSession] = useState<any>(null);
  const [status, setStatus] = useState<'creating' | 'waiting' | 'success' | 'error'>('creating');
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

    setSession(parsed);

    // Listen for payment confirmed event
    joinSession(parsed.sessionId);
    const unsubscribe = onPaymentReceived((data) => {
      if (data?.sessionId === parsed.sessionId) {
        setStatus('success');
        localStorage.removeItem('scannedSession');
        setTimeout(() => router.push('/conductor/scan'), 3500);
      }
    });

    // Create Razorpay order — this also triggers traveler to see "Pay Now"
    createOrder(parsed.sessionId);

    return () => {
      unsubscribe();
    };
  }, [user, router, sessionId]);

  const createOrder = async (id: string) => {
    try {
      const res = await api.post(`/tickets/sessions/${id}/create-order`);
      setOrder(res.data);
      setStatus('waiting');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to create payment order');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-emerald-900 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-14 h-14 text-emerald-200" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Payment Received!</h1>
        <p className="text-emerald-200">Ticket issued to traveler</p>
        <p className="text-emerald-400 text-sm mt-6">Redirecting to scanner...</p>
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
          <CreditCard className="w-6 h-6 text-indigo-400" />
          <h1 className="text-xl font-bold">Online Payment</h1>
        </div>
      </div>

      {/* Traveler Info */}
      {session && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-indigo-400" />
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
      )}

      {/* Amount */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-3xl p-8 text-center mb-6">
        <p className="text-indigo-400 text-sm font-semibold mb-2 uppercase tracking-widest">Amount to Pay</p>
        {status === 'creating' ? (
          <Loader2 className="w-10 h-10 text-indigo-400 animate-spin mx-auto" />
        ) : (
          <>
            <p className="text-7xl font-black text-white">₹{order ? Math.round(order.amount / 100) : session?.fare}</p>
            <p className="text-slate-400 text-sm mt-2">Via UPI / Card / Net Banking</p>
          </>
        )}
      </div>

      {/* Status */}
      {status === 'waiting' && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Wifi className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="font-semibold text-green-300">Payment request sent</p>
              <p className="text-slate-400 text-sm">Traveler's phone shows Pay Now button</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-3">
            <Loader2 className="w-5 h-5 text-indigo-400 animate-spin flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Waiting for payment...</p>
              <p className="text-xs text-slate-400">This page will update automatically</p>
            </div>
          </div>

          {order?.orderId && (
            <div className="text-xs text-slate-500 font-mono break-all">
              Order: {order.orderId}
            </div>
          )}
        </div>
      )}

      {status === 'creating' && (
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Creating payment order...</span>
        </div>
      )}
    </div>
  );
}
