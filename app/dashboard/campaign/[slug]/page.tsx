"use client"


import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/public/images/img1.jpg"
import img3 from "@/public/images/img3.jpg"
import { Button, Progress } from "@nextui-org/react";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import img6 from "@/public/svgs/img6.svg"


export default function DetailCampaign({ params }: { params: { slug: string } }) {
    const [kabarTerbaruAda, setKabarTerbaruAda] = useState(false);
    const [accountUsername, setAccountUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [eventName, setEventName] = useState('')
    const [fundAccumulated, setFundAccumulated]: [any, any] = useState(0)
    const [fundsNeeded, setFundNeedded]: [any, any] = useState(0)
    const [eventDescription, setEventDescription] = useState('')
    const [donatorAccumulated, setDonatorAccumulated] = useState(0)
    const [dynamicArr, setDynamicArr] = useState([])

    useEffect(() => {
        fetchCampaigDetail()
    }, [])

    const fetchCampaigDetail = async () => {
        const res = await fetch('/api/campaign-detail-member', {
            method: 'POST',
            body: JSON.stringify({
                id: params.slug
            })
        })
        
        const data = await res.json()

        setAccountUsername (data['campaignDetailMember'][0].profile.accountUsername)
        setFirstName(data['campaignDetailMember'][0].profile.firstName)
        setLastName(data['campaignDetailMember'][0].profile.lastName)
        setDateCreated(data['campaignDetailMember'][0].profile.createdDate.split('T')[0])
        setEventName(data['campaignDetailMember'][0].eventName)
        setFundAccumulated(data['campaignDetailMember'][0].fundsAccumulated)
        setFundNeedded(data['campaignDetailMember'][0].fundsNeeded)
        setEventDescription(data['campaignDetailMember'][0].eventDescription)
        setDonatorAccumulated(data.totalDonator._count.profileId)
        let donator = data['donators']
        setDynamicArr(donator)
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <div className='lg:ml-64'>
            <div className="w-full px-5 mt-20 mb-10">
                <div>
                    <div className="flex gap-x-3">
                        <div className="w-4/6 bg-white px-5 py-5 rounded-xl">
                            <div className="slider-container rounded-lg h-[335px] overflow-hidden bg-red-300">
                                <Slider {...settings}>
                                    <div>
                                        <Image src={img1} alt="" className="object-cover w-full h-full"></Image>
                                    </div>
                                    <div>
                                        <Image src={img3} alt="" className="object-cover w-full h-full"></Image>
                                    </div>
                                </Slider>
                            </div>
                            <div className="py-5">
                                <h1 className="text-2xl font-bold mb-1">{eventName}</h1>
                                <p className="text-xs">Batas Waktu: <span className="font-semibold text-red-600">49 Hari Lagi</span></p>
                            </div>
                            <div className="flex items-center justify-between mb-7">
                                <div>
                                    <h1 className="font-bold text-sky-600 text-xl mb-1">Rp{fundAccumulated.toLocaleString()}</h1>
                                    <p className="text-xs">Terkumpul dari <span className="font-bold">Rp{fundsNeeded.toLocaleString()}</span></p>
                                </div>
                                <div>
                                    <Button variant="bordered" className="border-sky-600 text-white px-8 py-2 rounded-xl mr-2 text-sky-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" />
                                        </svg>
                                        <h1>Bagikan</h1>
                                    </Button>
                                    <Link href={`/dashboard/campaign/${params.slug}/donate`} className="bg-sky-600 text-white px-6 py-2.5 rounded-xl text-sm">
                                        Donasi Sekarang
                                    </Link>
                                </div>
                            </div>
                            <Progress
                                aria-label="Close"
                                size="sm"
                                value={fundAccumulated}
                                maxValue={fundsNeeded}
                                color="warning"
                            />
                        </div>
                        <div className="w-2/6">
                            <div className="bg-white px-5 py-5 rounded-xl mb-3">
                                <h1 className="text-lg font-bold mb-5">Penggalang Dana</h1>
                                <div className="flex items-center rounded-lg">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-gray-500">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-5">
                                        <h1 className="font-bold text-sm">{accountUsername}</h1>
                                        <p className="text-xs mt-1">{`${firstName} ${lastName}`}</p>
                                        <p className="text-xs mt-1">Mulai aktif {dateCreated}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white px-5 py-5 rounded-xl">
                                <Link href={`/dashboard/campaign/${params.slug}/donatur`} aria-label="Close">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div className="flex">
                                            <h1 className="text-lg font-bold mr-3">Para Donatur</h1>
                                            <div className="bg-sky-200 px-2 py-1 rounded-md flex justify-center items-center"><h1 className="font-bold text-sky-800 text-sm">{donatorAccumulated}</h1></div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div></Link>
                               { 
                                dynamicArr.map((c: any) => (
                                <div key={c.id} className="grid gap-y-3">
                                    <div className="flex items-center bg-gray-100 rounded-lg px-5 py-5">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-gray-500">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-bold text-base">{c.profile.accountUsername}</h1>
                                            <p className="text-xs">berdonasi Sebesar <span className="font-bold text-sm">Rp{c.amount}</span></p>
                                            {/* <p className="text-xs mt-2">{c.donationDate.split('T')[0]}</p> */}
                                        </div>
                                    </div>

                                </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-5 py-2 mt-3 rounded-xl">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title={<h1 className="font-bold text-lg">
                                Cerita Penggalangan Dana
                            </h1>}>
                                <p className="text-base">{eventDescription}</p>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="bg-white px-5 py-2 mt-3 rounded-xl">
                        <Accordion>
                            <AccordionItem key="2" aria-label="Accordion 1" title={<h1 className="font-bold text-lg">
                                Kabar Terbaru
                            </h1>}>
                                {kabarTerbaruAda ? (
                                    <div className="mb-8">
                                        <h1 className="text-base text-sky-800 font-bold">Judul Berita Begini Begitu</h1>
                                        <p className="text-xs mt-1 mb-5">Dipublikasikan 30 Juli 2019</p>
                                        <p className="text-base">Kondisi tubuh yang penuh dengan benjolan, membuat Teh Sonia, Pak Karniwa juga penderita tumor lainnya menjadi tidak percaya diri, keterbatasan biaya untuk berobat lagi-lagi menjadi kendala bagi mereka hingga tidak melanjutkan pengobatannya. Sedangkan jika tidak berobat, kondisi mereka akan terus memburuk.
                                            “Kenapa yaa bu, teteh kaya gini, ibu malu gak punya anak kaya teteh?” Teh sonia
                                            Teh Sonia (30) berdomisili di kota Kuningan, Jawa Barat, sejak lahir teh sonia mengalami kelainan di bagian wajahnya, awalnya hanya terdapat bercak-bercak coklat kehitaman saja namun seiring bertambahnya usia bercak tersebut malah semakin membesar dan sekarang bahkan sudah menutupi sebagian wajahnya.</p>
                                    </div>
                                ) : (
                                    <div className="text-base items-center flex flex-col justify-center mb-5">
                                        <Image src={img6} alt="" className="mb-8" width={400}></Image>
                                        <p className="text-slate-400 text-base">Belum ada kabar terbaru untuk Penggalangan dana ini</p>

                                        <div className="bg-gray-100 mt-5 px-5 py-5 rounded-md w-2/3">
                                            <p className="text-sm"><span className="font-bold">Disclaimer:</span> Informasi, opini dan foto yang ada di halaman galang dana ini adalah milik dan tanggung jawab penggalang dana. Jika ada masalah/kecurigaan silahkan <Link href={""} className="text-sky-600">lapor kepada kami disini.</Link></p>
                                        </div>
                                    </div>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

