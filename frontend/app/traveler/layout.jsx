'use client';

import { useRequireRole } from '@/lib/use-require-role';

export default function TravelerLayout({ children }) {
    const { isAuthorized } = useRequireRole('TRAVELER');

    if (!isAuthorized) {
        return <div className="min-h-screen bg-gray-50" />;
    }

    return children;
}
