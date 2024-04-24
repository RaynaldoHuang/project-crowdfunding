import { Button } from "@nextui-org/react";
import Image from "next/image";
import img2 from "@/public/images/img2.png";

export default function Hero() {
    return (
        <div className="bg-sky-100">
            <div className="w-11/12 mx-auto pt-6 pb-6">
                <h1 className="text-black text-3xl font-bold text-sky-900">Donasi Anda sekecil apapun, akan sangat berarti bagi mereka</h1>
                <p className="text-base mt-4 text-slate-500">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan</p>
                <Button className="bg-sky-600 text-white mt-10 px-7 py-4 rounded-xl">
                    Donasi Sekarang
                </Button>
                <div className="flex justify-center">
                    <Image src={img2} alt={""} width={320} height={400} className="mt-12"
                    ></Image>
                </div>
            </div>
        </div>
    );
}