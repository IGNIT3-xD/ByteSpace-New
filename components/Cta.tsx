import { PenTool, Code, Laptop, Building2, Megaphone, Camera } from "lucide-react";

const categories = [
    {
        id: "design",
        title: "Design",
        icon: PenTool,
    },
    {
        id: "development",
        title: "Development",
        icon: Code,
    },
    {
        id: "it-software",
        title: "IT & Software",
        icon: Laptop,
    },
    {
        id: "business",
        title: "Business",
        icon: Building2,
    },
    {
        id: "marketing",
        title: "Marketing",
        icon: Megaphone,
    },
    {
        id: "photography",
        title: "Photography",
        icon: Camera,
    },
];

export default function CTA() {
    return (
        <section className="w-full py-16 text-center">
            <div className="container-main">
                {/* Heading */}
                <h2 className="title-main">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                {/* Subtitle */}
                <p className="subtitle-main">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                {/* Category Cards */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                    {categories.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group flex flex-col items-center justify-center p-6 rounded-3xl border border-[#CED0D3] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
                            >
                                {/* Circular Icon Container */}
                                <div className="flex size-14 items-center justify-center rounded-full bg-[#D4FB20] text-[#0F172A] transition-transform duration-300 group-hover:scale-105">
                                    <Icon className="size-6 stroke-[1.8]" />
                                </div>

                                {/* Icon Title */}
                                <span className="mt-4 text-sm md:text-[18px] font-medium text-[#111827] whitespace-nowrap font-satoshi">
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}