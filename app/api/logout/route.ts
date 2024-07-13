import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const cookieList = ['firstName', 'lastName', 'role', 'session', 'user']

    for (let cookie of cookieList) {
        cookies().delete(cookie)
    }

    return NextResponse.json({ success: true }, { status: 200 })
}