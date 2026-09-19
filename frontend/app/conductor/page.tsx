'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import SummaryCard from '@/components/conductor/SummaryCard';
import { QrCode, Bus, Wallet, Ticket } from 'lucide-react';

export default function ConductorHome() {
  const { user } = useAuth();
  const router = useRouter();
  const [summary, setSummary] = useState<any>(null);
  const [busInfo, setBusInfo] = useState<any>(null);

  useEffect(() => {
    if (!user || user.role !== 'CONDUCTOR') {
      router.push('/login');
      return;
    }
    fetchSummary();
    fetchBusInfo();
  }, [user, router]);

  const fetchSummary = async () => {
    try {
      const res = await api.get('/tickets/conductor/summary');
      setSummary(res.data);
    } catch {}
  };

  const fetchBusInfo = async () => {
    try {
      const res = await api.get('/buses');
      const assigned = res.data.find((b: any) => b.conductor?.id === user?.id);
      setBusInfo(assigned || null);
      if (assigned) {
        localStorage.setItem('conductorBus', JSON.stringify(assigned));
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <Bus className="w-6 h-6 text-emerald-400" />
          <div>
            <p className="text-slate-400 text-xs">Assigned Bus</p>
            <p className="text-lg font-semibold">
              {busInfo ? `${busInfo.busNumber} • ${busInfo.route?.routeName}` : 'Not assigned'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SummaryCard label="Tickets Today" value={summary?.totalTickets ?? 0} />
          <SummaryCard label="Revenue" value={`₹${summary?.totalRevenue ?? 0}`} />
          <SummaryCard label="Cash" value={`₹${summary?.cashRevenue ?? 0}`} />
          <SummaryCard label="Online" value={`₹${summary?.onlineRevenue ?? 0}`} />
        </div>
      </div>

      <div className="px-6 space-y-4">
        <button
          onClick={() => router.push('/conductor/scan')}
          className="w-full bg-emerald-500 text-slate-950 font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <QrCode className="w-6 h-6" />
          Scan Ticket
        </button>

        <button
          onClick={() => router.push('/conductor/summary')}
          className="w-full bg-slate-900 border border-slate-700 text-white font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <Ticket className="w-5 h-5" />
          View Summary
        </button>

        <button
          onClick={() => router.push('/conductor/scan')}
          className="w-full bg-slate-900 border border-slate-700 text-white font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <Wallet className="w-5 h-5" />
          Collect Payment
        </button>
      </div>
    </div>
  );
}
