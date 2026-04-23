'use client';

import { useEffect, useMemo, useState } from 'react';
import api from '@/lib/api';
import DataTable, { ColumnDef } from '@/components/admin/DataTable';
import Toast, { ToastState } from '@/components/admin/Toast';

interface FraudLog {
  id: string;
  scannedAt: string;
  supervisorName: string;
  ticketId: string;
  traveler?: {
    name?: string;
    phone?: string;
  };
  busNumber?: string;
}

export default function AdminFraudPage() {
  const [rows, setRows] = useState<FraudLog[]>([]);
  const [totalInvalidScans, setTotalInvalidScans] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const load = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (dateRange.startDate) query.set('startDate', dateRange.startDate);
      if (dateRange.endDate) query.set('endDate', dateRange.endDate);
      const res = await api.get(`/admin/fraud${query.toString() ? `?${query.toString()}` : ''}`);
      setRows(res.data.logs || []);
      setTotalInvalidScans(res.data.totalInvalidScans || 0);
    } catch {
      setToast({ type: 'error', message: 'Failed to load fraud report.' });
    } finally {
      setLoading(false);
    }
  };

  const exportCsv = () => {
    const header = ['Date/Time', 'Supervisor', 'Bus Number', 'Traveler Name', 'Traveler Phone', 'Ticket ID'];
    const csvRows = rows.map((row) => [
      new Date(row.scannedAt).toLocaleString(),
      row.supervisorName || '',
      row.busNumber || '',
      row.traveler?.name || '',
      row.traveler?.phone || '',
      row.ticketId || '',
    ]);

    const csvContent = [header, ...csvRows]
      .map((line) => line.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fraud-report-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const highFraudBuses = useMemo(() => {
    const counts: Record<string, number> = {};
    rows.forEach((row) => {
      const key = row.busNumber || 'Unknown';
      counts[key] = (counts[key] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
  }, [rows]);

  const columns: ColumnDef<FraudLog>[] = [
    {
      key: 'scannedAt',
      header: 'Date/Time',
      sortable: true,
      render: (row) => new Date(row.scannedAt).toLocaleString(),
    },
    { key: 'supervisorName', header: 'Supervisor', sortable: true },
    {
      key: 'busNumber',
      header: 'Bus Number',
      sortable: true,
      render: (row) => row.busNumber || '-',
    },
    {
      key: 'traveler',
      header: 'Traveler Name',
      render: (row) => row.traveler?.name || '-',
    },
    {
      key: 'id',
      header: 'Traveler Phone',
      render: (row) => row.traveler?.phone || '-',
    },
    {
      key: 'ticketId',
      header: 'Ticket ID',
      sortable: true,
    },
  ];

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Fraud Report</h1>
        <button
          onClick={exportCsv}
          disabled={rows.length === 0}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Export CSV
        </button>
      </div>

      {totalInvalidScans > 10 ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
          Alert: {totalInvalidScans} invalid scans found for selected period.
        </div>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-600">Start Date</span>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              value={dateRange.startDate}
              onChange={(event) => setDateRange((prev) => ({ ...prev, startDate: event.target.value }))}
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-600">End Date</span>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              value={dateRange.endDate}
              onChange={(event) => setDateRange((prev) => ({ ...prev, endDate: event.target.value }))}
            />
          </label>
          <div className="md:col-span-2 flex items-end gap-2">
            <button onClick={load} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Apply Filter
            </button>
            <button
              onClick={() => {
                setDateRange({ startDate: '', endDate: '' });
                setRows([]);
                setTotalInvalidScans(0);
              }}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {highFraudBuses.length > 0 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <p className="font-semibold text-amber-800">High Fraud Buses</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {highFraudBuses.map(([bus, count]) => (
              <span key={bus} className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">
                {bus}: {count}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600">Loading fraud report...</div>
      ) : (
        <DataTable columns={columns} rows={rows} rowKey={(row) => row.id} />
      )}

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
