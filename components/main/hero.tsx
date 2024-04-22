import { Button } from "@nextui-org/react";
import Image from "next/image";
import img2 from "@/public/images/img2.png";

export default function Hero() {
    return (
        <div className="bg-red-100">
            <div className="w-11/12 mx-auto pt-6 pb-6">
                <h1 className="text-black text-3xl font-bold text-red-900">Donasi Anda sekecil apapun, akan sangat berarti bagi mereka</h1>
                <p className="text-base mt-4">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan</p>
                <Button className="bg-red-600 text-white mt-10 px-7 py-4 rounded-xl">
                    Donasi Sekarang
                </Button>
                <Image src={img2} alt={""} width={300} height={300} className="mt-16 flex items-center bg-red-700"
                ></Image>
            </div>
        </div>
    );
}