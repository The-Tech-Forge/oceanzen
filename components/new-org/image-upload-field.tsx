import type { ChangeEvent } from "react"
import { ImageIcon, UploadCloud, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageUploadFieldProps {
  label: string
  file: File | null
  onChange: (file: File | null) => void
  hint?: string
  error?: string
}

export function ImageUploadField({ label, file, onChange, hint, error }: ImageUploadFieldProps) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}-upload`

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null
    if (!nextFile) {
      onChange(null)
      return
    }

    if (!nextFile.type.startsWith("image/")) {
      onChange(null)
      event.target.value = ""
      return
    }

    if (nextFile.size > 500 * 1024) {
      onChange(null)
      event.target.value = ""
      return
    }

    onChange(nextFile)
  }

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>

      <div className={cn("rounded-xl border border-dashed bg-muted/30 p-4 transition-colors", error && "border-red-300 bg-red-50/50")}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="rounded-lg border bg-background p-2 text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{file ? file.name : "No file selected"}</p>
              {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {file ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => onChange(null)} className="text-muted-foreground hover:text-foreground">
                <X className="mr-1 h-4 w-4" />
                Remove
              </Button>
            ) : null}
            <label htmlFor={inputId} className="cursor-pointer">
              <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground">
                <UploadCloud className="h-4 w-4" />
                Upload
              </span>
            </label>
          </div>
        </div>

        <input id={inputId} type="file" accept="image/png,image/jpeg,image/jpg,image/webp" className="hidden" onChange={handleFileChange} />
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
