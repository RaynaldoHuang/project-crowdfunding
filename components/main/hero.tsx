import { Button } from "@nextui-org/react";
import Image from "next/image";
import img2 from "@/public/svgs/imghero.svg";
import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <div className="bg-yellow-50">
                <div className="lg:max-w-8xl mx-auto">
                    <div className="w-11/12 mx-auto py-6 lg:flex lg:flex-row lg:items-center lg:justify-between">
                        <div className="lg:w-1/2">
                            <h1 className="text-black text-3xl font-bold lg:text-5xl lg:leading-normal">Donasi Anda sekecil apapun, akan sangat berarti bagi mereka</h1>
                            <p className="text-base mt-4 text-slate-500 lg:w-3/4 lg:mt-6 lg:leading-relaxed">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan</p>
                            <Button className="bg-yellow-500 text-white mt-10 px-7 py-4 rounded-xl" as={Link} href="/register">
                                Gabung Sekarang
                            </Button> 
                        </div>
                        <div className="flex justify-center">
                            <Image src={img2} alt={""} height={400} className="mt-12 lg:w-[582px] lg:h-[468px]"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}