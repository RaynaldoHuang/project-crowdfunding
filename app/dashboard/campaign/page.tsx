"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/img1.jpg";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function CampaignMember() {
    const [initial, setInitial] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [dynamicArr, setDynamicArr] = useState([]);
    const [initialDynamic, setInitialDynamic] = useState([]);
    const [prev, setPrev] = useState("ONGOING");
    const [loading, setLoading] = useState(true);

    const categories = [
        { id: 0, title: "Sedang Berjalan", status: "ONGOING" },
        { id: 1, title: "Selesai", status: "FINISHED" },
    ];

    const handleInputChange = (event: any) => {
        const data = initialDynamic;

        const filtered = data.filter((item: any) =>
            item.eventName.toLowerCase().includes(event.currentTarget.value.toLowerCase())
        );

        setDynamicArr(filtered);
    };

    useEffect(() => {
        fetchCampaignData();
    }, []);

    useEffect(() => {
        document.getElementById("ONGOING")?.click();
    }, [campaigns]);

    const fetchCampaignData = async () => {
        const res = await fetch("/api/campaign");
        const data = await res.json();

        setCampaigns(data["campaigns"]);

        const ongoingCampaigns = data["campaigns"].filter(
            (campaign: any) => campaign.status == "ONGOING"
        );

        setDynamicArr(ongoingCampaigns);
        setInitial(ongoingCampaigns);
        setInitialDynamic(ongoingCampaigns);
        setLoading(false);
    };

    const handleClick = (event: any) => {
        const btn = event.currentTarget;
        const btnText = btn.textContent;

        let stats: string;

        const prevBtn: any = document.getElementById(prev);
        prevBtn.className =
            "bg-[#7E84A3] text-white w-fit text-xs mr-4 px-4 py-2 rounded-full";

        for (let idx in categories) {
            if (categories[idx]["title"] == btnText) {
                const btn: any = document.getElementById(categories[idx]["status"]);
                console.log(btn);
                btn.className =
                    "bg-sky-600 text-white w-fit text-xs mr-4 px-4 py-2 rounded-full";

                setPrev(categories[idx]["status"]);

                stats = categories[idx]["status"];

                break;
            }
        }
        let result = campaigns.filter((c: any) => c.status == stats);
        setDynamicArr(result);
        setInitialDynamic(result)
    };

    return (
        <div className="lg:ml-64">
            <div className="lg:w-full px-5 lg:mt-20 mt-24 mb-24 lg:mb-10">
                <div className="mb-5 bg-white py-5 rounded-xl px-3 lg:flex lg:justify-between lg:items-center">
                    <div className="text-xl font-bold mb-5 lg:mb-0">
                        Bantu Siapa Hari Ini?
                    </div>
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
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[326px] p-2.5 pl-12"
                            placeholder="Pencarian Judul Kampanye"
                        />
                    </div>
                </div>

                <div className="flex my-8">
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            onClick={handleClick}
                            className="bg-[#7E84A3] text-white focus:bg-sky-600 text-xs mr-4 px-4 py-2 rounded-full"
                            id={c.status}
                        >
                            <p>{c.title}</p>
                        </button>
                    ))}
                </div>
                <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 gap-x-2 gap-y-4">
                    {loading
                        ? Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="bg-white px-3 py-3 rounded-2xl">
                                <Skeleton height={200} />
                                <div className="pb-0 pt-2 flex-col items-start">
                                    <Skeleton count={2} />
                                    <Skeleton height={30} width={150} />
                                    <Skeleton height={40} width={200} style={{ marginTop: '20px' }} />
                                </div>
                            </div>
                        ))
                        : dynamicArr.map((c: any, idx) => (
                            <div key={idx}>
                                <div className="bg-white px-3 py-3 rounded-2xl">
                                        <img
                                            src={c.campaignImage.length == 0 ? img1 : c.campaignImage[0].imageLink}
                                            alt={"gambar donasi"}
                                            className="object-cover w-full h-full absolute inset-0 rounded-xl w-64 h-56 overflow-hidden relative"
                                        />                
                                    <div className="pb-0 pt-2 flex-col items-start">
                                        <h1 className="text-xl font-bold mt-2 line-clamp-2 text-balance">
                                            {c.eventName}
                                        </h1>
                                        <p className="text-slate-500 text-sm mt-4 line-clamp-2 text-balance">
                                            {c.eventDescription}
                                        </p>
                                        <p className="text-orange-500 text-base mt-2">
                                            Dana Dibutuhkan Rp{c.fundsNeeded.toLocaleString()}
                                        </p>
                                        <Link href={`/dashboard/campaign/${c.id}`}>
                                            <button className="text-white px-8 mt-4 py-2 bg-sky-600 rounded-xl text-sm text-center w-full">
                                                Lihat Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
