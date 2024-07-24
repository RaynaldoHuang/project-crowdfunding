import { hashPassword } from "@/auth";
import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const checkAccount = await prisma.account.findUnique({
        where: {
            username: data.username
        }
    })

    if (checkAccount != null) {
        return NextResponse.json({ success: false, message: 'Username ini sudah terdaftar. Silahkan cari username yang lain.' }, { status: 403 })
    }

    const createAccount = await prisma.account.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashPassword(data.password),
        },
    })

    const createProfile = await prisma.profile.create({
        data: {
            accountUsername: data.username,
        }
    })

    return NextResponse.json({ success: true, message: 'New account created successfully. Please sign in with your newly created account to continue.' }, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ success: true, message: 'Unauthorized request' }, { status: 403 })
}