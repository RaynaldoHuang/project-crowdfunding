import Link from "next/link";

export default function changePassword() {
    return (
        <>
            <div className="ml-64">
                <div className="mt-20 mx-5 bg-white px-5 py-7 mb-7 rounded-xl">
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
                            <Link href={"profile/katasandi"} className="mt-2 text-xs text-sky-600 ">Lupa kata sandi? klik disini</Link>
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
                        <Link href="#" className="border border-red-500 px-3 py-2 text-red-500 rounded-lg me-3 text-sm">Kembali</Link>
                        <button type='submit' className='bg-sky-600 px-3 py-2 rounded-lg text-white text-sm '>Ubah Kata Sandi</button>
                    </div>
                </div>
            </div>
        </>
    )
}