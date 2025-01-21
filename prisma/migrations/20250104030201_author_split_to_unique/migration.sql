/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Split` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Split_authorId_key" ON "Split"("authorId");
