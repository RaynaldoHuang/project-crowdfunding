"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function AdminMember() {
  const [initial, setInitial] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleInputChange = (event: any) => {
    const data = initial;

    const filtered = data.filter((item: any) =>
      item.accountUsername.toLowerCase().includes(event.currentTarget.value)
    );
    setMembers(filtered);
  };

  const fetchMembers = async () => {
    const res = await fetch("/api/member");
    const data = await res.json();

    setMembers(data["members"]);
    setInitial(data.members);
  };

  return (
    <div className="ml-64">
      <div className="mt-20 mx-5 bg-white px-5 py-10 mb-10 rounded-xl">
        <div className="flex justify-between items-center mb-10">
          <div className="text-lg font-bold">List Member</div>
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
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-sky-600 block w-[350px] p-2.5 pl-12"
              placeholder="Pencarian Username..."
            />
          </div>
        </div>

        <table className="table-auto w-full">
          <thead className="text-left border-b-2">
            <tr className="">
              <th className="font-normal text-xs text-slate-500 pb-2">
                Nama Depan
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2">
                Nama Belakang
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2">
                Nama Pengguna
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2">
                Jenis Kelamin
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2">
                Tanggal Dibuat
              </th>
              <th className="font-normal text-xs text-slate-500 pb-2"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member: any) => (
              <tr key={member.id} className="border-b">
                <td className="text-xs py-5">{member.firstName}</td>
                <td className="text-xs">{member.lastName}</td>
                <td className="text-xs">{member.accountUsername}</td>
                <td
                  className={clsx(
                    "text-xs",
                    member.gender == "MALE" ? "text-sky-600" : "text-red-600"
                  )}
                >
                  {member.gender == "MALE" ? "Laki-Laki" : "Perempuan"}
                </td>
                <td className="text-xs">{member.createdDate.split("T")[0]}</td>
                <td className="text-xs">
                  <Link
                    href={`/dashboard/admin/member/${member.id}`}
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
    </div>
  );
}
