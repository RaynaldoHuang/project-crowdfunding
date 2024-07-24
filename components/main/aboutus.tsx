import prof1 from "@/public/images/prof1.png";
import prof2 from "@/public/images/prof2.png";
import prof3 from "@/public/images/prof3.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="lg:max-w-8xl mx-auto lg:mt-32">
        <div className="w-11/12 mx-auto mt-10 pb-12 overflow-x-hidden">
          <div className="mb-8">
            <div className="lg:flex lg:flex-col lg:items-center">
              <p className="text-orange-500 text-base mt-10">TENTANG KAMI</p>
              <h1 className="text-2xl lg:text-center font-bold text-sky-900 mt-4 lg:text-4xl lg:w-7/12">
                Kami akan selalu menjaga kepercayaan anda kepada kami
              </h1>
              <p className="text-slate-500 text-base mt-4 lg:w-1/2 lg:text-center">
                Visi dan misi ini diarahkan untuk menciptakan platform crowdfunding yang tidak hanya berfokus pada mengumpulkan dana, tetapi juga pada membangun komunitas yang kuat dan berkelanjutan
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 justify-between gap-x-8 mt-20">
            <div className="border border-slate-300 rounded-xl pt-4 pb-6 flex flex-col items-center mb-4 lg:mb-0">
              <div className="mb-5">
                <Image alt="" src={prof1} className="rounded-full w-60 h-60"></Image>
              </div>
              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Andian Bramlie, S.kom
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Ketua Organisasi
                </p>
              </div>
            </div>

            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4 flex flex-col items-center mb-4 lg:mb-0">
              <div className="mb-5">
                <Image alt="" src={prof2} className="rounded-full w-60 h-60"></Image>
              </div>
              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Yeremy Frederick
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Wakil Ketua Organisasi
                </p>
              </div>
            </div>

            <div className="border border-slate-300 rounded-xl pt-4 pb-6 px-4 flex flex-col items-center">
              <div className="mb-5">
                <Image alt="" src={prof3} className="rounded-full w-60 h-60"></Image>
              </div>
              <div className="pb-0 pt-2 flex-col items-start">
                <h1 className="text-xl font-semibold text-balance line-clamp-2 text-center">
                  Raynaldo
                </h1>
                <p className="text-slate-500 text-base mt-1 line-clamp-3 text-balance text-center">
                  Bendahara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
