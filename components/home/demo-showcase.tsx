"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const screenshots = [
  { src: "/academic.jpg", title: "Academic Management", alt: "Academic management dashboard" },
  { src: "/admission.jpg", title: "Admissions Workflow", alt: "Admission workflow dashboard" },
  { src: "/exam.jpg", title: "Examinations", alt: "Examination workflow dashboard" },
  { src: "/college.jpg", title: "Institution Overview", alt: "Institution overview screen" },
]

export function DemoShowcase() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Product Demo</span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            See How Cluster Simplifies Educational Management
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore how Cluster helps educational institutions organize their administrative and academic operations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {screenshots.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <div className="overflow-hidden">
                <Image src={item.src} alt={item.alt} width={800} height={560} className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="ocean-gradient text-white shadow-lg shadow-sky-500/20">
            <Link href="/contact">
              Request a Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
