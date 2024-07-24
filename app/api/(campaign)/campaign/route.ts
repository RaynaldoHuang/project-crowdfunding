import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest, res:NextResponse) {
    const campaigns: any = await prisma.campaign.findMany(
       {
        select: {
            id: true,
            eventName: true,
            eventDescription: true,
            deadline: true,
            fundsNeeded: true,
            createdDate: true,
            status: true,
            profile : {
                select: {
                    accountUsername: true,
                }
            },
            campaignImage: {
                select: {
                    imageLink: true
                }
            }
       },}
    )

    const count = await prisma.campaign.aggregate({
        _count: {
            id: true
        }
    })

    const totalDonation = await prisma.donation.aggregate({
        _sum: {
            amount: true
        }
    })

    const totalRequest = await prisma.campaign.aggregate({
        _count: {
            status: true
        },
        where: {
            status : "PENDING"
        }
    })


    const campaignDashboard = await prisma.campaign.findMany({
        take: 5
    })

    return NextResponse.json({ success: true, campaignDashboard, campaigns, count, totalDonation, totalRequest}, { status: 200 })
}