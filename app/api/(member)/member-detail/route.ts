import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(request: NextRequest, response: NextResponse) {
    const data = await request.json();

    const id: any = data.id

    const memberDetail = await prisma.profile.findUnique({
        where: {
            id: id
        },
        include: {
            username: {
                select: {
                    email: true,
                }
            }
        }
    })

    console.log(memberDetail)

    return NextResponse.json({ 'success': true, memberDetail })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ success: true, message: 'Unauthorized request' }, { status: 403 })
}