"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Users, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"

export function DemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    institutionType: "",
    studentCount: "",
    currentSystem: "",
    timeSlot: "",
    requirements: "",
    newsletter: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          demoDate: selectedDate ? format(selectedDate, "PPP") : undefined,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        toast.error("Failed to send demo request. Please try again later.")
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Demo Scheduled Successfully!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in OceanZen ERP. We've received your demo request and will contact you within
              2 hours to confirm the details.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">
                    1
                  </div>
                  <span>Our team will call you to confirm the demo details</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">
                    2
                  </div>
                  <span>We'll send you a calendar invite with the meeting link</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">
                    3
                  </div>
                  <span>Join the demo at your scheduled time</span>
                </div>
              </div>
            </div>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Schedule Your Personalized Demo</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll schedule a demo tailored to your institution's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution">Institution Name *</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="institutionType">Institution Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("institutionType", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School (K-12)</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="training">Training Institute</SelectItem>
                        <SelectItem value="government">Government Institution</SelectItem>
                        <SelectItem value="ngo">NGO/Foundation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studentCount">Number of Students</Label>
                    <Select onValueChange={(value) => handleInputChange("studentCount", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-100">1-100</SelectItem>
                        <SelectItem value="101-500">101-500</SelectItem>
                        <SelectItem value="501-1000">501-1000</SelectItem>
                        <SelectItem value="1001-5000">1001-5000</SelectItem>
                        <SelectItem value="5000+">5000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Demo Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-2 bg-transparent"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="timeSlot">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange("timeSlot", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM - 5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentSystem">Current System (if any)</Label>
                  <Input
                    id="currentSystem"
                    value={formData.currentSystem}
                    onChange={(e) => handleInputChange("currentSystem", e.target.value)}
                    placeholder="e.g., Manual processes, Excel, other ERP system"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Specific Requirements or Questions</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your specific needs, challenges, or any particular modules you're interested in..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for educational technology insights
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending Request..." : "Schedule Demo"}
                  {!isLoading && <CalendarIcon className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-2" />
                  <h3 className="font-semibold">Demo Details</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Duration: 45-60 minutes</li>
                  <li>• Format: Online via video call</li>
                  <li>• Personalized to your needs</li>
                  <li>• Q&A session included</li>
                  <li>• No obligation</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <h3 className="font-semibold">What You'll See</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete system overview</li>
                  <li>• Key modules demonstration</li>
                  <li>• Real-world use cases</li>
                  <li>• Integration capabilities</li>
                  <li>• Customization options</li>
                  <li>• Implementation process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
