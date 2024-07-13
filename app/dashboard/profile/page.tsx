"use client";

import Link from "next/link";
import { CircularProgress, Input } from "@nextui-org/react";
import { FormEvent, useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";

export default function ProfileAcc() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [created, setCreated] = useState("");

  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    fetchProfileAcc();
  }, []);

  const logout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST'
    })

    const data = await res.json()

    if (data.success) {
      location.reload()
    }
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const fetchProfileAcc = async () => {
    const response = await fetch("/api/profile", {
      method: "POST",
    });

    const data = await response.json();

    setUsername(data["profileAcc"][0].accountUsername);
    setFirst(data["profileAcc"][0].firstName);
    setLast(data["profileAcc"][0].lastName);
    setGender(data["profileAcc"][0].gender);
    setAddress(data["profileAcc"][0].address);
    setCity(data["profileAcc"][0].city);
    setBirthDate(data["profileAcc"][0].birthdate);
    setEmail(data["profileAcc"][0].username.email);
    setPhoneNumber(data["profileAcc"][0].phoneNumber);
    setCreated(data["profileAcc"][0].createdDate);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const res = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        first: formData.get('first'),
        last: formData.get('last'),
        gender: formData.get('jenisKelamin'),
        address: formData.get('alamat'),
        city: formData.get('tempatLahir'),
        birthDate: formData.get('tanggalLahir') + "T00:00:00.000Z",
        email: formData.get('email'),
        phoneNumber: formData.get('noTelp'),
      }),
    });

    const data = await res.json();

    setIsLoading(false)
    setMessage(data.message)

    if (data.success) {
      setSuccess(true)
    }
  };

  return (
    <>
      <div className="ml-64">
        <div className="flex">
          <div className="w-full">
            <div className="mt-20 mx-5 bg-white px-5 py-7 mb-7 rounded-xl">
              {message && <p className={clsx('px-3 py-2 w-full rounded-md mb-5', success ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200")}>{message}</p>}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg font-bold mb-1">Informasi Akun</h1>
                  <p className="text-xs text-slate-500">
                    Ubah informasi akun Anda di sini untuk memperbarui profile,
                    kata sandi, dana preferensi lainnya.
                  </p>
                </div>
                <button
                  onClick={onOpen}
                  className="bg-sky-600 px-4 h-10 rounded-lg text-white text-sm"
                >
                  Keluar
                </button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Konfirmasi Keluar
                        </ModalHeader>
                        <ModalBody>
                          <p>Apakah anda yakin ingin keluar?</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Kembali
                          </Button>
                          <Button color="primary" onClick={logout} onPress={onClose}>
                            Keluar
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
              <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Username</label>
                    <input
                      type="text"
                      placeholder="Masukkan username kamu"
                      value={username}
                      disabled
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm cursor-not-allowed"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Nama Depan</label>
                      <input
                        type="text"
                        placeholder="Masukkan nama depan kamu"
                        onChange={(e) => setFirst(e.currentTarget.value)}
                        name='first'
                        value={first}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Nama Belakang</label>
                      <input
                        type="text"
                        placeholder="Masukkan nama belakang kamu"
                        onChange={(e) => setLast(e.target.value)}
                        name='last'
                        value={last}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Jenis Kelamin</label>
                    <select
                      name='jenisKelamin'
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                      className="px-3 py-2 rounded-lg bg-gray-100 text-sm"
                      style={{ borderRight: "12px solid rgb(243 244 246)" }}
                      disabled={!isEditing}
                    >
                      <option value="">Tidak Terisi</option>
                      <option value="MALE">Laki-Laki</option>
                      <option value="FEMALE">Perempuan</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Alamat Lengkap</label>
                    <input
                      type="text"
                      placeholder="Masukkan alamat kamu"
                      onChange={(e) => setAddress(e.target.value)}
                      name='alamat'
                      value={address}
                      disabled={!isEditing}
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Tempat Lahir</label>
                      <input
                        type="text"
                        placeholder="Masukkan tempat lahir"
                        onChange={(e) => setCity(e.target.value)}
                        name='tempatLahir'
                        value={city}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Tanggal Lahir</label>
                      <input
                        type="date"
                        placeholder="Masukkan tanggal lahir"
                        onChange={(e) => setBirthDate(e.target.value)}
                        name='tanggalLahir'
                        value={birthDate.split("T")[0]}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm "
                        style={{ padding: "9px 12px 9px 12px" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Alamat Email</label>
                    <input
                      type="text"
                      placeholder="Masukkan email kamu"
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                      value={email}
                      disabled={!isEditing}
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Nomor Telepon</label>
                    <input
                      type="number"
                      placeholder="Masukkan nomor telepon kamu"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      name='noTelp'
                      value={phoneNumber}
                      disabled={!isEditing}
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Tanggal Bergabung</label>
                    <input
                      type="date"
                      value={created.split("T")[0]}
                      disabled
                      readOnly
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm cursor-not-allowed"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Ganti Kata Sandi</label>
                    <input
                      type="password"
                      value={"asasasas"}
                      disabled
                      readOnly
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                    />
                    <Link
                      href={"profile/katasandi"}
                      className="mt-2 text-xs text-sky-600 w-fit"
                    >
                      Klik disini untuk ganti kata sandi
                    </Link>
                  </div>
                </div>

                <div className={isEditing ? "flex justify-end items-end mt-5" : 'hidden'}>
                  <button
                    onClick={() => location.reload()}
                    className="border border-red-500 px-3 py-2 text-red-500 rounded-lg me-3 text-sm"
                  >
                    Kembali
                  </button>
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
              <div className="flex justify-end items-end">
                <button
                  onClick={toggleEdit}
                  className={isEditing ? "hidden" : "bg-sky-600 px-3 py-2 rounded-lg text-white text-sm mt-5"}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
