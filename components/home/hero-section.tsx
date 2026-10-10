"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, CheckCircle2, Globe, ShieldCheck, WalletCards } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const differentiators = [
  "Multi-Institute Management",
  "Dedicated Institute Subdomains",
  "Centralized Organization Management",
  "Student and Teacher Management",
  "Academic and Examination Management",
  "Affordable Annual Pricing",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 wave-animation opacity-10" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-24 h-20 w-20 rounded-full bg-primary/20 blur-xl floating" />
        <div className="absolute right-20 top-32 h-36 w-36 rounded-full bg-cyan-500/20 blur-xl floating" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 h-24 w-24 rounded-full bg-blue-500/20 blur-xl floating" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              <Building2 className="h-4 w-4" />
              OceanZen by Cluster ERP
            </div>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              One Powerful ERP for Your Entire Educational Institution
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Manage students, admissions, academics, examinations, teachers, and institutional operations through a unified educational ERP platform.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Whether you manage a single school or multiple educational institutes, Cluster helps organize your educational operations in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="ocean-gradient text-lg text-white shadow-lg shadow-sky-500/20 hover:opacity-95">
                <Link href="/org-registration">
Launch Your ERP in 5 Simple Steps

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-background/80">
                <Link href="/demo">
                  Request a Demo
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <WalletCards className="h-4 w-4 text-sky-600" />
                ₹150 per user per year
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-sky-600" />
                No additional charges
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-3 py-3 shadow-sm backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/60 to-cyan-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-20px_rgba(14,165,233,0.35)]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
                <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Cluster ERP
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
                  <Image
                    src="/demo-preview.png"
                    alt="OceanZen Cluster ERP dashboard preview"
                    width={1200}
                    height={900}
                    className="h-[420px] w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 flex items-center gap-2 text-sky-700">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Organization</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900">Centralized</div>
                  <p className="text-xs text-slate-600">Manage associated institutes together</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 flex items-center gap-2 text-sky-700">
                    <Globe className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Institute access</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900">Dedicated</div>
                  <p className="text-xs text-slate-600">A unique subdomain for each institute</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}