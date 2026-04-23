'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { joinSession, onTicketIssued, onSessionApproved } from '@/lib/socket';
import { Bus, MapPin, RefreshCw, Clock, CheckCircle } from 'lucide-react';

export default function QRPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [sessionData, setSessionData] = useState<any>(null);
  const [status, setStatus] = useState<'waiting' | 'approved' | 'issued'>('waiting');
  const [timeLeft, setTimeLeft] = useState(600);
  const [refreshing, setRefreshing] = useState(false);

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

    const unsubTicket = onTicketIssued((ticketData) => {
      localStorage.setItem('issuedTicket', JSON.stringify(ticketData));
      setStatus('issued');
      setTimeout(() => router.push('/traveler/ticket'), 1500);
    });

    const unsubApproved = onSessionApproved(() => {
      setStatus('approved');
    });

    return () => {
      unsubTicket();
      unsubApproved();
    };
  }, [user, router]);

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
      alert('Failed to refresh QR');
    } finally {
      setRefreshing(false);
    }
  };

  if (!sessionData) return null;

  const { session, qrCodeImage } = sessionData;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
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

        {status === 'approved' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Approved!</h2>
            <p className="text-gray-500">Conductor approved your trip. Waiting for payment...</p>
          </div>
        )}

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
    </div>
  );
}
