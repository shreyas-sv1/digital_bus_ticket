'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { homeForRole } from '@/lib/roles';

export function useRequireRole(role) {
    const router = useRouter();
    const { user, isLoading } = useAuth();
    const isAuthorized = !isLoading && Boolean(user) && (!role || user.role === role);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (!user) {
            router.replace('/login');
        } else if (role && user.role !== role) {
            router.replace(homeForRole(user.role));
        }
    }, [isLoading, role, router, user]);

    return { user, isLoading, isAuthorized };
}
