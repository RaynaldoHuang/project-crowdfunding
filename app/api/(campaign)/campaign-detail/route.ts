import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaign = await prisma.campaign.findUnique({
        where: {
            id: data.id
        }
    })

    const news = await prisma.news.findMany({
        where: {
            campaignId: data.id
        },
        select: {
            updateNews: true,
            createdDate: true
        }
    })

    const images = await prisma.campaignImage.findMany({
        where: {
            campaignId: data.id
        },
        select: {
            imageLink: true
        }
    })

    console.log(news, images)

    return NextResponse.json({ 'success': true, campaign, news, images }, {status: 200})
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    console.log("Image URL", data.imgUrl)

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

    if (data.imgUrl != '') {
        const setCampaignImage = await prisma.campaignImage.create({
            data: {
                campaignId: data.id,
                imageLink: data.imgUrl
            }
        })
    }

    return NextResponse.json({ 'success': true })
}