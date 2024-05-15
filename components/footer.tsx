import Image from "next/image";
import logo from "@/public/images/logo.png"
import facebook from "@/public/svgs/facebook.svg"
import twitter from "@/public/svgs/twitter.svg"
import instagram from "@/public/svgs/Instagram.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="w-11/12 mx-auto pt-6 pb-6 mt-12">
                <div>
                    <Image src={logo} alt={""} width={120}
                    ></Image>
                    <p className="text-slate-500 text-base mt-6"> Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan.</p>
                </div>
                <div className="flex gap-6 mt-8">
                    <Link href={""}><Image src={facebook} alt={""} height={40}
                    ></Image></Link>
                    <Link href={""}><Image src={twitter} alt={""} height={40}
                    ></Image></Link>
                   <Link href={""}><Image src={instagram} alt={""} height={40}
                    ></Image></Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}