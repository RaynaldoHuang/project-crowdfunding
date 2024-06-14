'use client'

import Image from "next/image"
import clsx from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"

import placeholder from '@/public/svgs/profile-placeholder.svg'
import campaign from "@/libs/campaign"

export default function AdminDashboard() {
    const [members, setMembers] = useState([])
    const [campaigns, setCampaigns] = useState([])
    const [memberCount, setMemberCount] = useState(0)
    const [campaignCount, setCampaignCount] = useState(0)

    useEffect(() => {
        fetchMembers()
        fetchCampaigns()
    }, [])

    const fetchMembers = async () => {
        const res = await fetch('http://localhost:3000/api/member')
        const data = await res.json()

        setMembers(data['members'])
        setMemberCount(data.count._count.id)
    }

    const fetchCampaigns = async () => {
        const res = await fetch('http://localhost:3000/api/campaign')
        const data = await res.json()

        setCampaigns(data['campaignDashboard'])
        setCampaignCount(data.count._count.id)
    }

    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Dashboard | Admin</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]" />
            </div>

            <div className="w-full px-5 mt-5">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-row items-center justify-between bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <div>
                            <h1 className="font-bold text-2xl mb-1">{memberCount}</h1>
                            <p className="text-sm">Jumlah Member</p>
                        </div>
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-blue-500">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <div>
                            <h1 className="font-bold text-2xl mb-1">{campaignCount}</h1>
                            <p className="text-sm">Jumlah Kampanye</p>
                        </div>
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                            </svg>

                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <div>
                            <h1 className="font-bold text-2xl mb-1">Rp. 90.000.000</h1>
                            <p className="text-sm">Jumlah Donasi</p>
                        </div>
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <div>
                            <h1 className="font-bold text-2xl mb-1">8</h1>
                            <p className="text-sm">Jumlah Pengajuan</p>
                        </div>
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-8">
                    <div className="bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <h1 className="mb-5 text-lg font-bold">Member List</h1>
                        <div className="flex flex-row justify-between">
                            <table className='table-auto w-full'>
                                <thead className='text-left border-b-2'>
                                    <tr className=''>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Full Name</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Username</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Gender</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Date Created</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        members.map((member: any) => (
                                            <tr className='border-b'>
                                                <td className='text-xs py-5'>{member.firstName + " " + member.lastName}</td>
                                                <td className='text-xs'>{member.accountUsername}</td>
                                                <td className={clsx('text-xs',)}>{member.gender[0].toUpperCase() + member.gender.slice(1,).toLowerCase()}</td>
                                                <td className='text-xs'>{member.createdDate.split('T')[0]}</td>
                                                <td className='text-xs'><Link href={`/dashboard/admin/member/${member.id}`} className='text-white bg-[#336DFF] px-3 py-2 rounded'>View Detail</Link></td>
                                            </tr>
                                        ))
                                    }
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="bg-white drop-shadow-md rounded-xl px-6 py-6">
                        <h1 className="font-bold text-lg mb-5">Campaign List</h1>
                        <div className="flex flex-row justify-between">
                            <table className='table-auto w-full'>
                                <thead className='text-left border-b-2'>
                                    <tr className=''>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Event Name</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Deadline</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Status</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Date Created</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        campaigns.map((campaign: any) => (
                                            <tr className='border-b'>
                                                <td className='text-xs py-5'>{campaign.eventName}</td>
                                                <td className='text-xs'>{campaign.deadline.split('T')[0]}</td>
                                                <td className={clsx('text-xs',)}>{campaign.status}</td>
                                                <td className='text-xs'>{campaign.createdDate.split('T')[0]}</td>
                                                <td className='text-xs'><Link href={`/dashboard/admin/campaign/${campaign.id}`} className='text-white bg-[#336DFF] px-3 py-2 rounded'>View Detail</Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}