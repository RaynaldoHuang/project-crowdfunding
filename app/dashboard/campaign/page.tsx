import Image from 'next/image'

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/svgs/profile-placeholder.svg'

export default function Campaign() {
   return (
    <div className='ml-64'>
        <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
            <h1>Campaign</h1>
            <Image src={placeholder} width={45} height={45} alt='placeholder' className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"/> 
        </div>

        <div className='mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-xl rounded-xl'>

        </div>
    </div>
   )
}