import Image from "next/image";
import img3 from "@/public/images/img3.png";
import { Button } from "@nextui-org/react";

export default function FeaturesV2() {
    return (
        <div className="w-11/12 mx-auto mt-20">
            <div>
                <Image src={img3} alt={""} height={400}
                ></Image>
            </div>
            <div>
                <p className="text-orange-500 text-base mt-6">FITUR</p>
                <h1 className="text-2xl font-bold text-sky-900 mt-4">Kami yakin kami bisa menghemat
                    lebih banyak kehidupan bersamamu</h1>
                <p className="text-slate-500 text-base mt-4">Sekecil apapun yang kamu lakukan untuk berbagi
                    tandanya kamu sudah menjadi manusia yang berguna
                    menjadi untuk sesama manusia dan untuk Anda.</p>
            </div>
            <div>
                <Button className="bg-sky-600 text-white mt-8 px-7 py-4 rounded-xl">
                    Donasi Sekarang
                </Button>
            </div>
        </div>
    );
}