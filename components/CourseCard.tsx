import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import levelIcon from "@/public/level.png";

import av2 from "@/public/av2.png";
import av9 from "@/public/av9.png";
import av10 from "@/public/av10.png";
import av11 from "@/public/av11.png";
import av26Plus from "@/public/26+.png";

const avatars = [
    { id: 1, src: av2, alt: "User Avatar 1" },
    { id: 2, src: av9, alt: "User Avatar 2" },
    { id: 3, src: av10, alt: "User Avatar 3" },
    { id: 4, src: av11, alt: "User Avatar 4" },
    { id: 5, src: av26Plus, alt: "26+ More Students" },
];

export interface Course {
    id: string;
    title: string;
    author: string;
    rating: string;
    price: string;
    pricingType: string;
    lessons: string;
    duration: string;
    comments: string;
    level: string;
    image: string;
}

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/courses/${course.id}`} className="block group">
            <article
                className="
          w-full
          overflow-hidden
          rounded-3xl
          border
          border-[#CED0D3]
          bg-white
          p-2.75
          transition-all
          duration-300
          hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)]
          hover:border-[#003BE2]/30
          sm:rounded-[25px]
          sm:p-3
        "
            >
                {/* COURSE IMAGE */}
                <div
                    className="
            relative
            aspect-[1.6]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-[#eeeeee]
            sm:rounded-[18px]
            md:aspect-[1.6]
          "
                >
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
                    />

                    {/* Image information pills */}
                    <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2">
                        <span className="flex h-6.25 items-center rounded-full border border-white/30 bg-white/55 px-2.5 font-satoshi text-[12px] font-medium whitespace-nowrap text-[#4f4f4f] shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md sm:h-6.5 sm:px-3 sm:text-[11px]">
                            {course.lessons}
                        </span>

                        <span className="flex h-6.25 items-center rounded-full border border-white/30 bg-white/55 px-2.5 font-satoshi text-[12px] font-medium whitespace-nowrap text-[#4f4f4f] shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md sm:h-6.5 sm:px-3 sm:text-[11px]">
                            {course.duration}
                        </span>

                        <span className="flex h-6.25 items-center rounded-full border border-white/30 bg-white/55 px-2.5 font-satoshi text-[12px] font-medium whitespace-nowrap text-[#4f4f4f] shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md sm:h-6.5 sm:px-3 sm:text-[11px]">
                            {course.comments}
                        </span>
                    </div>
                </div>

                {/* COURSE CONTENT */}
                <div className="px-1.5 pt-4 pb-1">
                    {/* Title + Rating */}
                    <div className="flex items-start justify-between gap-4">
                        <h3
                            className="
                min-w-0
                truncate
                font-poppins
                text-[20px]
                leading-[1.2]
                font-semibold
                tracking-[-0.02em]
                text-[#000000]
                group-hover:text-[#003BE2]
                transition-colors
                sm:text-[18px]
              "
                        >
                            {course.title}
                        </h3>

                        <div className="flex shrink-0 items-center gap-1">
                            <span className="font-satoshi text-[18px] leading-none font-regular text-black/70">
                                {course.rating}
                            </span>
                            <Star
                                size={24}
                                strokeWidth={0}
                                fill="#c8ccd1"
                                className="text-[#c8ccd1]"
                            />
                        </div>
                    </div>

                    {/* Author */}
                    <p className="mt-1 font-satoshi text-[14px] leading-none font-normal text-[#4F4F4F] text-left">
                        by <span className="text-[#003BE2]">{course.author}</span>
                    </p>

                    {/* LEVEL + AVATARS */}
                    <div className="mt-5 flex items-center gap-3">
                        <div className="flex h-7.25 shrink-0 items-center gap-1.5 rounded-3xl bg-[#F5F5F6] px-3 font-satoshi text-[12px] font-medium text-[#4B4C53]">
                            <Image
                                src={levelIcon}
                                alt="Level"
                                className="size-4 object-contain"
                            />
                            <span>{course.level}</span>
                        </div>

                        <div className="flex items-center">
                            {avatars.map((avatar, index) => (
                                <div
                                    key={avatar.id}
                                    className={`
                    relative
                    size-7.25
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white
                    bg-[#e5e7eb]
                    ${index !== 0 ? "-ml-1.5" : ""}
                  `}
                                >
                                    <Image
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        fill
                                        sizes="29px"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="pt-4">
                        <div className="flex items-baseline">
                            <span className="font-poppins text-[20px] leading-none font-semibold tracking-[-0.02em] text-[#003BE2]">
                                {course.price}
                            </span>
                            <span className="ml-1 font-satoshi text-[12px] leading-none font-normal text-[#4F4F4F]">
                                {course.pricingType}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}