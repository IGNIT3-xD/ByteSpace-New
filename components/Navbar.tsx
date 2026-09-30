"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`w-full ${isOpen ? "bg-white" : "bg-transparent"
                } md:bg-transparent`}
        >
            <nav className="mx-auto flex h-16 items-center justify-between container-main">
                {/* =======================LOGO======================== */}
                <Link href="/" onClick={closeMenu} className="shrink-0">
                    <Image
                        src="/Header_Logo.png"
                        alt="ByteSpace"
                        width={145}
                        height={40}
                        priority
                        className="h-auto w-31.25 sm:w-35"
                    />
                </Link>

                {/* =======================DESKTOP NAVIGATION======================== */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        href="/courses"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        Courses
                    </Link>

                    <Link
                        href="/creators"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        Creators
                    </Link>
                </div>

                {/* =======================DESKTOP RIGHT SIDE======================== */}
                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/login"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        Join Us
                    </Link>

                    <Link
                        href="/cart"
                        aria-label="Shopping bag"
                        className="text-white/80 transition-colors hover:text-white"
                    >
                        <ShoppingBag size={17} strokeWidth={1.7} />
                    </Link>
                </div>

                {/* =======================
            MOBILE MENU BUTTON
        ======================== */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={`md:hidden ${isOpen ? "text-[#07123d]" : "text-white"
                        }`}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X size={25} strokeWidth={1.8} />
                    ) : (
                        <Menu size={25} strokeWidth={1.8} />
                    )}
                </button>
            </nav>

            {/* =======================
          MOBILE MENU
      ======================== */}
            {isOpen && (
                <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        {/* Home */}
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Home
                        </Link>

                        {/* Courses */}
                        <Link
                            href="/courses"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Courses
                        </Link>

                        {/* Creators */}
                        <Link
                            href="/creators"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Creators
                        </Link>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-200" />

                        {/* Sign In */}
                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Sign In
                        </Link>

                        {/* Join Us */}
                        <Link
                            href="/register"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Join Us
                        </Link>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            onClick={closeMenu}
                            className="flex items-center gap-2 text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            <ShoppingBag size={17} strokeWidth={1.7} />
                            Cart
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;