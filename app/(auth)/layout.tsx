"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Vector.png";
import courseCardTop from "@/public/Course_Card_1.webp";
import courseCardBottom from "@/public/Course_Card_2.webp";
import happyStudents from "@/public/Happy_Students_reg.png";
import yellowTorus from "@/public/Cone (1).png";
import yellowPyramid from "@/public/Cone (2).png";
import whiteZigzag from "@/public/Frame (1).png";

const authContent = {
    "/login": {
        title: "Sign in with ease",
        description:
            "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    },
    "/register": {
        title: "Sign up and come in",
        description:
            "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    },
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Dynamic content selection based on route
    const content =
        authContent[pathname as keyof typeof authContent] || authContent["/register"];

    return (
        <main className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/Hero-bg.webp')] flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden">

            {/* Top Navbar Logo */}
            <Link href="/" className="z-10 container-main w-full">
                <div className="relative h-8 w-8">
                    <Image
                        src={logo}
                        alt="ByteSpace Logo"
                        className="object-contain"
                        fill
                        priority
                    />
                </div>
            </Link>

            {/* Main Container */}
            <div className="py-10 z-10 w-full container-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto justify-between">

                {/* Left Side: Dynamic Graphic & Copy */}
                <div className="lg:col-span-6 flex flex-col justify-center text-white">

                    {/* Dynamic Header Copy */}
                    <div className="max-w-md mb-10">
                        <h1 className="font-poppins text-2xl font-semibold">
                            {content.title}
                        </h1>
                        <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-satoshi">
                            {content.description}
                        </p>
                    </div>

                    {/* Floating Cards & Geometric Shapes Showcase */}
                    <div className="relative mt-12 sm:mt-16 w-full max-w-115 h-85 sm:h-95">
                        {/* Bottom Course Card */}
                        <div className="absolute left-0 top-12 w-[72%] rounded-2xl overflow-hidden shadow-2xl z-10 transform">
                            <Image
                                src={courseCardBottom}
                                alt="Course Card Preview"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Top Course Card (Overlapping) */}
                        <div className="absolute left-25 bottom-20 w-[78%] rounded-2xl overflow-hidden shadow-2xl z-20 transform">
                            <Image
                                src={courseCardTop}
                                alt="Course Card Main"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Happy Students Badge Card */}
                        <div className="hidden lg:block lg:absolute lg:left-50 lg:top-90 lg:w-[55%] lg:rounded-xl lg:overflow-hidden lg:shadow-xl lg:z-30 lg:mb-10">
                            <Image
                                src={happyStudents}
                                alt="Happy Students"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating 3D Shapes */}
                        {/* Yellow Torus / Ring */}
                        <div className="lg:absolute lg:left-8 lg:bottom-70 lg:size-30 lg:z-30 lg:pointer-events-none">
                            <Image src={yellowTorus} alt="Decorative Ring" className="object-contain" fill />
                        </div>

                        {/* Yellow Pyramid / Cone */}
                        <div className="hidden lg:block lg:absolute lg:-left-1 lg:-bottom-20 lg:size-30 lg:z-30 pointer-events-none">
                            <Image src={yellowPyramid} alt="Decorative Cone" className="object-contain" fill />
                        </div>

                        {/* White Zigzag Ribbon */}
                        <div className="hidden lg:block lg:absolute lg:-right-1 lg:-bottom-5 lg:size-36 lg:z-30 pointer-events-none">
                            <Image src={whiteZigzag} alt="Decorative Ribbon" className="object-contain" fill />
                        </div>
                    </div>
                </div>

                {/* Right Side: Auth Form Container (Dynamic Page Content) */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    {children}
                </div>
            </div>
        </main>
    );
}