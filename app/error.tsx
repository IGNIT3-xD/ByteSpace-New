// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#07123d] px-6 text-center font-satoshi">
            <div className="relative z-10 max-w-lg">
                <span className="font-poppins text-7xl sm:text-8xl font-bold text-[#caff00]">
                    Oops!
                </span>

                <h1 className="font-poppins mt-4 text-2xl sm:text-3xl font-semibold text-white">
                    Something went wrong
                </h1>

                <p className="mt-3 text-sm sm:text-base text-[#E5E6E8]">
                    An unexpected error occurred while loading this page.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="w-full sm:w-auto rounded-full bg-[#caff00] px-6 py-3 text-sm font-medium text-[#07123d] cursor-pointer transition-all hover:-translate-y-0.5"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}