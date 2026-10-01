// app/courses/[id]/page.tsx (or [details]/page.tsx)
import Footer from '@/components/Footer';
import CourseDetailPage from './_components/DetailsBanner';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>; // Adjust to { details: string } if folder is named [details]
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    console.log("Searching database for ID:", id);

    const course = await prisma.course.findUnique({
        where: { id },
    });

    // console.log("Found course:", course);

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