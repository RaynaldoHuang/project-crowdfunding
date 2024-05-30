-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ONGOING', 'PENDING', 'CANCELED');

-- CreateTable
CREATE TABLE "Account" (
    "id" BIGSERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" BIGSERIAL NOT NULL,
    "accountUsername" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "city" VARCHAR(255) NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" BIGSERIAL NOT NULL,
    "eventName" VARCHAR(255) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fundsNeeded" BIGINT NOT NULL DEFAULT 0,
    "fundsAccumulated" BIGINT NOT NULL DEFAULT 0,
    "deadline" TIMESTAMP(3) NOT NULL,
    "eventDescription" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'CANCELED',

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_accountUsername_key" ON "Profile"("accountUsername");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_accountUsername_fkey" FOREIGN KEY ("accountUsername") REFERENCES "Account"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
