import { parse } from "cookie";
import { NextResponse } from "next/server";

export function middleware(req) {
  const cookies = parse(req.headers.get('cookie') || '');
  const authToken = cookies.auth_token;

  if (!authToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const session = JSON.parse(authToken);
  
  // Example: Protecting the `/admin` route (only admin can access)
  if (req.url.includes('/admin') && session.role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/*', '/recruiter/*', '/student/*'],  // Adjust based on your app structure
};
