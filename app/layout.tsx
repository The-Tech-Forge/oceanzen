import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import NextTopLoader from "nextjs-toploader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OceanZen | Cluster ERP for Educational Institutions",
  description:
    "Cluster ERP by OceanZen helps educational institutions manage students, academics, examinations, admissions, and multi-institute operations with a single platform.",
  keywords: "Cluster ERP, Education Management, School Management System, College ERP, University Management, Multi-Institute ERP",
  generator: 'v0.dev'
}

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#509cdb" height={3} showSpinner={true} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
