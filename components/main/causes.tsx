import { Card, CardHeader, CardBody } from "@nextui-org/react";
import img3 from "@/public/images/img3.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Causes() {
    return (
        <div className="w-11/12 mx-auto mt-20 pb-12">
            <div>
                <p className="text-orange-500 text-base mt-6">KASUS LAPANGAN</p>
                <h1 className="text-2xl font-bold text-sky-900 mt-4">
                    Donasi ke orang-orang
                    membutuhkan tujuan kita</h1>
            </div>
            <div>
                <Card className="py-4 mt-8 mb-8">
                    <Image src={img3} alt={""} height={400} className="px-4"
                    />
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h1 className="text-xl font-semibold mt-4">
                            Anak-anak yang membutuhkan sekolah
                            biaya dan makanan</h1>
                        <p className="text-slate-500 text-base mt-4">Anak-anak yang membutuhkan biaya sekolahnya
                            dan makanan terbengkalai karena disana</p>
                        <p className="text-orange-500 text-base mt-2">Terkumpul Rp.475.000.000</p>
                        <Button className="text-sky-600 px-8 mt-6 border-sky-600" variant="bordered">
                            Donasi
                        </Button>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}