import Link from "next/link"

export default function ThanksPage() {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-11/12 mx-auto">
                <div className="drop-shadow-md bg-white rounded-lg px-3 py-5 w-[520px]">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl mb-2">Terima Kasih</h1>
                        <p className="text-sm mb-5">Kamu berhasil melakukan 1 kebaikan hari ini</p>
                        <Link href="" className="text-red-600 text-sm"> Kembali</Link>
                    </div>
                </div>
            </div>
        </>
    )
}