import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/db";
const midtrans = require('midtrans-client')

let snap = new midtrans.Snap({
    isProduction: false,
    serverKey: process.env.NEXT_SECRET_MIDTRANS,
})

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaignName: any = await prisma.campaign.findUnique({
        where: {
            id: data.id
        },
        select: {
            id: true,
            eventName: true,
            fundsAccumulated: true,
            eventDescription: true
        }
    })

    let parameter = {
        transaction_details: {
            order_id: data.order_id,
            gross_amount: data.amount
        },
        item_details: [{
            price: data.amount,
            quantity: 1,
            name: campaignName?.eventName
        }]
    }

    const token = await snap.createTransactionToken(parameter)

    // if (token != undefined || token != '') {
    //     let total = campaignName.fundsAccumulated + data.amount

    //     const updateDonationFunds = await prisma.campaign.update({
    //         where: {
    //             id: data.id,
    //         },
    //         data: {
    //             fundsAccumulated: total
    //         }
    //     })

    //     const getUserId: any = await prisma.profile.findUnique({
    //         where: {
    //             accountUsername: cookies().get('user')?.value
    //         },
    //         select: {
    //             id: true
    //         }
    //     })

    //     const createDonation = await prisma.donation.create({
    //         data: {
    //             campaignId: data.id,
    //             amount: data.amount,
    //             profileId: getUserId.id
    //         }
    //     })
    // }

    return NextResponse.json({ success: true, token, campaignName, donationAmount: data.amount }, {status: 200})
}