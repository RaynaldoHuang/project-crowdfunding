import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function GET(req: NextRequest, res:NextResponse) {
    const campaigns = await prisma.campaign.findMany()

    const count = await prisma.campaign.aggregate({
        _count: {
            id: true
        }
    })

    const campaignDashboard = await prisma.campaign.findMany({
        take: 5
    })

    return NextResponse.json({ "success": true, campaignDashboard, campaigns, count })
}