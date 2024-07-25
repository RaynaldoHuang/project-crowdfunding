"use client"

import { Input } from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { EyeFilledIcon } from "@/components/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icon/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import {CircularProgress} from "@nextui-org/react";

export default function RegisterPage() {
    const router = useRouter()

    const [error, setError] = useState({ message: "" })

    const [match, setMatch] = useState(true);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [isVisible1, setIsVisible1] = React.useState(false);
    const toggleVisibility1 = () => setIsVisible1(!isVisible1);

    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles the creation of new user and password matching
     * @param event 
     */
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password != confirmPassword) {
            setPasswordMismatch(true)
            return
        } else {
            setPasswordMismatch(false)
        }

        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            }),
        })

        const data = await res.json()

        let error = { message: "" }

        if (data.success) {
            router.push('/login')
            return
        }

        error.message = data.message

        setError(error)
    }


    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-3xl mb-2">Daftar Akun</h1>
                        <p className="text-xs">Ayo Daftar Dulu Untuk Bergabung ke Sedekah.id</p>
                        {error.message && <p className="text-red-600 w-full bg-red-200 px-4 py-1 text-red-600 mt-5 rounded-lg text-sm">{error.message}</p>}
                    </div>
                    <form className="pt-10" onSubmit={handleSubmit}>
                        {/* Username */}
                        <div>
                            <Input className="pb-8"
                                key="outside"
                                type="Username"
                                label="Username"
                                labelPlacement="outside"
                                placeholder="Masukkan username Kamu"
                                isRequired
                                name="username"
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
                                name="email"
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
                                name="password"
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
                                name="confirmPassword"
                            />
                        </div>

                        {passwordMismatch && <p className="text-red-500">Passwords do not match!</p>}


                        <Button fullWidth className="mt-10 bg-sky-600 text-white" type="submit">
                            Daftar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" color="white" />
                            </svg>
                        </Button>
                    </form>
                    <div className="flex flex-row mt-10 items-center justify-between">
                        <p className="text-xs">Sudah punya akun?</p>
                        <Button className="bg-slate-100 text-black font-semibold" size="sm" href="/login" as={Link}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}