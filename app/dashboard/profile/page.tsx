"use client";

import Link from "next/link";
import { CircularProgress } from "@nextui-org/react";
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
  const [profileData, setProfileData] = useState({
    username: "",
    first: "",
    last: "",
    gender: "",
    address: "",
    city: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    created: "",
  });
  const [backupProfileData, setBackupProfileData] = useState(profileData);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProfileAcc();
  }, []);

  const logout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST'
    });

    const data = await res.json();

    if (data.success) {
      location.reload();
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      setProfileData(backupProfileData); // Reset to original data
    } else {
      setBackupProfileData(profileData); // Save original data
    }
    setIsEditing(!isEditing);
  };

  const fetchProfileAcc = async () => {
    const response = await fetch("/api/profile", {
      method: "POST",
    });

    const data = await response.json();

    const profile = {
      username: data["profileAcc"][0].accountUsername,
      first: data["profileAcc"][0].firstName,
      last: data["profileAcc"][0].lastName,
      gender: data["profileAcc"][0].gender,
      address: data["profileAcc"][0].address,
      city: data["profileAcc"][0].city,
      birthDate: data["profileAcc"][0].birthdate,
      email: data["profileAcc"][0].username.email,
      phoneNumber: data["profileAcc"][0].phoneNumber,
      created: data["profileAcc"][0].createdDate,
    };
    setProfileData(profile);
    setBackupProfileData(profile); // Ensure backup data is also updated
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify(profileData),
    });

    const data = await res.json();

    setIsLoading(false);
    setMessage(data.message);

    if (data.success) {
      setSuccess(true);
      setBackupProfileData(profileData); // Update backup with new data
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="lg:ml-64">
        <div className="flex">
          <div className="w-full">
            <div className="lg:mt-20 mt-24 mb-24 mx-5 bg-white px-5 py-7 lg:mb-7 rounded-xl">
              {message && <p className={clsx('px-3 py-2 w-full rounded-md mb-5', success ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200")}>{message}</p>}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg font-bold mb-1">Informasi Akun</h1>
                  <p className="text-xs text-slate-500 text-balance">
                    Ubah informasi akun Anda di sini untuk memperbarui profile,
                    kata sandi, dana preferensi lainnya.
                  </p>
                </div>
                <button
                  onClick={onOpen}
                  className="bg-yellow-500 px-4 h-10 rounded-lg text-white text-sm"
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
                      value={profileData.username}
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
                        name="first"
                        value={profileData.first}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Nama Belakang</label>
                      <input
                        type="text"
                        placeholder="Masukkan nama belakang kamu"
                        name="last"
                        value={profileData.last}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Jenis Kelamin</label>
                    <select
                      name="gender"
                      value={profileData.gender}
                      onChange={handleChange}
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
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
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
                        name="city"
                        value={profileData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm">Tanggal Lahir</label>
                      <input
                        type="date"
                        placeholder="Masukkan tanggal lahir"
                        name="birthDate"
                        value={profileData.birthDate.split("T")[0]}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                        pattern="\d{4}-\d{2}-\d{2}"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      placeholder="Masukkan email kamu"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Nomor Telepon</label>
                    <input
                      type="number"
                      placeholder="Masukkan nomor telepon kamu"
                      name="phoneNumber"
                      value={profileData.phoneNumber}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="px-3 py-2.5 rounded-lg bg-gray-100 text-sm [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Tanggal Bergabung</label>
                    <input
                      type="date"
                      value={profileData.created.split("T")[0]}
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
                    type="button"
                    onClick={toggleEdit}
                    className="border border-red-500 px-3 py-2 text-red-500 rounded-lg me-3 text-sm"
                  >
                    Kembali
                  </button>
                  <Button
                    type="submit"
                    className="bg-yellow-500 px-3 py-2 rounded-lg text-white"
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
                  className={isEditing ? "hidden" : "bg-yellow-500 px-3 py-2 rounded-lg text-white text-sm mt-5"}
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
