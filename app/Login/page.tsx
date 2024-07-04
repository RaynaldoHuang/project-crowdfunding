"use client"

import { Input } from "@nextui-org/react";
import { FormEvent } from "react";
import { EyeFilledIcon } from "@/components/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icon/EyeSlashFilledIcon";
import Link from "next/link"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('')

    const toggleVisibility = () => setIsVisible(!isVisible);

    /**
     * Handles user authentication through the API
     * @param event 
     */
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true);

        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            }),
        })

        // Handle response if necessary
        const data = await response.json()

        console.log(data)

        if (data.success) {
            setIsLoading(false)
            return router.push('/dashboard/admin')
        }

        setErrMessage(data.message)
        setIsLoading(false)
    }

    return (
        <>
            {/* {errMessage == '' ? <div></div> : <div className="text-red-600">{errMessage}</div>} */}
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-3xl mb-2">Selamat Datang Kembali</h1>
                        <p className="text-xs">Silahkan Masukkan Email dan Password Kamu</p>
                    </div>
                    <form className="pt-10" onSubmit={handleSubmit}>
                        {/* email */}
                        <div>
                            <Input className="pb-8"
                                key="outside"
                                type="text"
                                label="Username"
                                labelPlacement="outside"
                                placeholder="Masukkan username"
                                isRequired
                                name="username"
                                errorMessage="Silahkan diisi kolom ini."
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <Input className="pb-3"
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
                                errorMessage="Silahkan diisi kolom ini."
                            />
                        </div>
                        <Link href={"/lupapassword"} className="text-xs text-sky-600 flex justify-end">Lupa password?</Link>
                        <Button fullWidth className="mt-10 bg-sky-600 text-white" type="submit" disabled={isLoading}>
                            {isLoading ? (<div className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.57-.83l-4 3a1 1 0 000 1.66l4 3A1 1 0 0012 8.83V7a6 6 0 100 12v-1.83a1 1 0 00-1.57-.83l-4 3a1 1 0 000 1.66l4 3A1 1 0 0012 20.83V20a8 8 0 01-8-8z"></path>
                                </svg>
                                <span>Memuat...</span>
                            </div>) : (<>Login
                            </>)}
                        </Button>
                    </form>
                    <div className="flex flex-row mt-10 items-center justify-between">
                        <p className="text-xs">Belum punya akun?</p>
                        <Button className="bg-slate-100 text-black font-semibold" size="sm" href="/register" as={Link}>
                            Buat Akun
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}