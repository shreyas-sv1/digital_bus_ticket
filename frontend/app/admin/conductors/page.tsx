'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import DataTable, { ColumnDef } from '@/components/admin/DataTable';
import SlidePanel from '@/components/admin/SlidePanel';
import Toast, { ToastState } from '@/components/admin/Toast';

interface ConductorRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  assignedBus: { id: string; busNumber: string } | null;
}

export default function AdminConductorsPage() {
  const [rows, setRows] = useState<ConductorRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  const load = async () => {
    const res = await api.get('/admin/conductors');
    setRows(res.data);
  };

  useEffect(() => {
    load()
      .catch(() => setToast({ type: 'error', message: 'Failed to load conductors.' }))
      .finally(() => setLoading(false));
  }, []);

  const createConductor = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/admin/conductors', form);
      setToast({ type: 'success', message: 'Conductor account created.' });
      setPanelOpen(false);
      setForm({ name: '', email: '', phone: '', password: '' });
      await load();
    } catch {
      setToast({ type: 'error', message: 'Could not create conductor.' });
    }
  };

  const unassignConductor = async (conductorId: string) => {
    if (!window.confirm('Unassign this conductor from their bus?')) return;
    try {
      await api.patch(`/admin/conductors/${conductorId}/unassign`);
      setToast({ type: 'success', message: 'Conductor unassigned.' });
      await load();
    } catch {
      setToast({ type: 'error', message: 'Could not unassign conductor.' });
    }
  };

  const columns: ColumnDef<ConductorRow>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'phone', header: 'Phone', sortable: true },
    {
      key: 'assignedBus',
      header: 'Assigned Bus',
      render: (row) => row.assignedBus?.busNumber || 'Unassigned',
    },
    {
      key: 'id',
      header: 'Actions',
      render: (row) =>
        row.assignedBus ? (
          <button
            type="button"
            onClick={() => unassignConductor(row.id)}
            className="rounded-lg border border-rose-200 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-50"
          >
            Unassign
          </button>
        ) : (
          <span className="text-xs text-slate-400">-</span>
        ),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Conductors</h1>
        <button
          onClick={() => setPanelOpen(true)}
          className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
        >
          Add Conductor
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600">Loading conductors...</div>
      ) : (
        <DataTable columns={columns} rows={rows} rowKey={(row) => row.id} />
      )}

      <SlidePanel open={panelOpen} title="Create Conductor Account" onClose={() => setPanelOpen(false)}>
        <form className="space-y-4" onSubmit={createConductor}>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Phone</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.phone}
              onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              required
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Temporary Password</span>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.password}
              onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
              required
            />
          </label>

          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
            Create Account
          </button>
        </form>
      </SlidePanel>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
