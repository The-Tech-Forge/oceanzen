"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Chen",
    position: "CEO & Co-Founder",
    bio: "Former education administrator with 15+ years experience. PhD in Educational Technology from Stanford.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@oceanzen.com",
    },
  },
  {
    name: "Michael Rodriguez",
    position: "CTO & Co-Founder",
    bio: "Software architect with expertise in cloud computing and AI. Former lead engineer at major tech companies.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@oceanzen.com",
    },
  },
  {
    name: "Dr. Priya Sharma",
    position: "Head of Product",
    bio: "Product strategist with deep understanding of educational workflows. Former principal at international schools.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@oceanzen.com",
    },
  },
  {
    name: "James Wilson",
    position: "VP of Engineering",
    bio: "Full-stack developer and team leader with 12+ years in EdTech. Passionate about scalable solutions.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@oceanzen.com",
    },
  },
  {
    name: "Lisa Thompson",
    position: "Head of Customer Success",
    bio: "Customer experience expert dedicated to ensuring client satisfaction and successful implementations.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@oceanzen.com",
    },
  },
  {
    name: "David Kim",
    position: "Head of Sales",
    bio: "Sales leader with extensive experience in B2B SaaS and educational technology solutions.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@oceanzen.com",
    },
  },
]

export function OurTeam() {
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
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of educators, technologists, and innovators work together to create exceptional ERP
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
