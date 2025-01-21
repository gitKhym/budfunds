/*
  Warnings:

  - You are about to drop the column `amountPaid` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `hasPaid` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `splitGroupId` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Friend` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Split` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amountToPay` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_userId_fkey";

-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_splitGroupId_fkey";

-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_payerId_fkey";

-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_splitGroupId_fkey";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "amountPaid",
DROP COLUMN "hasPaid",
DROP COLUMN "splitGroupId",
ADD COLUMN     "amountToPay" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "fname",
DROP COLUMN "lname";

-- DropTable
DROP TABLE "Friend";

-- DropTable
DROP TABLE "Split";

-- DropTable
DROP TABLE "SplitGroup";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "fname" TEXT,
    "lname" TEXT,
    "avatar" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL,
    "leftId" TEXT NOT NULL,
    "leftOwed" INTEGER NOT NULL DEFAULT 0,
    "rightId" TEXT NOT NULL,
    "rightOwed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friends_leftId_rightId_key" ON "Friends"("leftId", "rightId");

-- CreateIndex
CREATE UNIQUE INDEX "Friends_rightId_leftId_key" ON "Friends"("rightId", "leftId");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_leftId_fkey" FOREIGN KEY ("leftId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_rightId_fkey" FOREIGN KEY ("rightId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
