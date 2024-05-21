import Image from "next/image";
import logo from "@/public/svgs/logo.svg"
import facebook from "@/public/svgs/facebook.svg"
import twitter from "@/public/svgs/twitter.svg"
import instagram from "@/public/svgs/Instagram.svg"
import Link from "next/link";

export default function Footer() {
    const getYear = () => {
        const year = new Date;
        return year.getFullYear()
    }

    return (
        <div>
            <div className="lg:max-w-8xl mx-auto">
                <div className="w-11/12 mx-auto pt-6 pb-6 mt-12 lg:justify-between lg:flex lg:flex-row">
                    <div className="lg:w-1/2">
                        <Image src={logo} alt={""} width={120}
                        ></Image>
                        <p className="text-slate-500 text-base mt-6 text-balance lg:w-3/4">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan.</p>
                        <div className="flex gap-6 mt-8">
                            <Link href={""}><Image src={facebook} alt={""} height={40}
                            ></Image></Link>
                            <Link href={""}><Image src={twitter} alt={""} height={40}
                            ></Image></Link>
                            <Link href={""}><Image src={instagram} alt={""} height={40}
                            ></Image></Link>
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/3 lg:justify-between lg:ml-10">
                        <div className="">
                            <h1 className="text-lg font-bold text-sky-900 mt-12 mb-6 mr-32 lg:mt-0 lg:mr-0">Menu</h1>
                            <div className="flex flex-col gap-y-2">
                                <Link href={""} className="text-slate-500 text-base">Fitur</Link>
                                <Link href={""} className="text-slate-500 text-base">Kampanye</Link>
                                <Link href={""} className="text-slate-500 text-base">Sukarelawan</Link>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-lg font-bold text-sky-900 mt-12 mb-6 lg:mt-0">Kategori</h1>
                            <div className="flex flex-col gap-y-2">
                                <Link href={""} className="text-slate-500 text-base">Uang</Link>
                                <Link href={""} className="text-slate-500 text-base">Mainan Anak-Anak</Link>
                                <Link href={""} className="text-slate-500 text-base">Bantuan Obat</Link>
                                <Link href={""} className="text-slate-500 text-base">Makanan Sehat</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className="w-11/12 mx-auto my-7 lg:max-w-8xl"/>

                <p className="w-11/12 mx-auto text-center text-sm lg:max-w-8xl mb-7">&copy; {getYear()} Sedekah. All rights reserved</p>
            </div>

        </div>
    );
}