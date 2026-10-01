"use client";

import Image from "next/image";
import moduleVideoIcon from "@/public/module_video.png";

const modules = [
    {
        title: "Module 1: Introduction to Digital Assets",
        description:
            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
        title: "Module 2: Design Principles for Impact",
        description:
            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
        title: "Module 4: User-Centric Design Strategies",
        description:
            "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
        title: "Module 5: Interactive Media and Engagement",
        description:
            "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
        title: "Module 6: Project Showcase and Critique",
        description:
            "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
            "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
];

export default function LessonsTab() {
    return (
        <div className="flex flex-col gap-8 text-[#4B4C53] font-satoshi font-normal pb-10">
            {/* 1. Explore the Modules */}
            <section>
                <h2 className="text-xl font-semibold font-poppins text-[#242528]">
                    Explore the Modules
                </h2>
                <p className="mt-2 text-[#4B4C53] font-satoshi text-base font-normal leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                </p>
            </section>

            {/* 2. Lesson List */}
            <section>
                <h2 className="text-xl font-semibold font-poppins text-[#242528]">
                    Lesson List
                </h2>

                <div className="mt-6 flex flex-col gap-6">
                    {modules.map((module, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Module Lime Icon Badge with 24px radius */}
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-[24px] bg-[#D4FB20]">
                                <Image
                                    src={moduleVideoIcon}
                                    alt="Module Video Icon"
                                    className="size-6 object-contain"
                                />
                            </div>

                            {/* Module Details */}
                            <div className="flex flex-col">
                                <h3 className="font-satoshi font-medium text-base text-[#242528]">
                                    {module.title}
                                </h3>
                                <p className="mt-1 text-[#4B4C53] font-satoshi text-base font-normal leading-relaxed">
                                    {module.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Lesson Content */}
            <section>
                <h2 className="text-xl font-semibold font-poppins text-[#242528]">
                    Lesson Content
                </h2>
                <p className="mt-2 text-[#4B4C53] font-satoshi text-base font-normal leading-relaxed">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                </p>
            </section>

            {/* 4. Lesson Progress Tracking */}
            <section>
                <h2 className="text-xl font-semibold font-poppins text-[#242528]">
                    Lesson Progress Tracking
                </h2>
                <p className="mt-2 text-[#4B4C53] font-satoshi text-base font-normal leading-relaxed">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                </p>

                {/* Learning Progress Box */}
                <div className="mt-6 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <span className="text-xs font-semibold text-[#4B4C53]">
                        Learning Progress
                    </span>
                    <div className="mt-1 text-3xl font-bold font-poppins text-[#242528]">
                        55%
                    </div>

                    {/* Progress Bar Track */}
                    <div className="mt-4 h-2.5 w-full rounded-full bg-gray-100">
                        {/* Progress Bar Fill */}
                        <div
                            className="h-2.5 rounded-full bg-[#D4FB20]"
                            style={{ width: "55%" }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}