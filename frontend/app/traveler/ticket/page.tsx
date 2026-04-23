'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Bus, MapPin, CreditCard, CheckCircle, Home } from 'lucide-react';

export default function TicketPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [ticket, setTicket] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    const stored = localStorage.getItem('issuedTicket');
    if (!stored) {
      router.push('/traveler');
      return;
    }
    setTicket(JSON.parse(stored));
  }, [user, router]);

  if (!ticket) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 py-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Bus className="text-white w-5 h-5" />
                <span className="text-white font-bold">{ticket.busNumber}</span>
              </div>
              <span className="bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
                VALID
              </span>
            </div>
            <p className="text-blue-200 text-xs">{ticket.routeName}</p>
          </div>

          <div className="px-6 py-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex flex-col items-center gap-1 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="w-0.5 h-8 bg-gray-300" />
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-gray-400">FROM</p>
                  <p className="font-bold text-gray-800">{ticket.boardingStop}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">TO</p>
                  <p className="font-bold text-gray-800">{ticket.destinationStop}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Fare</p>
                <p className="font-bold text-gray-800 text-lg">₹{ticket.fare}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Payment</p>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-blue-600" />
                  <p className="font-bold text-gray-800 text-sm">{ticket.paymentMethod}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Passenger</p>
                <p className="font-semibold text-gray-800 text-sm truncate">{ticket.traveler?.name}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Issued At</p>
                <p className="font-semibold text-gray-800 text-sm">
                  {new Date(ticket.issuedAt).toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-200 my-4" />

            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 mb-3">Supervisor Verification QR</p>
              {ticket.qrCodeImage && (
                <img src={ticket.qrCodeImage} alt="Verification QR" className="w-40 h-40" />
              )}
              <p className="text-xs text-gray-400 mt-2">Show this to the supervisor</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 text-green-600">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-semibold">Digitally Signed & Verified</span>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem('activeSession');
            localStorage.removeItem('issuedTicket');
            router.push('/traveler');
          }}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-800 text-white py-4 rounded-2xl font-bold"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    </div>
  );
}
