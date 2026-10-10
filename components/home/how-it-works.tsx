"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle2, LayoutGrid, Users } from "lucide-react"

const steps = [
  {
    icon: Building2,
    title: "Register Your Organization",
    description: "Submit the required organization information through the registration flow.",
    step: "01",
  },
  {
    icon: LayoutGrid,
    title: "Configure Your Institutes",
    description: "Set up the appropriate institutes and their dedicated subdomains.",
    step: "02",
  },
  {
    icon: Users,
    title: "Complete Onboarding",
    description: "Configure users, permissions, and relevant academic workflows, then begin using the platform after the necessary setup and activation.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Get Started With Cluster in <span className="text-primary">Three Steps</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }} className="relative">
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6 inline-block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && <div className="absolute right-[-20px] top-1/2 hidden h-0.5 w-10 -translate-y-1/2 bg-primary/30 lg:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
