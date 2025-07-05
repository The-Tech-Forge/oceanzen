"use client"

import { motion } from "framer-motion"
import { BookOpen, TrendingUp, Lightbulb, Megaphone } from "lucide-react"

const categories = [
  { icon: BookOpen, name: "ERP Best Practices", count: 24 },
  { icon: TrendingUp, name: "Education Tech Trends", count: 18 },
  { icon: Lightbulb, name: "OceanZen Tutorials", count: 32 },
  { icon: Megaphone, name: "Product Updates", count: 15 },
]

export function ResourcesHero() {
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
            Resources & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Stay informed with the latest trends, best practices, and insights in educational technology and ERP
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} articles</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
