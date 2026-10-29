'use client';

import { useRequireRole } from '@/lib/use-require-role';

export default function ConductorLayout({ children }) {
    const { isAuthorized } = useRequireRole('CONDUCTOR');

    if (!isAuthorized) {
        return <div className="min-h-screen bg-slate-950" />;
    }

    return children;
}
