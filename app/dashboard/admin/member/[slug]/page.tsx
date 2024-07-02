"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MemberDetail({ params }: { params: { slug: string } }) {
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [city, setCity] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [created, setCreated] = useState('')

  useEffect(() => {
    fetchMemberDetail()
  }, [])

  const fetchMemberDetail = async () => {
    const response = await fetch('/api/member-detail', {
      method: 'POST',
      body: JSON.stringify({ id: params.slug })
    })

    const data = await response.json()

    setUsername(data['memberDetail'].accountUsername)
    setGender(data['memberDetail'].gender)
    setCity(data['memberDetail'].city)
    setBirthdate(data['memberDetail'].birthdate)
    setAddress(data['memberDetail'].address)
    setWhatsapp(data['memberDetail'].whatsapp)
    setFirst(data['memberDetail'].firstName)
    setLast(data['memberDetail'].lastName)
    setCreated(data['memberDetail'].createdDate)
  }

  return (
    <div className="ml-64">
      <div className="mt-20 mx-5 bg-white px-5 mb-10 pb-10 rounded-xl">
        <div className="text-lg font-bold py-10">
          Detail Member
        </div>
        <form>
          <div className="grid grid-cols-2 gap-x-5 mb-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Nama Pengguna</label>
              <input
                type="text"
                value={username}
                className="px-3 py-2 rounded-lg cursor-not-allowed bg-gray-100" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Jumlah Saldo</label>
              <input
                type="text"
                value="Rp. 1.000.000"
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Nama Depan</label>
              <input
                type="text"
                value={first}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Nama Belakang</label>
              <input
                type="text"
                value={last}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Tempat Lahir</label>
              <input
                type="text"
                value={city}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Tanggal Lahir</label>
              <input
                type="date"
                value={birthdate == null ? '' : birthdate.split('T')[0]}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label className="mb-1 text-sm">Alamat</label>
            <textarea
              value={address}
              className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
            />
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Jenis Kelamin</label>
              <input
                type="text"
                value={gender}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Nomor WhatsApp</label>
              <input
                type="text"
                value={whatsapp}
                className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-1 text-sm">Tanggal Pembuatan Akun</label>
            <input
              type="date"
              value={created.split('T')[0]}
              className="px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed" disabled
            />
          </div>

          <div className="flex justify-end items-center">
            <Link href="/dashboard/admin/member" className="border border-red-500 px-3 py-2 text-red-500 rounded-lg text-sm">Kembali</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
