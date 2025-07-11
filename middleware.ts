import { NextResponse, NextRequest } from "next/server";



export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 'none'
  
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const protectRoutes = [
    '/admin',
    '/admin/order',
    '/admin/sign-up',
    '/admin/refund',
  ].includes(request.nextUrl.pathname);

  if(protectRoutes && token === 'none'){
    const signInUrl = new URL('/admin/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }
    return NextResponse.next();
 
}