import { create } from "zustand"
import apiClient from "@/lib/api-client"
import { DomainDTO, EmailOTP, OrganizationDTO } from "@/dto/organization"

export enum TenantType {
  INS = "INS",
  ORG = "ORG",
}

interface OrgState {
  org_domain_locked: boolean
  ins_domain_locked: boolean
  email_locked: boolean
  checkDomainAvailibility: (dto: DomainDTO, type: TenantType) => Promise<boolean>
  sendEmailOTP: (dto: EmailOTP) => Promise<boolean>
  addOrg: (payload: FormData | OrganizationDTO) => Promise<any>
  setDomainState: (type: TenantType) => void
  setEmailState: () => void
}

const getApiErrorMessage = (error: any) => {
  const data = error?.response?.data

  if (typeof data === "string") return data
  if (typeof data?.message === "string") return data.message
  if (typeof data?.error === "string") return data.error
  if (Array.isArray(data?.message)) return data.message.join(", ")

  return "Something went wrong. Please try again."
}

export const useOrgStore = create<OrgState>((set, get) => ({
  org_domain_locked: false,
  ins_domain_locked: false,
  email_locked: false,

  checkDomainAvailibility: async (dto: DomainDTO, type: TenantType) => {
    const { data } = await apiClient.post("/organization/domain-availability", { domain: dto.domain.trim() })
    return data
  },

  sendEmailOTP: async (dto: EmailOTP) => {
    await apiClient.post("/auth/email", { email: dto.email.trim() })
    return true
  },

  addOrg: async (payload: FormData | OrganizationDTO) => {
    const body = payload instanceof FormData ? payload : new FormData()

    if (!(payload instanceof FormData)) {
      Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") return
        if (value instanceof File) {
          body.append(key, value)
        } else {
          body.append(key, String(value))
        }
      })
    }

    const response = await apiClient.post("/organization/public", body)
    return response.data
  },

  setDomainState: (type: TenantType) => {
    if (type === TenantType.INS) {
      const curr = get().ins_domain_locked
      set({ ins_domain_locked: !curr })
      return
    }

    const curr = get().org_domain_locked
    set({ org_domain_locked: !curr })
  },

  setEmailState: () => {
    const curr = get().email_locked
    set({ email_locked: !curr })
  },
}))
