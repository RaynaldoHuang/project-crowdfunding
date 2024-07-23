import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";


export async function GET(req: NextRequest, res: NextResponse) {
    const user: any = cookies().get("user")?.value

    const getProfileId: any = await prisma.profile.findUnique({
        where: {
            accountUsername: user
        },
        select: {
            id: true
        }
    })

    const getCampaign = await prisma.campaign.findMany({
        where: {
            profileId: getProfileId.id
        },
        select: {
            eventName: true,
            fundsNeeded: true,
            deadline: true,
            status: true,
            createdDate: true
        }
    })

    return NextResponse.json({ success: true, getCampaign }, { status: 200 })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    const user: any = cookies().get("user")?.value

    const getUser: any = await prisma.profile.findUnique({
        where: {
            accountUsername: user
        },
        select: {
            id: true
        }
    })

    const createCampaign = await prisma.campaign.create({
        data: {
            profileId: getUser.id,
            eventName: data.eventName,
            eventDescription: data.eventDescription,
            fundsNeeded: parseInt(data.fundsNeeded),
            deadline: data.deadline,
        }
    })

    console.log(createCampaign)
    

    return NextResponse.json({ message: "Pengajuan kampanye telah berhasil.", success: true, }, { status: 201 })
}