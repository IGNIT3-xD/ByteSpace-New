// prisma/seed.ts
import { prisma } from "../lib/prisma";

const initialCourses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
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
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    pricingType: "/ lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
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
