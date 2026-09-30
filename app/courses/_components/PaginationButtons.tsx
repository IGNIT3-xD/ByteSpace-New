"use client";

import { useState } from "react";

interface PaginationProps {
    totalPages?: number;
    initialPage?: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({
    totalPages = 5,
    initialPage = 1,
    onPageChange,
}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-6 py-6 font-satoshi">
            {/* Previous Button */}
            <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex size-11 items-center justify-center rounded-full border border-[#CED0D3] bg-white text-[#374151] hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                <svg
                    className="size-5 stroke-current fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-5">
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = currentPage === page;

                    return (
                        <button
                            key={page}
                            type="button"
                            onClick={() => handlePageChange(page)}
                            className={`text-base font-bold transition-colors cursor-pointer ${isActive
                                    ? "text-[#C2C4C8]"
                                    : "text-[#1F2937] hover:text-[#000000]"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next Button */}
            <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex size-11 items-center justify-center rounded-full border border-[#CED0D3] bg-white text-[#374151] hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                <svg
                    className="size-5 stroke-current fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
}