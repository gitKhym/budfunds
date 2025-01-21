/*
  Warnings:

  - You are about to drop the column `participantId` on the `Split` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_participantId_fkey";

-- AlterTable
ALTER TABLE "Split" DROP COLUMN "participantId";

-- CreateTable
CREATE TABLE "ParticipantsOnSplits" (
    "participantId" TEXT NOT NULL,
    "splitId" TEXT NOT NULL,

    CONSTRAINT "ParticipantsOnSplits_pkey" PRIMARY KEY ("participantId","splitId")
);

-- AddForeignKey
ALTER TABLE "ParticipantsOnSplits" ADD CONSTRAINT "ParticipantsOnSplits_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantsOnSplits" ADD CONSTRAINT "ParticipantsOnSplits_splitId_fkey" FOREIGN KEY ("splitId") REFERENCES "Split"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
