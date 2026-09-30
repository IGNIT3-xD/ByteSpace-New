"use client";

import { useState } from "react";
import Image from "next/image";

import filterIcon from "@/public/filter.png";
import levelIcon from "@/public/level.png";
import categoryIcon from "@/public/category.png";
import mostRelevantIcon from "@/public/most_relevent.png";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
];

export default function CourseFilters() {
    const [activeCategory, setActiveCategory] = useState("Featured");

    return (
        <div className="w-full pt-12 px-4 sm:px-6 lg:px-8 font-satoshi">
            <div className="container-main flex flex-col gap-4">

                {/* Top Bar: Dropdown / Filter Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* Left Controls */}
                    <div className="flex flex-wrap items-center gap-2.5">
                        {/* Filter Button */}
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <Image
                                src={filterIcon}
                                alt="Filter"
                                className="size-4 object-contain"
                            />
                            <span>Filter</span>
                        </button>

                        {/* Level Button */}
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <Image
                                src={levelIcon}
                                alt="Level"
                                className="size-4 object-contain"
                            />
                            <span>Level</span>
                        </button>

                        {/* Category Button */}
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <Image
                                src={categoryIcon}
                                alt="Category"
                                className="size-4 object-contain"
                            />
                            <span>Category</span>
                        </button>
                    </div>

                    {/* Right Control: Most Relevant */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <Image
                                src={mostRelevantIcon}
                                alt="Most Relevant"
                                className="size-4 object-contain"
                            />
                            <span>Most relevant</span>
                        </button>
                    </div>

                </div>

                {/* Bottom Bar: Category Pill Buttons */}
                <div className="flex flex-wrap items-center gap-6.5 pb-1 scrollbar-none">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    backgroundColor: isActive ? "#D4FB20" : "#F5F5F6",
                                }}
                                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${isActive
                                    ? "text-[#4B4C53] shadow-xs"
                                    : "text-[#374151] hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}