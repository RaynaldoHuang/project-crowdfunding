"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function profileAcc() {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <>
            <div className="ml-64">
                <div className="flex">
                    <div className="w-full">
                        <div className="mt-20 mx-5 bg-white px-5 py-7 mb-7 rounded-xl">
                            <h1 className="text-lg font-bold mb-1">
                                Informasi Akun
                            </h1>
                            <p className="text-xs text-slate-500">Ubah informasi akun Anda di sini untuk memperbarui profile, kata sandi, dana preferensi lainnya.</p>
                            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                            <div className="grid gap-y-5">
                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Username</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan username kamu'
                                        disabled={!isEditing}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className='flex flex-col'>
                                        <label className="mb-2 text-sm">Nama Depan</label>
                                        <input
                                            type="text"
                                            placeholder='Masukkan nama depan kamu'
                                            disabled={!isEditing}
                                            className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className="mb-2 text-sm">Nama Belakang</label>
                                        <input
                                            type="text"
                                            placeholder='Masukkan nama belakang kamu'
                                            disabled={!isEditing}
                                            className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Jenis Kelamin</label>
                                    <select name='jenis-kelamin' className='px-3 py-2 rounded-lg bg-gray-100 text-sm' style={{ borderRight: "12px solid rgb(243 244 246)" }} disabled={!isEditing}>
                                        <option value='laki-laki'>Laki-Laki</option>
                                        <option value='Perempuan'>Perempuan</option>
                                    </select>
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Alamat Lengkap</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan alamat kamu'
                                        disabled={!isEditing}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className='flex flex-col'>
                                        <label className="mb-2 text-sm">Tempat Lahir</label>
                                        <input
                                            type="text"
                                            placeholder='Masukkan tempat lahir'
                                            disabled={!isEditing}
                                            className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className="mb-2 text-sm">Tanggal Lahir</label>
                                        <input
                                            type="date"
                                            placeholder='Masukkan tanggal lahir'
                                            disabled={!isEditing}
                                            className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm "
                                            style={{ padding: "9px 12px 9px 12px" }}
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Alamat Email</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan email kamu'
                                        disabled={!isEditing}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Nomor Telepon</label>
                                    <input
                                        type="number"
                                        placeholder='Masukkan nomor telepon kamu'
                                        disabled={!isEditing}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Tanggal Bergabung</label>
                                    <input
                                        type="date"
                                        value={"2024-01-01"}
                                        disabled={!isEditing}
                                        readOnly
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm cursor-not-allowed"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Ganti Kata Sandi</label>
                                    <input
                                        type="password"
                                        value={"asasasas"}
                                        disabled={!isEditing}
                                        readOnly
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                    <Link href={"profile/katasandi"} className="mt-2 text-xs text-sky-600">Klik disini untuk ganti kata sandi</Link>
                                </div>
                            </div>

                            {isEditing ? (<div className="flex justify-end items-end mt-5">
                                <button onClick={() => location.reload()} className="border border-red-500 px-3 py-2 text-red-500 rounded-lg me-3 text-sm">Kembali</button>
                                <button type='submit' onClick={toggleEdit} className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm '>Simpan</button>
                            </div>) : (<div className='flex justify-end items-end mt-5'>
                                <button type='submit' onClick={toggleEdit} className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm '>Edit Profile</button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}