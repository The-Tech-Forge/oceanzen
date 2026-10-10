"use client"

import { motion } from "framer-motion"
import { BookOpenText, Building2, Files, GraduationCap, Layers3, ShieldCheck, Smartphone, Users, WalletCards } from "lucide-react"

const features = [
  { title: "Organization Management", description: "Manage the organizational structure and associated educational institutes from one place.", icon: Building2 },
  { title: "Multi-Institute Management", description: "Coordinate multiple institutes under a unified organization with shared oversight and control.", icon: Layers3 },
  { title: "Student Management", description: "Organize student profiles and related information across academic journeys.", icon: Users },
  { title: "Admissions Management", description: "Manage admission-related processes and applicant information with clarity.", icon: GraduationCap },
  { title: "Academic Management", description: "Organize academic activities and supported academic workflows to keep operations aligned.", icon: BookOpenText },
  { title: "Examination Management", description: "Track examination-related operations, records, and outcomes with a structured approach.", icon: WalletCards },
  { title: "Role-Based Access", description: "Provide role-based access according to configured permissions and institutional needs.", icon: ShieldCheck },
  { title: "Mobile Application", description: "Support student and teacher access through mobile-friendly experiences for day-to-day use.", icon: Smartphone },
  { title: "Document Management", description: "Handle and manage institutional documents and related records in one secure location.", icon: Files },
]

export function FeatureGrid() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">Platform Features</span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Everything Your Institution Needs in One Platform
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.06 }} className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
