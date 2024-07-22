import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";


export async function GET(req: NextRequest, res: NextResponse) {
    const user: any = cookies().get('user')?.value

    const getProfileId: any = await prisma.profile.findUnique({
        where: {
            accountUsername: user
        },
        select: {
            id: true
        }
    })

    const getDonationHistory = await prisma.donation.findMany({
        where: {
            profileId: getProfileId.id
        },
        select: {
            campaign: {
                select: {
                    eventName: true,
                    eventDescription: true
                }
            },
            amount: true,
            donateDate: true
        }
    })

    console.log(getDonationHistory)
    
    
    return NextResponse.json({ "success": true, getDonationHistory }, { status: 200 })
}
