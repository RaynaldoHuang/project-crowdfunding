'use client'

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { useState, useEffect } from "react"

import placeholder from '@/public/svgs/profile-placeholder.svg'
import search from '@/public/svgs/search.svg'

export default function AdminMember() {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetchMembers()
    }, [])

    const fetchMembers = async () => {
        const res = await fetch('http://localhost:3000/api/member')
        const data = await res.json()

        setMembers(data['members'])
    }

    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Member | Admin</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"/> 
            </div>

            <div className='mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-xl rounded-xl'>
                <div className='relative mb-10'>
                    <Image src={search} width={20} height={20} alt='icon' className='absolute top-1.5 left-2' />
                    <input type="text" placeholder="Search ..." className='border border-slate-300 pl-10 py-1 pr-3 rounded-lg w-[350px]' />
                </div>

                <table className='table-auto w-full'>
                    <thead className='text-left border-b-2'>
                        <tr className=''>
                            <th className='font-normal text-xs text-slate-500 pb-2'>First Name</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Last Name</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Username</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Gender</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'>Date Created</th>
                            <th className='font-normal text-xs text-slate-500 pb-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((member: any) => (
                                <tr key={member.id} className='border-b'>
                                    <td className='text-xs py-5'>{member.firstName}</td>
                                    <td className='text-xs'>{member.lastName}</td>
                                    <td className='text-xs'>{member.accountUsername}</td>
                                    <td className={clsx('text-xs', member.gender == 'MALE' ? 'text-blue-600' : 'text-red-600')}>{member.gender[0].toUpperCase() + member.gender.slice(1,).toLowerCase()}</td>
                                    <td className='text-xs'>{member.createdDate.split('T')[0]}</td>
                                    <td className='text-xs'><Link href={`/dashboard/admin/member/${member.id}`} className='text-white bg-[#336DFF] px-3 py-2 rounded'>View Detail</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}