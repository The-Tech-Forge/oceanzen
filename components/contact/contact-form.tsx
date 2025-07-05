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
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    institutionType: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-background p-12 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-background p-8 lg:p-12">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

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
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="institution">Institution Name</Label>
              <Input
                id="institution"
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="institutionType">Institution Type</Label>
            <Select onValueChange={(value) => handleInputChange("institutionType", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select institution type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school">School (K-12)</SelectItem>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="training">Training Institute</SelectItem>
                <SelectItem value="government">Government Institution</SelectItem>
                <SelectItem value="ngo">NGO/Foundation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              rows={5}
              className="mt-2"
              placeholder="Tell us about your requirements, current challenges, or any specific questions you have about OceanZen ERP..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for updates and educational insights
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
