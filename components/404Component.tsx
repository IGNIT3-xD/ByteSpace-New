"use client";

import Image from "next/image";
import Link from "next/link";
import NotFoundGraphic from "@/public/404.webp";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
    return (
        <main className="relative flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/Hero-bg.webp')] px-4 text-center font-satoshi text-white">
            {/* Transparent Navbar */}
            <div className="absolute inset-x-0 top-0 z-50 bg-transparent">
                <Navbar />
            </div>

            {/* Main Content Container */}
            <div className="flex max-w-3xl flex-col items-center py-20 md:py-30">
                {/* 404 Image Graphic */}
                <div className="relative w-full max-w-lg sm:max-w-xl">
                    <Image
                        src={NotFoundGraphic}
                        alt="404"
                        className="h-auto w-full object-contain"
                        priority
                    />
                </div>

                {/* Heading */}
                <h1 className="-mt-4 font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                    The page you are looking <br className="hidden sm:block" />
                    for doesn’t exist
                </h1>

                {/* Subtitle / Description */}
                <p className="mt-4 font-satoshi text-lg font-normal text-white/80">
                    Try to use a correct url or go back to homepage to start again
                </p>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D4FB20] px-8 py-3 font-satoshi text-sm font-bold text-[#111827] transition-transform hover:scale-105 hover:bg-[#c2ea13] sm:text-base"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}