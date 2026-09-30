"use client";

import Image from "next/image";
import * as RadixTabs from "@radix-ui/react-tabs";

import videoAvatar from "@/public/video_avater.jpg";
import networkIcon from "@/public/network.png";
import starIcon from "@/public/star.png";
import peopleIcon from "@/public/people.png";
import shareIcon from "@/public/share.png";
import playButtonIcon from "@/public/play_button.png";
import avatarIcon from "@/public/Ellipse.png";
import Navbar from "@/components/Navbar";

// Feature Icons
import learningResIcon from "@/public/learning_res.png";
import lessonsIcon from "@/public/lessons.png";
import certificateIcon from "@/public/certificate.png";
import consultationIcon from "@/public/consultation.png";
import tickIcon from "@/public/tick.png";

// Sneak Peak Pictures
import sneakPeak1 from "@/public/sneak_peak_1.png";
import sneakPeak2 from "@/public/sneak_peak_2.png";
import sneakPeak3 from "@/public/sneak_peak_3.png";
import sneakPeak4 from "@/public/sneak_peak_4.png";
import LessonsTab from "./Lessons";
import ReviewsTab from "./Reviews";
import Link from "next/link";

const tabTriggerClass =
    "rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#4B4C53] transition-all cursor-pointer data-[state=active]:bg-[#D4FB20] data-[state=active]:text-[#111827] data-[state=active]:shadow-sm";

const badgeClass =
    "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#111827] shadow-sm";

