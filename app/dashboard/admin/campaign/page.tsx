'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/svgs/profile-placeholder.svg'

export default function AdminCampaign() {
    const [campaigns, setCampaigns] = useState([])
    const [dynamicArr, setDynamicArr] = useState([])
    const [prev, setPrev] = useState('PENDING')

    const categories = [
        {id: 0, title: 'Waiting for Approval', status: 'PENDING'},
        {id: 1, title: 'Approved', status: 'ONGOING'},
        {id: 2, title: 'Rejected', status: 'CANCELED'},
    ]

    useEffect(() => {
        fetchCampaign()
        onInitialLoad()
    }, [])

    const fetchCampaign = async () => {
        const res = await fetch('http://localhost:3000/api/campaign')
        const data = await res.json()

        setCampaigns(data['campaigns'])

        let result = data['campaigns'].filter((campaign: any) => campaign.status == 'PENDING')

        setDynamicArr(result)
    }

    const onInitialLoad = () => {
        const btn: any = document.getElementById(prev)

        btn.className = 'bg-[#336DFF] text-white w-fit text-xs mr-4 px-2 py-1 rounded-full'
    }

    const handleClick = (event: any) => {
        let arr = campaigns
        let stats: any

        const btnText: any = event.target.innerHTML
        console.log(btnText)

        const prevBtn: any = document.getElementById(prev)
        prevBtn.className = 'bg-[#7E84A3] text-white w-fit text-xs mr-4 px-2 py-1 rounded-full'
        
        for (let idx in categories) {
            if (categories[idx]['title'] == btnText) {
                const btn: any = document.getElementById(categories[idx]['status'])
                console.log(btn)
                btn.className = 'bg-[#336DFF] text-white w-fit text-xs mr-4 px-2 py-1 rounded-full'

                setPrev(categories[idx]['status'])

                stats = categories[idx]['status']

                break
            }
        }

        console.log('Stats', stats)

        let result = arr.filter((c: any) => c.status == stats)

        setDynamicArr(result)
    }

    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Campaign | Admin</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"/> 
            </div>

            <div className='mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-lg rounded-xl'>
                <div className='relative'>
                    <Image src={search} width={20} height={20} alt='icon' className='absolute top-1.5 left-2' />
                    <input type="text" placeholder="Search ..." className='border border-slate-300 pl-10 py-1 pr-3 rounded-lg w-[350px]' />
                </div>

                <div className='flex my-8'>
                    {
                        categories.map((c) => (
                            <button key={c.id} onClick={(event) => handleClick(event)} className='bg-[#7E84A3] text-white focus:bg-[#336DFF] w-fit text-xs mr-4 px-2 py-1 rounded-full' id={c.status} >
                                <p>{c.title}</p>
                            </button>
                        ))
                    }
                </div>

                <table className='table-auto w-full'>
                    <thead className='text-left border-b-2'>
                        <tr className=''>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Event Name</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Event Description</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Deadline</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Status</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Date Created</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dynamicArr.map((c:any) => (
                                <tr key={c.id} className='border-b'>
                                    <td className='text-xs py-5'>{c.eventName}</td>
                                    <td className='text-xs w-2/4'>{c.eventDescription}</td>
                                    <td className='text-xs'>{c.deadline.split('T')[0]}</td>
                                    <td className={clsx('text-xs', )}>{c.status}</td>
                                    <td className='text-xs'>{c.createdDate.split('T')[0]}</td>
                                    <td className='text-xs'><Link href='/dashboard/admin/campaign/test' className='text-white bg-[#336DFF] px-3 py-2 rounded'>View Detail</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}