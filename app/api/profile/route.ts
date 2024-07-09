import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";



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

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ success: true, message: 'Unauthorized request' }, { status: 403 })}