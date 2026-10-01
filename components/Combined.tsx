import Image from "next/image";
import { Check } from "lucide-react";
import frameImg11 from "@/public/Frame 11.webp";
import frameImg12 from "@/public/Frame 12.webp";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function CombinedGrowthSection() {
    return (
        <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat pt-10 md:pt-16 bg-[url('/fulll-bg.webp')]">
            <div className="container-main">

                {/* First Row: Your Path to Professional Growth */}
                <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16">

                    {/* Left Column: Content & Stats */}
                    <div className="flex flex-col justify-center text-left lg:col-span-6 pr-0 lg:pr-4">
                        <h2 className="title-main">
                            Your Path to Professional Growth Starts Here!
                        </h2>

                        <p className="subtitle-main">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        {/* Stats Row */}
                        <div className="mt-8 flex items-center gap-10 sm:gap-14">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-[32px] font-medium leading-none text-[#003BE2] font-['Poppins',sans-serif]">
                                        {stat.value}
                                    </span>
                                    <span className="subtitle-main mt-2 text-xs sm:text-sm text-gray-500">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Frame 11 Image */}
                    <div className="relative flex items-center justify-center lg:col-span-6">
                        <div className="relative w-full max-w-155">
                            <Image
                                src={frameImg11}
                                alt="Your Path to Professional Growth"
                                className="h-auto w-full object-contain drop-shadow-md"
                            />
                        </div>
                    </div>

                </div>

                {/* Second Row: Create & Manage Courses Easily */}
                <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16">

                    {/* Left Column: Frame 12 Image */}
                    <div className="relative flex items-center justify-center lg:col-span-6 order-2 lg:order-1">
                        <div className="relative w-full max-w-145">
                            <Image
                                src={frameImg12}
                                alt="Create and Manage Courses Easily"
                                className="h-auto w-full object-contain drop-shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content & Bullet Points */}
                    <div className="flex flex-col justify-center text-left lg:col-span-6 lg:pl-4 order-1 lg:order-2">
                        <h2 className="title-main">
                            Create & Manage<br />Courses Easily.
                        </h2>

                        <p className="subtitle-main">
                            <strong className="font-semibold text-gray-800">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        {/* Feature Checkmarks List */}
                        <ul className="mt-8 flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="flex size-5 items-center justify-center rounded-full bg-[#003BE2] text-white shrink-0">
                                        <Check className="size-3.5 stroke-[2.5]" />
                                    </div>
                                    <span className="text-sm sm:text-base font-medium text-[#111827] font-['Satoshi',sans-serif]">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}