'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Bus, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) return setError('Please fill all fields');
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/login', { email, password });
      login(res.data.token, res.data.user);
      const role = res.data.user.role;
      if (role === 'TRAVELER') router.push('/traveler');
      else if (role === 'CONDUCTOR') router.push('/conductor');
      else if (role === 'SUPERVISOR') router.push('/supervisor');
      else if (role === 'ADMIN') router.push('/admin');
    } catch (err: any) {
      if (!err.response) {
        setError('Backend server is not reachable. Please start API on port 3001.');
      } else {
        setError(err.response?.data?.message || 'Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col px-6 py-8">
      <Link href="/" className="text-white mb-8">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="flex items-center gap-2 mb-8">
        <Bus className="text-white w-6 h-6" />
        <span className="text-white font-bold text-lg">BMTC SmartTicket</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
      <p className="text-blue-200 mb-8">Sign in to your account</p>

      <div className="space-y-4">
        <div>
          <label className="text-blue-200 text-sm mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-2xl px-4 py-4 focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="text-blue-200 text-sm mb-1 block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-2xl px-4 py-4 pr-12 focus:outline-none focus:border-white"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300"
              type="button"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex justify-end mt-1">
            <Link href="/forgot-password" className="text-blue-300 text-xs hover:text-white">
              Forgot password?
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 text-red-200 rounded-xl px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-white text-blue-900 font-bold py-4 rounded-2xl text-lg hover:bg-blue-50 transition disabled:opacity-50 mt-4"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>

      <p className="text-center text-blue-200 mt-6">
        Don't have an account?{' '}
        <Link href="/register" className="text-white font-semibold underline">
          Register
        </Link>
      </p>
    </div>
  );
}
