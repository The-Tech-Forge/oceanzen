"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, GraduationCap, BookOpen, Building2, Landmark, Heart, CheckCircle, ArrowRight } from "lucide-react"

const solutions = [
  {
    id: "schools",
    icon: School,
    title: "Schools",
    subtitle: "K-12 Education Management",
    description: "Comprehensive school management system designed for primary and secondary education institutions.",
    features: [
      "Student Information Management",
      "Parent-Teacher Communication",
      "Grade Book & Report Cards",
      "Attendance Tracking",
      "Fee Management",
      "Transport Management",
      "Library Management",
      "Event Management",
    ],
    benefits: [
      "Improved parent engagement",
      "Streamlined administrative tasks",
      "Better student tracking",
      "Enhanced communication",
    ],
    caseStudy:
      "Greenwood International School increased parent satisfaction by 85% and reduced administrative workload by 60%.",
    image: "/smcollege.jpg?height=300&width=400",
  },
  {
    id: "colleges",
    icon: GraduationCap,
    title: "Colleges & Universities",
    subtitle: "Higher Education Excellence",
    description:
      "Advanced ERP solution for colleges and universities with complex academic structures and research requirements.",
    features: [
      "Student Lifecycle Management",
      "Course & Curriculum Planning",
      "Research Management",
      "Faculty Management",
      "Examination System",
      "Alumni Management",
      "Placement Cell",
      "Hostel Management",
    ],
    benefits: [
      "Enhanced academic planning",
      "Better resource allocation",
      "Improved student outcomes",
      "Streamlined research processes",
    ],
    caseStudy: "Metropolitan University improved graduation rates by 25% and reduced administrative costs by 40%.",
    image: "/college.jpeg?height=300&width=400",
  },
  {
    id: "training",
    icon: BookOpen,
    title: "Coaching & Training Institutes",
    subtitle: "Specialized Training Management",
    description:
      "Tailored solution for coaching centers, vocational training institutes, and professional development organizations.",
    features: [
      "Batch Management",
      "Course Scheduling",
      "Progress Tracking",
      "Mock Test Management",
      "Performance Analytics",
      "Certificate Management",
      "Instructor Management",
      "Online Learning Integration",
    ],
    benefits: [
      "Better batch organization",
      "Improved student performance",
      "Efficient resource utilization",
      "Enhanced learning outcomes",
    ],
    caseStudy: "Excellence Training Institute achieved 95% student satisfaction and 30% improvement in pass rates.",
    image: "/uni.jpg?height=300&width=400",
  },
  {
    id: "multi-branch",
    icon: Building2,
    title: "Multi-branch Management",
    subtitle: "Centralized Control, Local Flexibility",
    description: "Unified management system for educational institutions with multiple branches or campuses.",
    features: [
      "Centralized Dashboard",
      "Branch-wise Reporting",
      "Resource Sharing",
      "Unified Communication",
      "Cross-branch Analytics",
      "Standardized Processes",
      "Role-based Access",
      "Data Synchronization",
    ],
    benefits: [
      "Consistent operations across branches",
      "Better resource optimization",
      "Unified reporting and analytics",
      "Improved coordination",
    ],
    caseStudy: "EduChain Network managed 15 branches efficiently with 50% reduction in operational overhead.",
    image: "/college.jpg?height=300&width=400",
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government Institutions",
    subtitle: "Public Education Management",
    description:
      "Specialized solution for government schools, colleges, and educational departments with compliance requirements.",
    features: [
      "Compliance Management",
      "Government Reporting",
      "Scholarship Management",
      "Mid-day Meal Tracking",
      "Teacher Training Records",
      "Infrastructure Management",
      "Audit Trail",
      "Policy Implementation",
    ],
    benefits: ["Enhanced compliance", "Transparent operations", "Better resource tracking", "Improved accountability"],
    caseStudy: "State Education Department improved transparency by 90% and reduced paperwork by 70%.",
    image: "/gov.jpg?height=300&width=400",
  },
  {
    id: "ngo",
    icon: Heart,
    title: "NGOs & Education Foundations",
    subtitle: "Social Impact Management",
    description: "Affordable and flexible solution for non-profit educational organizations and foundations.",
    features: [
      "Donor Management",
      "Grant Tracking",
      "Volunteer Management",
      "Impact Measurement",
      "Beneficiary Tracking",
      "Financial Transparency",
      "Program Management",
      "Community Outreach",
    ],
    benefits: [
      "Better donor relations",
      "Improved impact tracking",
      "Enhanced transparency",
      "Efficient program management",
    ],
    caseStudy: "Education for All Foundation increased donor retention by 60% and program efficiency by 45%.",
    image: "/ngo.jpg?height=300&width=400",
  },
]

export function SolutionsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              id={solution.id}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-4">
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{solution.title}</h2>
                      <p className="text-primary font-medium">{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* <Card className="bg-primary/5 border-primary/20 mb-6">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p className="text-sm text-muted-foreground italic">"{solution.caseStudy}"</p>
                    </CardContent>
                  </Card> */}

                  <div className="flex gap-4">
                    <Button asChild>
                      <a href="/demo">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/contact">Learn More</a>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Don't See Your Institution Type?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            OceanZen ERP is highly customizable and can be adapted to any educational institution's unique requirements.
            Let's discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Contact Our Experts</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/demo">Schedule Consultation</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
