'use client'

import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import img7 from "@/public/svgs/img7.svg"
import Image from "next/image"

export default function forgotPassword() {
    const [success, setSuccess] = useState(false)

    const handleSubmit = async () => {
        // const res = await fetch('', {
        //     method: "POST"
        // })
        // const data = await res.json()

        // if (data.success) {
        //     setSuccess(true)
        // } 
        setSuccess(true)
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    {
                        success
                            ?
                            <div className="flex flex-col justify-center items-center">
                                <Image src={img7} alt={""} className="mb-5" width={300}></Image>
                                <h1 className="font-bold text-xl mb-2">Periksa Email Kamu</h1>
                                <p className="text-xs text-center w-9/12">Kami telah mengirimkan link untuk mengubah kata sandi anda, silahkan cek email kamu.</p>
                            </div>
                            :
                            <div className="flex flex-col flex justify-center items-center">
                                <h1 className="font-bold text-3xl mb-2">Reset Password Kamu</h1>
                                <p className="text-xs">Kami akan mengirimkan kamu e-mail untuk mereset kata sandi kamu.</p>
                                <form className="w-full mt-10" onSubmit={handleSubmit}>
                                    <Input className="pb-8"
                                        key="outside"
                                        type="email"
                                        labelPlacement="outside"
                                        placeholder="Masukkan email Kamu"
                                        isRequired
                                        name="email"
                                    />
                                    <Button fullWidth className="bg-sky-600 text-white" type="submit">
                                        Reset password
                                    </Button>
                                    <Link href={"/login"} className="text-xs text-sky-600 flex justify-center items-center mt-5">Kembali ke login</Link>
                                </form>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}