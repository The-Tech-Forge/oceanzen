"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactMethods = [
  // {
  //   icon: Phone,
  //   title: "Phone Support",
  //   description: "Speak directly with our experts",
  //   contact: "+1-800-OCEANZEN",
  //   action: "Call Now",
  // },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your queries",
    contact: "contact.oceanzen@gmail.com",
    action: "Send Email",
  },
  // {
  //   icon: MessageCircle,
  //   title: "Live Chat",
  //   description: "Instant support during business hours",
  //   contact: "Available 9 AM - 6 PM PST",
  //   action: "Start Chat",
  // },
  // {
  //   icon: Calendar,
  //   title: "Schedule Demo",
  //   description: "Book a personalized demonstration",
  //   contact: "Available slots this week",
  //   action: "Book Demo",
  // },
]

export function ContactInfo() {
  return (
    <div className="bg-muted/30 p-8 lg:p-12">
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold mb-8">Other Ways to Reach Us</h2>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={method.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className="text-sm font-medium mb-3">{method.contact}</p>
                    <Button size="sm" variant="outline">
                      {method.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Visit Our Office</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
                <Button size="sm" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}

        <Card className="mt-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday & Sunday: 10:00 AM - 4:00 PM PST</p>
                  {/* <p>Sunday: Closed</p> */}
                  <p className="text-primary font-medium mt-2">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-background rounded-lg border">
          <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">How long does implementation take?</p>
              <p className="text-muted-foreground">Typically 2-6 weeks depending on institution size.</p>
            </div>
            <div>
              <p className="font-medium">Do you provide training?</p>
              <p className="text-muted-foreground">Yes, comprehensive training is included with all packages.</p>
            </div>
            <div>
              <p className="font-medium">Is data migration included?</p>
              <p className="text-muted-foreground">
                Yes, we handle complete data migration from your existing systems.
              </p>
            </div>
          </div>
          {/* <Button variant="link" className="p-0 mt-4">
            View All FAQs →
          </Button> */}
        </div>
      </motion.div>
    </div>
  )
}
