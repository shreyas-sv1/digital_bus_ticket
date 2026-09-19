'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import api from '@/lib/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetToken, setResetToken] = useState('');   // dev-mode only
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/forgot-password', { email });
      setDone(true);
      // In dev mode the backend returns the token so you can test immediately
      if (res.data.resetToken) setResetToken(res.data.resetToken);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
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
            <h1 className="text-xl font-bold text-gray-900 mb-2">Check your email</h1>
            <p className="text-gray-500 text-sm mb-6">
              If that address is registered you&apos;ll receive a reset link shortly.
            </p>
            {resetToken && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left mb-4">
                <p className="text-xs font-semibold text-amber-700 mb-1">Dev mode — reset token:</p>
                <p className="text-xs font-mono break-all text-amber-900">{resetToken}</p>
                <Link
                  href={`/reset-password?token=${resetToken}`}
                  className="mt-3 block text-center text-sm font-semibold text-blue-700 hover:underline"
                >
                  Click here to reset password →
                </Link>
              </div>
            )}
            <Link href="/login" className="text-sm text-blue-700 font-semibold hover:underline">
              Return to login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Forgot password?</h1>
              <p className="text-gray-500 text-sm mt-1">
                Enter your email and we&apos;ll send you a reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  id="forgot-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white font-bold py-3 rounded-xl hover:bg-blue-900 transition disabled:opacity-50"
              >
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
