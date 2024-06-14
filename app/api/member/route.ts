import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";


export async function GET(req: NextRequest, res: NextResponse) {
    const members = await prisma.profile.findMany()

    const count = await prisma.profile.aggregate({
        _count: {
            id: true
        }
    })

    const memberDashboard = await prisma.profile.findMany({
        take: 5
    })
    
    return NextResponse.json({ "success": true, members, memberDashboard, count })
}

export async function POST(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ "success": true })
}