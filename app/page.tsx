import { HeroSection } from "@/components/home/hero-section"
import { WhyOceanZen } from "@/components/home/why-oceanzen"
import { ModulesCarousel } from "@/components/home/modules-carousel"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyOceanZen />
      <ModulesCarousel />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTASection />
    </div>
  )
}
