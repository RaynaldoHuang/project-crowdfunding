"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import placeholder from "@/public/svgs/profile-placeholder.svg";

export default function MemberDetail({ params }: { params: { slug: string } }) {
  useEffect(() => {
    fetchMemberDetail()
  }, [])
  
  const fetchMemberDetail = async () => {
    const response = await fetch('/api/member-detail', {
      method: 'POST',
      body: JSON.stringify({ id: params.slug })
    })

    const data = await response.json()
  }

  return (
    <div className="ml-64">
      <div className="flex justify-between mx-5 h-14 items-center text-2xl font-semibold">
        <h1>Member Detail | Admin</h1>
        <Image
          src={placeholder}
          width={45}
          height={45}
          alt="placeholder"
          className="rounded-full bg-transparent border px-1 py-1 border-[#336DFF]"
        />
      </div>

      <div className="mt-5 mx-5 bg-white px-5 py-10 mb-10 shadow-xl rounded-xl">
        <form>
        <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1">Username</label>
              <input
                type="text"
                value="Yeremy Ganteng"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Jumlah Saldo</label>
              <input
                type="text"
                value="Rp. 1.000.000"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1">Nama Depan</label>
              <input
                type="text"
                value="Yeremy"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Nama Belakang</label>
              <input
                type="text"
                value="Simatupang"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1">Tempat Lahir</label>
              <input
                type="text"
                value="Jonggol"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Tanggal Lahir</label>
              <input
                type="text"
                value="2024/06/05"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1">Alamat</label>
            <textarea
              value="Jalan Krakatau"
              className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
            />
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1">Jenis Kelamin</label>
              <input
                type="text"
                value="Laki-Laki"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">No. Telp Whatsapp</label>
              <input
                type="text"
                value="08139798667988"
                className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1">Tanggal Pembuatan Akun</label>
            <input
              type="text"
              value="2024/06/05"
              className="px-3 py-2 rounded-lg border border-slate-300 cursor-not-allowed" disabled
            />
          </div>

          <div className="flex justify-end items-center">
            <Link href="/dashboard/admin/member" className="border border-red-500 px-3 py-2 text-red-500 rounded-lg">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
