import Image from 'next/image'
import placeholder from '@/public/images/img1.jpg'

export default function Wallet() {
    return (
        <div className="ml-64">
            <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
                <h1>Member</h1>
                <Image src={placeholder} width={60} height={60} alt='placeholder' className="rounded-full"/> 
            </div>

            <div className='mt-5 mx-5'>
                <h1>Member Content</h1>
            </div>
        </div>
    )
}