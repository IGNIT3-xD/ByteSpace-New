import Image from "next/image";
import heroBackground from "@/public/Hero-bg.webp";
import model from "@/public/bytespace-model.png";
import ellipse from "@/public/Ellipse_7.png";
import ring from "@/public/Cone.png";
import triangle from "@/public/Cone_1.png";
import yellowCorner from "@/public/Cone_2.png";
import greenSpiral from "@/public/Frame.png";
import smallSpiral from "@/public/Frame_1.png";
import largeSpiral from "@/public/Frame_2.png";

const avatarFilters = [
    "",
    "hue-rotate(40deg)",
    "hue-rotate(120deg) saturate(.75)",
    "hue-rotate(205deg)",
    "hue-rotate(305deg) saturate(.8)",
];

export default function Hero() {
    return (
        <section className="relative h-svh w-full overflow-hidden">
            <Image
                src={heroBackground}
                alt=""
                fill
                priority
                sizes="100vw"
                className="-z-10 object-cover"
            />

            <div className="relative mx-auto h-full w-[min(100%,154.7svh)] @container">

                {/* Green spiral */}
                <Image
                    src={greenSpiral}
                    alt=""
                    className="
                        absolute top-[13%] left-[-14.5%] z-0 h-auto w-[18.8cqw]
                        max-[699px]:top-[30%]
                        max-[699px]:left-[-2%]
                        max-[699px]:w-[24cqw]
                        min-[700px]:max-[1023px]:top-[19%]
                        min-[700px]:max-[1023px]:left-[-1%]
                        min-[700px]:max-[1023px]:w-[22cqw]
                    "
                />

                {/* Small spiral */}
                <Image
                    src={smallSpiral}
                    alt=""
                    priority
                    className="
                        absolute top-[44.5%] left-[11.7%] z-0 h-auto w-[11.5cqw]
                        max-[699px]:hidden
                        max-[699px]:w-[13cqw]
                        min-[700px]:max-[1023px]:top-[48%]
                        min-[700px]:max-[1023px]:left-[8%]
                        min-[700px]:max-[1023px]:w-[13cqw]
                    "
                />

                {/* Yellow corner */}
                <Image
                    src={yellowCorner}
                    alt=""
                    priority
                    className="
                        absolute top-[13%] left-full z-0 h-auto w-[15cqw]
                        max-[699px]:top-[30%]
                        max-[699px]:left-[80%]
                        max-[699px]:w-[22cqw]
                        min-[700px]:max-[1023px]:top-[19%]
                        min-[700px]:max-[1023px]:left-[82%]
                        min-[700px]:max-[1023px]:w-[20cqw]
                    "
                />

                {/* Triangle */}
                <Image
                    src={triangle}
                    alt=""
                    priority
                    className="
                        absolute top-[39%] left-[83%] z-0 h-auto w-[13.5cqw]
                        max-[699px]:hidden
                        max-[699px]:w-[15cqw]
                        min-[700px]:max-[1023px]:top-[46%]
                        min-[700px]:max-[1023px]:left-[80%]
                        min-[700px]:max-[1023px]:w-[14cqw]
                    "
                />

                {/* Ring */}
                <Image
                    src={ring}
                    alt=""
                    priority
                    className="
                        absolute top-[62.5%] -left-5 z-10 h-auto w-[27cqw]
                        max-[699px]:top-[50%]
                        max-[699px]:left-[-5%]
                        max-[699px]:w-[34cqw]
                        min-[700px]:max-[1023px]:top-[62%]
                        min-[700px]:max-[1023px]:left-[-3%]
                        min-[700px]:max-[1023px]:w-[31cqw]
                    "
                />

                {/* Large spiral */}
                <Image
                    src={largeSpiral}
                    alt=""
                    priority
                    className="
                        absolute top-[60.7%] left-[78.7%] z-0 h-auto w-[22cqw]
                        max-[699px]:top-[50%]
                        max-[699px]:left-[80%]
                        max-[699px]:w-[25cqw]
                        min-[700px]:max-[1023px]:top-[62%]
                        min-[700px]:max-[1023px]:left-[78%]
                        min-[700px]:max-[1023px]:w-[24cqw]
                    "
                />

                {/* Green ellipse */}
                <Image
                    src={ellipse}
                    alt=""
                    priority
                    className="
                        absolute top-[52%] left-[9.5%] z-0 h-auto w-[81cqw]
                        max-[699px]:top-[85%]
                        max-[699px]:left-[4%]
                        max-[699px]:w-[92cqw]
                        min-[700px]:max-[1023px]:top-[80%]
                        min-[700px]:max-[1023px]:left-[6%]
                        min-[700px]:max-[1023px]:w-[88cqw]
                    "
                />

                {/* =========================
                    HERO CONTENT
                ========================== */}

                <div
                    className="
                        absolute top-[8%] left-1/2 z-40 w-[72cqw] -translate-x-1/2 text-center

                        max-[699px]:top-[7%]
                        max-[699px]:w-[88cqw]

                        min-[700px]:max-[1023px]:top-[8%]
                        min-[700px]:max-[1023px]:w-[80cqw]
                    "
                >
                    <h1
                        id="hero-heading"
                        className="
                            font-poppins m-0 text-[5.55cqw] leading-[1.02] font-semibold tracking-[-0.035em]

                            max-[699px]:text-[7.5cqw]

                            min-[700px]:max-[1023px]:text-[5.8cqw]
                        "
                    >
                        Get Access to Hundreds
                        <br />
                        Courses Available
                    </h1>

                    <p
                        className="
                            font-satoshi mt-[2.9cqw] text-[1.2cqw] leading-normal font-normal tracking-[-0.01em] whitespace-nowrap text-white/90

                            max-[699px]:mx-auto
                            max-[699px]:mt-6
                            max-[699px]:w-[88cqw]
                            max-[699px]:text-[2.6cqw]
                            max-[699px]:whitespace-normal

                            min-[700px]:max-[1023px]:mx-auto
                            min-[700px]:max-[1023px]:mt-[3.5cqw]
                            min-[700px]:max-[1023px]:w-[78cqw]
                            min-[700px]:max-[1023px]:text-[1.8cqw]
                            min-[700px]:max-[1023px]:whitespace-normal
                        "
                    >
                        Unlock your creativity, gain valuable knowledge, and grow your
                        business with our wide range of courses.
                    </p>

                    <form
                        role="search"
                        className="
                            mx-auto mt-[3.95cqw] flex h-[3.7cqw] w-[40.3cqw] items-center gap-[1.1cqw]

                            max-[699px]:mt-7
                            max-[699px]:h-11
                            max-[699px]:w-[90cqw]
                            max-[699px]:gap-2

                            min-[700px]:max-[1023px]:mt-[4.5cqw]
                            min-[700px]:max-[1023px]:h-[6.5cqw]
                            min-[700px]:max-[1023px]:w-[64cqw]
                            min-[700px]:max-[1023px]:gap-[1.5cqw]
                        "
                    >
                        <label className="sr-only" htmlFor="course-search">
                            Search courses
                        </label>

                        <div className="relative h-full min-w-0 flex-1">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="
                                    absolute top-1/2 left-[1.55cqw] z-10 size-[1.4cqw] -translate-y-1/2 text-[#777d87]

                                    max-[699px]:left-4
                                    max-[699px]:size-4

                                    min-[700px]:max-[1023px]:left-[2cqw]
                                    min-[700px]:max-[1023px]:size-[2.2cqw]
                                "
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="6.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <path
                                    d="m16 16 4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <input
                                id="course-search"
                                type="search"
                                placeholder="Course, topic, creator"
                                className="
                                    h-full w-full rounded-full border-0 bg-white
                                    pr-[1.5cqw] pl-[4cqw]
                                    text-[1.05cqw] text-[#1b2233]
                                    shadow-[0_3px_12px_rgba(1,32,138,.12)]
                                    outline-none
                                    placeholder:text-[#858994]
                                    focus-visible:ring-2
                                    focus-visible:ring-white/80

                                    max-[699px]:pr-4
                                    max-[699px]:pl-11
                                    max-[699px]:text-xs

                                    min-[700px]:max-[1023px]:pr-[2cqw]
                                    min-[700px]:max-[1023px]:pl-[5cqw]
                                    min-[700px]:max-[1023px]:text-[1.7cqw]

                                    [&::-webkit-search-cancel-button]:hidden
                                "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                                h-full shrink-0 cursor-pointer rounded-full border-0
                                bg-[#caff00]
                                px-[1.9cqw]
                                text-[1.02cqw]
                                font-semibold text-[#07123d]
                                transition-transform
                                hover:-translate-y-px
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-white

                                max-[699px]:px-5
                                max-[699px]:text-xs

                                min-[700px]:max-[1023px]:px-[3cqw]
                                min-[700px]:max-[1023px]:text-[1.6cqw]
                            "
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* UI/UX CARD */}
                <div
                    className="
                        absolute top-[58.5%] left-[27.9%] z-10 w-[14.4cqw]
                        rounded-[.8cqw] bg-white/98
                        px-[1.15cqw] py-[1.25cqw]
                        text-[#12182d]
                        shadow-[0_10px_24px_rgba(2,27,117,.1)]

                        max-[699px]:top-auto
                        max-[699px]:bottom-[23%]
                        max-[699px]:left-[4%]
                        max-[699px]:w-32
                        max-[699px]:rounded-lg
                        max-[699px]:p-3

                        min-[700px]:max-[1023px]:top-[80%]
                        min-[700px]:max-[1023px]:left-[18%]
                        min-[700px]:max-[1023px]:w-[20cqw]
                        min-[700px]:max-[1023px]:rounded-[1.2cqw]
                        min-[700px]:max-[1023px]:px-[1.5cqw]
                        min-[700px]:max-[1023px]:py-[1.6cqw]
                    "
                >
                    <span
                        className="
                            font-poppins block text-[1.02cqw] leading-none font-medium

                            max-[699px]:text-[9px]

                            min-[700px]:max-[1023px]:text-[1.5cqw]
                        "
                    >
                        UI/UX Design
                    </span>

                    <small
                        className="
                            font-satoshi mt-[.45cqw] block text-[.58cqw]
                            leading-none whitespace-nowrap text-[#9b9da5]

                            max-[699px]:mt-1
                            max-[699px]:text-[6px]

                            min-[700px]:max-[1023px]:mt-[.7cqw]
                            min-[700px]:max-[1023px]:text-[.85cqw]
                        "
                    >
                        100 Courses&nbsp;&nbsp; • &nbsp;&nbsp;1000+ Students
                    </small>
                </div>

                {/* LEARNING PROGRESS CARD */}
                <div
                    className="
                        absolute top-[59.6%] left-[58.4%] z-30 w-[16.2cqw]
                        rounded-[.8cqw] bg-white/98
                        px-[1.25cqw] pt-[1.45cqw] pb-[1.6cqw]
                        text-[#11172b]
                        shadow-[0_10px_24px_rgba(2,27,117,.1)]

                        max-[699px]:top-auto
                        max-[699px]:right-[1%]
                        max-[699px]:bottom-[25%]
                        max-[699px]:left-auto
                        max-[699px]:w-36
                        max-[699px]:rounded-lg
                        max-[699px]:p-3

                        min-[700px]:max-[1023px]:top-[59%]
                        min-[700px]:max-[1023px]:right-[14%]
                        min-[700px]:max-[1023px]:left-auto
                        min-[700px]:max-[1023px]:w-[22cqw]
                        min-[700px]:max-[1023px]:rounded-[1.2cqw]
                        min-[700px]:max-[1023px]:px-[1.5cqw]
                        min-[700px]:max-[1023px]:pt-[1.7cqw]
                        min-[700px]:max-[1023px]:pb-[1.8cqw]
                    "
                >
                    <span
                        className="
                            font-satoshi block text-[.9cqw] leading-none font-normal

                            max-[699px]:text-[8px]

                            min-[700px]:max-[1023px]:text-[1.3cqw]
                        "
                    >
                        Learning Progress
                    </span>

                    <strong
                        className="
                            mt-[.55cqw] block text-[2.8cqw]
                            leading-[.9] font-semibold font-poppins

                            max-[699px]:mt-1
                            max-[699px]:text-2xl

                            min-[700px]:max-[1023px]:mt-[.8cqw]
                            min-[700px]:max-[1023px]:text-[3.5cqw]
                        "
                    >
                        55%
                    </strong>

                    <i
                        className="
                            mt-[1.5cqw] block h-[.32cqw] rounded-full
                            bg-[linear-gradient(to_right,#caff00_0_55%,#e7e8e9_55%_100%)]

                            max-[699px]:mt-3
                            max-[699px]:h-0.75

                            min-[700px]:max-[1023px]:mt-[1.8cqw]
                            min-[700px]:max-[1023px]:h-[.5cqw]
                        "
                    />
                </div>

                {/* MODEL */}
                <div
                    className="
                        absolute bottom-[-3%] left-1/2 z-20
                        w-[40cqw] -translate-x-1/2

                        max-[699px]:bottom-[-1%]
                        max-[699px]:w-[92cqw]

                        min-[700px]:max-[1023px]:bottom-[-2%]
                        min-[700px]:max-[1023px]:w-[55cqw]
                    "
                >
                    <Image
                        src={model}
                        alt="A smiling student holding a laptop"
                        priority
                        sizes="(max-width: 699px) 92vw, (max-width: 1023px) 55vw, min(40vw, 400px)"
                        className="h-auto w-full drop-shadow-[15px_10px_18px_rgba(4,27,101,.16)]"
                    />
                </div>

                {/* HAPPY STUDENTS CARD */}
                <div
                    className="
                        absolute bottom-[4%] left-[22.5%] z-40
                        w-[18.2cqw]
                        rounded-[.8cqw] bg-white/98
                        px-[1.1cqw] py-[1.3cqw]
                        text-[#11172b]
                        shadow-[0_10px_24px_rgba(2,27,117,.1)]

                        max-[699px]:top-auto
                        max-[699px]:bottom-[5%]
                        max-[699px]:left-[4%]
                        max-[699px]:w-44
                        max-[699px]:rounded-lg
                        max-[699px]:p-3

                        min-[700px]:max-[1023px]:bottom-[5%]
                        min-[700px]:max-[1023px]:left-[10%]
                        min-[700px]:max-[1023px]:w-[24cqw]
                        min-[700px]:max-[1023px]:rounded-[1.2cqw]
                        min-[700px]:max-[1023px]:px-[1.5cqw]
                        min-[700px]:max-[1023px]:py-[1.6cqw]
                    "
                >
                    <span
                        className="
                            font-poppins block text-[1cqw]
                            leading-none font-medium

                            max-[699px]:text-[9px]

                            min-[700px]:max-[1023px]:text-[1.5cqw]
                        "
                    >
                        Happy Students
                    </span>

                    <small
                        className="
                            font-satoshi mt-[.4cqw] block text-[.62cqw]
                            leading-none text-[#999ca4]

                            max-[699px]:mt-1
                            max-[699px]:text-[7px]

                            min-[700px]:max-[1023px]:mt-[.7cqw]
                            min-[700px]:max-[1023px]:text-[.9cqw]
                        "
                    >
                        4.5 (240) ⭐
                    </small>

                    <div
                        className="
                            mt-[.85cqw] flex items-center justify-between

                            max-[699px]:mt-2

                            min-[700px]:max-[1023px]:mt-[1.2cqw]
                        "
                    >
                        <div className="flex pl-[.2cqw]" aria-hidden="true">
                            {avatarFilters.map((filter, index) => (
                                <i
                                    key={filter || "original"}
                                    className="
                                        ml-[-0.45cqw] block size-[2.35cqw]
                                        rounded-full border-[1.5px] border-white
                                        bg-[#d9dce4]
                                        bg-[url('/images/bytespace-model.png')]
                                        bg-size-[4.6cqw_auto]
                                        bg-position-[50%_.1cqw]
                                        bg-no-repeat
                                        first:ml-0

                                        max-[699px]:-ml-1
                                        max-[699px]:size-6
                                        max-[699px]:bg-size-[46px_auto]
                                        max-[699px]:bg-position-[50%_1px]

                                        min-[700px]:max-[1023px]:ml-[-0.6cqw]
                                        min-[700px]:max-[1023px]:size-[3.5cqw]
                                        min-[700px]:max-[1023px]:bg-size-[6.5cqw_auto]
                                    "
                                    style={{ filter }}
                                    data-avatar={index + 1}
                                />
                            ))}
                        </div>

                        <b
                            className="
                                grid size-[3cqw] place-items-center
                                rounded-full bg-[#caff00]
                                text-[.72cqw] font-semibold

                                max-[699px]:size-8
                                max-[699px]:text-[8px]

                                min-[700px]:max-[1023px]:size-[4cqw]
                                min-[700px]:max-[1023px]:text-[1cqw]
                            "
                        >
                            2K+
                        </b>
                    </div>
                </div>
            </div>
        </section>
    );
}