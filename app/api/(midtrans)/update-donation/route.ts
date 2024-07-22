import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const user = cookies().get('user')?.value

    console.log("UPDATE AND INSERT DONATION")

    const data = await req.json()

    const getProfileId: any = await prisma.profile.findUnique({
        where: {
            accountUsername: user
        },
        select: {
            id: true
        }
    })

    const createDonation = await prisma.donation.create({
        data: {
            profileId: getProfileId.id,
            campaignId: data.campaignId,
            amount: data.amount
        }
    })

    let total = data.fundsAccumulated + data.amount

    const updateDonationFunds = await prisma.campaign.update({
        where: {
            id: data.id,
        },
        data: {
            fundsAccumulated: total
        }
    })

    return NextResponse.json({ success: true })
}