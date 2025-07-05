"use client"

import { motion } from "framer-motion"
import { Play, CheckCircle } from "lucide-react"

const benefits = [
  "See OceanZen ERP in action",
  "Personalized demonstration",
  "Q&A with our experts",
  "Custom solution discussion",
  "Implementation timeline",
  "Pricing information",
]

export function DemoHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-cyan-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mr-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Request a <span className="text-primary">Demo</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  See how OceanZen ERP can transform your institution
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the power of OceanZen ERP with a personalized demonstration tailored to your institution's
              specific needs. Our experts will walk you through the features and show you how our solution can
              streamline your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Demo Preview</p>
                <p className="text-sm text-muted-foreground">Watch a quick overview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
