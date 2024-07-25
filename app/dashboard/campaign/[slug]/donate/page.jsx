'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export default function Donate() {
    const { isOpen, onOpenChange } = useDisclosure();
    const path = usePathname()
    const [amount, setAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

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

    const handleAmountChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setAmount(value);
        if (value < 1000) {
            setErrorMessage("Minimal donasi Rp1000");
        } else {
            setErrorMessage("");
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (amount < 1000) {
            setErrorMessage("Minimal donasi Rp1000");
            return;
        }

        const form = new FormData(event.currentTarget)

        const res = await fetch('/api/generate-token', {
            method: "POST",
            body: JSON.stringify({
                order_id: Math.floor(Math.random() * 100000) + 1, // need to reformat the order id
                amount: parseInt(form.get('amount')),
                id: path.split('/')[3]
            })
        })

        const data = await res.json()

        console.log(data)

        if (data.success) {
            window.snap.pay(data.token, {
                onSuccess: async function (result) {
                    const response = await fetch('/api/update-donation', {
                        method: "POST",
                        body: JSON.stringify({
                            result: result,
                            campaignId: data.campaignName.id,
                        })
                    })
                }
            })
        }
    }

    return (
        <>
            <div className="lg:ml-64">
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
                                        onChange={handleAmountChange}
                                    />
                                </div>
                                {errorMessage && (
                                    <div className="text-red-500 mt-2 text-sm">
                                        {errorMessage}
                                    </div>
                                )}
                                <div className="flex justify-between items-center mt-5">
                                    <button
                                        type='submit'
                                        className={`bg-sky-600 text-white px-6 py-2.5 rounded-xl text-sm ${amount < 1000 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={amount < 1000}
                                    >
                                        Donasi Sekarang
                                    </button>
                                    <Link className="border border-red-500 px-3 text-red-500 rounded-lg h-10 text-sm flex items-center" href={`/dashboard/campaign/${path.split("/")[3]}`}>
                                        Kembali
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Terima Kasih</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Kamu berhasil melakukan 1 kebaikan hari ini
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Tutup
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}
