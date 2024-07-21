'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/svgs/imghero.svg";

export default function DashboardMember() {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        fetchCampaignData()
    }, [])

    const fetchCampaignData = async () => {
        const res = await fetch('/api/campaign-member')

        const data = await res.json()

        setCampaigns(data['dashboardCampaign'])
    }
    return (
        <div className="lg:ml-64">
            <div className="w-full px-5 lg:mt-20 mt-24 lg:mb-10 mb-20">
                {/* dekstop view */}
                <div className='hidden lg:block'>
                    <div className="bg-[url('/svgs/img5.svg')] lg:bg-cover rounded-xl py-10 px-16">
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold text-white">Donasi Sekarang</h1>
                            <p className="text-white py-4 font-medium
                         text-sm">Untuk membuat dunia menjadi lebih baik</p>
                            <p className="text-white py-4 font-light text-balance w-3/5 mb-6
                         text-sm">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka.</p>
                            <Link className="bg-sky-600 text-white mt-6 px-7 py-2 rounded-xl text-sm" href={'/dashboard/campaign'}>
                                Donasi Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                {/* mobile view */}
                <div className='lg:hidden'>
                    <div className='flex flex-col'>
                        <div className="flex justify-center">
                            <Image src={img2} alt={""} height={250} className="mt-4 lg:w-[582px] lg:h-[468px]"
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-sky-600 mb-2">Donasi Sekarang</h1>
                            <p className="text-sky-600 font-light text-balance mb-10
                         text-sm">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka.</p>
                            <Link className="bg-sky-600 text-white mt-6 px-7 py-2 rounded-xl text-sm" href={'/dashboard/campaign'}>
                                Donasi Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <h1 className="lg:text-xl text-2xl font-bold text-sky-900 mt-10">Kampanye Terbaru</h1>
                    <div className='lg:grid lg:grid-cols-4 gap-x-2 gap-y-6 mt-6 flex flex-col'>
                        {campaigns.map((c: any, idx) => (
                            <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                                <Image src={img1} alt={""} width={350} className="rounded-xl"
                                />
                                <div className="pb-0 pt-2 flex-col items-start">
                                    <h1 className="text-xl font-bold mt-2 line-clamp-2 text-balance">
                                        {c.eventName}</h1>
                                    <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> {c.eventDescription}</p>
                                    <p className="text-orange-500 text-base mt-2">Dana Dibutuhkan Rp{c.fundsNeeded.toLocaleString()}</p>
                                    <Link href={`/dashboard/campaign/${c.id}`}><button className='text-white px-8 mt-6 py-2 bg-sky-600 rounded-xl text-sm text-center w-full'>Lihat Detail</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}