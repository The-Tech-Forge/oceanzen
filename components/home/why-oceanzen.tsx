"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, BarChart3, Zap, Users, Globe } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Centralized Operations",
    description: "Manage all institutional operations from a single, unified platform with seamless integration.",
  },
  {
    icon: BarChart3,
    title: "AI-based Reports",
    description: "Get intelligent insights and automated reports powered by advanced analytics and AI.",
  },
  {
    icon: Globe,
    title: "Real-time Access",
    description: "Access your data anytime, anywhere with real-time synchronization across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud-based",
    description: "Secure, scalable cloud infrastructure ensures 99.9% uptime and automatic backups.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with encryption, role-based access, and compliance standards.",
  },
  {
    icon: Users,
    title: "Multi-user Support",
    description: "Support for unlimited users with customizable roles and permissions management.",
  },
]

export function WhyOceanZen() {
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
            Why Choose <span className="text-primary">OceanZen?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your educational institution with our comprehensive ERP solution designed specifically for modern
            educational needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
