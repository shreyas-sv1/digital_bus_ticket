'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import Cookies from 'js-cookie';
import { User, Lock, Phone, Save, ArrowLeft } from 'lucide-react';
import Toast, { ToastState } from '@/components/admin/Toast';
import Link from 'next/link';

interface ProfileData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

export default function ProfilePage() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const backHref = user?.role === 'ADMIN' ? '/admin' :
    user?.role === 'CONDUCTOR' ? '/conductor' :
    user?.role === 'SUPERVISOR' ? '/supervisor' : '/traveler';

  useEffect(() => {
    if (!user) { router.push('/login'); return; }
    api.get('/auth/me')
      .then((res) => {
        setProfile(res.data);
        setName(res.data.name);
        setPhone(res.data.phone);
      })
      .catch(() => setToast({ type: 'error', message: 'Could not load profile.' }))
      .finally(() => setLoading(false));
  }, [user, router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      setToast({ type: 'error', message: 'New passwords do not match.' });
      return;
    }
    setSaving(true);
    try {
      const body: Record<string, string> = {};
      if (name !== profile?.name) body.name = name;
      if (phone !== profile?.phone) body.phone = phone;
      if (newPassword) { body.currentPassword = currentPassword; body.newPassword = newPassword; }

      if (Object.keys(body).length === 0) {
        setToast({ type: 'error', message: 'Nothing to update.' });
        setSaving(false);
        return;
      }

      const res = await api.patch('/auth/me', body);
      // Update stored token so JWT reflects name changes
      Cookies.set('token', res.data.token, { expires: 1, sameSite: 'strict' });
      login(res.data.token, res.data.user);
      setProfile((prev) => prev ? { ...prev, ...res.data.user } : prev);
      setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
      setToast({ type: 'success', message: 'Profile updated successfully.' });
    } catch (err: any) {
      setToast({ type: 'error', message: err.response?.data?.message || 'Update failed.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="space-y-3 w-full max-w-md px-6 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-2xl" />
          <div className="h-48 bg-white rounded-2xl shadow-sm" />
          <div className="h-48 bg-white rounded-2xl shadow-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-8">
        <Link href={backHref} className="flex items-center gap-2 text-blue-200 mb-4 hover:text-white">
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>
        <h1 className="text-white text-2xl font-bold">Account Settings</h1>
        <p className="text-blue-200 text-sm mt-1">{profile?.email} · {profile?.role}</p>
      </div>

      <div className="px-6 py-6 max-w-md mx-auto space-y-4">
        <form onSubmit={handleSave} className="space-y-4">
          {/* Personal info */}
          <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" /> Personal Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full name</label>
              <input
                id="profile-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="profile-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                value={profile?.email ?? ''}
                disabled
                className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
            </div>
          </div>

          {/* Change password */}
          <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" /> Change Password
            </h2>
            <p className="text-xs text-gray-400">Leave blank to keep your current password.</p>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Current password</label>
              <input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">New password</label>
              <input
                id="new-password"
                type="password"
                minLength={6}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Confirm new password</label>
              <input
                id="confirm-new-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-blue-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-900 transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </form>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
