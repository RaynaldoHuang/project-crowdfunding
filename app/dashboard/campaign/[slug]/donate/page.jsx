'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useState } from 'react';

export default function Donate() {
    useEffect(() => {
        const srcScript = 'https://app.sandbox.midtrans.com/snap/snap.js'
        const clientKey = process.env.NEXT_PUBLIC_MIDTRANS

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = srcScript
        script.setAttribute('data-client-key', clientKey)

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const path = usePathname()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)

        const res = await fetch('/api/generate-token', {
            method: "POST",
            body: JSON.stringify({
                order_id: Math.floor(Math.random() * 100) + 1, // need to reformat the order id
                amount: parseInt(form.get('amount')),
                id: path.split('/')[3]
            })
        })

        const data = await res.json()

        if (data.success) {
            window.snap.pay(data.token)
        }
    }

    return (
        <>
            <div className="ml-64">
                <div className="mt-20 mx-5 bg-white px-5 py-5 mb-10 rounded-xl">
                    <div className="text-lg font-bold">
                        Masukkan Nominal Donasi
                    </div>
                    <div className='mt-3'>
                        
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="flex border border-gray-200 rounded-lg px-3 py-2 bg-gray-100">
                                        <span className="mr-2 font-bold">Rp</span>
                                        <input
                                            name="amount"
                                            type="number"
                                            placeholder='0'
                                            required={true}
                                            className="flex-1 outline-none bg-gray-100 w-full [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    <button type='submit' className="mt-5 bg-sky-600 text-white px-6 py-2.5 rounded-xl text-sm w-48">Donasi Sekarang</button>
                                </div>
                            </form>
                        
                    </div>
                </div>
            </div>
        </>
        // <div className="ml-64 mt-20 px-5">
        //     <h1>Donasi untuk asdfaasdf</h1>

        //     <form onSubmit={handleSubmit}>
        //         <label>Jumlah Donasi</label>
        //         <input name='amount' type='number' className="px-4 py-2" />

        //         <button type='submit' className="bg-red-200">Donasi</button>
        //     </form>            
        // </div>
    )
}