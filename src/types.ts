export type ResumeBasics = {
  email: string,
  image: string,
  label: string,
  repository: string,
  location: {
    address: string,
    postalCode: string,
    city: string,
    countryCode: string,
    country: string,
    region: string,
  },
  name: string,
  phone: string,
  profiles: Array<{
    network: string,
    url: string,
    username: string,
  }>,
  summary: string,
  url: string,
  keywords?: Array<string>,
  availability: {
    status: boolean,
    title: string,
    description: string,
  }
}

export type ResumeWork = {
  name: string,
  position: string,
  location: string,
  summary: string,
  startDate: string,
  endDate?: string | null,
  url?: string | null,
  keywords: Array<string>,
  highlights: Array<string>,
}

export type ResumeEducation = {
  area: string,
  courses: Array<string>,
  endDate: string,
  startData: string,
  institution: string,
  score: string,
  stuedyType: string,
  url: string,
}

export type ResumeInterest = {
  name: string,
  keywords?: Array<string>
}

export type ResumeProject = {
  name: string,
  description: string,
  entity: string,
  startDate: string,
  endDate: string | null,
  highlights?: Array<string>,
  keywords: Array<string>,
  roles: Array<string>,
  type: string,
  url?: string,
  active: boolean,
}

export type ResumeReference = {
  name: string,
  reference: string,
}

export type ResumeLanguage = {
  language: string,
  fluency: string,
}

export type ResumeSkill = {
  name: string,
  summary?: string,
  level: string,
  keywords: Array<string>,
}

export type ResumeVolunteer = {
  organization: string,
  startDate: string,
  endDate: string | null,
  position: string,
  summary: string,
  url: string,
  highlights: Array<string>,
  location?: string,
}

export type Resume = {
  basics: ResumeBasics,
  work: Array<ResumeWork>,
  education: Array<ResumeEducation>,
  interests: Array<ResumeInterest>,
  languages: Array<ResumeLanguage>,
  projects: Array<ResumeProject>,
  references: Array<ResumeReference>,
  skills: Array<ResumeSkill>,
  volunteer: Array<ResumeVolunteer>
}
