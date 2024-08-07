"use client";

import { color } from "framer-motion";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function DetailForm({ params }: { params: { slug: string } }) {
  const [eventName, setEventName] = useState('') 
  const [eventDesc, setEventDesc] = useState('')
  const [fundsNeeded, setFundNeeded] = useState('')
  const [status, setStatus] = useState('')
  const [deadline, setDeadline] = useState('')

  useEffect(() => {
    fetchCampaign();
  }, []);


  const fetchCampaign = async () => {
    const res = await fetch("/api/form-pengajuan-detail", {
        method: "POST",
        body: JSON.stringify({
            id: params.slug
        })
    });
    const data = await res.json();

    console.log(data.getFormDetail)

    setEventName(data.getFormDetail.eventName)
    setEventDesc(data.getFormDetail.eventDescription)
    setFundNeeded(data.getFormDetail.fundsNeeded)
    setStatus(data.getFormDetail.status)
    setDeadline(data.getFormDetail.deadline)
  }
    
  const getStatusColor = (status: any) => {
    switch(status.toLowerCase()) {
      case 'ongoing':
        return 'bg-blue-400';
      case 'canceled':
        return 'bg-red-400';
      case 'pending':
        return 'bg-yellow-400';
      case 'finished':
        return 'bg-green-400';
      default:
        return 'bg-gray-400'; // Default color for unhandled status
    }
  }
    

  return (
    <div className="lg:ml-64">
      <div className="lg:mt-20 mt-24 mx-5 bg-white px-5 lg:mb-10 mb-24 pb-10 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold py-10">Form Pengajuan</div>
          <div className={`${getStatusColor(status)} py-2 px-4 rounded-md font-bold text-white`}>
            <h2>{status}</h2>
          </div>
        </div>
        <form>
          <div className="gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Judul Kampanye</label>
              <input
                type="text"
                disabled
                placeholder="Masukkan judul kampanye"
                value={eventName}
                required={true}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
                name="eventName"
              />
              {/* <input type='text' name='event' onChange={(e) => setEventName(e.target.value)} value={eventName} className={clsx('px-3 py-2 rounded-lg border', border.eventBorder == 'true' ? 'border-slate-300' : 'border-red-600')} />
                            {errors.eventName && <p style={styles.error}>{errors.eventName}</p>} */}
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-sm">Deskripsi Kampanye</label>
            <textarea
              className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
              placeholder="Masukkan deskripsi kampanye"
              value={eventDesc}
              required={true}
              name="eventDescription"
              disabled
            />
            {/* <textarea name='desc' onChange={(e) => setDescEvent(e.target.value)} value={descEvent} className={clsx('px-3 py-2 rounded-lg border', border.descBorder == 'true' ? 'border-slate-300' : 'border-red-600')} />
                        {errors.descEvent && <p style={styles.error}>{errors.descEvent}</p>} */}
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Dana Yang Dibutuhkan</label>
              <input
                type="number"
                disabled
                placeholder="Masukkan jumlah dana"
                value={fundsNeeded}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
                required={true}
                name="fundsNeeded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Batas Waktu Kampanye</label>
              <input
                required={true}
                disabled
                type="date"
                name="deadline"
                placeholder="Masukkan tanggal batas kampanye"
                value={deadline.split("T")[0]}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* <div className='flex flex-col mb-5'>
                        <label className="mb-1 text-sm">Upload Gambar Pendukung</label>
                        <div className='border border-dashed border-slate-300 rounded-lg py-20 flex justify-center'>
                            <input type='file' accept='.png, .jpg, .jpeg, .pdf' multiple={true} />
                        </div>
                    </div> */}

          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-3/4 text-xs text-balance text-slate-400">
              <p>
                ** Setelah Anda mengirim formulir pengajuan, Anda akan segera
                dihubungin oleh admin untuk memproses pengajuan kampanye lebih
                lanjut. Harap untuk mengisi data diri profile secara valid dan lengkap.
              </p>
            </div>
            <div className="flex lg:justify-end items-center mt-5 lg:mt-0">
              <Link
                href="/dashboard/form-pengajuan"
                className="border border-red-500 px-3 py-2 text-red-500 rounded-lg"
              >
                Kembali
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
