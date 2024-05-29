"use client"

import { Input } from "@nextui-org/react";
import React from "react";
import { EyeFilledIcon } from "@/app/Login/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/Login/icon/EyeSlashFilledIcon";
import Link from "next/link"
import { Button } from "@nextui-org/react";

export default function LoginPage() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-3xl mb-2">Selamat Datang Kembali</h1>
                        <p className="text-xs">Silahkan Masukkan Email dan Password Kamu</p>
                    </div>
                    <div className="pt-10">
                        {/* email */}
                        <div>
                            <Input className="pb-8"
                                key="outside"
                                type="email"
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Masukkan email Kamu"
                                isRequired
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <Input className="pb-6"
                                key="outside"
                                type={isVisible ? "text" : "password"}
                                label="Password"
                                labelPlacement="outside"
                                placeholder="Masukkan password Kamu"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                isRequired
                            />
                        </div>
                        <Link href={""} className="text-xs text-sky-600 flex justify-end">Lupa password?</Link>
                        <Button fullWidth className="mt-10 bg-sky-600 text-white">
                            Login
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" color="white" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex flex-row mt-10 items-center justify-between">
                        <p className="text-xs">Belum punya akun?</p>
                        <Button className="bg-slate-100 text-black font-semibold" size="sm">
                            Buat Akun
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}