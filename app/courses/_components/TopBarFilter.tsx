"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

import filterIcon from "@/public/filter.png";
import levelIcon from "@/public/level.png";
import categoryIcon from "@/public/category.png";
import mostRelevantIcon from "@/public/most_relevent.png";

export default function TopBarFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [, startTransition] = useTransition();

    const currentLevel = searchParams.get("level") || "";
    const currentSort = searchParams.get("sort") || "";

    const updateFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        // Reset page to 1 on filter change
        params.set("page", "1");

        startTransition(() => {
            router.push(`?${params.toString()}`);
        });
    };

    const handleClearFilters = () => {
        startTransition(() => {
            router.push("/courses");
        });
    };

    return (
        <div>
            {/* Top Bar: Dropdown / Filter Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">

                {/* Left Controls */}
                <div className="flex flex-wrap items-center gap-2.5">
                    {/* Filter / Reset Button */}
                    <button
                        type="button"
                        onClick={handleClearFilters}
                        className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <Image
                            src={filterIcon}
                            alt="Filter"
                            className="size-4 object-contain"
                        />
                        <span>Reset Filters</span>
                    </button>

                    {/* Level Select Dropdown */}
                    <div className="relative flex items-center rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors">
                        <Image
                            src={levelIcon}
                            alt="Level"
                            className="size-4 object-contain mr-2 pointer-events-none"
                        />
                        <select
                            value={currentLevel}
                            onChange={(e) => updateFilter("level", e.target.value)}
                            className="bg-transparent focus:outline-none cursor-pointer text-sm font-medium text-[#4B4C53] pr-2"
                        >
                            <option value="">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    {/* Category Shortcut Indicator */}
                    <div className="flex items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53]">
                        <Image
                            src={categoryIcon}
                            alt="Category"
                            className="size-4 object-contain"
                        />
                        <span>Category</span>
                    </div>
                </div>

                {/* Right Control: Sort By Dropdown */}
                <div className="flex items-center">
                    <div className="relative flex items-center rounded-full border border-[#CED0D3] bg-white px-4 py-2 text-sm font-medium text-[#4B4C53] hover:bg-gray-50 transition-colors">
                        <Image
                            src={mostRelevantIcon}
                            alt="Most Relevant"
                            className="size-4 object-contain mr-2 pointer-events-none"
                        />
                        <select
                            value={currentSort}
                            onChange={(e) => updateFilter("sort", e.target.value)}
                            className="bg-transparent focus:outline-none cursor-pointer text-sm font-medium text-[#4B4C53] pr-2"
                        >
                            <option value="">Most Relevant</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                            <option value="rating_desc">Highest Rated</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
}