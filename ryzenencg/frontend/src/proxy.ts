import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 💥 THE FIX: Beddelna 'export function middleware' b 'export default function proxy'
export default function proxy(request: NextRequest) {
  // K-n-choufou wach l-User bgha y-dkhel l-chi page f /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Ila bgha y-dkhel l-Login, khllih y-dkhel
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // K-n-9ellbou 3la l-Cookie d l-Admin
    const token = request.cookies.get('admin_token');

    // Ila ma-3ndouch l-Cookie, n-reddouh l-Login b l-force!
    if (!token || token.value !== 'ryzen_secured_protocol') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// K-n-goulou l-Proxy y-t-applika ghir 3la /admin/*
export const config = {
  matcher: '/admin/:path*',
};