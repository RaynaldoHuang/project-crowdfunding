import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";
import { profile } from "console";



export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: NextRequest, response: NextResponse) {
    const user: any = cookies().get('user')?.value

    const profileAcc = await prisma.profile.findMany({
        where: {
            accountUsername: user
        },
        include: {
            username: {
                select: {
                    email: true,
                }
            }
        }
    })

    console.log(profileAcc)

    return NextResponse.json({ 'success': true, profileAcc })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const user: any = cookies().get('user')?.value

    const profileAcc: any = await prisma.profile.update({
        where: {
            accountUsername: user
        },
        data: {
            firstName: data.first,
            lastName: data.last,
            gender: data.gender,
            address: data.address,
            city: data.city,
            birthdate: data.birthDate,
            phoneNumber: data.phoneNumber,
        }
    })

    const updateAccount: any = await prisma.account.update({
        where: {
            username: user
        },
        data: {
            email: data.email
        }
    })

    console.log('Profile', profileAcc)
    console.log('Account', updateAccount)

    return NextResponse.json({ 'success': true, message: 'Akun Profil telah berhasil di update' }, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ success: true, message: 'Unauthorized request' }, { status: 403 })}