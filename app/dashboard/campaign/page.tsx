'use client'

import Image from 'next/image'

import img1 from "@/public/images/img1.jpg";
import placeholder from '@/public/svgs/profile-placeholder.svg'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

export default function Campaign() {
    return (
        <div className='ml-64'>
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Campaign</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]" />
            </div>
            <div className="w-full px-5 mt-5 mb-5">
                <div className='grid grid-cols-4 gap-x-2 gap-y-8'>
                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
                            <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                            <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                Donasi
                            </button>
                        </div>
                    </div>

                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
                            <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                            <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                Donasi
                            </button>
                        </div>
                    </div>

                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
                            <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                            <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                Donasi
                            </button>
                        </div>
                    </div>

                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
                            <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                            <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                Donasi
                            </button>
                        </div>
                    </div>

                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
                            <p className="text-orange-500 text-base mt-2">Terkumpul Rp.50.000.000</p>
                            <button className="text-sky-600 px-8 mt-6 border py-2 border-sky-600 rounded-xl">
                                Donasi
                            </button>
                        </div>
                    </div>

                    <div className="border border-slate-300 rounded-3xl pt-4 pb-6 px-4">
                        <Image src={img1} alt={""} width={350} className="rounded-xl"
                        />
                        <div className="pb-0 pt-2 flex-col items-start">
                            <h1 className="text-xl font-semibold mt-4 text-balance line-clamp-2">
                                Donasi Ada ad aj adas dsa d ada dsas das dadsdsadasd sasasdsa</h1>
                            <p className="text-slate-500 text-base mt-4 line-clamp-3 text-balance">asa ad adasd asd adas das das da dasdasdsadadsad dasads</p>
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