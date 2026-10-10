import { HeroSection } from "@/components/home/hero-section"
import { MultiInstituteSection } from "@/components/home/organization-section"
import { PricingSection } from "@/components/home/pricing-section"
import { DemoShowcase } from "@/components/home/demo-showcase"
import { FeatureGrid } from "@/components/home/features-grid"
import { EducationalGroupsSection } from "@/components/home/educational-groups-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MultiInstituteSection />
      <PricingSection />
      <DemoShowcase />
      <FeatureGrid />
      <EducationalGroupsSection />
      <HowItWorks />
      <CTASection />
    </div>
  )
}
