'use client'

import img1 from "@/public/images/img1.jpg";
import Image from "next/image";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
 
type Campaign = {
    id: number,
    title: string,
    desc: string,
    amount: number
}


export default function Causes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <></>
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

