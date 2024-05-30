import { NextRequest, NextResponse } from "next/server";
import campaign from "@/libs/campaign";

export async function GET(req: NextRequest, res:NextResponse) {
    return NextResponse.json(campaign)
}