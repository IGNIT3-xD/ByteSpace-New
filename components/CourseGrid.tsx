import { prisma } from "@/lib/prisma";
import CourseCard from "./CourseCard";

interface CourseGridProps {
    limit?: number;
}

export default async function CourseGrid({ limit }: CourseGridProps) {
    const courses = await prisma.course.findMany({
        take: limit,
        orderBy: { id: "asc" },
    });

    return (
        <section className="pt-10">
            <div
                className="
          mx-auto
          grid
          w-full
          max-w-285
          grid-cols-1
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-10
          items-center
          justify-between
        "
            >
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}