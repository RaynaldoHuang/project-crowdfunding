import Image from "next/image";
import img1 from "@/public/images/img1.jpg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function FeaturesV2() {
    return (
        <div>
            <div className="lg:max-w-8xl mx-auto lg:mt-32">
                <div className="w-11/12 mx-auto pt-6 pb-6 lg:flex lg:flex-row lg:items-center lg:justify-between mt-20 lg:gap-x-20">
                    <div>
                        <Image src={img1} alt={"gambar"} height={400} className="rounded-xl"/>
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-2xl font-bold text-black mt-4 lg:text-4xl text-balance">Kami yakin kami bisa menghemat
                            lebih banyak kehidupan bersamamu</h1>
                        <p className="text-slate-500 text-base mt-4 text-balance">Sekecil apapun yang kamu lakukan untuk berbagi
                            tandanya kamu sudah menjadi manusia yang berguna
                            menjadi untuk sesama manusia dan untuk Anda.</p>
                        <div>
                            <Button className="bg-yellow-500 text-white mt-8 px-7 py-4 rounded-xl" as={Link} href="/login">
                                Donasi Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}