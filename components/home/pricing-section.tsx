"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const pricingPoints = [
  "₹150 per user per year",
  "Straightforward annual pricing",
  "No additional charges beyond the stated subscription price",
  "Multi-institute management",
  "Access to the ERP subscription under the agreed service terms",
]

export function PricingSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] md:p-12">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Simple Pricing
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Your Entire Educational ERP. Just ₹150 Per User, Per Year.
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Simple, transparent annual pricing for educational institutions. Get access to Cluster ERP for just ₹150 per user per year, with no additional charges beyond the stated subscription price.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center rounded-[1.75rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8 text-center md:p-10">
            <div className="flex items-end justify-center gap-2 text-slate-900">
              <span className="text-5xl font-black tracking-tight md:text-7xl">₹150*</span>
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-700">Per User / Year</div>
            <p className="mt-4 text-base text-slate-600">One simple annual price. No additional charges.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {pricingPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                <span className="text-sm font-medium text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-600">
            * Pricing is subject to change. Contact OceanZen to confirm the applicable price at the time of purchase.
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="ocean-gradient text-white shadow-lg shadow-sky-500/20">
              <Link href="/org-registration">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-slate-900">
              <Link href="/org-registration">Register Your Organization</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
