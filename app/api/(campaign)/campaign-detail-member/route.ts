import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST (req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const campaignDetailMember: any = await prisma.campaign.findMany({
        where: {
            id: data.id
        },
        select: {
            eventName: true,
            fundsAccumulated: true,
            fundsNeeded: true,
            eventDescription: true,
            deadline: true,
            
            profile: {
                select: {
                    accountUsername: true,
                    firstName: true,
                    lastName: true,
                    createdDate: true,
                }
            },

            campaignImage: {
                select: {
                    imageLink: true
                }
            },

            news: {
                select: {
                    updateNews: true,
                    createdDate: true
                }
            }
        },
        
    });
    const totalDonator = await prisma.donation.aggregate({
        where: {
            campaignId: data.id
        },
      
        _count: {
            profileId: true
        },
        
    })

    const donators = await prisma.donation.findMany({
        take: 3,
        where: {
            campaignId: data.id
        },
        select: {
            amount: true,
            profile: {
                select: {
                    accountUsername: true
                }
            }
        }
    })

    const allDonators = await prisma.donation.findMany({
        where: {
            campaignId: data.id
        },
        select: {
            amount: true,
            donateDate: true,
            profile: {
                select: {
                    accountUsername: true
                }
            }
        }
    })

    console.log(campaignDetailMember, totalDonator, donators,)

    return NextResponse.json({ success: true, campaignDetailMember, totalDonator, donators, allDonators }, { status: 200 })
}