import Footer from '@/components/Footer';
import CourseDetailPage from './_components/DetailsBanner';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export const revalidate = 300;

export async function generateStaticParams() {
    const courses = await prisma.course.findMany({
        select: { id: true },
    });

    return courses.map((course) => ({
        id: course.id,
    }));
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    const course = await prisma.course.findUnique({
        where: { id },
    });

    if (!course) {
        notFound();
    }

    return (
        <div>
            <CourseDetailPage course={course} />
            <Footer />
        </div>
    );
}