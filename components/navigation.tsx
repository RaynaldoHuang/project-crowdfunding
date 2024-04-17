import React from "react";
import Link from 'next/link';

export default function App() {
    return (
        <div>
            <nav className="flex items-center justify-between h-16 px-6">
                <div className="text-black font-semibold">
                    LOGO
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" color="black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
            <div className="bg-red-200">
                <p className="text-3xl pr-14 pl-6 py-6 font-bold text-red-800">Donasi Anda sekecil apapun, akan sangat berarti bagi mereka</p>
                <p className="pr-14 pl-6 text-zinc-600 text-sm pb-6">Sekecil apapun donasi yang Anda berikan akan sangat berarti bagi mereka, yuk berdonasi sekarang juga untuk membantu sesama manusia yang membutuhkan</p>
            </div>
        </div>
    );
}
