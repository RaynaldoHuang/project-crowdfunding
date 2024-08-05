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

    const dashboardCampaign = await prisma.campaign.findMany({
        take: 4,
        where: {
            status: 'ONGOING'
        },
        select: {
            id: true,
            eventName: true,
            eventDescription: true,
            fundsNeeded: true,
            campaignImage: {
                select: {
                    imageLink: true
                }
            }
        }
    })

    return NextResponse.json({ success: true, campaignMember, dashboardCampaign}, { status: 200 })
}