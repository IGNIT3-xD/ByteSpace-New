// prisma/seed.ts
import { prisma } from "../lib/prisma";

const initialCourses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: "$35",
    pricingType: "/ lifetime",
    lessons: "18 Lessons",
    duration: "3 hours 16 mins",
    comments: "69 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Power of Big Data",
    author: "newb studio",
    rating: "5.0",
    price: "$20",
    pricingType: "/ lifetime",
    lessons: "20 Lessons",
    duration: "1 hours 16 mins",
    comments: "67 Comments",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Balancing Productivity and Life",
    author: "sonic studio",
    rating: "4.8",
    price: "$22",
    pricingType: "/ lifetime",
    lessons: "25 Lessons",
    duration: "2 hours 55 mins",
    comments: "85 Comments",
    level: "Master",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Modern Web Development",
    author: "CodeCraft Academy",
    rating: "4.8",
    price: "$39",
    pricingType: "/ lifetime",
    lessons: "32 Lessons",
    duration: "5 hours 42 mins",
    comments: "124 Comments",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mastering Digital Marketing",
    author: "Growth Lab",
    rating: "4.6",
    price: "$35",
    pricingType: "/ lifetime",
    lessons: "28 Lessons",
    duration: "4 hours 12 mins",
    comments: "103 Comments",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Photography for Beginners",
    author: "Frame Studio",
    rating: "4.9",
    price: "$19",
    pricingType: "/ lifetime",
    lessons: "19 Lessons",
    duration: "2 hours 48 mins",
    comments: "76 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Business Strategy Essentials",
    author: "Business Hub",
    rating: "4.7",
    price: "$45",
    pricingType: "/ lifetime",
    lessons: "26 Lessons",
    duration: "4 hours 55 mins",
    comments: "91 Comments",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mastering React & Next.js",
    author: "Frontend Forge",
    rating: "4.8",
    price: "$42",
    pricingType: "/ lifetime",
    lessons: "36 Lessons",
    duration: "6 hours 18 mins",
    comments: "147 Comments",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Productivity & Time Management",
    author: "Better Work Studio",
    rating: "4.6",
    price: "$18",
    pricingType: "/ lifetime",
    lessons: "15 Lessons",
    duration: "1 hour 52 mins",
    comments: "48 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
];

async function main() {
  console.log("Seeding courses...");
  await prisma.course.createMany({
    data: initialCourses,
  });
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
