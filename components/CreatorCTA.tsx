export default function CreatorCTA() {
    return (
        <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-10 md:py-16 bg-[url('/CTA2_BG.webp')]">
            <div className="mx-auto max-w-4xl text-center">
                {/* Main Heading */}
                <h2 className="title-main text-white">
                    Unlock Your Potential as a
                    <br />
                    Creator with ByteSpace
                </h2>

                {/* Subtitle Description */}
                <p className="mt-6 subtitle-main text-[#F5F5F6]">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                {/* Action Button */}
                <div className="mt-8">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#111827] bg-[#D4FB20] hover:bg-[#c2ea13] transition-colors duration-200 cursor-pointer shadow-md font-['Satoshi',sans-serif]"
                    >
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
}