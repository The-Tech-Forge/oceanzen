import { HeroSection } from "@/components/home/hero-section"
import { InstitutionTypesSection } from "@/components/home/institution-types-section"
import { KeyAdvantagesSection } from "@/components/home/key-advantages-section"
import { MultiInstituteSection } from "@/components/home/organization-section"
import { DemoShowcase } from "@/components/home/demo-showcase"
import { FeatureGrid } from "@/components/home/features-grid"
import { EducationalGroupsSection } from "@/components/home/educational-groups-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InstitutionTypesSection />
      <KeyAdvantagesSection />
      <MultiInstituteSection />
      <DemoShowcase />
      <FeatureGrid />
      <EducationalGroupsSection />
      <HowItWorks />
      <CTASection />
    </div>
  )
}
