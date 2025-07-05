import { DemoHero } from "@/components/demo/demo-hero"
import { DemoForm } from "@/components/demo/demo-form"

export default function DemoPage() {
  return (
    <div className="min-h-screen pt-16">
      <DemoHero />
      <DemoForm />
    </div>
  )
}
