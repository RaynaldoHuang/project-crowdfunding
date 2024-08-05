'use client'



import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
 
import Link from 'next/link';
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/svgs/imghero.svg";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';


export default function Causes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [campaigns, setCampaigns] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCampaignData()
    }, [])

    const fetchCampaignData = async () => {
        const res = await fetch('/api/campaign-member')

        const data = await res.json()

        setCampaigns(data['dashboardCampaign'])
        setLoading(false);
    }

    return (
        <div className="lg:max-w-8xl mx-auto lg:mt-32">
          <div className="w-11/12 mx-auto mt-10 pb-12 overflow-x-hidden">
            <div className="mb-5">
                    <h1 className="lg:text-xl text-2xl font-bold text-sky-900 mt-10">Kasus Lapangan</h1>
                    <div className='lg:grid lg:grid-cols-4 gap-x-2 gap-y-6 mt-6 flex flex-col'>
                        {loading
                            ? Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                                    <Skeleton height={200} />
                                    <div className="pb-0 pt-2 flex-col items-start">
                                        <Skeleton count={2} />
                                        <Skeleton height={30} width={150} />
                                        <Skeleton height={40} width={200} style={{ marginTop: '20px' }} />
                                    </div>
                                </div>
                            ))
                            : campaigns.map((c: any, idx) => (
                                <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                                    <div className="w-full lg:h-48  h-32 overflow-hidden relative">
                                        <img
                                            src={c.campaignImage.length == 0 ? img1 : c.campaignImage[0].imageLink}
                                            alt={"gambar donasi"}
                                            className="object-cover w-full h-full rounded-xl absolute inset-0"
                                        />  </div>
                                    <div className="pb-0 pt-2 flex-col items-start">
                                        <h1 className="text-xl font-bold mt-2 line-clamp-2 text-balance">
                                            {c.eventName}</h1>
                                        <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> {c.eventDescription}</p>
                                        <p className="text-orange-500 text-base mt-2">Dana Dibutuhkan Rp{c.fundsNeeded.toLocaleString()}</p>
                                        <Link href={`/login`}><button className='text-white px-8 mt-6 py-2 bg-yellow-500 rounded-xl text-sm text-center w-full'>Lihat Detail</button></Link>
                                    </div>
                              </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
       
        // <div className="lg:max-w-8xl mx-auto lg:mt-32">
        //     <div className="w-11/12 mx-auto mt-10 pb-12 overflow-x-hidden">
        //         {/* mobile-view */}
        //         <div className="lg:hidden">
        //             <div className="mb-8">
        //                 <p className="text-orange-500 text-base mt-6">KASUS LAPANGAN</p>
        //                 <h1 className="text-2xl font-bold text-sky-900 mt-4">
        //                     Donasi ke orang-orang
        //                     membutuhkan tujuan kita</h1>
        //             </div>
        //             <div className="slider-container">
        //                 <Slider {...settings}>
        //                     <div className="px-2 mb-5">
        //                         <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                             <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                             />
        //                             <div className="pb-0 pt-2 flex-col items-start">
        //                                 <h1 className="text-xl font-semibold mt-4">
        //                                     Anak-anak yang membutuhkan sekolah
        //                                     biaya dan makanan</h1>
        //                                 <p className="text-slate-500 text-base mt-4">Anak-anak yang membutuhkan biaya sekolahnya
        //                                     dan makanan terbengkalai karena disana</p>
        //                                 <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
        //                                 <button className="text-sky-600 px-8 mt-6 border py-3 border-sky-600 rounded-xl">
        //                                     Donasi
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="px-2 mb-5">
        //                         <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                             <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                             />
        //                             <div className="pb-0 pt-2 flex-col items-start">
        //                                 <h1 className="text-xl font-semibold mt-4">
        //                                     Anak-anak yang membutuhkan sekolah
        //                                     biaya dan makanan</h1>
        //                                 <p className="text-slate-500 text-base mt-4">Anak-anak yang membutuhkan biaya sekolahnya
        //                                     dan makanan terbengkalai karena disana</p>
        //                                 <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
        //                                 <button className="text-sky-600 px-8 mt-6 border py-3 border-sky-600 rounded-xl">
        //                                     Donasi
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Slider>
        //             </div>
        //         </div>

        //         {/* dekstop-view */}
        //         <div className="hidden lg:block">
        //             <div>
        //                 <p className="text-orange-500 text-base mt-6">KASUS LAPANGAN</p>
        //             </div>
        //             <div className="mb-8 flex items-center justify-between">
        //                 <div>
        //                     <h1 className="text-4xl font-bold text-sky-900 mt-4 w-7/12">
        //                         Donasi ke orang-orang
        //                         membutuhkan tujuan kita</h1>
        //                 </div>
        //             </div>
        //             <div className="grid grid-cols-4 justify-between gap-x-8 mt-20">
        //                     {/* {
        //                         campaign.map((c) => (
        //                             <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                                 <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                                 />
        //                                 <div className="pb-0 pt-2 flex-col items-start">
        //                                     <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
        //                                         {c.title}</h1>
        //                                     <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">{c.desc}</p>
        //                                     <p className="text-orange-500 text-base mt-2">Terkumpul Rp.{c.amount}</p>
        //                                     <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
        //                                         Donasi
        //                                     </button>
        //                                 </div>
        //                             </div>
        //                         ))
        //                     } */}
        //                 {/* <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                     <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                     />
        //                     <div className="pb-0 pt-2 flex-col items-start">
        //                         <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
        //                             Anak-anak yang membutuhkan sekolah
        //                             biaya dan makanan</h1>
        //                         <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">Anak-anak yang membutuhkan biaya sekolahnya
        //                             dan makanan terbengkalai karena disana</p>
        //                         <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
        //                         <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
        //                             Donasi
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                     <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                     />
        //                     <div className="pb-0 pt-2 flex-col items-start">
        //                         <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
        //                             Anak-anak yang membutuhkan sekolah
        //                             biaya dan makanan</h1>
        //                         <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">Anak-anak yang membutuhkan biaya sekolahnya
        //                             dan makanan terbengkalai karena disana</p>
        //                         <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
        //                         <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
        //                             Donasi
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
        //                     <Image src={img1} alt={""} width={350} className="rounded-xl"
        //                     />
        //                     <div className="pb-0 pt-2 flex-col items-start">
        //                         <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
        //                             Anak-anak yang membutuhkan sekolah
        //                             biaya dan makanan</h1>
        //                         <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">Anak-anak yang membutuhkan biaya sekolahnya
        //                             dan makanan terbengkalai karena disana</p>
        //                         <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
        //                         <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
        //                             Donasi
        //                         </button>
        //                     </div>
        //                 </div> */}
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
}

