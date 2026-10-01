import { Suspense } from "react"
import Footer from "@/components/Footer"
import CreatorProfileHero from "./_components/ProfileBanner"
import TopBarFilter from "../courses/_components/TopBarFilter"
import CourseGrid from "@/components/CourseGrid"

const page = () => {
    return (
        <div>
            <CreatorProfileHero />
            <div className="container-main my-16">
                <Suspense fallback={<div className="py-8 text-center text-gray-400">Loading filters...</div>}>
                    <TopBarFilter />
                </Suspense>
                {/* <Cards /> */}
                <CourseGrid courses={[]} />
            </div>
            <Footer />
        </div>
    )
}

export default page