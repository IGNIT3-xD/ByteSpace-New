import CourseBanner from './_components/CourseBanner'
import Footer from '@/components/Footer'
import CourseFilters from './_components/Filter'
import Cards from '@/components/Cards'
import Pagination from './_components/PaginationButtons'

const page = () => {
    return (
        <div>
            <CourseBanner />
            <CourseFilters />
            <div className="pb-10">
                <Cards />
            </div>
            <Pagination />
            <Footer />
        </div>
    )
}

export default page