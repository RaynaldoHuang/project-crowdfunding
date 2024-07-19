'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'


export default function AdminCampaign() {
    const [campaigns, setCampaigns] = useState([])
    const [dynamicArr, setDynamicArr] = useState([])
    const [prev, setPrev] = useState('PENDING')

    const categories = [
        { id: 0, title: 'Menunggu Persetujuan', status: 'PENDING' },
        { id: 1, title: 'Diterima', status: 'ONGOING' },
        { id: 2, title: 'Ditolak', status: 'CANCELED' },
        { id: 3, title: 'Selesai', status: 'FINISHED' },
        { id: 4, title: 'Semua', status: 'ALL' }
    ]

    useEffect(() => {
        fetchCampaign()
        onInitialLoad()
    }, [])

    const fetchCampaign = async () => {
        const res = await fetch('/api/campaign', {
            method: 'POST'
        })
        const data = await res.json()

        setCampaigns(data['campaigns'])

        let result = data['campaigns'].filter((campaign: any) => campaign.status == 'PENDING')

        setDynamicArr(result)
    }

    const onInitialLoad = () => {
        const btn: any = document.getElementById(prev)

        btn.className = 'bg-sky-600 text-white text-xs mr-4 px-4 py-2 rounded-full'
    }

    const handleClick = (event: any) => {
        const btn = event.currentTarget;
        const btnText = btn.textContent;

        let stats: any;

        const prevBtn: any = document.getElementById(prev)
        prevBtn.className = 'bg-[#7E84A3] text-white w-fit text-xs mr-4 px-4 py-2 rounded-full'

        for (let idx in categories) {
            if (categories[idx]['title'] == btnText) {
                const btn: any = document.getElementById(categories[idx]['status'])
                console.log(btn)
                btn.className = 'bg-sky-600 text-white w-fit text-xs mr-4 px-4 py-2 rounded-full'

                setPrev(categories[idx]['status'])

                stats = categories[idx]['status']

                break
            }
        }

        if (stats == "ALL") {
            setDynamicArr(campaigns)
            return
        }

        let result = campaigns.filter((c: any) => c.status == stats)
        setDynamicArr(result)
    }

    return (
        <div className="ml-64">
            <div className='mt-20 mx-5 bg-white px-5 py-10 mb-10 rounded-xl'>
                <div className="flex justify-between items-center mb-10">
                    <div className="text-lg font-bold">
                        List Kampanye
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute top-2.5 left-3 text-gray-500">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                        <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[350px] p-2.5 pl-12" placeholder="Pencarian..." />
                    </div>
                </div>

                <div className='flex my-8'>
                    {
                        categories.map((c) => (
                            <button key={c.id} onClick={handleClick} className='bg-[#7E84A3] text-white focus:bg-sky-600 text-xs mr-4 px-4 py-2 rounded-full' id={c.status} >
                                <p>{c.title}</p>
                            </button>
                        ))
                    }
                </div>

                <table className='table-fixed w-full'>
                    <thead className='text-left border-b-2'>
                        <tr className=''>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Judul Kampanye</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Deskripsi</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Batas Waktu</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Status</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Tanggal Dibuat</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dynamicArr.map((c: any) => (
                                <tr key={c.id} className='border-b'>
                                    <td className='text-xs pe-5 py-5 truncate'>{c.eventName}</td>
                                    <td className='text-xs pe-5 w-2/4 truncate'>{c.eventDescription}</td>
                                    <td className='text-xs pe-5'>{c.deadline.split('T')[0]}</td>
                                    <td className={clsx('text-xs pe-5',)}>{c.status}</td>
                                    <td className='text-xs pe-5'>{c.createdDate.split('T')[0]}</td>
                                    <td className='text-xs pe-5'><Link href={`/dashboard/admin/campaign/${c.id}`} className='text-white bg-sky-600 px-3 py-2 rounded'>Lihat Detail</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}