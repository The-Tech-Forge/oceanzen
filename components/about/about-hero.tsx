"use client"

import { motion } from "framer-motion"
import { Waves, Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Globe, label: "Countries", value: "25+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Waves, label: "Institutions Served", value: "1000+" },
]

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-cyan-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">OceanZen</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Transforming educational institutions worldwide with innovative ERP solutions that bring peace and
            efficiency to administrative chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
