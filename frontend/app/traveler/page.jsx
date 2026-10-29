'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Bus, QrCode, Search, Clock, User, LogOut, ChevronRight } from 'lucide-react';

const actions = [
    { href: '/traveler/qr', label: 'Scan Bus QR', desc: 'Board a bus and get your ticket', icon: QrCode },
    { href: '/traveler/search', label: 'Find Route or Stop', desc: 'Search destinations and routes', icon: Search },
    { href: '/traveler/active', label: 'Active Trip', desc: 'See your current journey', icon: Bus },
    { href: '/traveler/history', label: 'Trip History', desc: 'Your past tickets', icon: Clock },
    { href: '/profile', label: 'Profile', desc: 'Account details', icon: User },
];

export default function TravelerHomePage() {
    const { user, logout, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;
        if (!user || user.role !== 'TRAVELER') router.replace('/login');
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return (<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"/>
        </div>);
    }

    return (<div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm">Welcome</p>
            <h1 className="text-white text-2xl font-bold">{user.name}</h1>
          </div>
          <button onClick={() => { logout(); router.push('/login'); }} className="text-blue-100 hover:text-white p-2" aria-label="Logout">
            <LogOut className="w-5 h-5"/>
          </button>
        </div>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-3">
        {actions.map(({ href, label, desc, icon: Icon }) => (<Link key={href} href={href} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-700"/>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300"/>
          </Link>))}
      </div>
    </div>);
}
