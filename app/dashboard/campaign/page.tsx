'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg";

import { Button, Link } from '@nextui-org/react';

export default function CampaignMember() {
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
            <div className="w-full px-5 mt-20 mb-10">
                <div className='flex justify-between mb-5 items-center bg-white py-5 rounded-xl px-3'>
                    <div className="text-lg font-bold">
                        Bantu Siapa Hari Ini?
                    </div>
                    <div className='flex'>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute top-2.5 left-3 text-gray-500">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                            <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[350px] p-2.5 pl-12" placeholder="Pencarian..." />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
                    {campaigns.map((c: any, idx) => (
                        <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 line-clamp-2 text-balance">
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