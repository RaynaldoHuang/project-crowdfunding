import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const user = cookies().get('user')?.value

    const getProfileId: any = await prisma.profile.findUnique({
        where: {
            accountUsername: user
        },
        select: {
            id: true
        }
    })

    const getFundsAccumulated: any = await prisma.campaign.findUnique({
        where: {
            id: data.campaignId
        },
        select: {
            fundsAccumulated: true
        }
    })

    let total = getFundsAccumulated?.fundsAccumulated + parseInt(data.result.gross_amount)

    const updateFundsDonation = await prisma.campaign.update({
        where: {
            id: data.campaignId
        },
        data: {
            fundsAccumulated: total
        }
    })

    const createDonationStatus = await prisma.donation.create({
        data: {
            profileId: getProfileId.id,
            campaignId: data.campaignId,
            amount: parseInt(data.result.gross_amount),
            donateDate: data.result.transaction_time.split(" ")[0] + "T00:00:00.000Z"
        }
    })

    return NextResponse.json({ success: true, message: 'Pembayaran telah berhasil' }, { status: 201 })
}