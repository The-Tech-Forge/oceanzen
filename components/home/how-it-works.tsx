"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Consultation & Planning",
    description: "Our experts analyze your institution's needs and create a customized implementation plan.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Setup & Configuration",
    description: "We configure the system according to your requirements and migrate your existing data.",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Training & Testing",
    description: "Comprehensive training for your staff and thorough testing to ensure everything works perfectly.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Go Live & Support",
    description: "Launch your new system with our ongoing support and maintenance for smooth operations.",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven implementation process ensures a smooth transition to OceanZen ERP with minimal disruption to
            your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
