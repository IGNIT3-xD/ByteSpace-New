// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get Better Auth session cookie
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  const authRoutes = ["/login", "/signup", "/register"];
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect authenticated users away from auth pages
  if (sessionCookie && isAuthRoute) {
    return NextResponse.redirect(new URL("/courses", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/register"],
};
