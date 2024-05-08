import Image from "next/image";
import volunteerIcon from "@/public/svgs/volunteericon.svg";
import educationIcon from "@/public/svgs/educationicon.svg";
import securityIcon from "@/public/svgs/securityicon.svg";

export default function Features() {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center">
                <p className="text-orange-500 text-base mb-4">FITUR</p>
                <h1 className="text-2xl font-bold text-center text-sky-900">Kami yakin kami bisa menghemat
                    lebih banyak kehidupan bersamamu</h1>
            </div>
            <div className="flex flex-col items-center">
                <Image src={volunteerIcon} alt={""} width={80} height={80} className="mt-12"
                ></Image>
                <h1 className="mt-6 text-2xl font-bold text-center text-sky-900">Menjadi Relawan</h1>
                <p className="text-slate-500 text-base text-center mt-4">Jadilah bagian dari kami dan bantu lebih banyak orang serta lebih berguna bagi sesama dan lingkungan Anda sebagai sosial</p>
            </div>
            <div className="flex flex-col items-center">
                <Image src={educationIcon} alt={""} width={80} height={80} className="mt-12"
                ></Image>
                <h1 className="mt-6 text-2xl font-bold text-center text-sky-900">Pendidikan</h1>
                <p className="text-slate-500 text-base text-center mt-4">Jadilah bagian dari kami dan bantu lebih banyak orang serta lebih berguna bagi sesama dan lingkungan Anda sebagai sosial</p>
            </div>
            <div className="flex flex-col items-center">
                <Image src={securityIcon} alt={""} width={80} height={80} className="mt-12"
                ></Image>
                <h1 className="mt-6 text-2xl font-bold text-center text-sky-900">Keamanan</h1>
                <p className="text-slate-500 text-base text-center mt-4">Jadilah bagian dari kami dan bantu lebih banyak orang serta lebih berguna bagi sesama dan lingkungan Anda sebagai sosial</p>
            </div>
        </div>
    );
}