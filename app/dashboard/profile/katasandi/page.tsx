"use client"

import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function changePassword() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="lg:ml-64">
                <div className="lg:mt-20 mt-24 mx-5 bg-white px-5 py-7 mb-7 rounded-xl">
                    <h1 className="text-lg font-bold mb-1">
                        Ubah Kata Sandi
                    </h1>
                    <p className="text-xs text-slate-500">Silahkan masukkan kata sandi lama dan kata sandi baru Anda.</p>
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div className="grid gap-y-5">
                        <div className='flex flex-col'>
                            <label className="mb-2 text-sm">Kata Sandi Lama</label>
                            <input
                                type="password"
                                placeholder='Masukkan kata sandi lama'
                                // required={true}
                                className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                            />
                            <Link href={"/lupapassword"} className="mt-2 text-xs text-sky-600 ">Lupa kata sandi? klik disini</Link>
                        </div>

                        <div className='flex flex-col'>
                            <label className="mb-2 text-sm">Kata Sandi Baru</label>
                            <input
                                type="password"
                                placeholder='Masukkan kata sandi baru'
                                // required={true}
                                className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="mb-2 text-sm">Konfirmasi Kata Sandi Baru</label>
                            <input
                                type="password"
                                placeholder='Konfirmasi kata sandi baru'
                                // required={true}
                                className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end items-end mt-5">
                        <Link href="/dashboard/profile" className="border border-red-500 px-3 py-2 text-red-500 rounded-lg me-3 text-sm">Kembali</Link>
                        <button type='submit' onClick={onOpen} className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm '>Ubah Kata Sandi</button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                            <p>
                                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                            </p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Action
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}