import CourseBanner from './_components/CourseBanner';
import Footer from '@/components/Footer';
import CourseFilters from './_components/Filter';
import Pagination from './_components/PaginationButtons';
import CourseGrid from '@/components/CourseGrid';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

interface PageProps {
    searchParams: Promise<{
        page?: string;
        q?: string;
        category?: string;
        level?: string;
        sort?: string;
    }>;
}

export const revalidate = 300;

export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const query = params.q || '';
    const category = params.category || 'Featured';
    const level = params.level || '';
    const sort = params.sort || '';

    const limit = 9;
    const skip = (page - 1) * limit;

    if (category !== 'Featured') {
        return (
            <main>
                <CourseBanner />
                <CourseFilters />
                <div className="pb-10">
                    <CourseGrid courses={[]} />
                </div>
                <Footer />
            </main>
        );
    }

    // Build Prisma filter conditions
    const where: Prisma.CourseWhereInput = {
        ...(query && {
            title: {
                contains: query,
                mode: 'insensitive',
            },
        }),
        ...(level && {
            level: {
                equals: level,
                mode: 'insensitive',
            },
        }),
    };

    // Build Prisma sorting order
    let orderBy: Prisma.CourseOrderByWithRelationInput = { id: 'asc' };
    if (sort === 'price_asc') {
        orderBy = { price: 'asc' };
    } else if (sort === 'price_desc') {
        orderBy = { price: 'desc' };
    } else if (sort === 'rating_desc') {
        orderBy = { rating: 'desc' };
    }

    let courses: any[] = [];
    let totalCourses = 0;

    try {
        [courses, totalCourses] = await Promise.all([
            prisma.course.findMany({
                where,
                orderBy,
                take: limit,
                skip: skip,
            }),
            prisma.course.count({ where }),
        ]);
    } catch (error) {
        console.error("Database error while loading courses:", error);
    }

    const totalPages = Math.ceil(totalCourses / limit);

    return (
        <main>
            <CourseBanner />
            <CourseFilters />
            <div className="pb-10">
                <CourseGrid courses={courses} />
            </div>
            {totalPages > 0 && (
                <Pagination totalPages={totalPages} currentPage={page} />
            )}
            <Footer />
        </main>
    );
}