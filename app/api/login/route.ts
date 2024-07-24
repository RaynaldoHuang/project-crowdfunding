import { comparePassword, encrypt } from "@/auth";
import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { user } from "@nextui-org/react";

export async function GET(req: NextRequest, res: NextResponse) {
    const user = cookies().get('user')?.value

    try {
        const userExist = await prisma.account.findUnique({
            where: {
                username: user
            },
            select: {
                username: true
            }
        })

        return NextResponse.json({ success: true, message: 'You are logged in' })
    } catch (e) {
        return NextResponse.json({ success: false, message: 'You are not logged in' })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const userExist: any= await prisma.account.findUnique({
        where: {
            username: data.username
        }
    })

    if (userExist == null) {
        return NextResponse.json({ success: false, message: 'Invalid username' }, { status: 403 })
    }

    const passwordVerify = comparePassword(data.password, userExist.password)

    if (!passwordVerify) {
        return NextResponse.json({ success: false, message: 'Invalid password.' }, { status: 403 })
    }

    const token: any = await encrypt({ username: data.username })

    let date = new Date()

    const profileName = await prisma.profile.findMany({
        where: {
            accountUsername: data.username
        },
        select: {
            firstName: true,
            lastName: true
        }
    })

    let expiryTime = date.getTime() + 1*2*60*60*1000

    cookies().set('session', token, { expires: expiryTime })
    cookies().set('user', data.username, { expires: expiryTime })
    cookies().set('role', userExist.role, { expires: expiryTime })
    cookies().set('firstName', profileName[0].firstName, { expires: expiryTime })
    cookies().set('lastName', profileName[0].lastName, { expires: expiryTime })

    return NextResponse.json({ success: true, message: 'Logged in successfully' }, { status: 201 })
}