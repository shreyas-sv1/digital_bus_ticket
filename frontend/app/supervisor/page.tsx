'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { QrCode, ClipboardList, LogOut } from 'lucide-react';
import { StatBadge } from '@/components/supervisor/StatBadge';
import { useAuth } from '@/lib/auth-context';

interface SupervisorStats {
  totalScanned: number;
  valid: number;
  invalid: number;
  alreadyChecked: number;
  fraudRate: number;
}

export default function SupervisorDashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState<SupervisorStats | null>(null);

  useEffect(() => {
    // Fetch stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/verification/stats', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats');
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex justify-between items-center mb-8 bg-black text-white p-6 rounded-2xl shadow-lg mt-4">
        <div>
          <h1 className="text-2xl font-bold">Hello, {user?.name || 'Supervisor'}</h1>
          <p className="text-gray-300">Shift started at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <button onClick={logout} className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition">
          <LogOut className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <StatBadge label="Total Scanned" count={stats?.totalScanned || 0} colorClass="border-blue-500" />
        <StatBadge 
          label="Fraud Rate" 
          count={`${stats?.fraudRate || 0}%`} 
          colorClass="border-red-500" 
          isAlert={(stats?.fraudRate || 0) > 5} 
        />
        <StatBadge label="Valid" count={stats?.valid || 0} colorClass="border-green-500" />
        <StatBadge label="Invalid / Checked" count={(stats?.invalid || 0) + (stats?.alreadyChecked || 0)} colorClass="border-amber-500" />
      </div>

      <div className="mt-auto space-y-4">
        <Link href="/supervisor/scan" className="w-full flex items-center justify-center gap-3 bg-green-600 text-white font-bold text-xl py-5 rounded-2xl shadow-xl hover:bg-green-700 transition-colors uppercase">
          <QrCode className="w-6 h-6" />
          Scan Ticket
        </Link>
        <Link href="/supervisor/history" className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white font-semibold text-lg py-4 rounded-xl shadow-md hover:bg-gray-900 transition-colors uppercase">
          <ClipboardList className="w-5 h-5" />
          View History
        </Link>
      </div>
    </div>
  );
}
