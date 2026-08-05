'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { joinSession, onTicketIssued, onSessionApproved, onOnlinePaymentRequest } from '@/lib/socket';
import { Bus, MapPin, RefreshCw, Clock, CheckCircle, CreditCard, Loader2, ShieldCheck } from 'lucide-react';
import Toast, { ToastState } from '@/components/admin/Toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function QRPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [sessionData, setSessionData] = useState<any>(null);
  const [status, setStatus] = useState<'waiting' | 'approved' | 'paying' | 'verifying' | 'issued'>('waiting');
  const [paymentOrder, setPaymentOrder] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(600);
  const [refreshing, setRefreshing] = useState(false);
  const [payError, setPayError] = useState('');
  const [toast, setToast] = useState<ToastState | null>(null);
  const razorpayScriptLoaded = useRef(false);

  // Load Razorpay SDK once
  useEffect(() => {
    if (razorpayScriptLoaded.current) return;
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => { razorpayScriptLoaded.current = true; };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const stored = localStorage.getItem('activeSession');
    if (!stored) {
      router.push('/traveler');
      return;
    }

    const data = JSON.parse(stored);
    setSessionData(data);

    joinSession(data.session.id);

    // Ticket issued (cash or online after webhook)
    const unsubTicket = onTicketIssued((ticketData) => {
      localStorage.setItem('issuedTicket', JSON.stringify(ticketData));
      setStatus('issued');
      setTimeout(() => router.push('/traveler/ticket'), 1500);
    });

    // Session approved — conductor scanned QR
    const unsubApproved = onSessionApproved(() => {
      setStatus('approved');
    });

    // Conductor chose online — trigger Razorpay checkout on traveler's device
    const unsubPaymentRequest = onOnlinePaymentRequest((orderData) => {
      setPaymentOrder(orderData);
      setStatus('paying');
    });

    // Fallback Polling (in case socket connection is lost/backgrounded)
    const pollInterval = setInterval(async () => {
      try {
        const res = await api.get(`/sessions/${data.session.id}/status`);
        if (res.data.status === 'issued' && status !== 'issued') {
          localStorage.setItem('issuedTicket', JSON.stringify(res.data.ticket));
          setStatus('issued');
          setTimeout(() => router.push('/traveler/ticket'), 1500);
        } else if (res.data.status === 'paying' && status !== 'paying') {
          setPaymentOrder(res.data.paymentOrder);
          setStatus('paying');
        } else if (res.data.status === 'approved' && status === 'waiting') {
          setStatus('approved');
        }
      } catch (err) {
        // Ignore polling errors
      }
    }, 5000);

    return () => {
      unsubTicket();
      unsubApproved();
      unsubPaymentRequest();
      clearInterval(pollInterval);
    };
  }, [user, router, status]);

  useEffect(() => {
    if (!sessionData) return;
    const expiresAt = new Date(sessionData.session.qrExpiresAt).getTime();
    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionData]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleRefreshQR = async () => {
    if (!sessionData) return;
    setRefreshing(true);
    try {
      const res = await api.patch(`/sessions/${sessionData.session.id}/refresh-qr`);
      const updated = {
        ...sessionData,
        session: {
          ...sessionData.session,
          tempQRCode: res.data.tempQRCode,
          qrExpiresAt: res.data.qrExpiresAt,
        },
        qrCodeImage: res.data.qrCodeImage,
      };
      setSessionData(updated);
      localStorage.setItem('activeSession', JSON.stringify(updated));
      setTimeLeft(600);
    } catch {
      setToast({ type: 'error', message: 'Failed to refresh QR. Please try again.' });
    } finally {
      setRefreshing(false);
    }
  };

  const handleRazorpayPayment = () => {
    if (!paymentOrder) return;
    if (!window.Razorpay) {
      setPayError('Payment SDK not loaded. Please check internet connection.');
      return;
    }

    const options = {
      key: paymentOrder.keyId,
      amount: paymentOrder.amount,
      currency: paymentOrder.currency || 'INR',
      name: 'BMTC SmartTicket',
      description: `Bus Ticket · ₹${paymentOrder.fare}`,
      order_id: paymentOrder.orderId,
      handler: async (response: any) => {
        setStatus('verifying');
        try {
          await api.post('/tickets/verify-payment', {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });
          // ticket-issued socket event will handle redirect
        } catch {
          setPayError('Payment verification failed. Contact conductor.');
          setStatus('paying');
        }
      },
      modal: {
        ondismiss: () => {
          setPayError('Payment cancelled. Tap Pay Now to try again.');
        },
      },
      prefill: {
        name: user?.name || '',
      },
      theme: {
        color: '#6366f1',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!sessionData) return null;

  const { session, qrCodeImage } = sessionData;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <Bus className="text-white w-6 h-6" />
          <div>
            <p className="text-blue-200 text-xs">Bus</p>
            <p className="text-white font-bold">{session.bus?.busNumber}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-sm">{session.boardingStop}</span>
          </div>
          <span className="text-blue-300">→</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-red-400" />
            <span className="text-sm">{session.destinationStop}</span>
          </div>
        </div>

        <div className="mt-3 bg-white/20 rounded-xl px-4 py-2 inline-block">
          <span className="text-white font-bold text-lg">₹{session.fare}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* ── WAITING: Show QR ── */}
        {status === 'waiting' && (
          <>
            <p className="text-gray-500 text-sm mb-2">Show this QR to the conductor</p>

            <div className="bg-white rounded-3xl p-6 shadow-lg mb-4">
              {qrCodeImage && <img src={qrCodeImage} alt="Ticket QR" className="w-56 h-56" />}
            </div>

            <div
              className={`flex items-center gap-2 mb-4 ${
                timeLeft < 60 ? 'text-red-500' : 'text-gray-500'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
              <span className="text-sm">remaining</span>
            </div>

            {timeLeft === 0 && (
              <button
                onClick={handleRefreshQR}
                disabled={refreshing}
                className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? 'Refreshing...' : 'Refresh QR'}
              </button>
            )}

            <p className="text-gray-400 text-xs mt-4 text-center">
              QR expires in {formatTime(timeLeft)}. Tap refresh if it expires.
            </p>
          </>
        )}

        {/* ── APPROVED: Waiting for conductor to select payment ── */}
        {status === 'approved' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">QR Approved!</h2>
            <p className="text-gray-500 mb-6">Conductor is selecting payment method...</p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Waiting for payment request</span>
            </div>
          </div>
        )}

        {/* ── PAYING: Razorpay checkout button ── */}
        {status === 'paying' && (
          <div className="w-full max-w-sm text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-10 h-10 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Complete Payment</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Conductor approved your trip. Pay securely via Razorpay.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6">
              <p className="text-indigo-600 text-sm">Amount Due</p>
              <p className="text-4xl font-black text-indigo-800 mt-1">
                ₹{paymentOrder ? Math.round(paymentOrder.amount / 100) : session.fare}
              </p>
              <p className="text-indigo-400 text-xs mt-1">
                {session.boardingStop} → {session.destinationStop}
              </p>
            </div>

            {payError && (
              <p className="text-red-500 text-sm mb-4">{payError}</p>
            )}

            <button
              onClick={handleRazorpayPayment}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 transition"
            >
              <CreditCard className="w-6 h-6" />
              Pay Now · ₹{paymentOrder ? Math.round(paymentOrder.amount / 100) : session.fare}
            </button>

            <p className="text-gray-400 text-xs mt-4 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Secured by Razorpay
            </p>
          </div>
        )}

        {/* ── VERIFYING: After Razorpay success ── */}
        {status === 'verifying' && (
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Verifying Payment...</h2>
            <p className="text-gray-500 text-sm">Please wait, this takes a moment.</p>
          </div>
        )}

        {/* ── ISSUED ── */}
        {status === 'issued' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Ticket Issued!</h2>
            <p className="text-gray-500">Redirecting to your ticket...</p>
          </div>
        )}
      </div>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
