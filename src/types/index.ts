export type ProjectCategory = 'fullstack' | 'uiux' | 'apis' | 'open-source'

export type Metric = {
  label: string
  labelEn: string
  value: string
}

export type Project = {
  slug: string
  titleKey: string
  category: ProjectCategory
  technologies: string[]
  metrics: Metric[]
  liveUrl?: string
  repoUrl?: string
  images: string[]
  featured: boolean
}
