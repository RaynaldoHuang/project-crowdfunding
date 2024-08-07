"use client";

import Link from "next/link";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { CircularProgress, Input } from "@nextui-org/react";
import { FormEvent, useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

import { useRouter } from "next/navigation";

export default function CampaignDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter()

  const [news, setNews] = useState([])
  const [images, setImages] = useState([])
  const [url, setURL] = useState("")
  const [eventName, setEventName] = useState("");
  const [statusEvent, setStatusEvent] = useState("");
  const [descEvent, setDescEvent] = useState("");
  const [fundNeed, setFundNeed] = useState("");
  const [fundAccumulated, setFundAccumulated] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errors, setErrors] = useState({
    eventName: "",
    descEvent: "",
    fundNeed: "",
    deadline: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [border, setBorder] = useState({
    eventBorder: "true",
    descBorder: "true",
    fundBorder: "true",
    deadlineBorder: "true",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCampaignDetail();
  }, []);

  const fetchCampaignDetail = async () => {
    const res = await fetch("/api/campaign-detail", {
      method: "POST",
      body: JSON.stringify({
        id: params.slug,
      }),
    });

    const data = await res.json();

    console.log(data)

    setEventName(data["campaign"].eventName);
    setStatusEvent(data["campaign"].status);
    setDescEvent(data["campaign"].eventDescription);
    setFundNeed(data["campaign"].fundsNeeded);
    setFundAccumulated(data["campaign"].fundsAccumulated);
    setDeadline(data["campaign"].deadline);

    setNews(data.news)
    setImages(data.images)
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData: any = new FormData(event.currentTarget);

    let valid: any = validateForm(formData);

    if (valid && formData.get('file').size != 0) {
      const storageRef = ref(storage, 'images/' + formData.get('file').name)
      const uploadTask = uploadBytesResumable(storageRef, formData.get('file'));

      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log('Error: ', error)
          return
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const res = await fetch("/api/campaign-detail", {
              method: "PUT",
              body: JSON.stringify({
                eventName: formData.get("event"),
                status: formData.get("status"),
                eventDescription: formData.get("desc"),
                fundsNeeded: formData.get("fundsNeeded"),
                deadline: formData.get("deadline"),
                id: params.slug,
                imgUrl: downloadURL,
                news: formData.get('news')
              }),
            });

            const data = await res.json();

            if (data.success) {
              router.push('/dashboard/admin/campaign')
            }

            setIsLoading(false)
          });
        }
      );
    } else {
      const res = await fetch("/api/campaign-detail", {
        method: "PUT",
        body: JSON.stringify({
          eventName: formData.get("event"),
          status: formData.get("status"),
          eventDescription: formData.get("desc"),
          fundsNeeded: formData.get("fundsNeeded"),
          deadline: formData.get("deadline"),
          id: params.slug,
          imgUrl: "",
          news: formData.get('news')
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push('/dashboard/admin/campaign')
      }

      setIsLoading(false)
    }
  };

  const styles = {
    error: {
      color: "red",
      fontSize: "14px",
      marginTop: "1px",
    },
  };

  const validateForm = (formData: any) => {
    let valid = true;
    const date = new Date();

    let errors = { eventName: "", descEvent: "", fundNeed: "", deadline: "" };
    let border = {
      eventBorder: "true",
      descBorder: "true",
      fundBorder: "true",
      deadlineBorder: "true",
    };

    if (formData.get("event") == "") {
      errors.eventName = "Nama Campaign diperlukan.";
      border.eventBorder = "false";

      valid = false;
    }

    if (formData.get("desc") == "") {
      errors.descEvent = "Deskripsi Campaign diperlukan.";
      border.descBorder = "false";

      valid = false;
    } else if (formData.get("desc").length > 10000) {
      errors.descEvent = "Deskripsi Campaign terlalu panjang.";
      border.descBorder = "false";

      valid = false;
    }

    if (formData.get("fundsNeeded") == "") {
      errors.fundNeed = "Please enter the funds.";
      border.fundBorder = "false";

      valid = false;
    }

    const deadline = new Date(formData.get("deadline"));

    if (deadline.getTime() <= date.getTime()) {
      errors.deadline = "Date can't be smaller than today's date";
      border.deadlineBorder = "false";

      valid = false;
    }

    setErrors(errors);
    setBorder(border);
    setIsFormValid(Object.keys(errors).length === 0);

    return valid;
  };

  return (
    <div className="ml-64">
      <div className="mt-20 mx-5 bg-white px-5 py-10 mb-10 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Judul Kampanye</label>
              <input
                type="text"
                name="event"
                onChange={(e) => setEventName(e.target.value)}
                value={eventName}
                className={clsx(
                  "px-3 py-2 rounded-lg bg-gray-100",
                  border.eventBorder == "true"
                    ? "border-slate-300"
                    : "border-red-600"
                )}
              />
              {errors.eventName && (
                <p style={styles.error}>{errors.eventName}</p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label className="mb-1 text-sm">Status</label>
              <select
                name="status"
                onChange={(e) => setStatusEvent(e.target.value)}
                value={statusEvent}
                className="px-3 py-2 rounded-lg bg-gray-100"
                id='campaignStatus'
                style={{ borderRight: "12px solid rgb(243 244 246)" }}
              >
                <option value="PENDING">Pending</option>
                <option value="ONGOING">Approve</option>
                <option value="FINISHED">Finish</option>
                <option value="CANCELED">Reject</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-sm">Deskripsi Kampanye</label>
            <textarea
              name="desc"
              onChange={(e) => setDescEvent(e.target.value)}
              value={descEvent}
              className={clsx(
                "px-3 py-2 rounded-lg bg-gray-100",
                border.descBorder == "true"
                  ? "border-slate-300"
                  : "border-red-600"
              )}
            />
            {errors.descEvent && <p style={styles.error}>{errors.descEvent}</p>}
          </div>

          <div className="grid grid-cols-2 gap-x-5 mb-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Dana Yang Dibutuhkan</label>
              <input
                type="text"
                name="fundsNeeded"
                onChange={(e) => setFundNeed(e.target.value)}
                value={fundNeed}
                className={clsx(
                  "px-3 py-2 rounded-lg bg-gray-100",
                  border.fundBorder == "true"
                    ? "border-slate-300"
                    : "border-red-600"
                )}
              />
              {errors.fundNeed && <p style={styles.error}>{errors.fundNeed}</p>}
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Dana Terkumpul</label>
              <input
                type="text"
                value={`${fundAccumulated}`}
                className="px-3 py-2 rounded-lg bg-gray-100 border-slate-300 cursor-not-allowed"
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-sm">Batas Waktu Kampanye</label>
            <input
              type="date"
              name="deadline"
              onChange={(e) => setDeadline(e.target.value)}
              value={deadline.split("T")[0]}
              className={clsx(
                "px-3 py-2 rounded-lg bg-gray-100",
                border.deadlineBorder == "true"
                  ? "border-slate-300"
                  : "border-red-600"
              )}
            />
            {errors.deadline && <p style={styles.error}>{errors.deadline}</p>}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-sm">Gambar Pendukung</label>

            <div className="grid grid-cols-4 gap-4 mb-5">
              {
                images.map((i: any, index) => (
                  <div key={index} className="w-full">
                    <img src={i.imageLink} alt='campaign' className="object-cover w-full h-40 rounded-md" />
                  </div>
                ))
              }
            </div>

            <div className="border border-dashed border-slate-300 rounded-lg py-20 flex justify-center">
              <input name='file' type="file" accept=".png, .jpg, .jpeg" multiple />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-1 text-sm">Kabar Terbaru</label>

            <div className="mb-5">
              {
                news.map((n: any, index) => (
                  <li>
                    <p key={index} className="flex flex-col mb-3 text-balance">{n.updateNews}<span className="text-sm text-slate-400">{n.createdDate.split('T')[0]}</span></p>
                  </li>
                ))
              }
            </div>

            <textarea name='news' className="px-3 py-2 rounded-lg bg-gray-100" />
          </div>

          <div className="flex justify-end items-center">
            <Link
              href="/dashboard/admin/campaign"
              className="border border-red-500 px-2 py-2 text-red-500 mx-5 rounded-lg"
            >
              Cancel
            </Link>
            <Button
              type="submit"
              className="bg-sky-600 px-3 py-2 rounded-lg text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <CircularProgress
                    aria-label="Loading..."
                    size="sm"
                    className="me-3"
                  />
                  <span>Memuat...</span>
                </div>
              ) : (
                <>Simpan Data</>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
