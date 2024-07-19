-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'FINISHED';

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "profileId" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "donateDate" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
