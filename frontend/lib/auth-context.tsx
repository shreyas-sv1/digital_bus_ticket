'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'TRAVELER' | 'CONDUCTOR' | 'SUPERVISOR' | 'ADMIN';
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

/** Parse the JWT payload without verifying the signature (client-side only). */
function parseJwtPayload(token: string): Record<string, any> | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    return JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = Cookies.get('token');
    // Derive user identity from the JWT payload instead of a plain cookie.
    // This removes the JS-readable 'user' cookie that leaked role/email/ID.
    if (savedToken) {
      const payload = parseJwtPayload(savedToken);
      if (payload?.sub && payload?.role && payload?.name && payload?.email) {
        setToken(savedToken);
        setUser({
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        });
      }
    }
    setIsLoading(false);
  }, []);

  const login = (tokenValue: string, userValue: User) => {
    // sameSite: 'strict' blocks CSRF; token is read only by this JS context
    // and by Next.js middleware — no separate user cookie needed.
    Cookies.set('token', tokenValue, { expires: 1, sameSite: 'strict' });
    setToken(tokenValue);
    setUser(userValue);
  };

  const logout = () => {
    Cookies.remove('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
