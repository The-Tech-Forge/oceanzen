"use client"

import { motion } from "framer-motion"

export function ModulesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-cyan-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="text-primary">ERP Modules</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Discover our complete suite of integrated modules designed to handle every aspect of educational institution
            management with precision and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
