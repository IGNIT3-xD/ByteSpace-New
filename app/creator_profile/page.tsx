import Footer from "@/components/Footer"
import CreatorProfileHero from "./_components/ProfileBanner"
import TopBarFilter from "../courses/_components/TopBarFilter"
import Cards from "@/components/Cards"
import CourseGrid from "@/components/CourseGrid"

const page = () => {
    return (
        <div>
            <CreatorProfileHero />
            <div className="container-main my-16">
                <TopBarFilter />
                {/* <Cards /> */}
                <CourseGrid />
            </div>
            <Footer />
        </div>
    )
}

export default page