import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST (req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const getFormDetail = await prisma.campaign.findUnique({
        where: {
            id: data.id
        },
        select: {
            eventName: true,
            eventDescription: true,
            fundsNeeded: true,
            deadline: true,
            status: true
        }
    })

    return NextResponse.json({ success: true, getFormDetail }, { status: 201 })
}