/*
  Warnings:

  - You are about to drop the column `amountToPay` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `amountToPay` to the `ParticipantsOnSplits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "amountToPay";

-- AlterTable
ALTER TABLE "ParticipantsOnSplits" ADD COLUMN     "amountToPay" INTEGER NOT NULL;
