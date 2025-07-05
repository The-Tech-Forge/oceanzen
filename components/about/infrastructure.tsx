"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cloud, Lock, Zap, Globe, Award } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Built on AWS with 99.9% uptime guarantee and automatic scaling capabilities.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and regular security audits.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "GDPR compliant with automated backups and disaster recovery protocols.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with CDN delivery and advanced caching mechanisms.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-region deployment ensuring low latency worldwide.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "ISO 27001, SOC 2 Type II, and GDPR certified for maximum trust.",
  },
]

export function Infrastructure() {
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
            Our <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on enterprise-grade infrastructure with security and performance at the core of everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">Security & Compliance</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your data security is our top priority. We maintain the highest standards of security and compliance to
                protect your institution's sensitive information.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">256-bit</div>
                  <div className="text-sm text-muted-foreground">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
