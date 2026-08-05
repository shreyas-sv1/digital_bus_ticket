'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useEffect } from 'react';
import { Bus, Shield, QrCode, Zap } from 'lucide-react';

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === 'TRAVELER') router.push('/traveler');
      else if (user.role === 'CONDUCTOR') router.push('/conductor');
      else if (user.role === 'SUPERVISOR') router.push('/supervisor');
      else if (user.role === 'ADMIN') router.push('/admin');
    }
  }, [user, isLoading, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Bus className="text-white w-7 h-7" />
          <span className="text-white font-bold text-xl">BMTC SmartTicket</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-sm w-full">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bus className="text-blue-800 w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Travel Smart,
            <br />
            Travel Digital
          </h1>
          <p className="text-blue-200 mb-8 text-sm">
            No more paper tickets. Book your BMTC ticket instantly on your phone.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: QrCode, label: 'QR Ticket' },
              { icon: Zap, label: 'Instant' },
              { icon: Shield, label: 'Secure' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white/10 rounded-xl p-3 flex flex-col items-center gap-1">
                <Icon className="text-white w-5 h-5" />
                <span className="text-white text-xs">{label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push('/register')}
            className="w-full bg-white text-blue-900 font-bold py-4 rounded-2xl text-lg mb-3 hover:bg-blue-50 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => router.push('/login')}
            className="w-full border-2 border-white/40 text-white font-semibold py-4 rounded-2xl hover:bg-white/10 transition"
          >
            Sign In
          </button>
        </div>
      </div>

      <p className="text-center text-blue-300 text-xs py-4">
        Bangalore Metropolitan Transport Corporation
      </p>
    </div>
  );
}
