import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    const user = cookies().get("user")?.value

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
    
    return NextResponse.json({ message: "Pengajuan kampanye telah berhasil.", success: true }, { status: 201 })
}