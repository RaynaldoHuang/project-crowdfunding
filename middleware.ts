import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/auth";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {    
    try {
        const valid = await decrypt(cookies().get('session')?.value)

        if (req.nextUrl.pathname.includes('admin') && cookies().get('role')?.value != 'ADMIN') {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }

        if (cookies().get('session')?.value != null && req.nextUrl.pathname.includes('login')) {
            console.log('login page')
            return NextResponse.redirect(new URL('/dashboard/admin', req.url))
        }

        return NextResponse.next()
    } catch (e) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['/dashboard/:path*']
    //  '/api/campaign', '/api/campaign-detail', '/api/login', '/api/member', '/api/member-detail', '/api/register'
}