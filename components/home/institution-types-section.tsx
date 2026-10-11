"use client"

import { motion } from "framer-motion"
import {
  Building2,
  GraduationCap,
  Users2,
  Server,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Database,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const institutionModels = [
  {
    title: "Organization with Multiple Institutes",
    category: "Educational Trusts & Groups",
    description:
      "Govern multiple colleges, schools, or branches under one unified organization. Give each campus its own dedicated subdomain while keeping centralized governance, cross-campus reporting, and administrative control in one master dashboard.",
    icon: Building2,
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    gradient: "from-sky-500 to-cyan-600",
    features: [
      "Centralized master administration & consolidated analytics",
      "Dedicated institute subdomains (e.g. campus.oceanzen.in)",
      "Cross-institute governance & effortless student transfers",
      "Multi-tiered administrative roles and branch permissions",
    ],
  },
  {
    title: "Single Institute",
    category: "Independent Schools & Colleges",
    description:
      "A complete, all-in-one ERP tailored for autonomous schools, colleges, and standalone academies. Digitizes every dimension of campus operations from initial admissions to alumni records in a single cohesive workspace.",
    icon: GraduationCap,
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    gradient: "from-indigo-500 to-blue-600",
    features: [
      "Unified student records, attendance & academic gradebooks",
      "Staff management, timetable allocation & faculty workflows",
      "Digital fee collection, accounts ledger & instant receipts",
      "Comprehensive parent-student portal & communication hub",
    ],
  },
  {
    title: "Coaching Classes & Training Centers",
    category: "Tuition & Competitive Exam Academies",
    description:
      "Engineered specifically for coaching centers, test prep academies, and skill institutes managing dynamic batches, flexible timing, mock exam analytics, and fast-paced student enrollments.",
    icon: Users2,
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    gradient: "from-teal-500 to-emerald-600",
    features: [
      "Flexible batch scheduling, faculty shifts & attendance",
      "Mock test scores, automatic rank generation & performance analytics",
      "Lead inquiry capture, follow-ups & rapid digital onboarding",
      "Installment fee management with automated reminder alerts",
    ],
  },
]

const deploymentCapabilities = [
  {
    title: "Custom ERP Solutions",
    tagline: "Tailor-Made For Your Exact Workflows",
    description:
      "Every educational institution operates differently. We design and deliver custom ERP modules, bespoke examination and grading rules, specialized approval hierarchies, and custom integrations tailored precisely to your standard operating procedures.",
    icon: Cpu,
    highlights: [
      "Custom-tailored academic & administrative modules",
      "Configurable grading scales, exam rules & custom report cards",
      "Bespoke role hierarchies and granular data permissions",
      "Biometric hardware, RFID & payment gateway integrations",
    ],
    borderAccent: "border-sky-300 dark:border-sky-700",
    bgAccent: "bg-gradient-to-br from-sky-50/60 via-white to-cyan-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/40",
    iconBg: "bg-sky-500 text-white",
  },
  {
    title: "On-Campus ERP & Private Deployment",
    tagline: "Local Infrastructure & Total Data Sovereignty",
    description:
      "Need your ERP hosted on your institution's own local servers? We provide full On-Campus ERP deployment for lightning-fast LAN access, 100% data privacy, and zero external dependency, alongside robust cloud hosting options.",
    icon: Server,
    highlights: [
      "On-premises installation directly on your local campus servers",
      "High-speed offline LAN operational access without internet dependency",
      "Complete data sovereignty and institutional confidentiality",
      "Automated local scheduled backups with optional cloud replication",
    ],
    borderAccent: "border-cyan-300 dark:border-cyan-700",
    bgAccent: "bg-gradient-to-br from-cyan-50/60 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/40",
    iconBg: "bg-cyan-600 text-white",
  },
]

export function InstitutionTypesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-background via-slate-50/60 to-background dark:via-slate-950/40">
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
            <Layers className="h-3.5 w-3.5" />
            Institutional Architecture & Deployment
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Built for Organizations, Single Institutes & Coaching Classes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            Whether you run a large educational organization with multiple institutes, a single independent campus, or dynamic coaching classes — our ERP provides tailor-made Custom ERP solutions with both Cloud and On-Campus deployment.
          </p>
        </motion.div>

        {/* 3 Institution Models */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {institutionModels.map((model, index) => {
            const Icon = model.icon
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${model.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${model.badgeColor}`}
                    >
                      {model.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {model.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between rounded-xl border-slate-200 text-xs font-semibold group-hover:border-sky-500 group-hover:text-sky-600 dark:border-slate-800"
                  >
                    <Link href="/contact">
                      Configure for Your Campus
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 2 Deployment Models: Custom ERP & On-Campus ERP */}
        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              Deployment & Customization Flexibility
            </span>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              Custom ERP & On-Campus Deployment Options
            </h3>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {deploymentCapabilities.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative overflow-hidden rounded-3xl border ${item.borderAccent} ${item.bgAccent} p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} shadow-md`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                        {item.tagline}
                      </span>
                      <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Capabilities & Inclusions
                    </p>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {item.highlights.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 p-8 text-white shadow-xl shadow-sky-500/15 md:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h4 className="text-2xl font-bold md:text-3xl">
                Ready to deploy an ERP that fits your exact setup?
              </h4>
              <p className="mt-2 max-w-2xl text-sm text-sky-100 md:text-base">
                Whether you need a custom-built solution, an on-campus deployment, or a multi-institute setup, our team will structure the ideal ERP architecture for you.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-slate-100 shadow-md">
                <Link href="/contact">
                  Discuss Custom Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                <Link href="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
