"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function FormPengajuan() {
  const [initial, setInitial] = useState([]);
  const [dynamicArr, setDynamicArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequest();
  }, []);

  const handleInputChange = (event: any) => {
    const data = initial;

    const filtered = data.filter((item: any) =>
      item.eventName.toLowerCase().includes(event.currentTarget.value)
    );
    setDynamicArr(filtered);
  };

  const fetchRequest = async () => {
    const res = await fetch("/api/form-pengajuan");

    const data = await res.json();

    console.log(data);

    setDynamicArr(data.getCampaign);
    setInitial(data.getCampaign);
    setLoading(false);

  };
  return (
    <div className="lg:ml-64">
      <div className="lg:mt-20 mt-24 mx-5 bg-white px-5 py-10 lg:mb-10 mb-20 rounded-xl">
        <div className="flex flex-col">
          <div className="lg:flex lg:justify-between">
            <div className="text-lg font-bold mb-5">
              List Pengajuan Kampanye
            </div>
            <div className="lg:flex">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 absolute top-2.5 left-3 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  id="first_name"
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[312px] p-2.5 pl-12 mb-5 me-3"
                  placeholder="Pencarian Judul Kampanye..."
                />
              </div>
              <Link href={"/dashboard/form-pengajuan/form"}>
                <button className="bg-sky-600 text-white text-sm px-3 py-2.5 rounded-lg flex items-center">Ajukan Kampanye</button>
              </Link>
            </div>
          </div>
        </div>

        {/* dekstop view */}
        <div className="hidden lg:block">
          <table className="table-auto w-full">
            <thead className="text-left border-b-2">
              <tr className="">
                <th className="font-normal text-xs text-slate-500 pb-2">
                  Judul Kampanye
                </th>
                <th className="font-normal text-xs text-slate-500 pb-2">
                  Dana Yang Dibutuhkan
                </th>
                <th className="font-normal text-xs text-slate-500 pb-2">
                  Batas Waktu
                </th>
                <th className="font-normal text-xs text-slate-500 pb-2">
                  Status
                </th>
                <th className="font-normal text-xs text-slate-500 pb-2">
                  Tanggal Publikasi
                </th>
                <th className="font-normal text-xs text-slate-500 pb-2"></th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="text-xs py-5 pe-5"><Skeleton /></td>
                    <td className="text-xs pe-5"><Skeleton /></td>
                    <td className="text-xs pe-5"><Skeleton /></td>
                    <td className="text-xs pe-5"><Skeleton /></td>
                    <td className="text-xs pe-5"><Skeleton /></td>
                    <td className="text-xs pe-5"><Skeleton /></td>
                  </tr>
                ))
              ) :
                dynamicArr.map((c: any, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="text-xs py-5">{c.eventName}</td>
                    <td className="text-xs">Rp {c.fundsNeeded.toLocaleString()}</td>
                    <td className="text-xs">{c.deadline.split("T")[0]}</td>
                    <td className={clsx("text-xs")}>{c.status}</td>
                    <td className="text-xs">{c.createdDate.split("T")[0]}</td>
                    <td className="text-xs">
                      <Link
                        href={`/dashboard/form-pengajuan/${c.id}`}
                        className="text-white bg-sky-600 px-3 py-2 rounded"
                      >
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* mobile view */}
        <div className="lg:hidden">
          {loading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white border border-2 px-4 py-4 rounded-2xl mt-6">
                <div className="mb-2">
                  <Skeleton />
                </div>
                <div className="mb-2">
                  <Skeleton />
                </div>
                <div className="mb-2">
                  <Skeleton />
                </div>
                <div className="mb-2">
                  <Skeleton />
                </div>
                <div className="mb-2">
                  <Skeleton />
                </div>
              </div>
            ))
          ) : dynamicArr.map((c: any, idx) => (
            <div key={idx} className="bg-white border border-2 px-4 py-4 rounded-2xl mt-6">
              <div className="flex flex-col">
                <div className="font-bold text-base mb-2 line-clamp-2">
                  Judul Kampanye :
                </div>
                <div className="text-md mb-3">
                  {c.eventName}
                </div>

                <div className="font-bold text-base mb-2">
                  Dana Yang Dibutuhkan :
                </div>
                <div className="text-md mb-3">
                  Rp{c.fundsNeeded.toLocaleString()}
                </div>

                <div className="font-bold text-base mb-2">
                  Batas Waktu :
                </div>
                <div className="text-md mb-3">
                  {c.deadline.split("T")[0]}
                </div>

                <div className="font-bold text-base mb-2">
                  Status :
                </div>
                <div className="text-md mb-3">
                  {c.status}
                </div>

                <div className="font-bold text-base mb-2">
                  Tanggal Publikasi :
                </div>
                <div className="text-md mb-3">
                  {c.createdDate.split("T")[0]}
                </div>

                <Link
                  href={`/dashboard/form-pengajuan/${c.id}`}
                >
                  <button className="text-white bg-sky-600 px-3 py-2 rounded-md">Lihat Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
