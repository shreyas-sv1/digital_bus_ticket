'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BarChart3, Bus, Route, Users, ShieldAlert, LogOut, Ticket } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/buses', label: 'Buses', icon: Bus },
  { href: '/admin/routes', label: 'Routes', icon: Route },
  { href: '/admin/conductors', label: 'Conductors', icon: Users },
  { href: '/admin/fraud', label: 'Fraud Report', icon: ShieldAlert },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const onLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <aside className="w-full md:w-72 md:h-screen md:sticky md:top-0 bg-slate-900 text-slate-100 flex md:flex-col border-r border-slate-800">
      <div className="hidden md:flex items-center gap-3 px-6 py-6 border-b border-slate-800">
        <div className="h-10 w-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center">
          <Ticket className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold leading-tight">BMTC SmartTicket</p>
          <p className="text-xs text-slate-400">Admin Console</p>
        </div>
      </div>

      <nav className="flex-1 flex md:flex-col gap-1 p-2 md:p-4 overflow-x-auto md:overflow-visible">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-200 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block p-4 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
