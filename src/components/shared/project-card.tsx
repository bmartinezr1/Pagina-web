'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { Project } from '@/types'

type Props = {
  project: Project
  locale: string
}

export function ProjectCard({ project, locale }: Props) {
  const t = useTranslations('portfolio')
  const pt = useTranslations('projects')
  const categoryLabel = t(`filters.${project.category}`)

  return (
    <motion.div
      layout
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:flex"
    >
      <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 sm:w-80 shrink-0 aspect-video sm:aspect-auto">
        <span className="text-6xl text-muted-foreground/20 font-bold">{project.slug.charAt(0).toUpperCase()}</span>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="mb-3">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {categoryLabel}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-semibold leading-tight">
          {pt(`${project.slug}.title`)}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {pt(`${project.slug}.description`)}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {t('viewProject')}
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </motion.div>
  )
}
