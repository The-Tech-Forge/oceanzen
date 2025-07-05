"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  CreditCard,
  Calendar,
  UserCheck,
  Clock,
  BookOpen,
  Bus,
  Building,
  BarChart,
  Smartphone,
  Mail,
  Shield,
} from "lucide-react"

const modules = [
  {
    icon: Users,
    title: "Student Information System",
    description: "Complete student lifecycle management with profiles, enrollment, and academic records.",
  },
  {
    icon: GraduationCap,
    title: "Admission Management",
    description: "Streamlined admission process with online applications, document verification, and enrollment.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Automated fee collection, payment tracking, and financial reporting with multiple payment gateways.",
  },
  {
    icon: Calendar,
    title: "Academic Planning",
    description: "Curriculum planning, course scheduling, and academic calendar management.",
  },
  {
    icon: UserCheck,
    title: "HR & Payroll",
    description: "Complete human resource management with payroll processing and employee self-service.",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description: "Biometric integration, automated attendance tracking, and leave management system.",
  },
  {
    icon: Calendar,
    title: "TimeTable Scheduler",
    description: "Intelligent timetable generation with conflict resolution and resource optimization.",
  },
  {
    icon: BookOpen,
    title: "Exam & Results",
    description: "Comprehensive examination management with online results and grade processing.",
  },
  {
    icon: Bus,
    title: "Transport Tracking",
    description: "GPS-enabled transport management with route optimization and real-time tracking.",
  },
  {
    icon: Building,
    title: "Library Management",
    description: "Digital library system with ISBN integration and automated book management.",
  },
  {
    icon: Building,
    title: "Hostel Management",
    description: "Complete hostel administration with room allocation and mess management.",
  },
  {
    icon: Smartphone,
    title: "Parent/Student Portal",
    description: "Mobile-friendly portals for parents and students with real-time updates.",
  },
  {
    icon: BookOpen,
    title: "LMS Integration",
    description: "Seamless integration with popular learning management systems.",
  },
  {
    icon: Mail,
    title: "Communication Tools",
    description: "Integrated email and SMS communication system for all stakeholders.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Advanced analytics dashboard with customizable reports and insights.",
  },
  {
    icon: Shield,
    title: "KYC & Document Management",
    description: "Secure document storage and KYC compliance management system.",
  },
]

export function ModulesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % modules.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + modules.length) % modules.length)
  }

  const visibleModules = []
  for (let i = 0; i < itemsPerView; i++) {
    visibleModules.push(modules[(currentIndex + i) % modules.length])
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-primary">ERP Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete suite of integrated modules designed to handle every aspect of educational institution
            management.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {visibleModules.map((module, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                          <module.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(modules.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / itemsPerView) === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/modules">
                Explore All Modules
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
