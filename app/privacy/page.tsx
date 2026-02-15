"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Eye, Server, RefreshCw } from "lucide-react"

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Data We Collect",
            content: "We collect information necessary to provide our ERP services, including institutional details, staff information, student records, and billing information. This may include names, email addresses, phone numbers, and academic data."
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: "How We Use Data",
            content: "Your data is used to facilitate administrative processes, generate academic reports, process payments, and improve our services. We do not sell or rent your data to third parties for marketing purposes."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Data Security",
            content: "We implement robust security measures including SSL encryption, regular vulnerability assessments, and strict access controls. Data is stored on secure cloud servers with 24/7 monitoring."
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Updates to Policy",
            content: "We may update this privacy policy from time to time. We will notify you of any significant changes via email or through a prominent notice on our platform."
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-green-500/10 text-green-600">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Privacy & Security</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-lg text-muted-foreground mb-12">
                        Last updated: February 15, 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-card border hover:border-primary/50 transition-colors shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="prose prose-blue dark:prose-invert max-w-none bg-muted/30 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>
                        <p className="mb-4">
                            At OceanZen ERP, we are committed to maintaining the trust and confidence of our visitors and customers. We want you to know that OceanZen is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4">Institutional Responsibility</h3>
                        <p className="mb-4 text-muted-foreground">
                            Educational institutions using OceanZen ERP are responsible for the data they input into the system. As a service provider, we act as a data processor and maintain strict confidentiality agreements with all our clients.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>
                        <p className="mb-4 text-muted-foreground">
                            If you have any questions about this Privacy Policy, please contact our data protection officer at privacy@oceanzen.com.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
