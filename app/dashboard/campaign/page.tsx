'use client'

import Image from 'next/image'

import img1 from "@/public/images/img1.jpg";

export default function Campaign() {
    return (
        <div className='ml-64'>
            <div className="w-full px-5 mt-20 mb-5">
                <div className='grid grid-cols-4 gap-x-2 gap-y-8'>
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
    )
}