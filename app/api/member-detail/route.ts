import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(res: NextResponse, req: NextRequest) {
    console.log("FORM DATA")

    return NextResponse.json({ 'success': true })
}

export async function GET(res: NextResponse, req: NextRequest) {
    return NextResponse.json({ 'success': true })
}