import Image from "next/image";
import frameImg from "@/public/Frame 11.png";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

export default function GrowthSection() {
    return (
        <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 bg-[url('/bg-2.webp')]">
            <div className="container-main">
                <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16">

                    {/* Left Column: Content & Stats */}
                    <div className="flex flex-col justify-center text-left lg:col-span-6 pr-0 lg:pr-4">

                        {/* Heading */}
                        <h2 className="title-main">
                            Your Path to Professional Growth Starts Here!
                        </h2>

                        {/* Subtitle */}
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

                    {/* Right Column: Frame Image */}
                    <div className="relative flex items-center justify-center lg:col-span-6">
                        <div className="relative w-full max-w-155">
                            <Image
                                src={frameImg}
                                alt="Your Path to Professional Growth"
                                className="h-auto w-full object-contain drop-shadow-md"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}