'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import DataTable, { ColumnDef } from '@/components/admin/DataTable';
import SlidePanel from '@/components/admin/SlidePanel';
import Toast, { ToastState } from '@/components/admin/Toast';
import { UserPlus, Trash2 } from 'lucide-react';

type StaffRole = 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN';

interface StaffRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: StaffRole;
  createdAt: string;
}

const ROLE_BADGES: Record<StaffRole, string> = {
  CONDUCTOR: 'bg-blue-100 text-blue-800',
  SUPERVISOR: 'bg-violet-100 text-violet-800',
  ADMIN: 'bg-rose-100 text-rose-800',
};

export default function AdminStaffPage() {
  const [rows, setRows] = useState<StaffRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [filterRole, setFilterRole] = useState<StaffRole | ''>('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', role: 'SUPERVISOR' as StaffRole });

  const load = async () => {
    const query = filterRole ? `?role=${filterRole}` : '';
    const res = await api.get(`/admin/staff${query}`);
    setRows(res.data);
  };

  useEffect(() => {
    load()
      .catch(() => setToast({ type: 'error', message: 'Failed to load staff.' }))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterRole]);

  const createStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`/admin/staff?role=${form.role}`, form);
      setToast({ type: 'success', message: `${form.role} account created.` });
      setPanelOpen(false);
      setForm({ name: '', email: '', phone: '', password: '', role: 'SUPERVISOR' });
      await load();
    } catch (err: any) {
      setToast({ type: 'error', message: err.response?.data?.message || 'Could not create account.' });
    }
  };

  const deleteStaff = async (id: string, name: string) => {
    if (!window.confirm(`Delete ${name}? This cannot be undone.`)) return;
    try {
      await api.delete(`/admin/staff/${id}`);
      setToast({ type: 'success', message: 'Account deleted.' });
      await load();
    } catch {
      setToast({ type: 'error', message: 'Could not delete account.' });
    }
  };

  const columns: ColumnDef<StaffRow>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'phone', header: 'Phone' },
    {
      key: 'role',
      header: 'Role',
      render: (row) => (
        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${ROLE_BADGES[row.role]}`}>
          {row.role}
        </span>
      ),
    },
    {
      key: 'createdAt',
      header: 'Created',
      render: (row) => new Date(row.createdAt).toLocaleDateString('en-IN'),
    },
    {
      key: 'id',
      header: 'Actions',
      render: (row) => (
        <button
          type="button"
          onClick={() => deleteStaff(row.id, row.name)}
          className="flex items-center gap-1 rounded-lg border border-rose-200 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-50"
        >
          <Trash2 className="w-3 h-3" /> Delete
        </button>
      ),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
          <p className="text-sm text-slate-500">Conductors, supervisors, and admins</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as StaffRole | '')}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
          >
            <option value="">All roles</option>
            <option value="CONDUCTOR">Conductors</option>
            <option value="SUPERVISOR">Supervisors</option>
            <option value="ADMIN">Admins</option>
          </select>
          <button
            onClick={() => setPanelOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
          >
            <UserPlus className="w-4 h-4" /> Add Staff
          </button>
        </div>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 animate-pulse h-24" />
      ) : (
        <DataTable columns={columns} rows={rows} rowKey={(row) => row.id} />
      )}

      <SlidePanel open={panelOpen} title="Create Staff Account" onClose={() => setPanelOpen(false)}>
        <form className="space-y-4" onSubmit={createStaff}>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Role</span>
            <select
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.role}
              onChange={(e) => setForm((p) => ({ ...p, role: e.target.value as StaffRole }))}
            >
              <option value="CONDUCTOR">Conductor</option>
              <option value="SUPERVISOR">Supervisor</option>
              <option value="ADMIN">Admin</option>
            </select>
          </label>
          {(['name', 'email', 'phone'] as const).map((field) => (
            <label key={field} className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 capitalize">{field}</span>
              <input
                type={field === 'email' ? 'email' : 'text'}
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
                value={form[field]}
                onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                required
              />
            </label>
          ))}
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Temporary Password</span>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={form.password}
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              minLength={6}
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
