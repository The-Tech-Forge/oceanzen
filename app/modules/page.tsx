import { ModulesGrid } from "@/components/modules/modules-grid"
import { ModulesHero } from "@/components/modules/modules-hero"

export default function ModulesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ModulesHero />
      <ModulesGrid />
    </div>
  )
}
