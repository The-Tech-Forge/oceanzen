"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    position: "Principal",
    institution: "Greenwood International School",
    content:
      "OceanZen ERP has transformed our school operations completely. The student management system is intuitive, and the parent portal has improved our communication significantly.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Prof. Michael Chen",
    position: "Dean of Administration",
    institution: "Metropolitan University",
    content:
      "The comprehensive modules and real-time analytics have streamlined our university operations. The implementation was smooth, and the support team is exceptional.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ms. Priya Sharma",
    position: "Director",
    institution: "Excellence Training Institute",
    content:
      "From admission to certification, OceanZen handles everything seamlessly. The fee management and automated reporting features have saved us countless hours.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dr. Robert Williams",
    position: "Vice Chancellor",
    institution: "Riverside College",
    content:
      "The multi-branch management feature is perfect for our multiple campuses. Data synchronization is flawless, and the security features give us complete peace of mind.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied educational institutions who have transformed their operations with OceanZen ERP.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-cyan-500/5 border-primary/20">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-primary font-medium">{testimonials[currentIndex].position}</div>
                      <div className="text-muted-foreground text-sm">{testimonials[currentIndex].institution}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
