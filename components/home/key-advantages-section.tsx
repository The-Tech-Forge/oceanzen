"use client"

import { motion } from "framer-motion"
import {
  Globe,
  TrendingUp,
  FileCheck2,
  BellRing,
  PiggyBank,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const advantages = [
  {
    id: "online-presence",
    title: "Increase Online Presence",
    tagline: "Digital Authority & Visibility",
    highlightBadge: "Brand Identity",
    icon: Globe,
    gradient: "from-sky-500 to-blue-600",
    borderAccent: "hover:border-sky-400 dark:hover:border-sky-600",
    bgAccent: "bg-sky-50/50 dark:bg-sky-950/20",
    description:
      "Establish a modern, credible digital identity for your institution. OceanZen provides dedicated branded subdomains for each campus, mobile-first access for students and parents, and elevated visibility across your educational ecosystem.",
    benefits: [
      "Dedicated branded subdomains (e.g., yourcollege.oceanzen.in)",
      "Mobile-friendly portal for parents, students, and educators",
      "Professional web presence that boosts institutional prestige",
      "Centralized announcements, event calendars, and public updates",
    ],
    metric: "Elevate Institutional Brand",
  },
  {
    id: "admissions",
    title: "Increase Admissions",
    tagline: "Higher Enrollment & Conversions",
    highlightBadge: "Growth Engine",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-teal-600",
    borderAccent: "hover:border-cyan-400 dark:hover:border-cyan-600",
    bgAccent: "bg-cyan-50/50 dark:bg-cyan-950/20",
    description:
      "Convert inquiries into enrolled students with frictionless digital onboarding. Capture student leads 24/7, track application pipelines in real-time, and automate prospect follow-ups to maximize admissions every academic year.",
    benefits: [
      "24/7 online admission application and document submission",
      "Automated inquiry tracking and follow-up communication",
      "Rapid application verification, merit lists, and seat allocation",
      "Direct integration between admission and fee ledger systems",
    ],
    metric: "Maximize Inquiries Conversion",
  },
  {
    id: "documentation",
    title: "Save Documentation Time",
    tagline: "Zero Paperwork & Instant Records",
    highlightBadge: "Operational Speed",
    icon: FileCheck2,
    gradient: "from-indigo-500 to-violet-600",
    borderAccent: "hover:border-indigo-400 dark:hover:border-indigo-600",
    bgAccent: "bg-indigo-50/50 dark:bg-indigo-950/20",
    description:
      "Eliminate hundreds of manual hours spent filling physical registers, searching paper dossiers, and manually compiling marks. Instantly generate student report cards, certificates, attendance summaries, and compliance filings with a single click.",
    benefits: [
      "Single-click generation of report cards, marksheets, and grades",
      "Instant issuance of transfer certificates, bona fides, and hall tickets",
      "Centralized, searchable digital student and teacher profiles",
      "Automated attendance aggregation and regulatory compliance exports",
    ],
    metric: "Save Hundreds of Staff Hours",
  },
  {
    id: "payment-reminders",
    title: "Send Payment Reminders",
    tagline: "Automated Fee Recovery",
    highlightBadge: "Prompt Collections",
    icon: BellRing,
    gradient: "from-amber-500 to-orange-600",
    borderAccent: "hover:border-amber-400 dark:hover:border-amber-600",
    bgAccent: "bg-amber-50/50 dark:bg-amber-950/20",
    description:
      "Eliminate the hassle and discomfort of manual fee chasing. Keep parents informed with automated, scheduled payment reminders via SMS, WhatsApp, and email, complete with transparent dues breakdown and instant digital receipts.",
    benefits: [
      "Scheduled SMS, WhatsApp, and email fee reminder triggers",
      "Transparent fee installment breakdowns and deadline alerts",
      "Instant digital fee receipts and automatic ledger updates",
      "Significantly reduced fee default rates and faster reconciliation",
    ],
    metric: "Reduce Unpaid Dues & Defaults",
  },
  {
    id: "cost-savings",
    title: "Save Lakhs of ₹ Every Year",
    tagline: "Massive Administrative Savings",
    highlightBadge: "High Financial ROI",
    icon: PiggyBank,
    gradient: "from-emerald-500 to-teal-700",
    borderAccent: "hover:border-emerald-400 dark:hover:border-emerald-600",
    bgAccent: "bg-emerald-50/50 dark:bg-emerald-950/20",
    description:
      "Transform institutional finance by drastically cutting operational overheads. Eliminate massive printing and stationary expenditures, replace fragmented software subscriptions, and stop revenue leakage with airtight digital accounting.",
    benefits: [
      "Cut recurring paper, register, printing, and storage expenses",
      "Replace multiple disconnected software tools with one unified ERP",
      "Prevent revenue leakage with transparent, audited fee accounting",
      "Lower staffing administrative overhead through automated workflows",
    ],
    metric: "Direct Financial Cost Savings",
  },
]

export function KeyAdvantagesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/15" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/15" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
            <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            Key Advantages & Strategic Value
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Why Educational Leaders Choose Our ERP
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            Solve everyday administrative bottlenecks, expand student admissions, automate fee collection, and unlock measurable financial savings.
          </p>
        </motion.div>

        {/* 5 Advantages Grid */}
        {/* Top row: 3 cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.slice(0, 3).map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900 ${item.borderAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {item.highlightBadge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <ul className="space-y-2.5">
                      {item.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-800/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Impact
                  </span>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.metric}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom row: 2 wide cards (Payment Reminders & Save Lakhs of rs every year) */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {advantages.slice(3, 5).map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 + index * 0.12 }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900 ${item.borderAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} p-3.5 text-white shadow-md`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {item.highlightBadge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {item.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/60">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Strategic Result
                    </span>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.metric}
                    </div>
                  </div>
                  <Button asChild size="sm" variant="ghost" className="text-xs font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400">
                    <Link href="/contact" className="flex items-center gap-1">
                      Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
