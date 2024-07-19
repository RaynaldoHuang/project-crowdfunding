import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaign = await prisma.campaign.findUnique({
        where: {
            id: data.id
        }
    })

    console.log(campaign)

    return NextResponse.json({ 'success': true, campaign })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaign = await prisma.campaign.update({
        where: {
            id: data.id
        },
        data: {
            eventName: data.eventName,
            status: data.status,
            eventDescription: data.eventDescription,
            fundsNeeded: parseInt(data.fundsNeeded),
            deadline: data.deadline + "T00:00:00.00Z",
        }
    })

    if (data.news != "") {
        const insertNews = await prisma.news.create({
            data: {
                campaignId: data.id,
                updateNews: data.news
            }
        })
    }



    return NextResponse.json({ 'success': true })
}