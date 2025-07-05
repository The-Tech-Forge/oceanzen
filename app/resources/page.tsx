import { ResourcesHero } from "@/components/resources/resources-hero"
import { BlogGrid } from "@/components/resources/blog-grid"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ResourcesHero />
      <BlogGrid />
    </div>
  )
}
