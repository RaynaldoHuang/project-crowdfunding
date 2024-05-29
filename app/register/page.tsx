"use client"

import { Input } from "@nextui-org/react";
import React from "react";
import { EyeFilledIcon } from "@/app/Login/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/Login/icon/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function RegisterPage() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [isVisible1, setIsVisible1] = React.useState(false);
    const toggleVisibility1 = () => setIsVisible1(!isVisible1);


    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-3xl mb-2">Daftar Akun</h1>
                        <p className="text-xs">Ayo Daftar Dulu Untuk Bergabung ke Sedekah.id</p>
                    </div>
                    <div className="pt-10">
                        {/* Username */}
                        <div>
                            <Input className="pb-8"
                                key="outside"
                                type="Username"
                                label="Username"
                                labelPlacement="outside"
                                placeholder="Masukkan username Kamu"
                                isRequired
                            />
                        </div>

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
                            <Input className="pb-8"
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

                        {/* Confirm Password */}
                        <div>
                            <Input className="pb-6"
                                key="outside"
                                type={isVisible1 ? "text" : "password"}
                                label="Konfirmasi Password"
                                labelPlacement="outside"
                                placeholder="Masukkan password Kamu"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility1}>
                                        {isVisible1 ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                isRequired
                            />
                        </div>

                        <Button fullWidth className="mt-10 bg-sky-600 text-white">
                            Daftar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" color="white" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex flex-row mt-10 items-center justify-between">
                        <p className="text-xs">Sudah punya akun?</p>
                        <Button className="bg-slate-100 text-black font-semibold" size="sm" href="/Login" as={Link}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}