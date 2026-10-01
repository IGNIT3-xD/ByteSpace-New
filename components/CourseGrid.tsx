// components/CourseGrid.tsx
import { Course } from "@prisma/client";
import CourseCard from "./CourseCard";

interface CourseGridProps {
    courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
    if (courses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-poppins text-2xl font-semibold text-gray-700">
                    Course Not Available
                </p>
                <p className="font-satoshi text-sm text-gray-500 mt-2">
                    Check back later or try exploring other categories.
                </p>
            </div>
        );
    }

    return (
        <section className="pt-10">
            <div className="mx-auto grid w-full max-w-285 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-center justify-between">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}