"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower educational institutions worldwide with innovative, user-friendly ERP solutions that streamline operations and enhance learning outcomes.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the global leader in educational technology, creating a world where every institution can focus on what matters most - education.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Innovation, Integrity, Excellence, and Customer Success drive everything we do. We believe in building lasting partnerships with our clients.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Zap,
    title: "Commitment",
    description:
      "We are committed to continuous innovation, exceptional support, and delivering solutions that make a real difference in education.",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export function MissionVision() {
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
            Our <span className="text-primary">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guided by our mission, vision, and values, we strive to make educational administration as smooth as ocean
            waves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${value.color}`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
