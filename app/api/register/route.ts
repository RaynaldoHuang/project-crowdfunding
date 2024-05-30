import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')

    return NextResponse.json({ "success": true, "message": "User created successfully", "data": data })
}