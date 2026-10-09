export interface OrganizationDTO {
    org_name: string;
    org_address: string;
    org_website?: string;
    orgSubdomain: string;
    org_logo?: File;
    org_bg?: File;

    institute_name: string;
    institute_address: string;
    institute_website?: string;
    insSubdomain: string;

    ins_logo?: File;
    ins_bg?: File;

    first_name: string;
    middle_name?: string;
    last_name?: string;
    email: string;
    primary_mobile_no: string;
    secondary_mobile_no?: string;
    dob: string;
    gender: string;

    otp: number
}

export interface DomainDTO {
    domain: string
}

export interface EmailOTP {
    email: string
}