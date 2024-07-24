'use client'

import { Button, Input, Link } from "@nextui-org/react";
import { useRef, useState } from "react";
import img7 from "@/public/svgs/img7.svg"
import Image from "next/image"

export default function forgotPassword() {
    const [success, setSuccess] = useState(false)
    const [hideOTP, setHideOTP] = useState(false)
    const [oneTimePass, setOneTimePass] = useState('')

    const otp: any = useRef('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)

        const res = await fetch('/api/reset-password', {
            method: "POST",
            body: JSON.stringify({
                email: form.get('email'),
            })
        })
        const data = await res.json()

        if (data.success) {
            otp.current = data.otp
            setSuccess(true)
        }
    }

    const handleClick = () => {
        if (otp.current == oneTimePass) {
            setHideOTP(true)
        }
    }

    const handleSubmitNewPassword = async (event: any) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)

        const res = await fetch('/api/reset-password', {
            method: 'PUT',
            body: JSON.stringify({
                password: form.get('newPassword')
            })
        })
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-5 py-5 w-[520px]">
                    <div className={hideOTP ? 'hidden' : 'block'}>
                        {
                            success
                                ?
                                <div className='flex flex-col justify-center items-center'>
                                    <Image src={img7} alt={""} className="mb-5" width={300}></Image>
                                    <h1 className="font-bold text-xl mb-2">Periksa Email Kamu</h1>
                                    <p className="text-xs text-center w-9/12">Kami telah mengirimkan verifikasi OTP untuk mengubah kata sandi anda, silahkan cek email kamu.</p>
                                    <Input type='text' name='otp' className="w-full mt-5 mb-2 text-center" maxLength={6} style={{ textAlign: 'center' }} onChange={(event: any) => setOneTimePass(event.currentTarget.value)} />
                                    <p className="text-xs text-center w-9/12 mb-5">Tidak mendapatkan kode? <Link><span className="text-sky-600 text-xs">klik untuk kirim ulang kode</span></Link></p>
                                    <Button fullWidth className="bg-sky-600 text-white" type="submit" onClick={handleClick}>
                                        Submit
                                    </Button>
                                </div>
                                :
                                <div className="flex flex-col justify-center items-center">
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
                                        <Link href={"/login"} className="text-xs text-sky-600 flex justify-center items-center mt-5">Kembali</Link>
                                    </form>
                                </div>
                        }
                    </div>
                    <div className={hideOTP ? 'block' : 'hidden'}>
                        <form onSubmit={handleSubmitNewPassword}>
                            <h1 className="font-bold text-xl">Ganti Password Baru</h1>
                            <div>
                                <Input className="pb-8 pt-5"
                                    key="outside"
                                    type="password"
                                    label="Password Baru"
                                    labelPlacement="outside"
                                    placeholder="Masukkan password baru"
                                    isRequired
                                    name="newPassword"
                                    errorMessage="Silahkan diisi kolom ini."
                                />
                            </div>
                            <div>
                                <Input
                                    key="outside"
                                    type="password"
                                    label="Konfirmasi Password Baru"
                                    labelPlacement="outside"
                                    placeholder="Konfirmasi password baru"
                                    isRequired
                                    name="newPassword"
                                    errorMessage="Silahkan diisi kolom ini."
                                />
                            </div>
                            <Button fullWidth className="mt-5 bg-sky-600 text-white" type="submit">
                                Ganti Password
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}