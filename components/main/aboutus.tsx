import img1 from "@/public/images/img1.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="lg:max-w-8xl mx-auto lg:mt-32">
        <div className="w-11/12 mx-auto mt-10 pb-12 overflow-x-hidden">
          <div className="mb-8">
            <div className="lg:flex lg:flex-col lg:items-center">
              <p className="text-orange-500 text-base mt-10">Tentang Kami</p>
              <h1 className="text-2xl lg:text-center font-bold text-sky-900 mt-4 lg:text-4xl lg:w-7/12">
                Apa yang bisa Anda sumbangkan kepada mereka yang membutuhkan?
              </h1>
              <p className="text-slate-500 text-base mt-4 lg:w-1/2 lg:text-center">
                Ada banyak hal yang mereka butuhkan dari mainan, makanan,
                pakaian dan sebagainya. Mereka sangat senang ketika mereka
                memiliki hal-hal yang mereka miliki.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-between gap-x-8 mt-20">
            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4">
              {/* <Image alt="" src={img1} height={500} width={500} className="rounded-full"></Image> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-13"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Andian Bramlie, S.kom
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Ketua Organisasi
                </p>
              </div>
            </div>

            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4">
              {/* <Image alt="" src={img1} height={500} width={500} className="rounded-full"></Image> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-13"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Andian Bramlie, S.kom
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Ketua Organisasi
                </p>
              </div>
            </div>

            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4">
              {/* <Image alt="" src={img1} height={500} width={500} className="rounded-full"></Image> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-13"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Andian Bramlie, S.kom
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Ketua Organisasi
                </p>
              </div>
            </div>

            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4">
              {/* <Image alt="" src={img1} height={500} width={500} className="rounded-full"></Image> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-13"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Andian Bramlie, S.kom
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Ketua Organisasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
