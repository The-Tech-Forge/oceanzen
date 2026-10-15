"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { useContactUsStore, getApiFieldErrors } from "@/store/contactUsStore"
import { InsType } from "@/dto/contact"

const FIELD_ERROR_MAP: Record<string, (keyof typeof initialFormData)[]> = {
  full_name: ["full_name"],
  mobile_no: ["mobile_no"],
  email: ["email"],
  ins_name: ["ins_name"],
  ins_type: ["ins_type"],
  message: ["message"],
}

const initialFormData = {
  full_name: "",
  mobile_no: "",
  email: "",
  ins_name: "",
  ins_type: "" as InsType | "",
  message: "",
}

type FormData = typeof initialFormData
type FieldErrors = Partial<Record<keyof FormData, string>>

export function ContactForm() {
  const { contactUs } = useContactUsStore()
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
      await contactUs({
        full_name: formData.full_name.trim(),
        mobile_no: formData.mobile_no.trim(),
        email: formData.email.trim(),
        ins_name: formData.ins_name.trim(),
        ins_type: formData.ins_type as InsType,
        message: formData.message.trim() || undefined,
      })
      setIsSubmitted(true)
    } catch (error: any) {
      const messages = getApiFieldErrors(error)
      if (messages.length > 0) {
        setFieldErrors(parseFieldErrors(messages))
      } else {
        toast.error("Failed to send message. Please try again later.")
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
                <SelectValue placeholder="Select institution type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={InsType.SINGLE_INSTITUTE}>Single Institute</SelectItem>
                <SelectItem value={InsType.ORGANIZATION}>Organization / Chain</SelectItem>
              </SelectContent>
            </Select>
            {fieldErrors.ins_type && <p className="text-destructive text-xs mt-1">{fieldErrors.ins_type}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              className="mt-2"
              placeholder="Tell us about your requirements, current challenges, or any specific questions you have about OceanZen ERP..."
            />
            {fieldErrors.message && <p className="text-destructive text-xs mt-1">{fieldErrors.message}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending Message..." : "Send Message"}
            {!isLoading && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
