import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest, res: NextResponse) {
    const campaignMember = await prisma.campaign.findMany({
        where: {
            status: 'ONGOING'
        },
        select: {
            id: true,
            eventName: true,
            eventDescription: true,
            fundsNeeded: true,
        }
    })

    return NextResponse.json({ success: true, campaignMember }, { status: 200 })
}