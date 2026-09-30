import LogoBanner from "@/components/LogoBanner"
import Hero from "@/components/Hero"
import DiscoverSkills from "@/components/DiscoverSkills"
import CTA from "@/components/Cta"
import CombinedGrowthSection from "@/components/Combined"
import CreatorCTA from "@/components/CreatorCTA"
import CommunityReviews from "@/components/CommunityReviews"

const page = () => {
  return (
    <div>
      <Hero />
      <LogoBanner />
      <DiscoverSkills />
      <CTA />
      {/* <GrowthSection /> */}
      {/* <CreateCoursesSection /> */}
      <CombinedGrowthSection />
      <CreatorCTA />
      <CommunityReviews />
    </div>
  )
}

export default page