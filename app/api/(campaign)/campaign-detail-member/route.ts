import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST (req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaignDetailMember: any = await prisma.campaign.findMany({
        where: {
            id: data.id
        },
        select: {
            eventName: true,
            fundsAccumulated: true,
            fundsNeeded: true,
            eventDescription: true,
            
            profile: {
                select: {
                    firstName: true,
                    lastName: true,
                    createdDate: true,
                }
            }
        },
        
    })

    console.log(campaignDetailMember)

    return NextResponse.json({ success: true, campaignDetailMember }, { status: 200 })
}