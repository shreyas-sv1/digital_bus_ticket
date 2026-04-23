'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { ArrowLeft, Bus, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function HistoryPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchHistory();
  }, [user, router]);

  const fetchHistory = async () => {
    try {
      const res = await api.get('/tickets/my');
      setTickets(res.data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-6">
        <button onClick={() => router.back()} className="text-white mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl font-bold">My Tickets</h1>
        <p className="text-blue-200 text-sm">Your travel history</p>
      </div>

      <div className="px-6 py-6 max-w-md mx-auto">
        {loading && <div className="text-center text-gray-400 py-8">Loading...</div>}

        {!loading && tickets.length === 0 && (
          <div className="text-center py-12">
            <Bus className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No tickets yet. Start your first journey!</p>
          </div>
        )}

        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-gray-800">{ticket.busNumber}</span>
                </div>
                <div className="flex items-center gap-1">
                  {ticket.isVerified ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-gray-400" />
                  )}
                  <span
                    className={`text-xs font-semibold ${
                      ticket.isVerified ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {ticket.isVerified ? 'Verified' : 'Unverified'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="w-3 h-3 text-green-500" />
                <span>{ticket.boardingStop}</span>
                <span className="text-gray-300">→</span>
                <MapPin className="w-3 h-3 text-red-500" />
                <span>{ticket.destinationStop}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-bold">₹{ticket.fare}</span>
                <span className="text-gray-400 text-xs">
                  {new Date(ticket.issuedAt).toLocaleDateString('en-IN')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
