"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 ocean-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready to manage your institution more effectively?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl opacity-90 md:text-2xl">
            Bring admission, academics, operations, and institute management together in one platform built for educational organizations.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/registration">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-sky-700" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">100%</div>
              <div className="opacity-90">Custom & On-Campus Ready</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">1</div>
              <div className="opacity-90">organization platform</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">3 steps</div>
              <div className="opacity-90">to get started</div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8">
            <p className="mb-4 opacity-90">Need immediate assistance?</p>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:contact.oceanzen@gmail.com" className="flex items-center text-white transition-colors hover:text-white/80">
                <Mail className="mr-2 h-5 w-5" />
                contact.oceanzen@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
