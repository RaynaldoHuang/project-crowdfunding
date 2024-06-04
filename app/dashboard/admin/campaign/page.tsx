import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/svgs/profile-placeholder.svg'

export default function AdminCampaign() {
    const categories = [
        {id: 0, title: 'Waiting for Approval'},
        {id: 1, title: 'Approved'},
        {id: 2, title: 'Rejected'},
    ]

    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Campaign | Admin</h1>
                <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"/> 
            </div>

            <div className='mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-xl rounded-xl'>
                <div className='relative'>
                    <Image src={search} width={20} height={20} alt='icon' className='absolute top-1.5 left-2' />
                    <input type="text" placeholder="Search ..." className='border border-slate-300 pl-10 py-1 pr-3 rounded-lg w-[350px]' />
                </div>

                <div className='flex my-8'>
                    {
                        categories.map((c) => (
                            <button key={c.id} className='bg-[#7E84A3] text-white focus:bg-[#336DFF] w-fit text-xs mr-4 px-2 py-1 rounded-full'>
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
                        <tr className='border-b'>
                            <td className='text-xs py-5'>Curing Cancer</td>
                            <td className='text-xs'>Funding kid age 14 to cure the cancer</td>
                            <td className='text-xs'>2070-01-01</td>
                            <td className={clsx('text-xs', )}>Approved</td>
                            <td className='text-xs'>2024-04-06</td>
                            <td className='text-xs'><Link href='#' className='text-white bg-[#336DFF] px-3 py-2 rounded'>View Detail</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}