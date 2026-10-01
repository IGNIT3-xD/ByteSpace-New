"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import TopBarFilter from "./TopBarFilter";

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
    const router = useRouter();
    const searchParams = useSearchParams();
    const [, startTransition] = useTransition();

    // Read active category directly from the URL (defaults to "Featured")
    const activeCategory = searchParams.get("category") || "Featured";

    const handleCategorySelect = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category === "Featured") {
            params.delete("category");
        } else {
            params.set("category", category);
        }

        // Reset to page 1 when switching categories
        params.set("page", "1");

        startTransition(() => {
            router.push(`?${params.toString()}`);
        });
    };

    return (
        <div className="w-full pt-12 px-4 sm:px-6 lg:px-8 font-satoshi">
            <div className="container-main flex flex-col gap-4">
                <TopBarFilter />

                {/* Bottom Bar: Category Pill Buttons */}
                <div className="flex flex-wrap items-center gap-6.5 pb-1 scrollbar-none">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => handleCategorySelect(category)}
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