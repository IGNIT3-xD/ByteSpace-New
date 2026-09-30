"use client";
import Image from "next/image";
import filterIcon from "@/public/filter.png";
import levelIcon from "@/public/level.png";
import categoryIcon from "@/public/category.png";
import mostRelevantIcon from "@/public/most_relevent.png";


const TopBarFilter = () => {
    return (
        <div>
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
        </div>
    )
}

export default TopBarFilter