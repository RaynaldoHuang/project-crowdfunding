export default function profileAcc() {
    return (
        <>
            <div className="ml-64">
                <div className="flex">
                    <div className="w-2/3">
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
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan nama lengkap kamu'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Alamat Email</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan email kamu'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Nomor Telepon</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan nomor telepon kamu'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Tanggal Bergabung</label>
                                    <input
                                        type="text"
                                        value={"12-23-2402"}
                                        disabled={true}
                                        readOnly
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end items-end mt-5">
                                <button type='submit' className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm '>Simpan</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="mt-20 mr-5 bg-white px-5 py-7 mb-7 rounded-xl">
                            <h1 className="text-lg font-bold mb-1">
                                Ubah Kata Sandi
                            </h1>
                            <p className="text-xs text-slate-500">Silahkan masukkan kata sandi lama dan kata sandi baru Anda.</p>
                            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                            <div className="grid gap-y-5">
                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Kata Sandi Lama</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan kata sandi lama'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Kata Sandi Baru</label>
                                    <input
                                        type="text"
                                        placeholder='Masukkan kata sandi baru'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className="mb-2 text-sm">Konfirmasi Kata Sandi Baru</label>
                                    <input
                                        type="text"
                                        placeholder='Konfirmasi kata sandi baru'
                                        // required={true}
                                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end items-end mt-5">
                                <button type='submit' className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm w-full'>Ubah kata sandi</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}