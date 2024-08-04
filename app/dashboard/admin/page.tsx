'use client'

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
    const [members, setMembers] = useState([])
    const [campaigns, setCampaigns] = useState([])
    const [memberCount, setMemberCount] = useState(0)
    const [campaignCount, setCampaignCount] = useState(0)
    const [fundAccumulatedCount, setFundAccumulatedCount] = useState(0)
    const [campaignRequestCount, setCampaignRequestCount] = useState(0)

    useEffect(() => {
        fetchMembers()
        fetchCampaigns()
    }, [])

    const fetchMembers = async () => {
        const res = await fetch('/api/member')
        const data = await res.json()

        setMembers(data['memberDashboard'])
        setMemberCount(data.count._count.id)
    }

    const fetchCampaigns = async () => {
        const res = await fetch('/api/campaign')
        const data = await res.json()

        setCampaigns(data['campaignDashboard'])
        setCampaignCount(data.count._count.id)
        setFundAccumulatedCount(data.totalDonation._sum.amount)
        setCampaignRequestCount(data.totalRequest._count.status)
    }

    return (
        <div className="ml-64">
            <div className="w-full px-5 mt-20 mb-10">
                <div className="grid grid-cols-4 gap-3">
                    <div className="flex flex-row bg-white rounded-xl">
                        <div className="bg-orange-500 w-2 h-full rounded-l-xl">
                        </div>
                        <div className="flex flex-row items-center w-full justify-between px-5 py-3">
                            <div>
                                <p className="text-xs text-slate-500 mb-2">Jumlah Member</p>
                                <h1 className="font-bold text-xl mb-1">{memberCount} <span className="text-base font-semibold">Orang</span></h1>
                            </div>
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row bg-white rounded-xl">
                        <div className="bg-green-500 w-2 h-full rounded-l-xl">
                        </div>
                        <div className="flex flex-row items-center w-full justify-between px-5 py-3">
                            <div>
                                <p className="text-xs text-slate-500 mb-2">Jumlah Kampanye</p>
                                <h1 className="font-bold text-xl mb-1">{campaignCount} <span className="text-base font-semibold">Kampanye</span></h1>
                            </div>
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row bg-white rounded-xl">
                        <div className="bg-blue-500 w-2 h-full rounded-l-xl">
                        </div>
                        <div className="flex flex-row items-center w-full justify-between px-5 py-3">
                            <div>
                                <p className="text-xs text-slate-500 mb-2">Jumlah Donasi</p>
                                <h1 className="font-bold text-xl mb-1">{fundAccumulatedCount == null ? 0 : fundAccumulatedCount.toLocaleString()} <span className="text-base font-semibold">IDR</span></h1>
                            </div>
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row bg-white rounded-xl">
                        <div className="bg-yellow-500 w-2 h-full rounded-l-xl">
                        </div>
                        <div className="flex flex-row items-center w-full justify-between px-5 py-3">
                            <div>
                                <p className="text-xs text-slate-500 mb-2">Jumlah Pengajuan</p>
                                <h1 className="font-bold text-xl mb-1">{campaignRequestCount} <span className="text-base font-semibold">Formulir</span></h1>
                            </div>
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-8">
                    <div className="bg-white rounded-xl px-6 py-6">
                        <h1 className="mb-5 text-lg font-bold">List Member</h1>
                        <div className="flex flex-row justify-between">
                            <table className='table-auto w-full'>
                                <thead className='text-left border-b-2'>
                                    <tr className=''>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Nama Lengkap</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Nama Pengguna</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Jenis Kelamin</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Tanggal Dibuat</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        members.map((member: any) => (
                                            <tr key={member.id} className='border-b'>
                                                <td className='text-xs py-5'>{member.firstName + " " + member.lastName}</td>
                                                <td className='text-xs'>{member.accountUsername}</td>
                                                <td className={clsx('text-xs',)}>{member.gender[0].toUpperCase() + member.gender.slice(1,).toLowerCase()}</td>
                                                <td className='text-xs'>{member.createdDate.split('T')[0]}</td>
                                                <td className='text-xs'><Link href={`/dashboard/admin/member/${member.id}`} className='text-white bg-sky-600 px-3 py-2 rounded'>Lihat Detail</Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl px-6 py-6">
                        <h1 className="font-bold text-lg mb-5">List Kampanye</h1>
                        <div className="flex flex-row justify-between">
                            <table className='table-fixed w-full'>
                                <thead className='text-left border-b-2'>
                                    <tr className=''>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Judul Kampanye</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Batas Waktu</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Status</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'>Tanggal Dibuat</th>
                                        <th className='font-normal text-xs text-slate-500 pb-2'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        campaigns.map((campaign: any) => (
                                            <tr key={campaign.id} className='border-b'>
                                                <td className='text-xs py-5'>{campaign.eventName}</td>
                                                <td className='text-xs'>{campaign.deadline.split('T')[0]}</td>
                                                <td className={clsx('text-xs',)}>{campaign.status}</td>
                                                <td className='text-xs'>{campaign.createdDate.split('T')[0]}</td>
                                                <td className='text-xs'><Link href={`/dashboard/admin/campaign/${campaign.id}`} className='text-white bg-sky-600 px-3 py-2 rounded'>Lihat Detail</Link></td>
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