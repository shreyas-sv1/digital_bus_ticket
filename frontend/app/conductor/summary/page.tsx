'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import SummaryCard from '@/components/conductor/SummaryCard';
import { ArrowLeft, Bus } from 'lucide-react';

export default function ConductorSummaryPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    if (!user || user.role !== 'CONDUCTOR') {
      router.push('/login');
      return;
    }
    fetchSummary();
  }, [user, router]);

  const fetchSummary = async () => {
    try {
      const res = await api.get('/tickets/conductor/summary');
      setSummary(res.data);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <button onClick={() => router.back()} className="text-slate-300 mb-6 flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Daily Summary</h1>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <SummaryCard label="Tickets" value={summary?.totalTickets ?? 0} />
        <SummaryCard label="Revenue" value={`₹${summary?.totalRevenue ?? 0}`} />
        <SummaryCard label="Cash" value={`₹${summary?.cashRevenue ?? 0}`} />
        <SummaryCard label="Online" value={`₹${summary?.onlineRevenue ?? 0}`} />
      </div>

      <div className="space-y-3">
        {(summary?.tickets || []).map((ticket: any) => (
          <div key={ticket.id} className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{ticket.busNumber}</span>
              </div>
              <span className="text-xs text-slate-400">
                {new Date(ticket.issuedAt).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <div className="text-sm text-slate-300">
              {ticket.boardingStop} → {ticket.destinationStop}
            </div>
            <div className="text-sm text-slate-400 mt-1">
              ₹{ticket.fare} • {ticket.paymentMethod}
            </div>
          </div>
        ))}

        {summary && summary.tickets?.length === 0 && (
          <div className="text-slate-400 text-sm">No tickets issued today.</div>
        )}
      </div>
    </div>
  );
}
