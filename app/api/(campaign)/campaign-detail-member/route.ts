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
            status: true,
            
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
                    createdDate: true,
                }
            }
        },
        
    });

    const images = await prisma.campaignImage.findMany({
        where: {
            campaignId: data.id
        },
        select: {
            imageLink: true
        }
    })

    console.log(images)

    const totalDonator = await prisma.donation.groupBy({
        where: {
            campaignId: data.id
        },
      by: ['profileId'],
        _count: {
            profileId: true
        },
        
    })
    const totalDonatorCount = totalDonator.length;

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

    // const allDonators = await prisma.donation.findMany({
    //     where: {
    //         campaignId: data.id
    //     },
    //     select: {
    //         amount: true,
    //         donateDate: true,
    //         profile: {
    //             select: {
    //                 accountUsername: true
    //             }
    //         }
    //     }
    // })

    const groupedDonators = await prisma.donation.groupBy({
        where: {
            campaignId: data.id
        },
        by: ['profileId'],
        _sum: {
            amount: true
        },
        orderBy: {
            _sum: {
                amount: 'desc'
            }
        }
    })

    // Grouped all donators into a new json
    let listDonators: any[] = []

    for (let index in groupedDonators) {
        const username = await prisma.profile.findUnique({
            where: {
                id: groupedDonators[index].profileId
            },
            select: {
                accountUsername: true
            }
        })

        listDonators.push({user: username?.accountUsername, amount: groupedDonators[index]._sum.amount})
    }

    return NextResponse.json({ success: true, campaignDetailMember, totalDonatorCount, donators, listDonators, images }, { status: 200 })
}