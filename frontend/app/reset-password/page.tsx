'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import api from '@/lib/api';

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = searchParams.get('token');
    if (t) setToken(t);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await api.post('/auth/reset-password', { token, newPassword });
      setDone(true);
      setTimeout(() => router.push('/login'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid or expired token. Please request a new link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
        <Link href="/login" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to login
        </Link>

        {done ? (
          <div className="text-center">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h1 className="text-xl font-bold text-gray-900 mb-2">Password updated!</h1>
            <p className="text-gray-500 text-sm">Redirecting you to login…</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-700" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Set new password</h1>
              <p className="text-gray-500 text-sm mt-1">Must be at least 6 characters.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Token input — pre-filled from URL but editable */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reset token</label>
                <input
                  id="reset-token"
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Paste token from email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-mono text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
                <input
                  id="new-password"
                  type="password"
                  required
                  minLength={6}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white font-bold py-3 rounded-xl hover:bg-blue-900 transition disabled:opacity-50"
              >
                {loading ? 'Updating…' : 'Update password'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900" />}>
      <ResetPasswordForm />
    </Suspense>
  );
}
