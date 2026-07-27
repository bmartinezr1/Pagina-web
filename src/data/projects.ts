import type { Project, ProjectCategory } from '@/types'

export const projects: Project[] = [
  {
    slug: 'gestion-cuentas-hospitalarias',
    titleKey: 'projects.gestion-cuentas-hospitalarias.title',
    category: 'fullstack',
    technologies: ['PHP', 'JavaScript', 'Playwright', 'MySQL', 'Bootstrap'],
    metrics: [
      { label: 'Tipos de cuentas', labelEn: 'Account types', value: '12+' },
      { label: 'Proceso automatizado', labelEn: 'Automated process', value: '100%' },
      { label: 'Entorno', labelEn: 'Environment', value: 'Local' },
    ],
    images: ['/images/projects/hospital-1.jpg'],
    featured: true,
  },
  {
    slug: 'motor-validacion-ia',
    titleKey: 'projects.motor-validacion-ia.title',
    category: 'fullstack',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Gemini AI', 'Python'],
    metrics: [
      { label: 'Precisión de análisis', labelEn: 'Analysis accuracy', value: '90%' },
      { label: 'Competencia', labelEn: 'Competition', value: '1er Lugar' },
      { label: 'Reportes/día', labelEn: 'Reports/day', value: '50+' },
    ],
    images: ['/images/projects/ia-1.jpg'],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export const categories: { key: ProjectCategory | 'all'; labelKey: string }[] = [
  { key: 'all', labelKey: 'portfolio.filters.all' },
  { key: 'fullstack', labelKey: 'portfolio.filters.fullstack' },
  { key: 'uiux', labelKey: 'portfolio.filters.uiux' },
  { key: 'apis', labelKey: 'portfolio.filters.apis' },
  { key: 'open-source', labelKey: 'portfolio.filters.open-source' },
]
