"use client";

import { useState } from "react";
import Cards from "@/components/Cards";

const categoriesRow1 = [
    { name: "Featured", slug: "featured" },
    { name: "Music", slug: "music" },
    { name: "Drawing & Painting", slug: "drawing-painting" },
    { name: "Marketing", slug: "marketing" },
    { name: "Animation", slug: "animation" },
    { name: "Social Media", slug: "social-media" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "Creative Marketing", slug: "creative-marketing" },
];

const categoriesRow2 = [
    { name: "Digital Illustration", slug: "digital-illustration" },
    { name: "Film & Video", slug: "film-video" },
    { name: "Crafts", slug: "crafts" },
    { name: "Freelance & Entrepreneurship", slug: "freelance-entrepreneurship" },
    { name: "Graphic Design", slug: "graphic-design" },
    { name: "Photography", slug: "photography" },
];

const categoriesRow3 = [
    { name: "Productivity", slug: "productivity" },
    { name: "Web Development", slug: "web-development" },
    { name: "Data Science", slug: "data-science" },
    { name: "Cooking", slug: "cooking" },
];

export default function DiscoverSkills() {
    const [activeCategory, setActiveCategory] = useState("featured");

    const renderPill = (cat: { name: string; slug: string }) => {
        const isActive = activeCategory === cat.slug;
        return (
            <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer border-0 font-['Satoshi',sans-serif] ${isActive
                    ? "bg-[#D4FB20] text-[#111827] font-semibold"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111827]"
                    }`}
            >
                {cat.name}
            </button>
        );
    };

    return (
        <section className="py-16 text-center">
            <div className="container-main">
                {/* Heading */}
                <h2 className="title-main">
                    Discover Your Passion,
                    <br />
                    Build Your Skills
                </h2>

                {/* Subtitle */}
                <p className="subtitle-main">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>

                {/* Category Pills Container */}
                <div className="mt-10 flex flex-col items-center gap-3">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                        {categoriesRow1.map(renderPill)}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                        {categoriesRow2.map(renderPill)}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                        {categoriesRow3.map(renderPill)}

                        {/* + More Link Button */}
                        <button
                            type="button"
                            className="px-4 py-2.5 text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer font-['Satoshi',sans-serif]"
                        >
                            + More
                        </button>
                    </div>
                </div>

                <Cards />
            </div>
        </section>
    );
}