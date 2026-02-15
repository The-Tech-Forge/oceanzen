"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ocean-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of educational institutions worldwide who trust OceanZen ERP for their complete
            administrative and academic management needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/demo">
                Get Started with OceanZen ERP Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="opacity-90">Modules</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="opacity-90">Institutions Trust Us</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="opacity-90">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Support Available</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="mb-4 opacity-90">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <a
                href="tel:+1-800-OCEANZEN"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                +1-800-OCEANZEN
              </a> */}
              <a
                href="mailto:contact.oceanzen@gmail.com"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contact.oceanzen@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
