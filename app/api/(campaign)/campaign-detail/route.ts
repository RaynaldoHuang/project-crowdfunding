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

    console.log(data)

    return NextResponse.json({ 'success': true })
}