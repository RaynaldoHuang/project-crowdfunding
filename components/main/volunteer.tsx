import { Button } from "@nextui-org/react";
import Image from "next/image";
import img4 from "@/public/images/img4.png";

export default function Volunteer() {
    return (
        <div className="bg-sky-100 mt-16">
            <div className="w-11/12 mx-auto pt-6 pb-6">
                <div>
                    <p className="text-orange-500 text-base mt-6">SUKARELAWAN</p>
                    <h1 className="text-2xl font-bold text-sky-900 mt-4">
                        Bergabunglah dengan kami dan jadikan milik Anda
                        hidup lebih berharga</h1>
                    <p className="text-slate-500 text-base mt-6"> Bergabunglah dengan kami dan jadikan hidup Anda lebih berharga
                        dan bermanfaat, jadilah bagian dari kami dan berkontribusilah
                        bangsa dan negara dan paling sederhana.</p>
                    <Button className="bg-sky-600 text-white mt-10 px-7 py-4 rounded-xl">
                        Gabung Sekarang
                    </Button>
                    <div className="flex justify-center">
                        <Image src={img4} alt={""} width={320} height={400} className="mt-12"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}