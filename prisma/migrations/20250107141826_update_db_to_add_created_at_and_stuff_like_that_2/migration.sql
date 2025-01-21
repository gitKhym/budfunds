/*
  Warnings:

  - Made the column `updatedAt` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Expense` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `ParticipantsOnSplits` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Split` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `SplitGroup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "ParticipantsOnSplits" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Split" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "SplitGroup" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET NOT NULL;
