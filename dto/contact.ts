export enum InsType {
  SINGLE_INSTITUTE = "SINGLE_INSTITUTE",
  ORGANIZATION = "ORGANIZATION",
}

export interface ContactUsDTO {
  full_name: string
  mobile_no: string
  email: string
  ins_name: string
  ins_type: InsType
  message?: string
}

export interface RequestDemoDTO {
  full_name: string
  mobile_no: string
  email: string
  ins_name: string
  ins_type: InsType
  demo_date: string
  demo_time: string
  message?: string
}
