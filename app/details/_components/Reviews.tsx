"use client";

import { useState } from "react";
import Image from "next/image";

import starIcon from "@/public/star_2.png";
import purePearlAvatar from "@/public/pure_pearl.png";
import albertAvatar from "@/public/albert.png";
import codyAvatar from "@/public/cody.png";
import broklynAvatar from "@/public/broklyn.png";

const ratingBreakdown = [
    { stars: 5, percentage: "85%", count: 720 },
    { stars: 4, percentage: "35%", count: 120 },
    { stars: 3, percentage: "10%", count: 21 },
    { stars: 2, percentage: "5%", count: 12 },
    { stars: 1, percentage: "8%", count: 16 },
];

const reviews = [
    {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        avatar: purePearlAvatar,
        rating: 5,
        comment:
            '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
        name: "Albert Flores",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        avatar: albertAvatar,
        rating: 5,
        comment:
            "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        avatar: codyAvatar,
        rating: 5,
        comment:
            "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        avatar: broklynAvatar,
        rating: 5,
        comment:
            "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
];

const filterTabs = [
    { label: "All rating", value: "all" },
    { label: "5", value: "5", isStar: true },
    { label: "4", value: "4", isStar: true },
    { label: "3", value: "3", isStar: true },
    { label: "2", value: "2", isStar: true },
    { label: "1", value: "1", isStar: true },
];

export default function ReviewsTab() {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredReviews =
        selectedFilter === "all"
            ? reviews
            : reviews.filter((r) => r.rating === Number(selectedFilter));

    return (
        <div className="flex flex-col gap-8 font-satoshi pb-10 text-[#4B4C53]">
            {/* Header Section */}
            <section>
                <h2 className="font-poppins text-xl font-semibold text-[#242528]">
                    What Learners Are Saying
                </h2>
                <p className="mt-2 font-satoshi text-base font-normal leading-relaxed text-[#4B4C53]">
                    Discover what our learners have to say about their experience with
                    &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and
                    ratings from individuals who have embarked on the transformative journey
                    of mastering digital asset creation.
                </p>
            </section>

            {/* Ratings Overall Card */}
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:gap-10">
                {/* Yellow Score Box */}
                <div className="flex size-32 shrink-0 flex-col items-center justify-center rounded-[8px] bg-[#D4FB20] text-center">
                    <span className="text-xs font-medium text-[#242528]">Ratings</span>
                    <span className="font-poppins text-3xl font-bold text-[#242528]">
                        4.7
                    </span>
                </div>

                {/* Rating Bars List */}
                <div className="flex w-full flex-col gap-2.5">
                    {ratingBreakdown.map((item) => (
                        <div
                            key={item.stars}
                            className="flex items-center justify-between gap-3 text-xs sm:text-sm"
                        >
                            {/* Progress Bar Track */}
                            <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-gray-100">
                                <div
                                    className="h-full rounded-full bg-[#D4FB20]"
                                    style={{ width: item.percentage }}
                                />
                            </div>

                            {/* Star Icons */}
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Image
                                        key={i}
                                        src={starIcon}
                                        alt="Star"
                                        className="size-3.5 object-contain"
                                    />
                                ))}
                            </div>

                            {/* Count */}
                            <span className="w-8 text-right font-medium text-[#4B4C53]">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Individual Reviews Section */}
            <section className="flex flex-col gap-6">
                <h3 className="font-poppins text-[20px] font-semibold text-[#242528]">
                    Individual Reviews:
                </h3>

                {/* Rating Filter Tabs */}
                <div className="flex flex-wrap items-center gap-3">
                    {filterTabs.map((tab) => {
                        const isActive = selectedFilter === tab.value;
                        return (
                            <button
                                key={tab.value}
                                type="button"
                                onClick={() => setSelectedFilter(tab.value)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${isActive
                                    ? "bg-[#D4FB20] text-[#111827]"
                                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
                                    }`}
                            >
                                {tab.isStar && (
                                    <Image
                                        src={starIcon}
                                        alt="Star"
                                        className="size-3.5 object-contain"
                                    />
                                )}
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Review Cards List */}
                <div className="flex flex-col gap-4">
                    {filteredReviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm"
                        >
                            {/* Review Header: User Info & Time */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-satoshi text-sm font-bold text-[#242528]">
                                            {review.name}
                                        </h4>
                                        <span className="text-xs text-[#4B4C53]">
                                            {review.role}
                                        </span>
                                    </div>
                                </div>

                                <span className="text-xs text-[#4B4C53]">
                                    {review.timeAgo}
                                </span>
                            </div>

                            {/* Star Rating Row */}
                            <div className="mt-3 flex items-center gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <Image
                                        key={i}
                                        src={starIcon}
                                        alt="Star"
                                        className="size-3.5 object-contain"
                                    />
                                ))}
                            </div>

                            {/* Comment Content */}
                            <p className="mt-3 font-satoshi text-xs sm:text-sm font-normal leading-relaxed text-[#4B4C53]">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}