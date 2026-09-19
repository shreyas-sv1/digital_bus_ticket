'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Bus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.phone || !form.password)
      return setError('Please fill all fields');
    if (form.password.length < 6) return setError('Password must be at least 6 characters');

    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/register', form);
      login(res.data.token, res.data.user);
      router.push('/traveler');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
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

      <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
      <p className="text-blue-200 mb-8">Start travelling smarter today</p>

      <div className="space-y-4">
        {[
          { key: 'name', label: 'Full Name', placeholder: 'Shreyas SV', type: 'text' },
          { key: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email' },
          { key: 'phone', label: 'Phone Number', placeholder: '9999999999', type: 'tel' },
          { key: 'password', label: 'Password', placeholder: '••••••••', type: 'password' },
        ].map(({ key, label, placeholder, type }) => (
          <div key={key}>
            <label className="text-blue-200 text-sm mb-1 block">{label}</label>
            <input
              type={type}
              value={form[key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              placeholder={placeholder}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-2xl px-4 py-4 focus:outline-none focus:border-white"
            />
          </div>
        ))}

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 text-red-200 rounded-xl px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-white text-blue-900 font-bold py-4 rounded-2xl text-lg hover:bg-blue-50 transition disabled:opacity-50 mt-4"
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </div>

      <p className="text-center text-blue-200 mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-white font-semibold underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
