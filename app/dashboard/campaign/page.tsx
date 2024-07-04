'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg";

import { Button, Link } from '@nextui-org/react';

export default function Campaign() {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        fetchCampaignData()
    }, [])

    const fetchCampaignData = async () => {
        const res = await fetch('/api/campaign-member')

        const data = await res.json()

        setCampaigns(data['campaignMember'])
    }

    return (
        <div className='ml-64'>
            <div className="w-full px-5 mt-20 mb-5 mb-10">
                <div className='grid grid-cols-4 gap-x-2 gap-y-8'>
                    {campaigns.map((c: any, idx) => (
                         <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 text-balance line-clamp-2 text-balance">
                                    {c.eventName}</h1>
                                <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> {c.eventDescription}</p>
                                <p className="text-orange-500 text-base mt-2">Dana Dibutuhkan Rp{c.fundsNeeded.toLocaleString()}</p>
                                <Button as={Link} className='text-white px-8 mt-6 py-2 bg-sky-600 rounded-xl text-sm w-full text-center' href={`/dashboard/campaign/${c.id}`} variant="flat">Lihat Detail</Button>
                            </div>
                        </div>           
                    ))}
                   
                </div>
            </div>
        </div>
    )
}