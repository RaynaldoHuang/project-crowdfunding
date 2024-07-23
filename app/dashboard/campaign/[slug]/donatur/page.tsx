"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Donatur({ params }: { params: { slug: string } }) {
  const path = usePathname()
  const [dynamicArr, setDynamicArr] = useState([]);
  const [donatorAccumulated, setDonatorAccumulated] = useState(0)
  useEffect(() => {
    fetchAllDonator();
  }, []);

  const fetchAllDonator = async () => {
      const res = await fetch("/api/campaign-detail-member", {
      method: "POST",
      body: JSON.stringify({
        id: params.slug,
      }),
    });

    const data = await res.json();
    setDonatorAccumulated(data.totalDonator._count.profileId)
    let donator = data["allDonators"];
    setDynamicArr(donator);
  };
  return (
    <>
      <div className="ml-64">
        <div className="mt-20 mx-5 bg-white px-5 py-5 mb-10 rounded-xl">
          <div className="flex mb-5 justify-between items-center">
            <div className="flex">
              <div className="text-lg font-bold me-3">Para Donatur</div>
              <div className="bg-sky-200 px-2 py-1 rounded-md flex justify-center items-center">
                <h1 className="font-bold text-sky-800 text-sm">{donatorAccumulated}</h1>
              </div>
            </div>
            <Link href={`/dashboard/campaign/${path.split("/")[3]}`} className="border border-red-500 px-3 text-red-500 rounded-lg h-10 text-sm">
              Kembali
            </Link>
          </div>
          {dynamicArr.map((c: any) => (
            <div key={c.id} className="grid mb-3">
              <div className="flex items-center bg-gray-100 rounded-lg px-5 py-5">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-7 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-5">
                  <h1 className="font-bold text-base">
                    {c.profile.accountUsername}
                  </h1>
                  <p className="text-xs">
                    berdonasi Sebesar{" "}
                    <span className="font-bold text-sm">Rp{c.amount}</span>
                  </p>
                  {/* <p className="text-xs mt-2">{c.donationDate.split('T')[0]}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
