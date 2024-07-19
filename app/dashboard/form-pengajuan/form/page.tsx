"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function ajukanForm() {
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)

        const res = await fetch('/api/form-pengajuan', {
            method: "POST",
            body: JSON.stringify({
                eventName: form.get('eventName'),
                eventDescription: form.get('eventDescription'),
                fundsNeeded: form.get('fundsNeeded'),
                deadline: form.get('deadline') + "T00:00:00.000Z"
            })
        })

        const data = await res.json()

        if (data.success) {
            router.push('/dashboard/form-pengajuan')
        }
    }
    
    return (
        <div className="ml-64">
            <div className='mt-20 mx-5 bg-white px-5 mb-10 pb-10 rounded-xl'>
                <div className="text-lg font-bold py-10">
                    Form Pengajuan
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='gap-x-5 mb-5'>
                        <div className='flex flex-col'>
                            <label className="mb-1 text-sm">Judul Kampanye</label>
                            <input
                                type="text"
                                placeholder='Masukkan judul kampanye'
                                required = {true}
                                className="px-3 py-2 rounded-lg bg-gray-100"
                                name="eventName"
                            />
                            {/* <input type='text' name='event' onChange={(e) => setEventName(e.target.value)} value={eventName} className={clsx('px-3 py-2 rounded-lg border', border.eventBorder == 'true' ? 'border-slate-300' : 'border-red-600')} />
                            {errors.eventName && <p style={styles.error}>{errors.eventName}</p>} */}
                        </div>
                    </div>

                    <div className='flex flex-col mb-5'>
                        <label className="mb-1 text-sm">Deskripsi Kampanye</label>
                        <textarea
                            className="px-3 py-2 rounded-lg bg-gray-100"
                            placeholder='Masukkan deskripsi kampanye'
                            required = {true}
                            name="eventDescription"
                        />
                        {/* <textarea name='desc' onChange={(e) => setDescEvent(e.target.value)} value={descEvent} className={clsx('px-3 py-2 rounded-lg border', border.descBorder == 'true' ? 'border-slate-300' : 'border-red-600')} />
                        {errors.descEvent && <p style={styles.error}>{errors.descEvent}</p>} */}
                    </div>

                    <div className='grid grid-cols-2 gap-x-5 mb-5'>
                        <div className='flex flex-col'>
                            <label className="mb-1 text-sm">Dana Yang Dibutuhkan</label>
                            <input
                                type="number"
                                placeholder='Masukkan jumlah dana'
                                // value={username}
                                className="px-3 py-2 rounded-lg bg-gray-100"
                                required = {true}
                                name="fundsNeeded"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className="mb-1 text-sm">Batas Waktu Kampanye</label>
                            <input
                                required = {true}
                                type="date"
                                name="deadline"
                                placeholder='Masukkan tanggal batas kampanye'
                                // value={username}
                                className="px-3 py-2 rounded-lg bg-gray-100" 
                            />
                        </div>
                    </div>

                    <div className='flex flex-col mb-5'>
                        <label className="mb-1 text-sm">Upload Gambar Pendukung</label>
                        <div className='border border-dashed border-slate-300 rounded-lg py-20 flex justify-center'>
                            <input type='file' accept='.png, .jpg, .jpeg, .pdf' multiple={true} />
                        </div>
                    </div>

                    <div className='flex justify-end items-center'>
                        <Link href='/dashboard/admin/campaign' className='border border-red-500 px-3 py-2 text-red-500 mx-5 rounded-lg'>Batal</Link>
                        <button type='submit' className='bg-sky-600 px-3 py-2 rounded-lg text-white'>Kirim Formulir</button>
                    </div>
                </form>
            </div>


        </div>
    )
}