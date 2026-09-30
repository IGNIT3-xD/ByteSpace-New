import Image from "next/image";
import { BarChart3, Star } from "lucide-react";

// Avatar paths
import av2 from "@/public/av2.png";
import av9 from "@/public/av9.png";
import av10 from "@/public/av10.png";
import av11 from "@/public/av11.png";
import av26Plus from "@/public/26+.png";

const avatars = [
    {
        id: 1,
        src: av2,
        alt: "User Avatar 1",
    },
    {
        id: 2,
        src: av9,
        alt: "User Avatar 2",
    },
    {
        id: 3,
        src: av10,
        alt: "User Avatar 3",
    },
    {
        id: 4,
        src: av11,
        alt: "User Avatar 4",
    },
    {
        id: 5,
        src: av26Plus,
        alt: "26+ More Students",
    },
];

interface Course {
    id: number;
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

const courses: Course[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        title: "the Power of Big Data",
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
        id: 4,
        title: "Balancing Productivity an...",
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
        id: 5,
        title: "Mastering Money Manage...",
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
        id: 6,
        title: "From Idea to Startup Succ...",
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

export default function Cards() {
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
                    lg:gap-8
                "
            >
                {courses.map((course) => (
                    <article
                        key={course.id}
                        className="
                            w-full
                            overflow-hidden
                            rounded-3xl
                            border
                            border-[#CED0D3]
                            bg-white
                            p-2.75
                            transition-shadow
                            duration-300
                            hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)]

                            sm:rounded-[25px]
                            sm:p-3
                        "
                    >
                        {/* =================================
                            COURSE IMAGE
                        ================================= */}
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
                            <img
                                src={course.image}
                                alt={course.title}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    hover:scale-[1.02]
                                "
                            />

                            {/* Image information pills */}
                            <div
                                className="
        absolute
        right-3
        bottom-3
        left-3
        flex
        items-center
        justify-between
        gap-2
    "
                            >
                                {/* Lessons */}
                                <span
                                    className="
            flex
            h-6.25
            items-center
            rounded-full
            border
            border-white/30
            bg-white/55
            px-2.5
            font-satoshi
            text-[12px]
            font-medium
            whitespace-nowrap
            text-[#4f4f4f]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            backdrop-saturate-150

            sm:h-6.5
            sm:px-3
            sm:text-[11px]
        "
                                >
                                    {course.lessons}
                                </span>

                                {/* Duration */}
                                <span
                                    className="
            flex
            h-6.25
            items-center
            rounded-full
            border
            border-white/30
            bg-white/55
            px-2.5
            font-satoshi
            text-[12px]
            font-medium
            whitespace-nowrap
            text-[#4f4f4f]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            backdrop-saturate-150

            sm:h-6.5
            sm:px-3
            sm:text-[11px]
        "
                                >
                                    {course.duration}
                                </span>

                                {/* Comments */}
                                <span
                                    className="
            flex
            h-6.25
            items-center
            rounded-full
            border
            border-white/30
            bg-white/55
            px-2.5
            font-satoshi
            text-[12px]
            font-medium
            whitespace-nowrap
            text-[#4f4f4f]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            backdrop-saturate-150

            sm:h-6.5
            sm:px-3
            sm:text-[11px]
        "
                                >
                                    {course.comments}
                                </span>
                            </div>

                        </div>

                        {/* =================================
                            COURSE CONTENT
                        ================================= */}
                        <div className="px-1.5 pt-4 pb-1">
                            {/* Title + Rating */}
                            <div className="flex items-start justify-between gap-4">
                                <h3
                                    className="
                                        min-w-0
                                        truncate
                                        font-poppins
                                        text-[22px]
                                        leading-[1.2]
                                        font-semibold
                                        tracking-[-0.02em]
                                        text-[#111111]

                                        sm:text-[18px]
                                    "
                                >
                                    {course.title}
                                </h3>

                                <div
                                    className="
                                        flex
                                        shrink-0
                                        items-center
                                        gap-1
                                    "
                                >
                                    <span
                                        className="
                                            font-satoshi
                                            text-[15px]
                                            leading-none
                                            font-medium
                                            text-[#565656]
                                        "
                                    >
                                        {course.rating}
                                    </span>

                                    <Star
                                        size={16}
                                        strokeWidth={0}
                                        fill="#c8ccd1"
                                        className="text-[#c8ccd1]"
                                    />
                                </div>
                            </div>

                            {/* Author */}
                            <p
                                className="
                                    mt-1
                                    font-satoshi
                                    text-[12px]
                                    leading-none
                                    font-normal
                                    text-[#999999]
                                    text-left
                                    sm:text-[12px]
                                "
                            >
                                by{" "}
                                <span className="text-[#2859f5]">
                                    {course.author}
                                </span>
                            </p>

                            {/* =================================
                                LEVEL + AVATARS
                            ================================= */}
                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                {/* Beginner */}
                                <div
                                    className="
                                        flex
                                        h-7.25
                                        shrink-0
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        bg-[#f3f3f3]
                                        px-3
                                        font-satoshi
                                        text-[12px]
                                        font-normal
                                        text-[#5d5d5d]
                                    "
                                >
                                    <BarChart3
                                        size={15}
                                        strokeWidth={2}
                                        className="text-[#60646a]"
                                    />

                                    <span>{course.level}</span>
                                </div>

                                {/* Avatar stack */}
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

                            {/* =================================
                                DIVIDER
                            ================================= */}
                            <div
                                className="
                                    mt-5
                                    h-px
                                    w-full
                                    bg-[#eeeeee]
                                "
                            />

                            {/* =================================
                                PRICE
                            ================================= */}
                            <div className="pt-3">
                                <div className="flex items-baseline">
                                    <span
                                        className="
                                            font-poppins
                                            text-[20px]
                                            leading-none
                                            font-semibold
                                            tracking-[-0.02em]
                                            text-[#2861f5]
                                        "
                                    >
                                        {course.price}
                                    </span>

                                    <span
                                        className="
                                            ml-1
                                            font-satoshi
                                            text-[12px]
                                            leading-none
                                            font-normal
                                            text-[#4F4F4F]
                                        "
                                    >
                                        {course.pricingType}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}