'use client'

import { Button } from "@nextui-org/react";
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg";

export default function Dashboard() {
    return (
        <div className="ml-64">
            <div className="w-full px-5 mt-20">
                <div className="bg-[url('/svgs/img5.svg')] bg-cover rounded-xl py-10 px-16">
                    <div className="w-1/2">
                        <h1 className="text-black text-5xl font-bold text-white">Donasi Sekarang</h1>
                        <p className="text-white py-4 font-medium
                         text-sm">Untuk membuat dunia menjadi lebih baik</p>
                        <p className="text-white py-4 font-light text-balance w-3/5
                         text-sm">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka.</p>
                        <Button className="bg-sky-600 text-white mt-6 px-7 rounded-xl">
                            Donasi Sekarang
                        </Button>
                    </div>
                </div>
                <div className="mb-5">
                    <h1 className="text-2xl font-bold text-sky-900 mt-10">Kampanye Terbaru</h1>
                    <div className="grid grid-cols-4 gap-x-2 gap-y-8 mt-6">
                        <div className="bg-white rounded-3xl pt-4 pb-6 px-4">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 text-balance line-clamp-2 text-balance">
                                    Anak-anak yang butuh sekolah
                                    biaya dan makanan</h1>
                                <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan</p>
                                <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                                <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                    Donasi
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl pt-4 pb-6 px-4">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 text-balance line-clamp-2 text-balance">
                                    Anak-anak yang butuh sekolah
                                    biaya dan makanan</h1>
                                <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan</p>
                                <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                                <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                    Donasi
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl pt-4 pb-6 px-4">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 text-balance line-clamp-2 text-balance">
                                    Anak-anak yang butuh sekolah
                                    biaya dan makanan</h1>
                                <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan</p>
                                <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                                <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                    Donasi
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl pt-4 pb-6 px-4">
                            <Image src={img1} alt={""} width={350} className="rounded-xl"
                            />
                            <div className="pb-0 pt-2 flex-col items-start">
                                <h1 className="text-xl font-bold mt-2 text-balance line-clamp-2 text-balance">
                                    Anak-anak yang butuh sekolah
                                    biaya dan makanan</h1>
                                <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance"> Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan Anak-anak yang membutuhkan sekolah
                                    biaya dan makanan</p>
                                <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                                <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                    Donasi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}