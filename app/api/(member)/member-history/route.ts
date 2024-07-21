import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";


export async function GET(req: NextRequest, res: NextResponse) {
    const user: any = cookies().get('user')?.value

    const historyMember = await prisma.profile.findMany(
        {
            where: {
                accountUsername: user 
            },
            include: {
                campaign: {
                    select: {
                        eventName: true,
                        eventDescription: true
                    }
                },
                donation: {
                    select: {
                        donateDate: true,
                        amount: true
                    }
                }
            }
        }
    )
    console.log(historyMember)
    
    
    return NextResponse.json({ "success": true, historyMember}, { status: 200 })
}
