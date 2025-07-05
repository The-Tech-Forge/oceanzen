import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { MissionVision } from "@/components/about/mission-vision"
import { OurTeam } from "@/components/about/our-team"
import { Infrastructure } from "@/components/about/infrastructure"
import { Careers } from "@/components/about/careers"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <OurStory />
      <MissionVision />
      {/* <OurTeam /> */}
      <Infrastructure />
      {/* <Careers /> */}
    </div>
  )
}
