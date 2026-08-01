import type { ComponentType } from 'react'
import { Palette, Server, Container, GitBranch, Cloud, Code2, type LucideIcon } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiPython, SiPostgresql, SiPrisma, SiDocker, SiVercel, SiGit, SiFigma, SiNotion } from 'react-icons/si'

export type TechItem = {
  name: string
  level: number
  icon?: ComponentType<{ className?: string }>
}

export type TechCategory = {
  nameKey: string
  icon: LucideIcon
  items: TechItem[]
}

export const techCategories: TechCategory[] = [
  {
    nameKey: 'about.techFrontend',
    icon: Palette,
    items: [
      { name: 'React', level: 95, icon: SiReact },
      { name: 'Next.js', level: 92, icon: SiNextdotjs },
      { name: 'TypeScript', level: 90, icon: SiTypescript },
      { name: 'Tailwind', level: 90, icon: SiTailwindcss },
      { name: 'Framer', level: 85, icon: SiFramer },
    ],
  },
  {
    nameKey: 'about.techBackend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 90, icon: SiNodedotjs },
      { name: 'Python', level: 75, icon: SiPython },
      { name: 'PostgreSQL', level: 85, icon: SiPostgresql },
      { name: 'Prisma', level: 85, icon: SiPrisma },
    ],
  },
  {
    nameKey: 'about.techDevops',
    icon: Container,
    items: [
      { name: 'Docker', level: 80, icon: SiDocker },
      { name: 'Vercel', level: 90, icon: SiVercel },
      { name: 'AWS', level: 70, icon: Cloud },
    ],
  },
  {
    nameKey: 'about.techTools',
    icon: GitBranch,
    items: [
      { name: 'Git', level: 90, icon: SiGit },
      { name: 'Figma', level: 75, icon: SiFigma },
      { name: 'VS Code', level: 95, icon: Code2 },
      { name: 'Notion', level: 80, icon: SiNotion },
    ],
  },
]
