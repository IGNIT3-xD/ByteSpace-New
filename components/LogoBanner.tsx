import Image from "next/image";
import logo1 from "@/public/Logo_1.png";
import logo2 from "@/public/Logo_2.png";
import logo3 from "@/public/Logo_3.png";
import logo4 from "@/public/Logo_4.png";
import logo5 from "@/public/Logo_5.png";

const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
];

export default function LogoBanner() {
    return (
        <section className="w-full bg-[#F5F5F6] py-8 sm:py-10 px-4 sm:px-8">
            <div className="container-main flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-12 md:justify-between">
                {logos.map((logo, index) => (
                    <div
                        key={logo.id}
                        className={`relative h-7 w-auto min-w-30 flex items-center justify-center ${index === 4 ? "max-sm:w-full" : ""
                            }`}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="h-7 sm:h-9 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}