"use client"

import { CircularProgress, Input } from "@nextui-org/react";
import { FormEvent } from "react";
import { EyeFilledIcon } from "@/components/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icon/EyeSlashFilledIcon";
import Link from "next/link"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('')

    useEffect(() => {
        checkSession()
    }, [])

    const checkSession = async () => {
        const res = await fetch('/api/login')
        const data = await res.json()

        if (data.success) {
            router.push('/dashboard/admin')
        }
    }

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

        if (data.success) {
            setIsLoading(false)
            return router.push('/dashboard/admin')
        }

        setErrMessage(data.message)
        setIsLoading(false)
    }

    return (
        <>
            {errMessage == '' ? <div></div> : <div className="text-red-600 w-full bg-red-200 text-red-600 rounded-lg">{errMessage}</div>}
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
                                <CircularProgress aria-label="Loading..." size="sm" className="me-3"/>
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