const lessons = [
    { no: "01", title: "Introduction to Digital Assets", time: "12 mins" },
    { no: "02", title: "Design Principles for Impacts", time: "21 mins" },
    { no: "03", title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

const included = [
    { icon: learningResIcon, label: "Learning Resources" },
    { icon: lessonsIcon, label: "Quality Lesson Videos" },
    { icon: certificateIcon, label: "Certificate of Completion" },
    { icon: consultationIcon, label: "Private Consultation" },
];

const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
];

const sneakPeeks = [sneakPeak1, sneakPeak2, sneakPeak3, sneakPeak4];

function PriceCard() {
    return (
        <div className="w-full rounded-[32px] bg-white p-6 sm:p-8 shadow-sm border border-gray-100 text-[#111827]">
            <h3 className="text-xl font-semibold font-poppins text-[#242528]">
                112 Lessons (24 hours)
            </h3>

            <div className="mt-6 flex flex-col gap-4">
                {lessons.map((lesson) => (
                    <div key={lesson.no} className="flex items-start justify-between text-[16px] font-normal font-satoshi">
                        <div className="flex gap-3">
                            <span className="text-[#242528] ">{lesson.no}</span>
                            <span className="text-[#111827] font-medium">{lesson.title}</span>
                        </div>
                        <span className="text-[#003BE2] shrink-0 ml-2">
                            {lesson.time}
                        </span>
                    </div>
                ))}
            </div>

            <p className="mt-4 text-[16px] text-[#4B4C53]">99 more videos</p>

            <p className="mt-6 text-[16px] text-[#4B4C53] leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-[#003BE2]">$25</span>
                <span className="text-xs text-[#4B4C53]">/lifetime</span>
            </div>

            <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#D4FB20] py-3.5 text-center text-sm font-bold text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-sm font-satoshi"
            >
                Enroll Now
            </button>

            <div className="mt-8">
                <h4 className="text-[20px] font-semibold font-poppins text-[#242528]">This course include</h4>
                <div className="mt-4 flex flex-col gap-3.5">
                    {included.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-3 text-xs sm:text-sm text-[#4B4C53]"
                        >
                            <Image src={item.icon} alt={item.label} className="size-5 object-contain" />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-6 border-t border-[#D1D1D1]" />

            <div className="flex items-center gap-3">
                <div className="relative size-12 rounded-full overflow-hidden shrink-0">
                    <Image src={avatarIcon} alt="PurePearl Studio" fill className="object-cover" />
                </div>
                <div>
                    <h5 className="text-[18px] font-medium font-satoshi text-[#242528]">PurePearl Studio</h5>
                    <p className="text-[16px] text-[#4B4C53]">Professional Creator</p>
                </div>
            </div>

            <p className="mt-4 text-[16px] font-normal text-[#4B4C53] leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            <button
                type="button"
                className="mt-5 rounded-full border border-gray-300 px-5 py-2 text-[16px] font-semibold text-[#4B4C53] hover:bg-gray-50 transition-colors cursor-pointer"
            >
                <Link href="/creator_profile" className="text-[16px] font-semibold text-[#4B4C53] hover:underline">
                    See Full Profile
                </Link>
            </button>
        </div>
    );
}

export default function CourseDetailPage() {
    return (
        <div className="bg-white font-satoshi text-[#111827]">
            {/* 1. HERO */}
            <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/Hero-bg.webp')] pt-6 text-white font-satoshi">
                <div className="absolute inset-x-0 top-0 z-50">
                    <Navbar />
                </div>

                <div className="container-main pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 items-start">
                        {/* Row 1, left: title + badges */}
                        <div className="lg:col-span-8">
                            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl font-poppins text-white leading-tight">
                                Build Digital Asset: A Comprehensive Guide
                            </h1>
                            <p className="mt-2 font-semibold text-base sm:text-lg text-[#F5F5F6]">
                                Unlock the Power of Digital Creation with Expert Guidance
                            </p>
                            <p className="mt-3 text-sm sm:text-base text-white/80">
                                by{" "}
                                <span className="font-semibold text-[#D4FB20] cursor-pointer hover:underline">
                                    purepearl studio
                                </span>
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <div className={badgeClass}>
                                    <Image src={networkIcon} alt="Difficulty" className="size-4 object-contain" />
                                    <span>Intermediate</span>
                                </div>
                                <div className={badgeClass}>
                                    <Image src={starIcon} alt="Star Rating" className="size-4 object-contain" />
                                    <span>4.8 (172 reviews)</span>
                                </div>
                                <div className={badgeClass}>
                                    <Image src={peopleIcon} alt="Enrolled Students" className="size-4 object-contain" />
                                    <span>199 Students</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 1, right: Share button, right-aligned */}
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-full bg-[#D4FB20] px-5 py-2.5 text-sm font-semibold text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-md"
                            >
                                <Image src={shareIcon} alt="Share" className="size-4 object-contain" />
                                <span>Share</span>
                            </button>
                        </div>

                        {/* Row 2, left: video */}
                        <div className="lg:col-span-8">
                            <div className="relative w-full aspect-16/10 sm:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10">
                                <Image
                                    src={videoAvatar}
                                    alt="Course Intro Preview"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <button
                                    type="button"
                                    aria-label="Play video preview"
                                    className="absolute inset-0 m-auto size-16 sm:size-20 flex items-center justify-center rounded-2xl transition-transform hover:scale-105 cursor-pointer"
                                >
                                    <Image
                                        src={playButtonIcon}
                                        alt="Play"
                                        className="size-full object-contain drop-shadow-xl"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Row 2, right: price card, top-aligned with video, overhangs the hero */}
                        <div className="lg:col-span-4 relative z-30 mb-20 lg:-mb-87.5">
                            <PriceCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. BODY */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 items-start">
                    <div className="lg:col-span-8 pt-10">
                        <RadixTabs.Root defaultValue="about" className="w-full">
                            <RadixTabs.List className="inline-flex items-center gap-2 p-1 bg-[#F5F5F6] rounded-full mb-8">
                                <RadixTabs.Trigger value="about" className={tabTriggerClass}>
                                    About
                                </RadixTabs.Trigger>
                                <RadixTabs.Trigger value="lessons" className={tabTriggerClass}>
                                    Lessons
                                </RadixTabs.Trigger>
                                <RadixTabs.Trigger value="reviews" className={tabTriggerClass}>
                                    Reviews
                                </RadixTabs.Trigger>
                            </RadixTabs.List>

                            {/* About */}
                            <RadixTabs.Content value="about" className="outline-none focus:outline-none">
                                <h3 className="text-xl font-semibold font-poppins text-[#242528]">
                                    Description
                                </h3>
                                <p className="mt-4 text-[16px] font-normal text-[#4B4C53] leading-relaxed">
                                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                                </p>
                                <p className="mt-4 text-[16px] font-normal text-[#4B4C53] leading-relaxed">
                                    In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                                </p>
                                <p className="mt-4 text-[16px] font-normal text-[#4B4C53] leading-relaxed">
                                    As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.
                                </p>

                                <div className="mt-10">
                                    <h3 className="text-xl font-semibold font-poppins text-[#242528]">
                                        Sneak Peak
                                    </h3>
                                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {sneakPeeks.map((src, i) => (
                                            <div
                                                key={i}
                                                className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
                                            >
                                                <Image src={src} alt={`Sneak Peak ${i + 1}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 mb-16">
                                    <h3 className="text-xl font-semibold font-poppins text-[#242528]">
                                        Key Points
                                    </h3>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {keyPoints.map((point) => (
                                            <li key={point} className="flex items-center gap-3">
                                                <Image src={tickIcon} alt="Check" className="size-5 shrink-0 object-contain" />
                                                <span className="text-xs sm:text-sm text-[#4B4C53] font-medium">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </RadixTabs.Content>

                            {/* Lessons */}
                            <RadixTabs.Content value="lessons" className="outline-none focus:outline-none">
                                <LessonsTab />
                            </RadixTabs.Content>

                            {/* Reviews */}
                            <RadixTabs.Content value="reviews" className="outline-none focus:outline-none">
                                <ReviewsTab />
                            </RadixTabs.Content>
                        </RadixTabs.Root>
                    </div>

                    {/* Spacer column: the price card overhangs into this area from the hero */}
                    <div className="hidden lg:block lg:col-span-4" />
                </div>
            </div>
        </div>
    );
}