import { Palette, Server, Container, GitBranch, type LucideIcon } from 'lucide-react'

export type TechItem = {
  name: string
  level: number
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
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind', level: 90 },
      { name: 'Framer', level: 85 },
    ],
  },
  {
    nameKey: 'about.techBackend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Prisma', level: 85 },
    ],
  },
  {
    nameKey: 'about.techDevops',
    icon: Container,
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Vercel', level: 90 },
      { name: 'AWS', level: 70 },
    ],
  },
  {
    nameKey: 'about.techTools',
    icon: GitBranch,
    items: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Notion', level: 80 },
    ],
  },
]
