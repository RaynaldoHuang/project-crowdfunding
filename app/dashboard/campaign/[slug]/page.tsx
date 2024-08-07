"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/public/images/img1.jpg";
import img3 from "@/public/images/img3.jpg";
import { Button, Progress } from "@nextui-org/react";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import img6 from "@/public/svgs/img6.svg";

export default function DetailCampaign({
  params,
}: {
  params: { slug: string };
}) {
  const [accountUsername, setAccountUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [eventName, setEventName] = useState("");
  const [status, setStatus] = useState("");
  const [fundAccumulated, setFundAccumulated]: [any, any] = useState(0);
  const [fundsNeeded, setFundNeeded]: [any, any] = useState(0);
  const [eventDescription, setEventDescription] = useState("");
  const [eventDeadline, setEventDeadline] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [donatorAccumulated, setDonatorAccumulated] = useState(0);
  const [kabarTerbaruAda, setKabarTerbaruAda] = useState(true);
  const [campaignImage, setCampaignImage] = useState("");
  // const [newsDate, setNewsDate] = useState("");
  const [news, setNews] = useState([]);
  const [dynamicArr, setDynamicArr] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchCampaigDetail();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     calculateRemainingTime();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [eventDeadline]);

  const fetchCampaigDetail = async () => {
    const res = await fetch("/api/campaign-detail-member", {
      method: "POST",
      body: JSON.stringify({
        id: params.slug,
      }),
    });

    const data = await res.json();

    setImages(data.images);
    setAccountUsername(data["campaignDetailMember"][0].profile.accountUsername);
    setFirstName(data["campaignDetailMember"][0].profile.firstName);
    setLastName(data["campaignDetailMember"][0].profile.lastName);
    setDateCreated(
      data["campaignDetailMember"][0].profile.createdDate.split("T")[0]
    );
    setEventName(data["campaignDetailMember"][0].eventName);
    setStatus(data["campaignDetailMember"][0].status);
    setFundAccumulated(data["campaignDetailMember"][0].fundsAccumulated);
    setFundNeeded(data["campaignDetailMember"][0].fundsNeeded);
    setEventDescription(data["campaignDetailMember"][0].eventDescription);
    setEventDeadline(data["campaignDetailMember"][0].deadline.split("T")[0]);
    setDonatorAccumulated(data.totalDonatorCount);
    // setNewsDate(data["campaignDetailMember"][0].news[0].createdDate.split("T")[0]);
    // setNews(data["campaignDetailMember"][0].news[0].updateNews);
    setNews(data["campaignDetailMember"][0].news);
    setCampaignImage(
      data["campaignDetailMember"][0].campaignImage[0].imageLink
    );

    let donator = data.listDonators.slice(0, 3);
    setDynamicArr(donator);
  };

  const calculateRemainingTime = () => {
    const now: any = new Date();
    const deadline: any = new Date(eventDeadline);
    const timeDifference = deadline - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setRemainingTime(
        `${days}hari ${hours}jam ${minutes}menit ${seconds}detik`
      );
    } else {
      setRemainingTime("Expired");
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const shareCampaign = () => {
    if (navigator.share) {
      navigator
        .share({
          title: eventName,
          text: eventDescription,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  const getStatusColor = (status: any) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-blue-400";
      case "canceled":
        return "bg-red-400";
      case "pending":
        return "bg-yellow-400";
      case "finished":
        return "bg-green-400";
      default:
        return "bg-gray-400"; // Default color for unhandled status
    }
  };

  return (
    <div className="lg:ml-64">
      <div className="w-full px-5 lg:mt-20 mt-24 lg:mb-10 mb-20">
        {/* dekstop-view */}
        <div className="hidden lg:block">
          <div className="flex gap-x-3">
            <div className="w-4/6 bg-white px-5 py-5 rounded-xl">
              <div className="slider-container rounded-xl overflow-hidden bg-red-600">
                <Slider {...settings} className="h-80">
                  {images.map((i: any, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={i.imageLink}
                        alt="gambar donasi"
                        className="ovject-cover w-full h-80 rounded-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="py-5">
                <h1 className="text-2xl font-bold mb-1">{eventName}</h1>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs">
                      Batas Waktu:{" "}
                      <span className="font-semibold text-red-600">
                        {eventDeadline}
                      </span>
                    </p>
                    <p className="text-xs">
                      Sisa Waktu:{" "}
                      <span className="font-semibold text-red-600">
                        {remainingTime}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`${getStatusColor(
                      status
                    )} py-1 px-4 rounded-md font-semibold text-white text-xs`}
                  >
                    <div>{status}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h1 className="font-bold text-sky-600 text-xl mb-1">
                    Rp{fundAccumulated.toLocaleString()}
                  </h1>
                  <p className="text-xs">
                    Terkumpul dari{" "}
                    <span className="font-bold">
                      Rp{fundsNeeded.toLocaleString()}
                    </span>
                  </p>
                </div>
                <div>
                  <Button
                    variant="bordered"
                    className={`border-sky-600 text-white px-8 py-2 rounded-xl mr-2 text-sky-600 ${status.toLowerCase() == "finished" ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={shareCampaign}
                    disabled={status.toLowerCase() == "finished"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                      />
                    </svg>
                    <h1>Bagikan</h1>
                  </Button>
                  {status.toLowerCase() !== "finished" ? (
                    <Link
                      href={`/dashboard/campaign/${params.slug}/donate`}
                      className="bg-yellow-500 text-white px-6 py-2.5 rounded-xl text-sm"
                    >
                      Donasi Sekarang
                    </Link>
                  ) : (
                    <button
                      className="bg-yellow-500 opacity-50 text-white px-6 py-2.5 rounded-xl text-sm cursor-not-allowed"
                      disabled
                    >
                      Donasi Sekarang
                    </button>
                  )}
                </div>
              </div>
              <Progress
                aria-label="Close"
                size="sm"
                value={fundAccumulated}
                maxValue={fundsNeeded}
                color="warning"
              />
            </div>
            <div className="w-2/6">
              <div className="bg-white px-5 py-5 rounded-xl mb-3">
                <h1 className="text-lg font-bold mb-5">Penggalang Dana</h1>
                <div className="flex items-center rounded-lg">
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
                    <h1 className="font-bold text-sm">{accountUsername}</h1>
                    <p className="text-xs mt-1">{`${firstName} ${lastName}`}</p>
                    <p className="text-xs mt-1">Mulai aktif {dateCreated}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white px-5 py-5 rounded-xl">
                <Link
                  href={`/dashboard/campaign/${params.slug}/donatur`}
                  aria-label="Close"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex">
                      <h1 className="text-lg font-bold mr-3">Para Donatur</h1>
                      <div className="bg-sky-200 px-2 py-1 rounded-md flex justify-center items-center">
                        <h1 className="font-bold text-sky-800 text-sm">
                          {donatorAccumulated}
                        </h1>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
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
                        <h1 className="font-bold text-base">{c.user}</h1>
                        <p className="text-xs">
                          berdonasi Sebesar{" "}
                          <span className="font-bold text-sm">
                            Rp{c.amount}
                          </span>
                        </p>
                        {/* <p className="text-xs mt-2">{c.donationDate.split('T')[0]}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-2 mt-3 rounded-xl">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <h1 className="font-bold text-lg">
                    Cerita Penggalangan Dana
                  </h1>
                }
              >
                <p className="text-base">{eventDescription}</p>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white px-5 py-2 mt-3 rounded-xl">
            <Accordion>
              <AccordionItem
                key="2"
                aria-label="Accordion 1"
                title={<h1 className="font-bold text-lg">Kabar Terbaru</h1>}
              >
                {kabarTerbaruAda ? (
                  <>
                    <div className="flex flex-col mb-5">
                      {news.map((n: any, index) => (
                        <div className="py-3">
                          <h1
                            key={index}
                            className="font-semibold text-sky-600 mb-2"
                          >
                            {n.createdDate.split("T")[0]}{" "}
                          </h1>
                          <p key={index} className="text-base">
                            {n.updateNews}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* <Button className="text-sky-600 bg-sky-100" variant="flat">
                      Lihat Semua
                    </Button> */}
                  </>
                ) : (
                  <div className="text-base items-center flex flex-col justify-center mb-5">
                    <Image
                      src={img6}
                      alt=""
                      className="mb-8"
                      width={400}
                    ></Image>
                    <p className="text-slate-400 text-base">
                      Belum ada kabar terbaru untuk Penggalangan dana ini
                    </p>

                    <div className="bg-gray-100 mt-5 px-5 py-5 rounded-md w-2/3">
                      <p className="text-sm">
                        <span className="font-bold">Disclaimer:</span>{" "}
                        Informasi, opini dan foto yang ada di halaman galang
                        dana ini adalah milik dan tanggung jawab penggalang
                        dana. Jika ada masalah/kecurigaan silahkan{" "}
                        <Link href={""} className="text-sky-600">
                          lapor kepada kami disini.
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* mobile-view */}
      <div className="lg:hidden">
        <div className="bg-white px-5 py-5 rounded-xl mx-5">
          <div className="slider-container rounded-lg h-[150px] overflow-hidden">
            <Slider {...settings}>
              <div>
                <Image
                  src={campaignImage}
                  width={800}
                  height={500}
                  alt="campaign"
                  className="!object-cover !w-full !h-full"
                />
              </div>
            </Slider>
          </div>
          <div className="py-5">
            <h1 className="text-xl font-bold mb-1">{eventName}</h1>

            <p className="text-sm">
              Batas Waktu:{" "}
              <span className="font-semibold text-red-600">
                {eventDeadline}
              </span>
            </p>
            <p className="text-sm">
              Sisa Waktu:{" "}
              <span className="font-semibold text-red-600">
                {remainingTime}
              </span>
            </p>
          </div>
          <div className="lg:flex items-center lg:justify-between lg:mb-7">
            <div className="mb-5">
              <h1 className="font-bold text-sky-600 text-xl mb-1">
                Rp{fundAccumulated.toLocaleString()}
              </h1>
              <p className="text-sm">
                Terkumpul dari{" "}
                <span className="font-bold">
                  Rp{fundsNeeded.toLocaleString()}
                </span>
              </p>
            </div>
            <Progress
              aria-label="Close"
              size="sm"
              value={fundAccumulated}
              maxValue={fundsNeeded}
              color="warning"
            />
            <div className="mt-5">
              <Button
                variant="bordered"
                className="border-sky-600 text-white px-8 py-2 rounded-xl mr-2 text-sky-600"
                onClick={shareCampaign}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                  />
                </svg>
                <h1>Bagikan</h1>
              </Button>
              <Link
                href={`/dashboard/campaign/${params.slug}/donate`}
                className="bg-yellow-500 text-white px-6 py-2.5 rounded-xl text-sm"
              >
                Donasi Sekarang
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-5 rounded-xl mb-3 mx-5 mt-3 mx-5 mt-10">
          <h1 className="text-lg font-bold mb-5">Penggalang Dana</h1>
          <div className="flex items-center rounded-lg">
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
              <h1 className="font-bold text-md">{accountUsername}</h1>
              <p className="text-sm mt-1">{`${firstName} ${lastName}`}</p>
              <p className="text-sm mt-1">Mulai aktif {dateCreated}</p>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-2 mt-3 rounded-xl mx-5 mt-10">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <h1 className="font-bold text-lg">Cerita Penggalangan Dana</h1>
              }
            >
              <p className="text-base">{eventDescription}</p>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white px-5 py-2 mt-3 rounded-xl mx-5 mb-5">
          <Accordion>
            <AccordionItem
              key="2"
              aria-label="Accordion 1"
              title={<h1 className="font-bold text-lg">Kabar Terbaru</h1>}
            >
              {/* {kabarTerbaruAda ? (
                <div dangerouslySetInnerHTML={{ __html: news }} />
              ) : (
                <div className="text-base items-center flex flex-col justify-center mb-5">
                  <Image src={img6} alt="" className="mb-8" width={400}></Image>
                  <p className="text-slate-400 text-base">
                    Belum ada kabar terbaru untuk Penggalangan dana ini
                  </p>

                  <div className="bg-gray-100 mt-5 px-5 py-5 rounded-md w-2/3">
                    <p className="text-sm">
                      <span className="font-bold">Disclaimer:</span> Informasi,
                      opini dan foto yang ada di halaman galang dana ini adalah
                      milik dan tanggung jawab penggalang dana. Jika ada
                      masalah/kecurigaan silahkan{" "}
                      <Link href={""} className="text-sky-600">
                        lapor kepada kami disini.
                      </Link>
                    </p>
                  </div>
                </div>
              )} */}
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white px-5 py-5 rounded-xl mx-5 mb-20">
          <Link
            href={`/dashboard/campaign/${params.slug}/donatur`}
            aria-label="Close"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex">
                <h1 className="text-lg font-bold mr-3">Para Donatur</h1>
                <div className="bg-sky-200 px-2 py-1 rounded-md flex justify-center items-center">
                  <h1 className="font-bold text-sky-800 text-sm">
                    {donatorAccumulated}
                  </h1>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
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
                  <h1 className="font-bold text-base">{c.user}</h1>
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
    </div>
  );
}
