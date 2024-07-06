'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

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
        <div className="ml-64 mt-20 px-5">
            <h1>Donasi untuk asdfaasdf</h1>

            <form onSubmit={handleSubmit}>
                <label>Jumlah Donasi</label>
                <input name='amount' type='number' className="px-4 py-2" />

                <button type='submit' className="bg-red-200">Donasi</button>
            </form>            
        </div>
    )
}