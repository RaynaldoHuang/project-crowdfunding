import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest, res: NextResponse) {
    const members = await prisma.profile.findMany()
    
    return NextResponse.json({ "success": true, members })
}

export async function POST(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ "success": true })
}