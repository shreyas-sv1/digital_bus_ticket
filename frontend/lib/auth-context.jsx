'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
const AuthContext = createContext({});
/** Parse the JWT payload without verifying the signature (client-side only). */
function parseJwtPayload(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3)
            return null;
        return JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    }
    catch {
        return null;
    }
}
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
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
    const login = (tokenValue, userValue) => {
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
    return (<AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>);
}
export const useAuth = () => useContext(AuthContext);
