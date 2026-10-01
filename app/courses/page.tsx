import CourseBanner from './_components/CourseBanner'
import Footer from '@/components/Footer'
import CourseFilters from './_components/Filter'
import Cards from '@/components/Cards'
import Pagination from './_components/PaginationButtons'
import CourseGrid from '@/components/CourseGrid'

const page = () => {
    return (
        <main>
            <CourseBanner />
            <CourseFilters />
            <div className="pb-10">
                {/* <Cards /> */}
                <CourseGrid />
            </div>
            <Pagination />
            <Footer />
        </main>
    )
}

export default page