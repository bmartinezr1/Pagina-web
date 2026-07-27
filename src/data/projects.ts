import type { Project, ProjectCategory } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Prisma', 'Tailwind'],
    metrics: [
      { label: 'Tiempo de carga', labelEn: 'Load time', value: '< 1.2s' },
      { label: 'Conversión', labelEn: 'Conversion rate', value: '+35%' },
      { label: 'Usuarios activos', labelEn: 'Active users', value: '10K+' },
    ],
    liveUrl: 'https://demo-ecommerce.vercel.app',
    repoUrl: 'https://github.com/user/ecommerce',
    images: ['/images/projects/ecommerce-1.jpg'],
    featured: true,
  },
  {
    slug: 'saas-dashboard',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'Redis'],
    metrics: [
      { label: 'Datos procesados', labelEn: 'Data processed', value: '50GB/día' },
      { label: 'Disponibilidad', labelEn: 'Uptime', value: '99.9%' },
      { label: 'Usuarios', labelEn: 'Users', value: '5K+' },
    ],
    liveUrl: 'https://demo-saas.vercel.app',
    repoUrl: 'https://github.com/user/saas-dashboard',
    images: ['/images/projects/saas-1.jpg'],
    featured: true,
  },
  {
    slug: 'landing-page-redesign',
    category: 'uiux',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'GSAP'],
    metrics: [
      { label: 'Velocidad', labelEn: 'Speed', value: '+80%' },
      { label: 'Rebote', labelEn: 'Bounce rate', value: '-45%' },
      { label: 'Conversión', labelEn: 'Conversion', value: '+60%' },
    ],
    liveUrl: 'https://demo-landing.vercel.app',
    repoUrl: 'https://github.com/user/landing-redesign',
    images: ['/images/projects/landing-1.jpg'],
    featured: false,
  },
  {
    slug: 'payment-api',
    category: 'apis',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Latencia', labelEn: 'Latency', value: '< 50ms' },
      { label: 'Solicitudes/día', labelEn: 'Requests/day', value: '100K+' },
      { label: 'Uptime', labelEn: 'Uptime', value: '99.99%' },
    ],
    repoUrl: 'https://github.com/user/payment-api',
    images: ['/images/projects/api-1.jpg'],
    featured: false,
  },
  {
    slug: 'open-source-component-library',
    category: 'open-source',
    technologies: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Testing Library'],
    metrics: [
      { label: 'Estrellas', labelEn: 'Stars', value: '2.5K' },
      { label: 'Descargas/mes', labelEn: 'Downloads/month', value: '50K+' },
      { label: 'Contribuidores', labelEn: 'Contributors', value: '25+' },
    ],
    liveUrl: 'https://www.npmjs.com/package/component-lib',
    repoUrl: 'https://github.com/user/component-lib',
    images: ['/images/projects/oss-1.jpg'],
    featured: true,
  },
  {
    slug: 'real-time-chat-app',
    category: 'fullstack',
    technologies: ['Next.js', 'Socket.io', 'Redis', 'TypeScript', 'Tailwind', 'Prisma'],
    metrics: [
      { label: 'Mensajes/día', labelEn: 'Messages/day', value: '1M+' },
      { label: 'Conexiones simultáneas', labelEn: 'Concurrent connections', value: '10K+' },
      { label: 'Latencia', labelEn: 'Latency', value: '< 20ms' },
    ],
    liveUrl: 'https://demo-chat.vercel.app',
    repoUrl: 'https://github.com/user/chat-app',
    images: ['/images/projects/chat-1.jpg'],
    featured: false,
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
