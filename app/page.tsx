import LogoBanner from "@/components/LogoBanner"
import Hero from "@/components/Hero"
import DiscoverSkills from "@/components/DiscoverSkills"
import CTA from "@/components/Cta"
import CombinedGrowthSection from "@/components/Combined"
import CreatorCTA from "@/components/CreatorCTA"
import CommunityReviews from "@/components/CommunityReviews"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div>
      <Hero />
      <LogoBanner />
      <DiscoverSkills />
      <CTA />
      <CombinedGrowthSection />
      <CreatorCTA />
      <CommunityReviews />
      <Footer />
    </div>
  )
}

export default page