import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsGrid } from "@/components/solutions/solutions-grid"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-16">
      <SolutionsHero />
      <SolutionsGrid />
    </div>
  )
}
