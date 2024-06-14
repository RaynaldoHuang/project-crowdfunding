'use client'

import Image from 'next/image'
import Link from 'next/link'

import placeholder from '@/public/svgs/profile-placeholder.svg'
import { FormEvent, useEffect, useState } from 'react'


export default function CampaignDetail({params}: {params: {slug: string}}) {
    const [eventName, setEventName] = useState('')
    const [statusEvent, setStatusEvent] = useState('')
    const [descEvent, setDescEvent] = useState('')
    const [fundNeed, setFundNeed] = useState('')
    const [deadline, setDeadline] = useState('')

    useEffect(() => {
        fetchCampaignDetail()
    }, [])

    const fetchCampaignDetail = async () => {
        const res = await fetch('/api/campaign-detail', {
            method: 'POST',
            body: JSON.stringify({
                id: params.slug
            })
        })

        const data = await res.json()

        setEventName(data['campaign'].eventName)
        setStatusEvent(data['campaign'].statusEvent)
        setDescEvent(data['campaign'].eventDescription)
        setFundNeed(data['campaign'].fundsNeeded)
        setDeadline(data['campaign'].deadline)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await fetch('/api/campaign-detail', {
            method: 'PUT',
            body: JSON.stringify({
                eventName: formData.get('event'),
                status: formData.get('status'),
                eventDescription: formData.get('desc'),
                fundsNeeded: formData.get('fundsNeeded'),
                deadline: formData.get('deadline')
            })
        })

        const data = await res.json()
    }



    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Campaign Detail | Admin</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"/> 
            </div>

            <div className='mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-xl rounded-xl'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-x-5 mb-5'>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Event Name</label>
                            <input type='text' name='event' onChange={(e) => setEventName(e.target.value)} value={eventName} className='px-3 py-2 rounded-lg border border-slate-300' />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='mb-1'>Status</label>
                            <select name='status' onChange={(e) => setStatusEvent(e.target.value)} value={statusEvent} className='px-3 py-2 rounded-lg border border-slate-300'>
                                <option value='PENDING'>Pending</option>
                                <option value='ONGOING'>Approve</option>
                                <option value='CANCELED'>Reject</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col mb-5'>
                        <label className='mb-1'>Event Description</label>
                        <textarea name='desc' onChange={(e) => setDescEvent(e.target.value)} value={descEvent}  className='px-3 py-2 rounded-lg border border-slate-300' />
                    </div>

                    <div className='grid grid-cols-2 gap-x-5 mb-5'>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Funds Needed</label>
                            <input type='text' name='fundsNeeded' onChange={(e) => setFundNeed(e.target.value)} value={fundNeed} className='px-3 py-2 rounded-lg border border-slate-300' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Accumulated Funds</label>
                            <input type='text' value='Rp. 10.000.000' className='px-3 py-2 rounded-lg border border-slate-300' />
                        </div>
                    </div>

                    <div className='flex flex-col mb-5'>
                        <label className='mb-1'>Deadline Date</label>
                        <input type='date' name='deadline' onChange={(e) => setDeadline(e.target.value)} value={deadline.split('T')[0]} className='px-3 py-2 rounded-lg border border-slate-300' />
                    </div>

                    <div className='flex flex-col mb-5'>
                        <label className='mb-1'>Upload Image</label>
                        <div className='border border-dashed border-slate-300 rounded-lg py-20 flex justify-center'>
                            <input type='file' accept='.png, .jpg, .jpeg'/>
                        </div>
                    </div>

                    <div className='flex justify-end items-center'>
                        <Link href='/dashboard/admin/campaign' className='border border-red-500 px-3 py-2 text-red-500 mx-5 rounded-lg'>Cancel</Link>
                        <button type='submit' className='bg-sky-600 px-3 py-2 rounded-lg text-white'>Edit Campaign</button>
                    </div>
                </form>
            </div>
                
            
        </div>
    )
}

