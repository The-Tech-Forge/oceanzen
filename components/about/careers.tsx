"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, ArrowRight } from "lucide-react"

const openRoles = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Join our engineering team to build scalable ERP solutions for educational institutions worldwide.",
    requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "EdTech experience preferred"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Lead product strategy and roadmap for our comprehensive ERP platform.",
    requirements: [
      "3+ years PM experience",
      "B2B SaaS background",
      "Educational domain knowledge",
      "Data-driven mindset",
    ],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our clients achieve success with OceanZen ERP and drive customer satisfaction.",
    requirements: ["2+ years CS experience", "SaaS background", "Excellent communication", "Problem-solving skills"],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Maintain and scale our cloud infrastructure to support growing customer base.",
    requirements: ["AWS/Azure experience", "Kubernetes", "CI/CD pipelines", "Security best practices"],
  },
]

export function Careers() {
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
            Join Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a mission-driven team that's transforming education through technology. We offer competitive
            benefits, flexible work arrangements, and the opportunity to make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {openRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {role.department}
                      </Badge>
                    </div>
                    <Badge variant="outline">{role.type}</Badge>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {role.location}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{role.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">Why Work at OceanZen?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Great Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborative, inclusive, and mission-driven environment
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Work-Life Balance</h4>
                  <p className="text-sm text-muted-foreground">Flexible hours and remote work options</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Growth Opportunities</h4>
                  <p className="text-sm text-muted-foreground">Continuous learning and career development</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Don't see a role that fits? We're always looking for talented individuals who share our passion for
                education and technology.
              </p>
              <Button variant="outline" size="lg">
                Send Us Your Resume
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
