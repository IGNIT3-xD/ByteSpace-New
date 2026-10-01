import LogoBanner from "@/components/LogoBanner";
import Hero from "@/components/Hero";
import DiscoverSkills from "@/components/DiscoverSkills";
import CTA from "@/components/Cta";
import CombinedGrowthSection from "@/components/Combined";
import CreatorCTA from "@/components/CreatorCTA";
import CommunityReviews from "@/components/CommunityReviews";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const courses = await prisma.course.findMany({
    take: 6,
    orderBy: { id: "asc" },
  });

  return (
    <div>
      <Hero />
      <LogoBanner />
      <DiscoverSkills courses={courses} />
      <CTA />
      <CombinedGrowthSection />
      <CreatorCTA />
      <CommunityReviews />
      <Footer />
    </div>
  );
}