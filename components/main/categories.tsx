import Image from "next/image";
import img3 from "@/public/images/img3.png";
import { Button } from "@nextui-org/react";
import { useRef } from "react";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import toys from '@/public/svgs/toys.svg'
import money from '@/public/svgs/money.svg'
import medicine from '@/public/svgs/medicine.svg'
import food from '@/public/svgs/food.svg'

export default function Categories() {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="w-11/12 mx-auto mt-20 overflow-x-hidden">
            <div className="my-14 slider-container">
                <Slider {...settings}>
                    <div className="px-5">
                        <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10">
                            <div className="flex flex-col items-center">
                                <Image src={toys} alt="icon" width={70} height={70}  className=""/>
                            </div>
                            <h1 className="my-6 font-semibold ">Children toys</h1>
                            <p className="text-slate-400">Toys that are very popular with children are those with wheels and a remote</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10">
                            <div className="flex flex-col items-center">
                                <Image src={medicine} alt="icon" width={70} height={70}  className=""/>
                            </div>
                            <h1 className="my-6 font-semibold ">Medicine help</h1>
                            <p className="text-slate-400">Toys that are very popular with children are those with wheels and a remote</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10">
                            <div className="flex flex-col items-center">
                                <Image src={food} alt="icon" width={70} height={70}  className=""/>
                            </div>
                            <h1 className="my-6 font-semibold ">Health food</h1>
                            <p className="text-slate-400">Toys that are very popular with children are those with wheels and a remote</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="py-10 mb-5 shadow-md rounded-xl text-center px-10">
                            <div className="flex flex-col items-center">
                                <Image src={money} alt="icon" width={70} height={70}  className=""/>
                            </div>
                            <h1 className="my-6 font-semibold ">Money</h1>
                            <p className="text-slate-400">Toys that are very popular with children are those with wheels and a remote</p>
                        </div>
                    </div>
                    
                </Slider>
            </div>

            {/* <div>
                <Image src={img3} alt={""} height={400}
                ></Image>
            </div> */}
            <div>
                <p className="text-orange-500 text-base mt-6">KATEGORI</p>
                <h1 className="text-2xl font-bold text-sky-900 mt-4">
                    Apa yang bisa Anda sumbangkan
                    kepada mereka yang membutuhkan?</h1>
                <p className="text-slate-500 text-base mt-4">Ada banyak hal yang mereka butuhkan dari mainan,
                    makanan, pakaian dan sebagainya. Mereka sangat senang
                    ketika mereka memiliki hal-hal yang mereka miliki.</p>
            </div>
            <div>
                <Button className="bg-sky-600 text-white mt-8 px-7 py-4 rounded-xl">
                    Donasi Sekarang
                </Button>
            </div>
        </div>
    );
}