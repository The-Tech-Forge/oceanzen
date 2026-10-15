"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, CheckCircle, CalendarIcon } from "lucide-react"
import { toast } from "sonner"
import { useContactUsStore, getApiFieldErrors } from "@/store/contactUsStore"
import { InsType } from "@/dto/contact"

const TIME_SLOTS = [
  { label: "9:00 AM - 10:00 AM", value: "9:00 AM" },
  { label: "10:00 AM - 11:00 AM", value: "10:00 AM" },
  { label: "11:00 AM - 12:00 PM", value: "11:00 AM" },
  { label: "2:00 PM - 3:00 PM", value: "2:00 PM" },
  { label: "3:00 PM - 4:00 PM", value: "3:00 PM" },
  { label: "4:00 PM - 5:00 PM", value: "4:00 PM" },
]

const FIELD_ERROR_MAP: Record<string, (keyof typeof initialFormData)[]> = {
  full_name: ["full_name"],
  mobile_no: ["mobile_no"],
  email: ["email"],
  ins_name: ["ins_name"],
  ins_type: ["ins_type"],
  demo_date: ["demo_date"],
  demo_time: ["demo_time"],
  message: ["message"],
}

const initialFormData = {
  full_name: "",
  mobile_no: "",
  email: "",
  ins_name: "",
  ins_type: "" as InsType | "",
  demo_date: "",
  demo_time: "",
  message: "",
}

type FormData = typeof initialFormData
type FieldErrors = Partial<Record<keyof FormData, string>>

export function DemoForm() {
  const { requestDemo } = useContactUsStore()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const parseFieldErrors = (messages: string[]): FieldErrors => {
    const errors: FieldErrors = {}
    for (const msg of messages) {
      for (const [key, fields] of Object.entries(FIELD_ERROR_MAP)) {
        if (msg.toLowerCase().includes(key)) {
          for (const field of fields) {
            errors[field] = msg
          }
        }
      }
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFieldErrors({})
    setIsLoading(true)

    try {
      await requestDemo({
        full_name: formData.full_name.trim(),
        mobile_no: formData.mobile_no.trim(),
        email: formData.email.trim(),
        ins_name: formData.ins_name.trim(),
        ins_type: formData.ins_type as InsType,
        demo_date: formData.demo_date.trim(),
        demo_time: formData.demo_time,
        message: formData.message.trim() || undefined,
      })
      setIsSubmitted(true)
    } catch (error: any) {
      const messages = getApiFieldErrors(error)
      if (messages.length > 0) {
        setFieldErrors(parseFieldErrors(messages))
      } else {
        toast.error("Failed to send demo request. Please try again later.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
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
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleInputChange("full_name", e.target.value)}
                      required
                      className="mt-2"
                    />
                    {fieldErrors.full_name && <p className="text-destructive text-xs mt-1">{fieldErrors.full_name}</p>}
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
                    {fieldErrors.email && <p className="text-destructive text-xs mt-1">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="mobile_no">Mobile Number *</Label>
                    <Input
                      id="mobile_no"
                      value={formData.mobile_no}
                      onChange={(e) => handleInputChange("mobile_no", e.target.value)}
                      required
                      placeholder="e.g. 8795265485"
                      className="mt-2"
                    />
                    {fieldErrors.mobile_no && <p className="text-destructive text-xs mt-1">{fieldErrors.mobile_no}</p>}
                  </div>
                  <div>
                    <Label htmlFor="ins_name">Institution Name *</Label>
                    <Input
                      id="ins_name"
                      value={formData.ins_name}
                      onChange={(e) => handleInputChange("ins_name", e.target.value)}
                      required
                      className="mt-2"
                    />
                    {fieldErrors.ins_name && <p className="text-destructive text-xs mt-1">{fieldErrors.ins_name}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="ins_type">Institution Type *</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("ins_type", value)}
                    value={formData.ins_type}
                  >
                    <SelectTrigger id="ins_type" className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={InsType.SINGLE_INSTITUTE}>Single Institute</SelectItem>
                      <SelectItem value={InsType.ORGANIZATION}>Organization / Chain</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldErrors.ins_type && <p className="text-destructive text-xs mt-1">{fieldErrors.ins_type}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="demo_date">Preferred Demo Date *</Label>
                    <Input
                      id="demo_date"
                      type="date"
                      value={formData.demo_date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => handleInputChange("demo_date", e.target.value)}
                      required
                      className="mt-2"
                    />
                    {fieldErrors.demo_date && <p className="text-destructive text-xs mt-1">{fieldErrors.demo_date}</p>}
                  </div>
                  <div>
                    <Label htmlFor="demo_time">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleInputChange("demo_time", value)} value={formData.demo_time}>
                      <SelectTrigger id="demo_time" className="mt-2">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldErrors.demo_time && <p className="text-destructive text-xs mt-1">{fieldErrors.demo_time}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your specific needs, challenges, or any particular modules you're interested in..."
                  />
                  {fieldErrors.message && <p className="text-destructive text-xs mt-1">{fieldErrors.message}</p>}
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
