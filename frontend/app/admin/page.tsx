'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Banknote, Bus, ShieldAlert, Ticket, Wallet } from 'lucide-react';
import api from '@/lib/api';
import StatCard from '@/components/admin/StatCard';

interface DashboardData {
  tickets: { today: number; allTime: number };
  revenue: { today: number; allTime: number };
  split: {
    cash: { today: number; allTime: number };
    online: { today: number; allTime: number };
  };
  invalidScansToday: number;
  activeBuses: number;
  trends: {
    invalidRateToday: number;
    cashShareToday: number;
    onlineShareToday: number;
  };
}

const navCards = [
  { href: '/admin/buses', title: 'Manage Buses', subtitle: 'Assign conductors and toggle status' },
  { href: '/admin/routes', title: 'Manage Routes', subtitle: 'Stops timeline and fare matrix' },
  { href: '/admin/conductors', title: 'Manage Conductors', subtitle: 'Create accounts and unassign buses' },
  { href: '/admin/fraud', title: 'Fraud Report', subtitle: 'Analyze invalid scans' },
];

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/admin/dashboard');
        setData(res.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const timer = setInterval(fetchData, 30000);
    return () => clearInterval(timer);
  }, []);

  if (loading || !data) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">Loading dashboard...</div>;
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-sm text-slate-600">Live overview for operations and fraud monitoring.</p>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          label="Tickets Today"
          value={String(data.tickets.today)}
          subtitle={`All time: ${data.tickets.allTime}`}
          icon={Ticket}
          trend={{ direction: 'up', value: `Invalid rate ${data.trends.invalidRateToday}%` }}
        />
        <StatCard
          label="Revenue Today"
          value={`Rs ${data.revenue.today.toFixed(2)}`}
          subtitle={`All time: Rs ${data.revenue.allTime.toFixed(2)}`}
          icon={Wallet}
          trend={{ direction: 'up', value: `${data.trends.cashShareToday}% cash share` }}
        />
        <StatCard
          label="Active Buses"
          value={String(data.activeBuses)}
          subtitle="Currently operational"
          icon={Bus}
          trend={{ direction: 'up', value: `${data.trends.onlineShareToday}% online share` }}
        />
        <StatCard
          label="Invalid Scans Today"
          value={String(data.invalidScansToday)}
          subtitle="Supervisor invalid detections"
          icon={ShieldAlert}
          trend={{ direction: data.invalidScansToday > 10 ? 'down' : 'up', value: data.invalidScansToday > 10 ? 'Needs attention' : 'Within range' }}
        />
        <StatCard
          label="Cash Revenue"
          value={`Rs ${data.split.cash.today.toFixed(2)}`}
          subtitle={`All time: Rs ${data.split.cash.allTime.toFixed(2)}`}
          icon={Banknote}
        />
        <StatCard
          label="Online Revenue"
          value={`Rs ${data.split.online.today.toFixed(2)}`}
          subtitle={`All time: Rs ${data.split.online.allTime.toFixed(2)}`}
          icon={Banknote}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {navCards.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-cyan-300 hover:bg-cyan-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-700" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
