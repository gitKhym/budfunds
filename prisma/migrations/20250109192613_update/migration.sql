-- CreateEnum
CREATE TYPE "SplitStatus" AS ENUM ('PENDING', 'PARTIAL', 'COMPLETE', 'OVERDUE', 'CANCELLED');

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "isSettled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ParticipantsOnSplits" ADD COLUMN     "amountPaid" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isSettled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" "SplitStatus" NOT NULL DEFAULT 'PENDING';
