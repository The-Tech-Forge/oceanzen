"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, HelpCircle, FileText, ShieldCheck } from "lucide-react"

const faqs = [
    {
        category: "General",
        questions: [
            {
                q: "What is OceanZen ERP?",
                a: "OceanZen ERP is a comprehensive, cloud-based educational management system designed to streamline administrative and academic operations for schools, colleges, and universities. It covers everything from admissions and fee management to examinations and student performance tracking."
            },
            {
                q: "How can OceanZen ERP benefit my institution?",
                a: "Our ERP reduces manual workload, eliminates data redundancy, improves communication between stakeholders (admins, teachers, students, parents), and provides real-time analytics for better decision-making."
            },
            {
                q: "Is OceanZen ERP mobile-friendly?",
                a: "Yes, OceanZen ERP is fully responsive and accessible from any device, including smartphones and tablets. We also offer dedicated mobile apps for students, parents, and teachers."
            }
        ]
    },
    {
        category: "Implementation & Support",
        questions: [
            {
                q: "How long does it take to implement?",
                a: "Implementation time varies based on the size of your institution and the modules selected, typically ranging from 2 to 4 weeks, including data migration and staff training."
            },
            {
                q: "Do you provide training for our staff?",
                a: "Absolutely. We provide comprehensive training sessions for administrators, teachers, and support staff to ensure smooth adoption of the system."
            },
            {
                q: "What kind of support do you offer?",
                a: "We offer 24/7 technical support via email, phone, and live chat. Each institution is also assigned a dedicated account manager for personalized assistance."
            }
        ]
    },
    {
        category: "Security & Pricing",
        questions: [
            {
                q: "Is our data secure?",
                a: "Security is our top priority. We use industry-standard encryption, regular backups, and secure cloud hosting to ensure your data is always protected and accessible only to authorized users."
            },
            {
                q: "How is the pricing determined?",
                a: "Our pricing is flexible and based on the number of students and the modules you choose. We offer monthly and annual subscription plans to fit different budgets."
            },
            {
                q: "Can we export our data if we decide to leave?",
                a: "Yes, you own your data. You can export student records, financial data, and other information in standard formats at any time."
            }
        ]
    }
]

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
                        <HelpCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Help Center</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about OceanZen ERP. Can't find the answer you're looking for? Reach out to our team.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">
                                    {groupIdx + 1}
                                </span>
                                {group.category}
                            </h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {group.questions.map((faq, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`item-${groupIdx}-${idx}`}
                                        className="border rounded-xl px-6 bg-card hover:shadow-md transition-shadow"
                                    >
                                        <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-cyan-500/5 border"
                >
                    <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Our support team is always ready to help you with any technical or administrative queries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full" asChild>
                            <Link href="/contact">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Support
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                            <Link href="/demo">
                                Request a Demo
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
