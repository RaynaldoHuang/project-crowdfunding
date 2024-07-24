import Image from "next/image";
import { Button } from "@nextui-org/react";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import toys from '@/public/svgs/toys.svg'
import money from '@/public/svgs/money.svg'
import medicine from '@/public/svgs/medicine.svg'
import food from '@/public/svgs/food.svg'
import Link from "next/link";

export default function Categories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div>
            <div className="lg:max-w-8xl mx-auto lg:mt-32">
                <div className="w-11/12 mx-auto mt-4 overflow-x-hidden">
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <p className="text-orange-500 text-base mt-10">KATEGORI</p>
                        <h1 className="text-2xl lg:text-center font-bold text-sky-900 mt-4 lg:text-4xl lg:w-7/12">
                            Apa yang bisa Anda sumbangkan
                            kepada mereka yang membutuhkan?</h1>
                        <p className="text-slate-500 text-base mt-4 lg:w-1/2 lg:text-center">Ada banyak hal yang mereka butuhkan dari mainan,
                            makanan, pakaian dan sebagainya. Mereka sangat senang
                            ketika mereka memiliki hal-hal yang mereka miliki.</p>
                        <Button className="bg-sky-600 text-white mt-8 px-7 py-4 rounded-xl" as={Link} href="/login">
                            Donasi Sekarang
                        </Button>
                    </div>

                    {/* mobile-view */}
                    <div className="lg:hidden">
                        <div className="my-14 slider-container">
                            <Slider {...settings}>
                                <div className="px-5">
                                    <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                        <div className="flex flex-col items-center">
                                            <Image src={toys} alt="icon" width={70} height={70} className="" />
                                        </div>
                                        <h1 className="my-6 font-semibold ">Mainan Anak-Anak</h1>
                                        <p className="text-slate-400">Mainan yang sangat digemari anak-anak adalah mainan yang beroda dan dilengkapi remote</p>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                        <div className="flex flex-col items-center">
                                            <Image src={medicine} alt="icon" width={70} height={70} className="" />
                                        </div>
                                        <h1 className="my-6 font-semibold ">Bantuan Obat</h1>
                                        <p className="text-slate-400">bantuan obat sangat dibutuhkan karena banyak orang di dunia ini yang tidak sehat</p>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                        <div className="flex flex-col items-center">
                                            <Image src={food} alt="icon" width={70} height={70} className="" />
                                        </div>
                                        <h1 className="my-6 font-semibold ">Makanan Sehat</h1>
                                        <p className="text-slate-400">Makanan juga tidak kalah pentingnya sebagai suplemen penambah energi dan juga daya pikir</p>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                        <div className="flex flex-col items-center">
                                            <Image src={money} alt="icon" width={70} height={70} className="" />
                                        </div>
                                        <h1 className="my-6 font-semibold ">Uang</h1>
                                        <p className="text-slate-400">Uang adalah hal utama yang dapat Anda sumbangkan, dapat digunakan untuk biaya sekolah dan penghidupan</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {/* dekstop-view */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-4 gap-8 mt-24">
                            <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                <div className="flex flex-col items-center">
                                    <Image src={toys} alt="icon" width={70} height={70} className="" />
                                </div>
                                <h1 className="my-6 font-semibold ">Mainan Anak-Anak</h1>
                                <p className="text-slate-400">Mainan yang sangat digemari anak-anak adalah mainan yang beroda dan dilengkapi remote</p>
                            </div>
                            <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                <div className="flex flex-col items-center">
                                    <Image src={medicine} alt="icon" width={70} height={70} className="" />
                                </div>
                                <h1 className="my-6 font-semibold ">Bantuan Obat</h1>
                                <p className="text-slate-400">bantuan obat sangat dibutuhkan karena banyak orang di dunia ini yang tidak sehat</p>
                            </div>
                            <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                <div className="flex flex-col items-center">
                                    <Image src={food} alt="icon" width={70} height={70} className="" />
                                </div>
                                <h1 className="my-6 font-semibold ">Makanan Sehat</h1>
                                <p className="text-slate-400">Makanan juga tidak kalah pentingnya sebagai suplemen penambah energi dan juga daya pikir</p>
                            </div>
                            <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10 h-80">
                                <div className="flex flex-col items-center">
                                    <Image src={money} alt="icon" width={70} height={70} className="" />
                                </div>
                                <h1 className="my-6 font-semibold ">Uang</h1>
                                <p className="text-slate-400">Uang adalah hal utama yang dapat Anda sumbangkan, dapat digunakan untuk biaya sekolah dan penghidupan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}