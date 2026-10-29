'use client';
import Sidebar from '@/components/admin/Sidebar';
import { useRequireRole } from '@/lib/use-require-role';
export default function AdminLayout({ children }) {
    const { isAuthorized } = useRequireRole('ADMIN');
    if (!isAuthorized) {
        return <div className="min-h-screen bg-slate-100"/>;
    }
    return (<div className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>);
}
