"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BadgeCheck, Building2, CheckCircle2, CircleAlert, Clock3, Loader2, MailCheck, ShieldCheck, UserRound } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn, getErrorMessage } from "@/lib/utils"
import { useOrgStore, TenantType } from "@/store/orgStore"
import { DomainField, type DomainStatus } from "@/components/new-org/domain-field"
import { ImageUploadField } from "@/components/new-org/image-upload-field"

const steps = ["Organization", "Institute", "Administrator", "Verification", "Complete"]

const initialFormState = {
  org_name: "",
  org_address: "",
  org_website: "",
  orgSubdomain: "",
  org_logo: null as File | null,
  org_bg: null as File | null,
  institute_name: "",
  institute_address: "",
  institute_website: "",
  insSubdomain: "",
  ins_logo: null as File | null,
  ins_bg: null as File | null,
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  primary_mobile_no: "",
  secondary_mobile_no: "",
  dob: "",
  gender: "",
}

type FormState = typeof initialFormState

type DomainStateMap = {
  org: { status: DomainStatus; confirmed: boolean }
  ins: { status: DomainStatus; confirmed: boolean }
}


const validateSubdomain = (value: string) => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value) && value.length >= 3 && value.length <= 63

const validateWebsite = (value: string) => {
  if (!value.trim()) return true

  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const validatePhone = (value: string) => {
  const digits = value.replace(/\D/g, "")
  return digits.length === 10 && /^[6-9]\d{9}$/.test(digits)
}

const toDisplayUrl = (domain: string) => {
  return `https://${domain.trim() || "your-subdomain"}.oceanzen.in`
}

export function OrganizationRegistrationForm() {
  const { checkDomainAvailibility, sendEmailOTP, addOrg } = useOrgStore()
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState<FormState>(initialFormState)
  const [domainState, setDomainState] = useState<DomainStateMap>({
    org: { status: "idle", confirmed: false },
    ins: { status: "idle", confirmed: false },
  })
  const [consentAccepted, setConsentAccepted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [otpCode, setOtpCode] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otpCountdown, setOtpCountdown] = useState(0)
  const [otpSentAt, setOtpSentAt] = useState<number | null>(null)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState("")
  const [successData, setSuccessData] = useState<{ orgUrl: string; insUrl: string } | null>(null)
  const otpRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    if (otpCountdown <= 0) return

    const timer = window.setTimeout(() => {
      setOtpCountdown((value) => (value > 0 ? value - 1 : 0))
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [otpCountdown])

  const invalidateDomainConfirmation = (entity: "org" | "ins") => {
    setDomainState((prev) => ({
      ...prev,
      [entity]: { status: "idle", confirmed: false },
    }))
  }

  const handleFieldChange = (field: keyof FormState, value: string | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: "" }))

    if (field === "email" && otpSent) {
      setOtpSent(false)
      setOtpCode("")
      setOtpCountdown(0)
      setOtpSentAt(null)
      toast.info("Email changed. Please request a fresh verification code.")
    }

    if (field === "orgSubdomain" && domainState.org.confirmed) {
      setDomainState((prev) => ({ ...prev, org: { status: "idle", confirmed: false } }))
    }

    if (field === "insSubdomain" && domainState.ins.confirmed) {
      setDomainState((prev) => ({ ...prev, ins: { status: "idle", confirmed: false } }))
    }

    if (field === "orgSubdomain") {
      const nextValue = String(value).trim()
      if (nextValue && nextValue === form.insSubdomain.trim()) {
        setDomainState((prev) => ({
          org: { status: "idle", confirmed: false },
          ins: { status: "idle", confirmed: false },
        }))
      }
    }

    if (field === "insSubdomain") {
      const nextValue = String(value).trim()
      if (nextValue && nextValue === form.orgSubdomain.trim()) {
        setDomainState((prev) => ({
          org: { status: "idle", confirmed: false },
          ins: { status: "idle", confirmed: false },
        }))
      }
    }
  }

  const handleCheckDomain = async (entity: "org" | "ins") => {
    const fieldName = entity === "org" ? "orgSubdomain" : "insSubdomain"
    const domainValue = form[fieldName].trim()

    if (!domainValue) {
      setErrors((prev) => ({ ...prev, [fieldName]: "Subdomain is required." }))
      return
    }

    if (!validateSubdomain(domainValue)) {
      setDomainState((prev) => ({
        ...prev,
        [entity]: { status: "error", confirmed: false },
      }))
      setErrors((prev) => ({ ...prev, [fieldName]: "Use 3-63 lowercase letters, numbers, or hyphens only." }))
      return
    }

    if (domainValue === (entity === "org" ? form.insSubdomain.trim() : form.orgSubdomain.trim())) {
      setDomainState((prev) => ({
        org: { status: "idle", confirmed: false },
        ins: { status: "idle", confirmed: false },
      }))
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "Organization and institute subdomains must be different.",
      }))
      return
    }

    setDomainState((prev) => ({
      ...prev,
      [entity]: { status: "checking", confirmed: false },
    }))
    setErrors((prev) => ({ ...prev, [fieldName]: "" }))

    try {
      const isAvailable = await checkDomainAvailibility(
        { domain: domainValue },
        entity === "org" ? TenantType.ORG : TenantType.INS,
      )

      if (isAvailable) {
        setDomainState((prev) => ({
          ...prev,
          [entity]: { status: "available", confirmed: false },
        }))
        toast.success("This domain is available. Please confirm it before continuing.")
      } else {
        setDomainState((prev) => ({
          ...prev,
          [entity]: { status: "unavailable", confirmed: false },
        }))
        toast.error("This subdomain is currently unavailable. Please choose another one.")
      }
    } catch (error) {
      console.log(error)
      setDomainState((prev) => ({
        ...prev,
        [entity]: { status: "error", confirmed: false },
      }))
      const message = getErrorMessage(error)
      toast.error(message)
      setErrors((prev) => ({ ...prev, [fieldName]: message }))
    }
  }

  const handleConfirmDomain = (entity: "org" | "ins") => {
    const fieldName = entity === "org" ? "orgSubdomain" : "insSubdomain"
    const domainValue = form[fieldName].trim()

    if (!domainValue || !validateSubdomain(domainValue)) {
      setErrors((prev) => ({ ...prev, [fieldName]: "Please enter a valid subdomain before confirming." }))
      return
    }

    if (domainValue === (entity === "org" ? form.insSubdomain.trim() : form.orgSubdomain.trim())) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "Organization and institute subdomains must be different.",
      }))
      return
    }

    setDomainState((prev) => ({
      ...prev,
      [entity]: { status: "confirmed", confirmed: true },
    }))
    setErrors((prev) => ({ ...prev, [fieldName]: "" }))
  }

  const handleEditDomain = (entity: "org" | "ins") => {
    setDomainState((prev) => ({
      ...prev,
      [entity]: { status: "idle", confirmed: false },
    }))
  }

  const handleSendOtp = async () => {
    const email = form.email.trim()

    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }))
      return
    }

    setIsSendingOtp(true)
    setSubmissionError("")

    try {
      await sendEmailOTP({ email })
      setOtpSent(true)
      setOtpCode("")
      setOtpCountdown(60)
      setOtpSentAt(Date.now())
      toast.success("A verification code has been sent to your email address.")
    } catch (error) {
      const message = getErrorMessage(error)
      toast.error(message)
      setErrors((prev) => ({ ...prev, email: message }))
    } finally {
      setIsSendingOtp(false)
    }
  }

  const handleOtpDigitChange = (index: number, value: string) => {
    const nextDigit = value.replace(/\D/g, "").slice(-1)
    const otpDigits = otpCode.padEnd(6, "").split("")
    otpDigits[index] = nextDigit
    const nextCode = otpDigits.join("").slice(0, 6)
    setOtpCode(nextCode)

    if (nextDigit && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpBackspace = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otpCode[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    if (!pasted) return

    event.preventDefault()
    setOtpCode(pasted)
    const nextIndex = Math.min(pasted.length, 5)
    otpRefs.current[nextIndex]?.focus()
  }

  const validateCurrentStep = (step: number) => {
    if (step === 0) {
      if (!form.org_name.trim()) return "Organization name is required."
      if (!form.org_address.trim()) return "Organization address is required."
      if (form.org_website && !validateWebsite(form.org_website)) return "Organization website is invalid."
      if (!form.orgSubdomain.trim()) return "Organization subdomain is required."
      if (!validateSubdomain(form.orgSubdomain)) return "Organization subdomain must contain only lowercase letters, numbers, and hyphens."
      if (form.orgSubdomain.trim() === form.insSubdomain.trim()) return "Organization and institute subdomains must be different."
      if (!domainState.org.confirmed) return "Please check and confirm the organization subdomain."
      return ""
    }

    if (step === 1) {
      if (!form.institute_name.trim()) return "Institute name is required."
      if (!form.institute_address.trim()) return "Institute address is required."
      if (form.institute_website && !validateWebsite(form.institute_website)) return "Institute website is invalid."
      if (!form.insSubdomain.trim()) return "Institute subdomain is required."
      if (!validateSubdomain(form.insSubdomain)) return "Institute subdomain must contain only lowercase letters, numbers, and hyphens."
      if (form.orgSubdomain.trim() === form.insSubdomain.trim()) return "Organization and institute subdomains must be different."
      if (!domainState.ins.confirmed) return "Please check and confirm the institute subdomain."
      return ""
    }

    if (step === 2) {
      if (!form.first_name.trim()) return "Administrator first name is required."
      if (!form.last_name.trim()) return "Administrator last name is required."
      if (!validateEmail(form.email.trim())) return "A valid administrator email is required."
      if (!validatePhone(form.primary_mobile_no)) return "Primary mobile number must be a valid 10-digit Indian number."
      if (form.secondary_mobile_no && !validatePhone(form.secondary_mobile_no)) return "Secondary mobile number must be a valid 10-digit Indian number."
      if (!form.dob) return "Date of birth is required."
      if (!form.gender.trim()) return "Gender is required."
      if (!consentAccepted) return "Please accept the terms and privacy policy before continuing."
      return ""
    }

    if (step === 3) {
      if (!otpSent) return "Please send a verification code before continuing."
      if (otpCode.replace(/\D/g, "").length !== 6) return "Please enter the full 6-digit verification code."
      if (otpSentAt && Date.now() - otpSentAt > 5 * 60 * 1000) return "The verification code has expired. Please request a new one."
      return ""
    }

    return ""
  }

  const handleNextStep = () => {
    const error = validateCurrentStep(currentStep)

    if (error) {
      toast.error(error)
      return
    }

    if (currentStep < steps.length - 2) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const buildRegistrationPayload = () => {
    const formData = new FormData()

    formData.append("org_name", form.org_name.trim())
    formData.append("org_address", form.org_address.trim())
    formData.append("org_website", form.org_website.trim())
    formData.append("orgSubdomain", form.orgSubdomain.trim())
    if (form.org_logo) formData.append("org_logo", form.org_logo)
    if (form.org_bg) formData.append("org_bg", form.org_bg)

    formData.append("institute_name", form.institute_name.trim())
    formData.append("institute_address", form.institute_address.trim())
    formData.append("institute_website", form.institute_website.trim())
    formData.append("insSubdomain", form.insSubdomain.trim())
    if (form.ins_logo) formData.append("ins_logo", form.ins_logo)
    if (form.ins_bg) formData.append("ins_bg", form.ins_bg)

    formData.append("first_name", form.first_name.trim())
    formData.append("middle_name", form.middle_name.trim())
    formData.append("last_name", form.last_name.trim())
    formData.append("email", form.email.trim())
    formData.append("primary_mobile_no", form.primary_mobile_no.replace(/\D/g, ""))
    formData.append("secondary_mobile_no", form.secondary_mobile_no.replace(/\D/g, ""))
    formData.append("dob", form.dob)
    formData.append("gender", form.gender)
    formData.append("otp", otpCode.replace(/\D/g, ""))

    return formData
  }

  const handleCreateERP = async () => {
    const error = validateCurrentStep(3)

    if (error) {
      toast.error(error)
      setCurrentStep(3)
      return
    }

    if (!domainState.org.confirmed || !domainState.ins.confirmed) {
      toast.error("Both domains must be checked and confirmed before registration.")
      return
    }

    if (form.orgSubdomain.trim() === form.insSubdomain.trim()) {
      toast.error("Organization and institute subdomains must be different.")
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmissionError("")
    setCurrentStep(4)

    try {
      const payload = buildRegistrationPayload()
      await addOrg(payload)

      const orgUrl = toDisplayUrl(form.orgSubdomain)
      const insUrl = toDisplayUrl(form.insSubdomain)
      setSuccessData({ orgUrl, insUrl })
      toast.success("Your organization and institute have been registered successfully.")
    } catch (error) {
      const message = getErrorMessage(error)
      setSubmissionError(message)
      toast.error(message)
      setCurrentStep(3)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderOrganizationFields = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="org-name">Organization Name</Label>
          <Input id="org-name" value={form.org_name} onChange={(event) => handleFieldChange("org_name", event.target.value)} placeholder="ABC Education Group" />
          {errors.org_name && <p className="text-xs text-red-600">{errors.org_name}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="org-address">Organization Address</Label>
          <Textarea id="org-address" value={form.org_address} onChange={(event) => handleFieldChange("org_address", event.target.value)} rows={4} placeholder="Nagpur, Maharashtra" />
          {errors.org_address && <p className="text-xs text-red-600">{errors.org_address}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="org-website">Organization Website</Label>
          <Input id="org-website" value={form.org_website} onChange={(event) => handleFieldChange("org_website", event.target.value)} placeholder="https://example.com" />
          {errors.org_website && <p className="text-xs text-red-600">{errors.org_website}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <DomainField
            label="Organization Subdomain"
            value={form.orgSubdomain}
            status={domainState.org.status}
            onChange={(value) => handleFieldChange("orgSubdomain", value)}
            onCheck={() => handleCheckDomain("org")}
            onConfirm={() => handleConfirmDomain("org")}
            onEdit={() => handleEditDomain("org")}
            placeholder="abcgroup"
            helperText="This will appear in your organization URL."
            error={errors.orgSubdomain}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ImageUploadField label="Organization Logo" file={form.org_logo} onChange={(file) => handleFieldChange("org_logo", file)} hint="PNG, JPG, or WEBP up to 500 KB" error={errors.org_logo} />
        <ImageUploadField label="Organization Background" file={form.org_bg} onChange={(file) => handleFieldChange("org_bg", file)} hint="PNG, JPG, or WEBP up to 500 KB" error={errors.org_bg} />
      </div>

      <div className="rounded-2xl border bg-slate-50 p-4 dark:bg-slate-900/60">
        <p className="text-sm font-medium">Selected organization URL</p>
        <p className="mt-2 text-sm text-muted-foreground">{toDisplayUrl(form.orgSubdomain)}</p>
      </div>
    </div>
  )

  const renderInstituteFields = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="institute-name">Institute Name</Label>
          <Input id="institute-name" value={form.institute_name} onChange={(event) => handleFieldChange("institute_name", event.target.value)} placeholder="ABC Public School" />
          {errors.institute_name && <p className="text-xs text-red-600">{errors.institute_name}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="institute-address">Institute Address</Label>
          <Textarea id="institute-address" value={form.institute_address} onChange={(event) => handleFieldChange("institute_address", event.target.value)} rows={4} placeholder="Nagpur, Maharashtra" />
          {errors.institute_address && <p className="text-xs text-red-600">{errors.institute_address}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="institute-website">Institute Website</Label>
          <Input id="institute-website" value={form.institute_website} onChange={(event) => handleFieldChange("institute_website", event.target.value)} placeholder="https://school.example.com" />
          {errors.institute_website && <p className="text-xs text-red-600">{errors.institute_website}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <DomainField
            label="Institute Subdomain"
            value={form.insSubdomain}
            status={domainState.ins.status}
            onChange={(value) => handleFieldChange("insSubdomain", value)}
            onCheck={() => handleCheckDomain("ins")}
            onConfirm={() => handleConfirmDomain("ins")}
            onEdit={() => handleEditDomain("ins")}
            placeholder="abcschool"
            helperText="This will appear in your institute URL."
            error={errors.insSubdomain}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ImageUploadField label="Institute Logo" file={form.ins_logo} onChange={(file) => handleFieldChange("ins_logo", file)} hint="PNG, JPG, or WEBP up to 500 KB" error={errors.ins_logo} />
        <ImageUploadField label="Institute Background" file={form.ins_bg} onChange={(file) => handleFieldChange("ins_bg", file)} hint="PNG, JPG, or WEBP up to 500 KB" error={errors.ins_bg} />
      </div>

      <div className="rounded-2xl border bg-slate-50 p-4 dark:bg-slate-900/60">
        <p className="text-sm font-medium">Selected institute URL</p>
        <p className="mt-2 text-sm text-muted-foreground">{toDisplayUrl(form.insSubdomain)}</p>
      </div>
    </div>
  )

  const renderAdminFields = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" value={form.first_name} onChange={(event) => handleFieldChange("first_name", event.target.value)} placeholder="Aarav" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="middle-name">Middle Name</Label>
          <Input id="middle-name" value={form.middle_name} onChange={(event) => handleFieldChange("middle_name", event.target.value)} placeholder="Optional" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" value={form.last_name} onChange={(event) => handleFieldChange("last_name", event.target.value)} placeholder="Patel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={form.email} onChange={(event) => handleFieldChange("email", event.target.value)} placeholder="admin@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="primary-mobile">Primary Mobile Number</Label>
          <Input id="primary-mobile" value={form.primary_mobile_no} onChange={(event) => handleFieldChange("primary_mobile_no", event.target.value)} placeholder="9876543210" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="secondary-mobile">Secondary Mobile Number</Label>
          <Input id="secondary-mobile" value={form.secondary_mobile_no} onChange={(event) => handleFieldChange("secondary_mobile_no", event.target.value)} placeholder="Optional" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" value={form.dob} onChange={(event) => handleFieldChange("dob", event.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={form.gender} onValueChange={(value) => handleFieldChange("gender", value)}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border bg-slate-50 p-4 dark:bg-slate-900/60">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-emerald-600" />
          <h3 className="text-sm font-semibold">Review your information</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Organization</p>
            <p className="mt-1 font-medium">{form.org_name || "Not filled"}</p>
            <p className="text-sm text-muted-foreground">{form.orgSubdomain ? toDisplayUrl(form.orgSubdomain) : "No URL selected"}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground">Institute</p>
            <p className="mt-1 font-medium">{form.institute_name || "Not filled"}</p>
            <p className="text-sm text-muted-foreground">{form.insSubdomain ? toDisplayUrl(form.insSubdomain) : "No URL selected"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs uppercase text-muted-foreground">Administrator</p>
            <p className="mt-1 font-medium">{`${form.first_name} ${form.last_name}`.trim() || "Not filled"}</p>
            <p className="text-sm text-muted-foreground">{form.email || "No email address"}</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-dashed bg-background p-4">
        <Checkbox id="terms" checked={consentAccepted} onCheckedChange={(checked) => setConsentAccepted(Boolean(checked))} />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the <Link href="/terms" className="font-medium text-primary underline-offset-4 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="font-medium text-primary underline-offset-4 hover:underline">Privacy Policy</Link>.
        </label>
      </div>
    </div>
  )

  const renderOtpStep = () => (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-slate-50 p-5 dark:bg-slate-900/60">
        <div className="flex items-start gap-3">
          <MailCheck className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <h3 className="font-semibold">Email verification</h3>
            <p className="text-sm text-muted-foreground">Use the verification code sent to {form.email || "your email address"}.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button type="button" onClick={handleSendOtp} disabled={isSendingOtp || !validateEmail(form.email.trim())} className="w-full sm:w-auto">
          {isSendingOtp ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <ShieldCheck className="mr-2 h-4 w-4" />
              Send Verification Code
            </>
          )}
        </Button>

        {otpSent && (
          <Button type="button" variant="outline" onClick={handleSendOtp} disabled={otpCountdown > 0 || isSendingOtp} className="w-full sm:w-auto">
            {otpCountdown > 0 ? `Resend in ${otpCountdown}s` : "Resend OTP"}
          </Button>
        )}
      </div>

      {otpSent && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Enter 6-digit code</span>
            {otpSentAt && <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{Math.max(0, Math.ceil((5 * 60 * 1000 - (Date.now() - otpSentAt)) / 1000))}s left</span>}
          </div>

          <div className="flex gap-2" onPaste={handleOtpPaste}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Input
                key={index}
                ref={(element) => {
                  otpRefs.current[index] = element
                }}
                value={otpCode[index] ?? ""}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                className="h-12 w-12 text-center text-lg"
                onChange={(event) => handleOtpDigitChange(index, event.target.value)}
                onKeyDown={(event) => handleOtpBackspace(index, event)}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          {submissionError && <p className="text-xs text-red-600">{submissionError}</p>}
        </div>
      )}
    </div>
  )

  const renderCompleteStep = () => {
    if (successData) {
      return (
        <div className="space-y-6">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
            <h3 className="text-2xl font-bold">Registration Complete</h3>
            <p className="mt-2 text-sm text-muted-foreground">Your organization and institute have been created. Please check your email for the welcome message and login details.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="text-xs uppercase text-muted-foreground">Organization URL</p>
              <a href={successData.orgUrl} target="_blank" rel="noreferrer" className="mt-2 block font-medium text-primary hover:underline">{successData.orgUrl}</a>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="text-xs uppercase text-muted-foreground">Institute URL</p>
              <a href={successData.insUrl} target="_blank" rel="noreferrer" className="mt-2 block font-medium text-primary hover:underline">{successData.insUrl}</a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={successData.orgUrl} target="_blank" rel="noreferrer">Visit ERP</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Website</Link>
            </Button>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-6 py-8 text-center">
        <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
        <div>
          <h3 className="text-2xl font-bold">Creating your ERP</h3>
          <p className="mt-2 text-sm text-muted-foreground">We are creating your organization, institute, and administrator accounts. This usually takes a few moments.</p>
        </div>
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderOrganizationFields()
      case 1:
        return renderInstituteFields()
      case 2:
        return renderAdminFields()
      case 3:
        return renderOtpStep()
      case 4:
        return renderCompleteStep()
      default:
        return null
    }
  }

  const currentSectionTitle =
    currentStep === 0
      ? "Set up your organization"
      : currentStep === 1
        ? "Set up your institute"
        : currentStep === 2
          ? "Add your administrator"
          : currentStep === 3
            ? "Verify your email"
            : "Registration complete"

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden border-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <CardHeader className="border-b bg-gradient-to-r from-slate-900 via-sky-950 to-sky-900 p-6 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Cluster ERP</p>
                <CardTitle className="mt-2 text-2xl font-bold text-white">Organization Registration</CardTitle>
              </div>
              <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-sky-100">
                OceanZen by Cluster ERP
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {steps.map((step, index) => {
                  const isCompleted = index < currentStep
                  const isCurrent = index === currentStep
                  const isUpcoming = index > currentStep

                  return (
                    <button
                      key={step}
                      type="button"
                      onClick={() => {
                        if (index <= currentStep) {
                          setCurrentStep(index)
                        }
                      }}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors",
                        isCompleted && "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
                        isCurrent && "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300",
                        isUpcoming && "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",
                      )}
                    >
                      <span className={cn("flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold", isCompleted ? "bg-emerald-600 text-white" : isCurrent ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200")}>{index + 1}</span>
                      {step}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {currentStep + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold">{currentSectionTitle}</h2>
            </div>

            {renderStepContent()}

            {currentStep < 4 && !isSubmitting && (
              <div className="mt-8 flex items-center justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))} disabled={currentStep === 0}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>

                {currentStep < 3 ? (
                  <Button type="button" onClick={handleNextStep}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" onClick={handleCreateERP} disabled={isSubmitting}>
                    Create My ERP
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
