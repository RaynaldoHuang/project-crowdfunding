"use client"

import Image from "next/image";
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/public/images/img1.jpg"
import img3 from "@/public/images/img3.jpg"
import { Button, Progress } from "@nextui-org/react";
import Link from "next/link";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div>
            <div
                className={className}
                style={{ ...style, display: "block", position: "absolute", top: "33%", right: "10px", zIndex: 2 }}
                onClick={onClick}
            />
        </div>
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", top: "33%", left: "10px", zIndex: 2 }}
            onClick={onClick}
        />
    );
}

export default function DetailCampaign({ params }: { params: { slug: string } }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow className="" style={{}} onClick={() => { }} />,
        prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => { }} />
    };
    return (
        <div className='ml-64'>
            <div className="w-full px-5 mt-20 mb-5 mb-10">
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
                                <h1 className="text-2xl font-bold mb-1">HELP! Bantu Sembuhkan Para Penderita Tumor HELP! Bantu Sembuhkan Para Penderita Tumor</h1>
                                <p className="text-xs">Batas Waktu: <span className="font-semibold text-red-600">49 Hari Lagi</span></p>
                            </div>
                            <div className="flex items-center justify-between mb-7">
                                <div>
                                    <h1 className="font-bold text-sky-600 text-xl mb-1">Rp59.250.000</h1>
                                    <p className="text-xs">Terkumpul dari <span className="font-bold">Rp100.000.000</span></p>
                                </div>
                                <div>
                                    <Button variant="bordered" className="border-sky-600 text-white px-8 py-4 rounded-xl mr-2 text-sky-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" />
                                        </svg>
                                        <h1>Bagikan</h1>
                                    </Button>
                                    <Button className="bg-sky-600 text-white px-10 py-4 rounded-xl">
                                        Donasi Sekarang
                                    </Button>
                                </div>
                            </div>
                            <Progress
                                aria-label="Close"
                                size="sm"
                                value={59250000}
                                maxValue={100000000}
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
                                        <h1 className="font-bold text-sm">Yayasan Cahaya Sedekah Kebaikan</h1>
                                        <p className="text-xs mt-1">Mulai aktif 30 Juli 2019</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white px-5 py-5 rounded-xl">
                                <Link href={"#"} aria-label="Close">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div className="flex">
                                            <h1 className="text-lg font-bold mr-3">Para Donatur</h1>
                                            <div className="bg-sky-200 px-2 py-1 rounded-md flex justify-center items-center"><h1 className="font-bold text-sky-800 text-sm">310</h1></div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div></Link>
                                <div className="grid gap-y-3">
                                    <div className="flex items-center bg-gray-100 rounded-lg px-5 py-5">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-gray-500">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-bold text-base">Orang Baik</h1>
                                            <p className="text-xs">berdonasi Sebesar <span className="font-bold text-sm">Rp10.000</span></p>
                                            <p className="text-xs mt-2">10 menit yang lalu</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-gray-100 rounded-lg px-5 py-5">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-gray-500">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-bold text-base">Orang Baik</h1>
                                            <p className="text-xs">berdonasi Sebesar <span className="font-bold text-sm">Rp10.000</span></p>
                                            <p className="text-xs mt-2">10 menit yang lalu</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-gray-100 rounded-lg px-5 py-5">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-gray-500">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-bold text-base">Orang Baik</h1>
                                            <p className="text-xs">berdonasi Sebesar <span className="font-bold text-sm">Rp10.000</span></p>
                                            <p className="text-xs mt-2">10 menit yang lalu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-5 py-5 mt-3 rounded-xl">

                    </div>
                </div>
            </div>
        </div>
    )
}
