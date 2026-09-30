"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ShoppingBag, User, LogOut, ChevronDown } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { data: session, isPending } = useSession();

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed out successfully");
                    setIsDropdownOpen(false);
                    closeMenu();
                    router.push("/");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Failed to sign out");
                },
            },
        });
    };

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const user = session?.user;

    return (
        <header
            className={`w-full ${isOpen ? "bg-white" : "bg-transparent"
                } md:bg-transparent`}
        >
            <nav className="mx-auto flex h-16 items-center justify-between container-main">
                {/* ======================= LOGO ======================== */}
                <Link href="/" onClick={closeMenu} className="shrink-0">
                    <Image
                        src={isOpen ? "/logo-inverted.png" : "/Header_Logo.png"}
                        alt="ByteSpace"
                        width={145}
                        height={40}
                        priority
                        className="h-auto w-31.25 sm:w-35"
                    />
                </Link>

                {/* ======================= DESKTOP NAVIGATION ======================== */}
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

                {/* ======================= DESKTOP RIGHT SIDE ======================== */}
                <div className="hidden items-center gap-6 md:flex">
                    {!isPending && user ? (
                        /* Logged In - User Avatar Dropdown */
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-white/10 focus:outline-none cursor-pointer"
                                aria-expanded={isDropdownOpen}
                            >
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User Avatar"}
                                        width={36}
                                        height={36}
                                        className="size-9 rounded-full object-cover border border-white/20"
                                    />
                                ) : (
                                    <div className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white border border-white/30">
                                        <User size={18} />
                                    </div>
                                )}
                                <ChevronDown size={14} className="text-white/80" />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 z-50">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-900 truncate">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate mt-0.5">
                                            {user.email}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleSignOut}
                                        className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                    >
                                        <LogOut size={16} />
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Logged Out - Auth Links */
                        <>
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
                        </>
                    )}

                    <Link
                        href="/cart"
                        aria-label="Shopping bag"
                        className="text-white/80 transition-colors hover:text-white"
                    >
                        <ShoppingBag size={17} strokeWidth={1.7} />
                    </Link>
                </div>

                {/* ======================= MOBILE MENU BUTTON ======================== */}
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

            {/* ======================= MOBILE MENU ======================== */}
            {isOpen && (
                <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        {/* User Profile Summary in Mobile Menu */}
                        {user && (
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User Avatar"}
                                        width={40}
                                        height={40}
                                        className="size-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-[#07123d]">
                                        <User size={20} />
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-[#07123d]">
                                        {user.name}
                                    </span>
                                    <span className="text-xs text-gray-500">{user.email}</span>
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/courses"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Courses
                        </Link>

                        <Link
                            href="/creators"
                            onClick={closeMenu}
                            className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                        >
                            Creators
                        </Link>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-200" />

                        {/* Auth Actions */}
                        {user ? (
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                            >
                                <LogOut size={16} />
                                Log Out
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    onClick={closeMenu}
                                    className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={closeMenu}
                                    className="text-sm text-[#07123d] transition-colors hover:text-[#5165ff]"
                                >
                                    Join Us
                                </Link>
                            </>
                        )}

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