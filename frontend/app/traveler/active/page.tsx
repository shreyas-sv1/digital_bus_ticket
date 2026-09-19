'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { ArrowLeft, Bus, MapPin, Clock } from 'lucide-react';

export default function ActiveSessionPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    const stored = localStorage.getItem('activeSession');
    if (!stored) return;
    setSession(JSON.parse(stored));
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-6">
        <button onClick={() => router.back()} className="text-white mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl font-bold">Active Session</h1>
        <p className="text-blue-200 text-sm">Current trip details</p>
      </div>

      <div className="px-6 py-6 max-w-md mx-auto">
        {!session && (
          <div className="text-center text-gray-500 py-12">
            No active session. Start a new journey to see details here.
          </div>
        )}

        {session && (
          <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-gray-800">
              <Bus className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">{session.session.bus?.busNumber}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>{session.session.boardingStop}</span>
              <span className="text-gray-300">→</span>
              <MapPin className="w-4 h-4 text-red-500" />
              <span>{session.session.destinationStop}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>
                Expires at{' '}
                {new Date(session.session.qrExpiresAt).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
