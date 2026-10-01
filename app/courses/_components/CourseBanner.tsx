// app/courses/_components/CourseBanner.tsx
"use client";

import Navbar from "@/components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function CourseBanner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const currentSearch = searchParams.get("q") || "";

    const handleSearchChange = (term: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (term) {
            params.set("q", term);
        } else {
            params.delete("q");
        }

        // Reset to first page on search change
        params.set("page", "1");

        startTransition(() => {
            router.push(`?${params.toString()}`);
        });
    };

    return (
        <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/Hero-bg.webp')] pt-6 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 text-white">
            {/* Navigation Bar */}
            <div className="absolute inset-x-0 top-0 z-50">
                <Navbar />
            </div>

            {/* Main Banner Content */}
            <div className="container-main mx-auto mt-16 sm:mt-24 flex flex-col items-center text-center">
                {/* Title */}
                <h1 className="font-semibold font-poppins text-xl md:text-3xl lg:text-4xl">
                    Find Your Next Course
                </h1>

                {/* Search & Filter Inputs */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl">
                    {/* Search Input Box */}
                    <div className="relative w-full flex-1">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
                            <svg
                                className="size-4 stroke-current fill-none stroke-2"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path strokeLinecap="round" d="m21 21-4.3-4.3" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            defaultValue={currentSearch}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder="Search by title..."
                            className="w-full rounded-full bg-white py-3.5 pl-12 pr-6 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none shadow-lg font-['Satoshi',sans-serif]"
                        />
                    </div>

                    {/* Category Dropdown Button */}
                    <div className="relative w-full sm:w-auto shrink-0">
                        <button
                            type="button"
                            className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 rounded-full bg-[#D4FB20] px-7 py-3.5 text-sm font-semibold text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-lg font-['Satoshi',sans-serif]"
                        >
                            <span>Courses</span>
                            <svg
                                className="size-4 stroke-current fill-none stroke-[2.5]"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}