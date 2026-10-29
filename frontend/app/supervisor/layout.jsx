'use client';

import { useRequireRole } from '@/lib/use-require-role';

export default function SupervisorLayout({ children }) {
    const { isAuthorized } = useRequireRole('SUPERVISOR');

    if (!isAuthorized) {
        return <div className="min-h-screen bg-gray-50" />;
    }

    return children;
}
