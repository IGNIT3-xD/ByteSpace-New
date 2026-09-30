import Image from "next/image";
import { Check } from "lucide-react";
import frameImg from "@/public/Frame 12.png";

const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function CreateCoursesSection() {
    return (
        <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 bg-[url('/bg-3.webp')]">
            <div className="container-main">
                <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16">

                    {/* Left Column: Frame Image */}
                    <div className="relative flex items-center justify-center lg:col-span-6 order-2 lg:order-1">
                        <div className="relative w-full max-w-145">
                            <Image
                                src={frameImg}
                                alt="Create and Manage Courses Easily"
                                className="h-auto w-full object-contain drop-shadow-md"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Content & Bullet Points */}
                    <div className="flex flex-col justify-center text-left lg:col-span-6 lg:pl-4 order-1 lg:order-2">

                        {/* Heading */}
                        <h2 className="title-main">
                            Create & Manage<br />Courses Easily.
                        </h2>

                        {/* Subtitle */}
                        <p className="subtitle-main">
                            <strong className="font-semibold text-gray-800">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        {/* Feature Checkmarks List */}
                        <ul className="mt-8 flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    {/* Circular Lucide Check Badge */}
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