import Link from 'next/link'
import clsx from 'clsx'

export default function FormPengajuan() {
    return (
        <div className="lg:ml-64">
            <div className='mt-20 mx-5 bg-white px-5 py-10 mb-10 rounded-xl'>
                <div className='flex justify-between mb-10'>
                    <div className="text-lg font-bold">
                        List Pengajuan Kampanye
                    </div>
                    <div className='flex'>
                        <div className="relative mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute top-2.5 left-3 text-gray-500">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                            <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[350px] p-2.5 pl-12" placeholder="Pencarian..." />
                        </div>
                        <Link className='bg-sky-600 text-white text-sm px-3 py-1 rounded-lg flex items-center' href={'/dashboard/form-pengajuan/form'}>Ajukan Kampanye</Link>
                    </div>
                </div>

                <table className='table-auto w-full'>
                    <thead className='text-left border-b-2'>
                        <tr className=''>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Judul Kampanye</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Dana Yang Dibutuhkan</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Batas Waktu</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Status</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Tanggal Publikasi</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='text-xs py-5'>School Science Event</td>
                            <td className='text-xs'>Rp. 15.000.000</td>
                            <td className='text-xs'>2024-09-10</td>
                            <td className={clsx('text-xs',)}>Approved</td>
                            <td className='text-xs'>2024-04-06</td>
                            <td className='text-xs'><Link href={``} className='text-white bg-sky-600 px-3 py-2 rounded'>Lihat Detail</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}