import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { select } from "@nextui-org/react";
import { eventNames } from "process";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function GET(req: NextRequest, res:NextResponse) {
    const campaigns = await prisma.campaign.findMany(
       {
        select: {
            eventName: true,
            eventDescription: true,
            deadline: true,
            createdDate: true,
            status: true,

            profile : {
                select: {
                    accountUsername: true,
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