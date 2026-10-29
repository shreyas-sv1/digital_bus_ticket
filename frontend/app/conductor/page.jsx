'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import api from '@/lib/api';
import { Bus, QrCode, BarChart2, LogOut, User } from 'lucide-react';

export default function ConductorHomePage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [assignedBus, setAssignedBus] = useState(null);

    const loadAssignedBus = useCallback(async () => {
        const cached = localStorage.getItem('conductorBus');
        if (cached) {
            setAssignedBus(JSON.parse(cached));
            return;
        }
        try {
            const res = await api.get('/buses');
            const assigned = res.data.find((b) => b.conductor?.id === user?.id);
            if (assigned) {
                setAssignedBus(assigned);
                localStorage.setItem('conductorBus', JSON.stringify(assigned));
            }
        } catch { }
    }, [user?.id]);

    useEffect(() => {
        loadAssignedBus();
    }, [loadAssignedBus]);

    const handleLogout = () => {
        localStorage.removeItem('conductorBus');
        logout();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-10 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">Conductor</p>
                        <p className="font-bold text-white">{user?.name || 'Loading...'}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-white transition p-2"
                    aria-label="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>

            {/* Assigned Bus Banner */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Bus className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                    <p className="text-xs text-slate-400 mb-0.5">Assigned Bus</p>
                    {assignedBus ? (
                        <>
                            <p className="font-bold text-white">{assignedBus.busNumber}</p>
                            <p className="text-xs text-slate-400">{assignedBus.routeName || 'Route not set'}</p>
                        </>
                    ) : (
                        <p className="text-slate-400 text-sm">No bus assigned</p>
                    )}
                </div>
            </div>

            {/* Action Cards */}
            <h2 className="text-xs text-slate-400 uppercase tracking-widest mb-4">Actions</h2>
            <div className="grid grid-cols-1 gap-4 flex-1">
                {/* Scan QR */}
                <button
                    onClick={() => router.push('/conductor/scan')}
                    className="bg-emerald-600 hover:bg-emerald-500 transition rounded-2xl px-6 py-6 flex items-center gap-5 text-left w-full"
                >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <QrCode className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">Scan Traveler QR</p>
                        <p className="text-emerald-100 text-sm mt-0.5">Verify and issue tickets</p>
                    </div>
                </button>

                {/* Daily Summary */}
                <button
                    onClick={() => router.push('/conductor/summary')}
                    className="bg-slate-800 hover:bg-slate-700 transition rounded-2xl px-6 py-6 flex items-center gap-5 text-left w-full border border-slate-700"
                >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <BarChart2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">Daily Summary</p>
                        <p className="text-slate-400 text-sm mt-0.5">Today's tickets & revenue</p>
                    </div>
                </button>
            </div>
        </div>
    );
}
