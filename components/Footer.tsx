"use client"
import Image from "next/image";
import logoInverted from "@/public/logo-inverted.png";
import Link from "next/link";

const footerColumn1 = [
    { name: "Featured Courses", href: "#" },
    { name: "Featured Categories", href: "#" },
    { name: "Business", href: "#" },
    { name: "IT", href: "#" },
    { name: "Design", href: "#" },
];

const footerColumn2 = [
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Photography", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Sport", href: "#" },
];

const footerColumn3 = [
    { name: "Become a Creator", href: "#" },
    { name: "Affiliate Program", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
    { name: "About", href: "#" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-16 border-t border-[#CED0D3]">
            <div className="container-main">
                {/* Main Footer Layout */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12">

                    {/* Left Area: Logo & Newsletter */}
                    <div className="flex flex-col items-start lg:col-span-5 pr-0 lg:pr-6">
                        {/* Logo */}
                        <Link href="/" className="relative h-9 w-auto">
                            <Image
                                src={logoInverted}
                                alt="ByteSpace"
                                className="h-9 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Newsletter Subtitle */}
                        <p className="mt-6 text-xs sm:text-sm text-[#4B5563] font-normal font-['Satoshi',sans-serif]">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Newsletter Form */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-1 rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-gray-400 focus:outline-none font-['Satoshi',sans-serif]"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-medium text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shrink-0 font-['Satoshi',sans-serif]"
                            >
                                Search
                            </button>
                        </form>

                        {/* Privacy Disclaimer */}
                        <p className="mt-4 text-[11px] text-[#6B7280] leading-normal max-w-md font-['Satoshi',sans-serif]">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Right Area: 3 Nav Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-7 pt-2 lg:pt-0">
                        {/* Column 1 */}
                        <ul className="flex flex-col space-y-4">
                            {footerColumn1.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-xs sm:text-sm text-[#374151] hover:text-[#111827] transition-colors font-['Satoshi',sans-serif]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Column 2 */}
                        <ul className="flex flex-col space-y-4">
                            {footerColumn2.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-xs sm:text-sm text-[#374151] hover:text-[#111827] transition-colors font-['Satoshi',sans-serif]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Column 3 */}
                        <ul className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
                            {footerColumn3.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-xs sm:text-sm text-[#374151] hover:text-[#111827] transition-colors font-['Satoshi',sans-serif]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-200/80 py-8">
                    {/* Bottom Bar */}
                    <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row text-xs text-[#6B7280] font-satoshi">
                        <p>© 2023 ByteSpace. All rights reserved.</p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href="#" className="hover:text-gray-900 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-gray-900 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-gray-900 transition-colors">
                                Cookies Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}