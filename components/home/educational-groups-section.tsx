"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Layers3, ShieldCheck, Users2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const checklist = [
  "Centralized organizational administration",
  "Dedicated institute subdomains",
  "Institute-level management",
  "Structured user and role management",
  "Easier administration of multiple institutes",
  "A platform designed to support organizational growth",
]

export function EducationalGroupsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 p-8 text-white shadow-[0_35px_80px_-30px_rgba(14,165,233,0.45)] md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                Educational Groups
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Built for Growing Educational Groups
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                From a single institution to a growing educational group, Cluster helps you organize educational operations through a unified ERP platform.
              </p>

              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-100">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Link href="/contact">
                    Discuss Your Requirements
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">1 Organization</div>
                <p className="mt-2 text-sm text-slate-300">Manage the entire educational group from a central structure.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">3 Institutes</div>
                <p className="mt-2 text-sm text-slate-300">Give each institute its own dedicated identity and access layer.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                  <Users2 className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">Shared Governance</div>
                <p className="mt-2 text-sm text-slate-300">Standardize roles, permissions, and institutional operations while supporting growth.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
