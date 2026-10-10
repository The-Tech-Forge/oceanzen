"use client"

import { motion } from "framer-motion"
import { Building2, Database, Globe, Layers3, Sparkles } from "lucide-react"

const instituteCards = [
  {
    name: "ABC Public School",
    domain: "abcschool.oceanzen.in",
    accent: "from-sky-500 to-cyan-500",
    icon: Building2,
  },
  {
    name: "ABC Junior College",
    domain: "abcjunior.oceanzen.in",
    accent: "from-indigo-500 to-blue-500",
    icon: Layers3,
  },
  {
    name: "ABC Coaching Institute",
    domain: "abccoaching.oceanzen.in",
    accent: "from-teal-500 to-emerald-500",
    icon: Globe,
  },
]

const benefits = [
  {
    title: "Centralized Organization Management",
    description: "Manage multiple associated educational institutes through a single organizational structure.",
    icon: Database,
  },
  {
    title: "Dedicated Institute Subdomains",
    description: "Give every institute a distinct digital identity and entry point for its ERP environment.",
    icon: Globe,
  },
  {
    title: "Simplified Expansion",
    description: "Add new institutes as your educational operations grow without creating separate ERP systems for each one.",
    icon: Sparkles,
  },
]

export function MultiInstituteSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
            Multi-Institute ERP
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            One Organization. Multiple Institutes. One Connected ERP.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Manage your educational group from one centralized platform. Give each school, college, or coaching institute its own dedicated subdomain while keeping organizational management simple and scalable.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-1/2 top-14 hidden h-20 w-[calc(100%-16rem)] -translate-x-1/2 bg-gradient-to-r from-sky-200 via-cyan-200 to-sky-200 dark:from-sky-800 dark:via-cyan-700 dark:to-sky-800 md:block" style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 54%, 0 54%)" }} />

            <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-600 to-cyan-500 p-[1px] shadow-[0_30px_60px_-20px_rgba(14,165,233,0.5)]">
                  <div className="rounded-[2rem] bg-slate-950 px-6 py-6 text-center text-white md:px-10 md:py-8">
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Building2 className="h-6 w-6 text-sky-200" />
                    </div>
                    <div className="text-lg font-semibold">ABC Education Group</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.25em] text-sky-200">Organization</div>
                  </div>
                </div>
              </motion.div>

              <div className="grid w-full gap-6 md:grid-cols-3">
                {instituteCards.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative">
                      <div className="absolute left-1/2 top-[-1.5rem] hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-sky-400 to-cyan-200 dark:from-sky-500 dark:to-cyan-700 md:block" />
                      <div className="h-full rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.name}</h3>
                        <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-sky-700 dark:bg-slate-800 dark:text-sky-300">{item.domain}</div>
                        <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Institute</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
