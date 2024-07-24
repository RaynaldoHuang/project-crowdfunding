"use client";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ListHistory() {
  const [initial, setInitial] = useState([]);
  const [dynamicArr, setDynamicArr] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const response = await fetch("/api/member-history");
    const data = await response.json();

    setDynamicArr(data.getDonationHistory);
    setInitial(data.getDonationHistory)
    setLoading(false);
  };

  const handleChange = (event: any) => {
    const data = initial

    const filtered = data.filter((item: any) => item.campaign.eventName.toLowerCase().includes(event.currentTarget.value.toLowerCase()))

    setDynamicArr(filtered)
  }

  return (
    <div className="ml-64">
      <div className="mt-20 mx-5 bg-white px-5 py-10 mb-10 rounded-xl">
        <div className="flex justify-between mb-10">
          <div className="text-lg font-bold">History Transaksi Donasi</div>
          <div className="flex">
            <div className="relative mr-3">
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
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[350px] p-2.5 pl-12"
                placeholder="Pencarian..."
              />
            </div>
          </div>
        </div>

        <table className="table-fixed w-full">
          <thead className="text-left border-b-2">
            <tr className="">
              <th className="font-normal text-xs w-1/4 text-slate-500 pb-2 pe-2">
                Judul Kampanye
              </th>
              <th className="font-normal text-xs w-1/2 text-slate-500 pb-2 pe-2">
                Deskripsi
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2 pe-2">
                Jumlah Donasi
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2 pe-2">
                Tanggal Donasi
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2 pe-2"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, idx) => (
                <tr key={idx} className="border-b">
                  <td className="text-xs py-5 pe-5 truncate"><Skeleton /></td>
                  <td className="text-xs pe-10 truncate "><Skeleton /></td>
                  <td className="text-xs pe-5 "><Skeleton /></td>
                  <td className="text-xs pe-5"><Skeleton /></td>
                </tr>
              ))
            ) : (
              dynamicArr.map((c: any, idx) => (
                <tr key={idx} className="border-b">
                  <td className="text-xs py-5 pe-5 truncate">{c.campaign.eventName}</td>
                  <td className="text-xs pe-10 truncate ">{c.campaign.eventDescription}</td>
                  <td className="text-xs pe-5 ">Rp{c.amount.toLocaleString()}</td>
                  <td className="text-xs pe-5">{c.donateDate.split("T")[0]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
