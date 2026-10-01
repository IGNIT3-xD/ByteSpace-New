-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "rating" TEXT NOT NULL DEFAULT '4.5',
    "price" TEXT NOT NULL,
    "pricingType" TEXT NOT NULL DEFAULT '/ lifetime',
    "lessons" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'Beginner',
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);
