'use client';

import { useEffect, useMemo, useState } from 'react';
import api from '@/lib/api';
import DataTable, { ColumnDef } from '@/components/admin/DataTable';
import SlidePanel from '@/components/admin/SlidePanel';
import Toast, { ToastState } from '@/components/admin/Toast';

interface BusRow {
  id: string;
  busNumber: string;
  isActive: boolean;
  route: { id: string; routeName: string };
  conductor: { id: string; name: string } | null;
}

interface RouteOption {
  id: string;
  routeName: string;
}

interface ConductorOption {
  id: string;
  name: string;
  email: string;
}

export default function AdminBusesPage() {
  const [rows, setRows] = useState<BusRow[]>([]);
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [conductors, setConductors] = useState<ConductorOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [form, setForm] = useState({ busNumber: '', routeId: '' });

  const fetchData = async () => {
    const [busesRes, routesRes, conductorsRes] = await Promise.all([
      api.get('/admin/buses'),
      api.get('/routes'),
      api.get('/admin/conductors'),
    ]);
    setRows(busesRes.data);
    setRoutes(routesRes.data);
    setConductors(conductorsRes.data);
  };

  useEffect(() => {
    fetchData()
      .catch(() => setToast({ type: 'error', message: 'Failed to load buses.' }))
      .finally(() => setLoading(false));
  }, []);

  const availableConductors = useMemo(() => {
    return conductors.filter((conductor) => !rows.some((bus) => bus.conductor?.id === conductor.id));
  }, [conductors, rows]);

  const createBus = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/buses', form);
      setToast({ type: 'success', message: 'Bus added successfully.' });
      setPanelOpen(false);
      setForm({ busNumber: '', routeId: '' });
      await fetchData();
    } catch {
      setToast({ type: 'error', message: 'Failed to add bus.' });
    }
  };

  const assignConductor = async (busId: string, conductorId: string) => {
    try {
      await api.patch(`/buses/${busId}/assign-conductor`, { conductorId });
      setToast({ type: 'success', message: 'Conductor assigned.' });
      await fetchData();
    } catch {
      setToast({ type: 'error', message: 'Could not assign conductor.' });
    }
  };

  const toggleStatus = async (busId: string) => {
    if (!window.confirm('Toggle active status for this bus?')) return;
    try {
      await api.patch(`/buses/${busId}/toggle-status`);
      setToast({ type: 'success', message: 'Bus status updated.' });
      await fetchData();
    } catch {
      setToast({ type: 'error', message: 'Could not update status.' });
    }
  };

  const columns: ColumnDef<BusRow>[] = [
    { key: 'busNumber', header: 'Bus Number', sortable: true },
    {
      key: 'route',
      header: 'Route',
      sortable: true,
      render: (row) => row.route?.routeName || '-',
    },
    {
      key: 'conductor',
      header: 'Conductor',
      render: (row) =>
        row.conductor ? (
          <span className="font-medium text-slate-700">{row.conductor.name}</span>
        ) : (
          <span className="rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">No conductor</span>
        ),
    },
    {
      key: 'isActive',
      header: 'Status',
      sortable: true,
      render: (row) => (
        <button
          type="button"
          onClick={() => toggleStatus(row.id)}
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            row.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'
          }`}
        >
          {row.isActive ? 'Active' : 'Inactive'}
        </button>
      ),
    },
    {
      key: 'id',
      header: 'Assign Conductor',
      render: (row) => (
        <select
          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs"
          value={row.conductor?.id || ''}
          onChange={(event) => {
            const value = event.target.value;
            if (value) assignConductor(row.id, value);
          }}
        >
          <option value="">Select conductor</option>
          {availableConductors.concat(row.conductor ? [{ ...row.conductor, email: '' }] : []).map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Buses</h1>
        <button
          onClick={() => setPanelOpen(true)}
          className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
        >
          Add Bus
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600">Loading buses...</div>
      ) : (
        <DataTable columns={columns} rows={rows} rowKey={(row) => row.id} />
      )}

      <SlidePanel open={panelOpen} title="Add New Bus" onClose={() => setPanelOpen(false)}>
        <form className="space-y-4" onSubmit={createBus}>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Bus Number</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.busNumber}
              onChange={(event) => setForm((prev) => ({ ...prev, busNumber: event.target.value }))}
              required
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Route</span>
            <select
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.routeId}
              onChange={(event) => setForm((prev) => ({ ...prev, routeId: event.target.value }))}
              required
            >
              <option value="">Select route</option>
              {routes.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.routeName}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
            Save Bus
          </button>
        </form>
      </SlidePanel>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
