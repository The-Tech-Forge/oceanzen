"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  GraduationCap,
  CreditCard,
  Calendar,
  UserCheck,
  Clock,
  BookOpen,
  Bus,
  Building,
  Smartphone,
  Search,
  Filter,
} from "lucide-react"

const modules = [
  {
    id: "sis",
    icon: Users,
    title: "Student Information System",
    category: "Academic",
    description:
      "Complete student lifecycle management with comprehensive profiles, enrollment tracking, and academic records.",
    features: [
      "Student Profiles",
      "Enrollment Management",
      "Academic Records",
      "Progress Tracking",
      "Parent Communication",
    ],
    benefits: ["Centralized student data", "Improved communication", "Better academic tracking"],
    image: "/sd.jpg?height=200&width=300",
  },
  {
    id: "admission",
    icon: GraduationCap,
    title: "Admission Management",
    category: "Administrative",
    description:
      "Streamlined admission process with online applications, document verification, and automated enrollment.",
    features: [
      "Online Applications",
      "Document Verification",
      "Merit List Generation",
      "Automated Enrollment",
      "Communication Tools",
    ],
    benefits: ["Reduced paperwork", "Faster processing", "Transparent selection process"],
    image: "/admission.jpg?height=200&width=300",
  },
  {
    id: "fee",
    icon: CreditCard,
    title: "Fee Management",
    category: "Financial",
    description:
      "Automated fee collection, payment tracking, and comprehensive financial reporting with multiple payment gateways.",
    features: [
      "Online Payments",
      "Fee Structure Management",
      "Payment Tracking",
      "Financial Reports",
      "Late Fee Automation",
    ],
    benefits: ["Improved cash flow", "Reduced manual work", "Better financial visibility"],
    image: "/fee.jpg?height=200&width=300",
  },
  {
    id: "academic",
    icon: Calendar,
    title: "Academic Planning",
    category: "Academic",
    description: "Comprehensive curriculum planning, course scheduling, and academic calendar management system.",
    features: [
      "Curriculum Planning",
      "Course Scheduling",
      "Academic Calendar",
      "Resource Allocation",
      "Progress Monitoring",
    ],
    benefits: ["Better resource utilization", "Improved planning", "Enhanced coordination"],
    image: "/academic.jpg?height=200&width=300",
  },
  {
    id: "hr",
    icon: UserCheck,
    title: "HR & Payroll",
    category: "Administrative",
    description:
      "Complete human resource management with payroll processing, employee self-service, and performance tracking.",
    features: [
      "Employee Management",
      "Payroll Processing",
      "Leave Management",
      "Performance Tracking",
      "Self-Service Portal",
    ],
    benefits: ["Streamlined HR processes", "Accurate payroll", "Better employee satisfaction"],
    image: "/hr.jpg?height=200&width=300",
  },
  {
    id: "attendance",
    icon: Clock,
    title: "Attendance & Leave",
    category: "Administrative",
    description: "Biometric integration, automated attendance tracking, and comprehensive leave management system.",
    features: [
      "Biometric Integration",
      "Automated Tracking",
      "Leave Management",
      "Reports & Analytics",
      "Mobile App Support",
    ],
    benefits: ["Accurate attendance", "Reduced manual work", "Better compliance"],
    image: "/attendance.jpg?height=200&width=300",
  },
  {
    id: "timetable",
    icon: Calendar,
    title: "TimeTable Scheduler",
    category: "Academic",
    description: "Intelligent timetable generation with conflict resolution and resource optimization algorithms.",
    features: [
      "Automated Generation",
      "Conflict Resolution",
      "Resource Optimization",
      "Multiple Views",
      "Change Management",
    ],
    benefits: ["Optimized schedules", "Reduced conflicts", "Better resource usage"],
    image: "/timetable.jpg?height=200&width=300",
  },
  {
    id: "exam",
    icon: BookOpen,
    title: "Exam & Results",
    category: "Academic",
    description: "Comprehensive examination management with online results, grade processing, and analytics.",
    features: ["Exam Scheduling", "Online Results", "Grade Processing", "Result Analytics", "Certificate Generation"],
    benefits: ["Streamlined exams", "Quick results", "Better analysis"],
    image: "/exam.jpg?height=200&width=300",
  },
  {
    id: "transport",
    icon: Bus,
    title: "Transport Tracking",
    category: "Operations",
    description: "GPS-enabled transport management with route optimization and real-time tracking capabilities.",
    features: ["GPS Tracking", "Route Optimization", "Real-time Updates", "Safety Monitoring", "Parent Notifications"],
    benefits: ["Enhanced safety", "Better route planning", "Improved communication"],
    image: "/transpot.jpg?height=200&width=300",
  },
  {
    id: "library",
    icon: Building,
    title: "Library Management",
    category: "Academic",
    description: "Digital library system with ISBN integration, automated book management, and online catalog.",
    features: ["Book Management", "ISBN Integration", "Online Catalog", "Issue/Return Tracking", "Fine Management"],
    benefits: ["Efficient book management", "Better tracking", "Reduced manual work"],
    image: "/libraryM.jpg?height=200&width=300",
  },
  {
    id: "hostel",
    icon: Building,
    title: "Hostel Management",
    category: "Operations",
    description: "Complete hostel administration with room allocation, mess management, and student welfare tracking.",
    features: ["Room Allocation", "Mess Management", "Visitor Management", "Maintenance Tracking", "Student Welfare"],
    benefits: ["Better accommodation management", "Improved student welfare", "Efficient operations"],
    image: "/hostelM.jpg?height=200&width=300",
  },
  {
    id: "portal",
    icon: Smartphone,
    title: "Parent/Student Portal",
    category: "Communication",
    description: "Mobile-friendly portals for parents and students with real-time updates and interactive features.",
    features: ["Mobile App", "Real-time Updates", "Interactive Dashboard", "Communication Tools", "Document Access"],
    benefits: ["Better engagement", "Improved communication", "Easy access to information"],
    image: "/ParentstudentM.jpg?height=200&width=300",
  },
]

const categories = ["All", "Academic", "Administrative", "Financial", "Operations", "Communication"]

export function ModulesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const filteredModules = modules.filter((module) => {
    const matchesCategory = selectedCategory === "All" || module.category === selectedCategory
    const matchesSearch =
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{module.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={module.image || "/placeholder.svg"}
                    alt={module.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground mb-4 leading-relaxed">{module.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {module.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => setSelectedModule(module.id)}>
                      Learn More
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/demo">Demo</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No modules found matching your criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our modules can be customized to fit your institution's specific needs. Contact our team to discuss your
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
