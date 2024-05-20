import { Button } from "@nextui-org/react";
import Image from "next/image";
import img4 from "@/public/svgs/img4.svg";

export default function Volunteer() {
    return (
        <div className="bg-sky-100 mt-16">
            <div className="lg:max-w-8xl mx-auto lg:mt-32">
                <div className="w-11/12 mx-auto py-10 lg:flex lg:flex-row lg:items-center lg:justify-between mt-20 lg:gap-x-20">
                    <div>
                        <Image src={img4} alt={""} height={400}
                        ></Image>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-orange-500 text-base mt-6">SUKARELAWAN</p>
                        <h1 className="text-2xl font-bold text-sky-900 mt-4 lg:text-4xl text-balance lg:leading-normal">Bergabunglah dengan kami dan jadikan milik Anda
                            hidup lebih berharga</h1>
                        <p className="text-slate-500 text-base mt-4 text-balance lg:leading-relaxed">Bergabunglah dengan kami dan jadikan hidup Anda lebih berharga
                            dan bermanfaat, jadilah bagian dari kami dan berkontribusilah
                            bangsa dan negara dan paling sederhana.</p>
                        <div>
                            <Button className="bg-sky-600 text-white mt-8 px-7 py-4 rounded-xl">
                                Gabung Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}