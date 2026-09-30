import Image from "next/image";
import av12 from "@/public/av12.png";
import av13 from "@/public/av13.png";
import av14 from "@/public/av14.png";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: av12,
        quote:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        avatar: av13,
        quote:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: av14,
        quote:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

export default function CommunityReviews() {
    return (
        <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-10 md:py-16 bg-[url('/review-bg.webp')]">
            <div className="container-main">
                {/* Header Grid: Title Left, Paragraph Right */}
                <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-6">
                        <h2 className="title-main">
                            Discover What Our Community Is Saying
                        </h2>
                    </div>
                    <div className="lg:col-span-6 lg:pt-1">
                        <p className="subtitle-main text-[#4F4F4F]">
                            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* Testimonials Cards Grid */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-start bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                        >
                            {/* Avatar */}
                            <div className="relative size-16 overflow-hidden rounded-full shrink-0">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Author Details */}
                            <div className="mt-5">
                                <h3 className="text-base font-bold text-[#0F172A] font-['Poppins',sans-serif]">
                                    {item.name}
                                </h3>
                                <p className="text-xs font-medium text-[#2563EB] mt-0.5 font-['Satoshi',sans-serif]">
                                    {item.role}
                                </p>
                            </div>

                            {/* Quote */}
                            <p className="mt-4 text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal font-['Satoshi',sans-serif]">
                                {item.quote}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}