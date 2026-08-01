import type { Project, ProjectCategory } from '@/types'

export const projects: Project[] = [
  {
    slug: 'gestion-cuentas-hospitalarias',
    titleKey: 'projects.gestion-cuentas-hospitalarias.title',
    category: 'fullstack',
    technologies: ['PHP 8.2', 'MySQL', 'Playwright', 'Bootstrap', 'Docker'],
    metrics: [
      { label: 'Sistemas integrados', labelEn: 'Integrated systems', value: '8' },
      { label: 'Bases de datos', labelEn: 'Databases', value: '4+' },
      { label: 'Flujo centralizado', labelEn: 'Centralized workflow', value: '100%' },
    ],
    images: ['/images/projects/hospital-4.jpg', '/images/projects/hospital-1.png', '/images/projects/hospital-2.png', '/images/projects/hospital-3.gif'],
    featured: true,
  },
  {
    slug: 'motor-validacion-ia',
    titleKey: 'projects.motor-validacion-ia.title',
    category: 'fullstack',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Gemini AI', 'Python'],
    metrics: [
      { label: 'Precisión de análisis', labelEn: 'Analysis accuracy', value: '90%' },
      { label: 'Open Innovation AVA x UCSC 2026', labelEn: 'Open Innovation AVA x UCSC 2026', value: '1er Lugar' },
      { label: 'Reportes/día', labelEn: 'Reports/day', value: '50+' },
    ],
    images: ['/images/projects/logo-motor.png', '/images/projects/ia-1.png', '/images/projects/ia-2.png', '/images/projects/ia-3.png', '/images/projects/ia-4.png', '/images/projects/ia-5.png', '/images/projects/foto-premiacion.png'],
    logo: '/images/projects/logo-motor.png',
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
