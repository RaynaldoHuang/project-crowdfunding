import { Button } from "@nextui-org/react";

export default function Statistik() {
    return (
        <div className="mx-auto w-11/12 flex justify-between mt-8 mb-20">
            <div>
                <div className="flex flex-col pb-8">
                    <h1 className="font-bold text-3xl text-sky-900">Rp.120.000</h1>
                    <p className="text-slate-500">Donasi</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl text-sky-900">1,500+</h1>
                    <p className="text-slate-500">Kampanye</p>
                </div></div>
            <div>
                <div className="flex flex-col pb-8">
                    <h1 className="font-bold text-3xl text-sky-900">4,500+</h1>
                    <p className="text-slate-500">Sukarelawan</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl text-sky-900">40 years</h1>
                    <p className="text-slate-500">Pengalaman</p>
                </div>
            </div>
        </div>
    );
}