import { AlertCircle, CheckCircle2, Loader2, Lock, Unlock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type DomainStatus =
  | "idle"
  | "checking"
  | "available"
  | "confirmed"
  | "unavailable"
  | "error"

interface DomainFieldProps {
  label: string
  value: string
  status: DomainStatus
  onChange: (value: string) => void
  onCheck: () => void
  onConfirm: () => void
  onEdit: () => void
  placeholder: string
  helperText?: string
  error?: string
}

const getDomainRoot = () => {
  if (typeof window !== "undefined") {
    return window.location.hostname.replace(/^www\./, "") || "oceanzen.in"
  }

  return (
    process.env.NEXT_PUBLIC_APP_DOMAIN ||
    process.env.NEXT_PUBLIC_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") ||
    "oceanzen.in"
  )
}

const statusMeta: Record<DomainStatus, { label: string; className: string }> = {
  idle: {
    label: "Not Checked",
    className: "bg-muted text-muted-foreground",
  },
  checking: {
    label: "Checking",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
  },
  available: {
    label: "Available",
    className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
  },
  unavailable: {
    label: "Unavailable",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  },
  error: {
    label: "Error",
    className: "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300",
  },
}

export function DomainField({
  label,
  value,
  status,
  onChange,
  onCheck,
  onConfirm,
  onEdit,
  placeholder,
  helperText,
  error,
}: DomainFieldProps) {
  const domainRoot = getDomainRoot()
  const isLocked = status === "confirmed"

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium">{label}</label>
        <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium", statusMeta[status].className)}>
          {status === "checking" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : status === "confirmed" ? <CheckCircle2 className="h-3.5 w-3.5" /> : status === "error" || status === "unavailable" ? <AlertCircle className="h-3.5 w-3.5" /> : null}
          {statusMeta[status].label}
        </span>
      </div>

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="relative flex-1">
          <Input
            value={value}
            onChange={(event) => onChange(event.target.value.toLowerCase())}
            placeholder={placeholder}
            autoComplete="off"
            disabled={isLocked}
            className={cn("pr-2", isLocked && "bg-muted/70 text-foreground/90")}
          />
        </div>

        {isLocked ? (
          <Button type="button" variant="outline" onClick={onEdit} className="shrink-0">
            <Unlock className="mr-2 h-4 w-4" />
            Edit
          </Button>
        ) : status === "available" ? (
          <Button type="button" onClick={onConfirm} className="shrink-0">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Confirm Domain
          </Button>
        ) : (
          <Button type="button" variant="outline" onClick={onCheck} disabled={status === "checking"} className="shrink-0">
            {status === "checking" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Check Availability
              </>
            )}
          </Button>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Resulting URL: https://{value.trim() || "your-subdomain"}.oceanzen.in
      </p>

      {helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
