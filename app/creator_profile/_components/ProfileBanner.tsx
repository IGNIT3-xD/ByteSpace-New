"use client";

import Image from "next/image";
import creatorAvatar from "@/public/creator_profile_avater.png";
import Navbar from "@/components/Navbar";

export default function CreatorProfileHero() {
    return (
        <section className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/Hero-bg.webp')] pt-6 font-satoshi">
            {/* Transparent Navbar Wrapper */}
            <div className="absolute inset-x-0 top-0 z-50 bg-transparent">
                <Navbar />
            </div>

            {/* Main Content Container */}
            <div className="container-main py-20">

                {/* Profile Header Row */}
                <div className="flex items-center gap-5">
                    {/* Creator Avatar */}
                    <div className="relative size-20 sm:size-24 rounded-3xl overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
                        <Image
                            src={creatorAvatar}
                            alt="PurePearl Studio"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Title, Badge & Subtitle */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="font-poppins font-semibold text-2xl sm:text-[36px] text-white leading-tight">
                                PurePearl Studio
                            </h1>
                            <span className="rounded-full bg-[#D4FB20] px-4 py-1 text-xs sm:text-sm font-semibold text-[#111827]">
                                Creator
                            </span>
                        </div>

                        <p className="mt-1 font-satoshi font-normal text-sm sm:text-[18px] text-white/90">
                            Passionate UI/UX, Web designer
                        </p>
                    </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="mt-8 max-w-4xl space-y-3 font-satoshi font-normal text-sm sm:text-[18px] text-white/90 leading-relaxed">
                    <p>
                        Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
                    </p>
                    <p>
                        Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
                    </p>
                </div>

                {/* Stats Pills & Follow Button Row */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">

                    {/* Left Stats Pills */}
                    <div className="flex items-center gap-4">
                        {/* Products Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 shadow-md">
                            <span className="font-poppins font-bold text-[#003BE2] text-base sm:text-[18px]">
                                3
                            </span>
                            <span className="font-satoshi font-medium text-[#111827] text-sm sm:text-base">
                                Products
                            </span>
                        </div>

                        {/* Followers Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 shadow-md">
                            <span className="font-poppins font-bold text-[#003BE2] text-base sm:text-[18px]">
                                12
                            </span>
                            <span className="font-satoshi font-medium text-[#111827] text-sm sm:text-base">
                                Followers
                            </span>
                        </div>
                    </div>

                    {/* Follow Button */}
                    <button
                        type="button"
                        className="rounded-full bg-[#D4FB20] px-8 py-2.5 font-satoshi font-bold text-sm sm:text-base text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-md"
                    >
                        Follow
                    </button>

                </div>

            </div>
        </section>
    );
}