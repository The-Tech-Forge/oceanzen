"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Trophy, Target } from "lucide-react"

const timeline = [
  {
    year: "2014",
    icon: Lightbulb,
    title: "The Vision",
    description:
      "Founded with a vision to simplify educational administration through technology. Started as a small team of educators and developers.",
  },
  {
    year: "2016",
    icon: Rocket,
    title: "First Launch",
    description:
      "Launched our first ERP module for student management. Onboarded our first 10 educational institutions.",
  },
  {
    year: "2018",
    icon: Trophy,
    title: "Major Milestone",
    description:
      "Reached 100+ institutions and expanded internationally. Introduced AI-powered analytics and reporting.",
  },
  {
    year: "2024",
    icon: Target,
    title: "Present Day",
    description: "Serving 500+ institutions across 25 countries with comprehensive ERP solutions and 24/7 support.",
  },
]

export function OurStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a global leader in educational ERP solutions, our journey has been driven by passion
            for education and innovation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
