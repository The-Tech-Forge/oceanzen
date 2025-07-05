"use client"

import { motion } from "framer-motion"

export function ContactHero() {
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
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ready to transform your educational institution? Our team is here to help you get started with OceanZen ERP.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
