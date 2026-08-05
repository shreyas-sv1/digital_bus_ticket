'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { TrendingUp, BarChart2, ShieldAlert } from 'lucide-react';

interface DayData {
  date: string;
  totalRevenue: number;
  cashRevenue: number;
  onlineRevenue: number;
  ticketCount: number;
  invalidScans: number;
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });

export default function AdminAnalyticsPage() {
  const [days, setDays] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin/analytics')
      .then((res) => setDays(res.data.days ?? []))
      .catch(() => setError('Failed to load analytics data.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 rounded-2xl bg-white border border-slate-200 animate-pulse" />
          ))}
        </div>
        <div className="h-64 rounded-2xl bg-white border border-slate-200 animate-pulse" />
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Analytics</h1>
        <p className="text-rose-600">{error}</p>
      </section>
    );
  }

  const totalRevenue7d = days.reduce((s, d) => s + d.totalRevenue, 0);
  const totalTickets7d = days.reduce((s, d) => s + d.ticketCount, 0);
  const totalFraud7d   = days.reduce((s, d) => s + d.invalidScans, 0);

  const chartData = days.map((d) => ({ ...d, date: fmt(d.date) }));

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="text-sm text-slate-500">Last 7 days of operations</p>
      </header>

      {/* KPI summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white border border-slate-200 p-5 flex items-center gap-4">
          <div className="rounded-xl bg-emerald-100 p-3">
            <TrendingUp className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Revenue (7d)</p>
            <p className="text-2xl font-bold text-slate-900">₹{totalRevenue7d.toFixed(0)}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-5 flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <BarChart2 className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Tickets (7d)</p>
            <p className="text-2xl font-bold text-slate-900">{totalTickets7d}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-5 flex items-center gap-4">
          <div className="rounded-xl bg-rose-100 p-3">
            <ShieldAlert className="w-5 h-5 text-rose-700" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Invalid scans (7d)</p>
            <p className="text-2xl font-bold text-slate-900">{totalFraud7d}</p>
          </div>
        </div>
      </div>

      {/* Revenue trend line chart */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <h2 className="font-semibold text-slate-800 mb-4">Daily Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(v) => `₹${v}`} />
            <Tooltip formatter={(v: any) => [typeof v === 'number' ? `₹${v.toFixed(2)}` : '', '']} />
            <Legend />
            <Line type="monotone" dataKey="totalRevenue" name="Total" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="cashRevenue" name="Cash" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="onlineRevenue" name="Online" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Ticket count & fraud bar chart */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <h2 className="font-semibold text-slate-800 mb-4">Daily Tickets &amp; Invalid Scans</h2>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="ticketCount" name="Tickets" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="invalidScans" name="Invalid Scans" fill="#f43f5e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
