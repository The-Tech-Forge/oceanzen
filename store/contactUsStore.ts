import { create } from "zustand"
import apiClient from "@/lib/api-client"
import { ContactUsDTO, RequestDemoDTO } from "@/dto/contact"

interface ContactUsState {
  contactUs: (dto: ContactUsDTO) => Promise<void>
  requestDemo: (dto: RequestDemoDTO) => Promise<void>
}

export const getApiErrorMessage = (error: any): string => {
  const data = error?.response?.data

  if (typeof data === "string") return data
  if (typeof data?.message === "string") return data.message
  if (typeof data?.error === "string") return data.error
  if (Array.isArray(data?.message)) return data.message.join(", ")

  return "Something went wrong. Please try again."
}

export const getApiFieldErrors = (error: any): string[] => {
  const data = error?.response?.data
  if (Array.isArray(data?.message)) return data.message
  if (typeof data?.message === "string") return [data.message]
  return []
}

export const useContactUsStore = create<ContactUsState>()(() => ({
  contactUs: async (dto: ContactUsDTO) => {
    await apiClient.post("/lead/contact-us", dto)
  },

  requestDemo: async (dto: RequestDemoDTO) => {
    await apiClient.post("/lead/request-demo", dto)
  },
}))
