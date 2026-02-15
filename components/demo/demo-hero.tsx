"use client"

import { motion } from "framer-motion"
import { Play, CheckCircle } from "lucide-react"

const benefits = [
  "See OceanZen ERP in action",
  "Personalized demonstration",
  "Q&A with our experts",
  "Custom solution discussion",
  "Implementation timeline",
  "Pricing information",
]

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DemoHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-cyan-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mr-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Request a <span className="text-primary">Demo</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  See how OceanZen ERP can transform your institution
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the power of OceanZen ERP with a personalized demonstration tailored to your institution's
              specific needs. Our experts will walk you through the features and show you how our solution can
              streamline your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <Image
                    src="/demo-preview.png"
                    alt="OceanZen ERP Dashboard Preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                    >
                      <Play className="h-10 w-10 fill-current ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 text-center">
                    <p className="text-white font-medium">Watch Demo Overview</p>
                    <p className="text-white/80 text-xs">See OceanZen ERP in Action</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none">
              <DialogHeader className="sr-only">
                <DialogTitle>OceanZen ERP Demo Preview</DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xqTDuKu-4sQ?autoplay=1"
                  title="OceanZen ERP Demo Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
