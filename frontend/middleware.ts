import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Lightweight JWT expiry check that runs at the edge.
 * We only decode — NOT verify the signature — because the secret is not
 * available in the edge runtime.  The real signature check happens on
 * every protected API call via passport-jwt on the backend.
 * This is still a meaningful improvement: expired tokens and clearly
 * malformed ones redirect the user to /login immediately instead of
 * letting them land on a protected page and then getting a 401.
 */
function isTokenExpiredOrMalformed(token: string): boolean {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return true;
    const payload = JSON.parse(
      Buffer.from(parts[1], 'base64url').toString('utf-8'),
    );
    if (!payload.exp) return true;
    // exp is in seconds
    return Date.now() / 1000 > payload.exp;
  } catch {
    return true;
  }
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const publicPaths = ['/', '/login', '/register'];
  if (publicPaths.includes(pathname)) return NextResponse.next();

  if (!token || isTokenExpiredOrMalformed(token)) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    // Clear stale cookies so the client doesn't hold a dead session
    response.cookies.delete('token');
    response.cookies.delete('user');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/traveler/:path*', '/conductor/:path*', '/supervisor/:path*', '/admin/:path*'],
};
