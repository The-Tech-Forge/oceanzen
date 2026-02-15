"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle2, AlertCircle, Info } from "lucide-react"

export default function TermsAndConditions() {
    const terms = [
        {
            title: "License to Use",
            content: "OceanZen ERP grants you a non-exclusive, non-transferable license to access and use our platform for your institution's educational and administrative purposes subject to your subscription plan."
        },
        {
            title: "User Responsibilities",
            content: "Users are responsible for maintaining the confidentiality of their credentials and for all activities that occur under their account. Institutions must ensure all data uploaded complies with local laws."
        },
        {
            title: "Service Availability",
            content: "While we strive for 99.9% uptime, we may occasionally perform maintenance. We will provide advance notice for scheduled downtime whenever possible."
        },
        {
            title: "Termination",
            content: "Either party may terminate the agreement with 30 days written notice. Upon termination, institutions will have 30 days to export their data before it is permanently deleted."
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
                    <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-blue-500/10 text-blue-600">
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Legal Framework</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
                    <p className="text-lg text-muted-foreground mb-12">
                        By using OceanZen ERP, you agree to comply with and be bound by the following terms and conditions of use.
                    </p>

                    <div className="space-y-6 mb-16">
                        {terms.map((term, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 p-6 rounded-2xl bg-card border hover:shadow-sm"
                            >
                                <div className="shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{term.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 mb-12">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-amber-900 dark:text-amber-400 mb-2">Important Disclaimer</h4>
                                <p className="text-amber-800/80 dark:text-amber-500/80 text-sm leading-relaxed">
                                    OceanZen ERP is provided "as is" without warranty of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-blue dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                        <p className="text-muted-foreground mb-6">
                            These terms are governed by and construed in accordance with the laws of the jurisdiction in which OceanZen is headquartered, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                        <div className="flex items-center gap-2 p-4 rounded-xl bg-muted/50 border italic text-sm text-muted-foreground">
                            <Info className="w-4 h-4" />
                            For any legal inquiries, please contact legal@oceanzen.com
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
