import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { getProjectBySlug, projects } from '@/data/projects'
import { Button, buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { ArrowLeft, ExternalLink } from 'lucide-react'

function Github({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of ['es', 'en']) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const t = await getTranslations({ locale, namespace: 'portfolio' })
  const title = `${project.slug} | ${t('title')}`

  return {
    title,
    description: project.technologies.join(', '),
    alternates: {
      languages: {
        es: `/es/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const t = await getTranslations('portfolio')

  const isMetricLocale = locale === 'es'
  const metrics = project.metrics.map((m) => ({
    label: isMetricLocale ? m.label : m.labelEn,
    value: m.value,
  }))

  return (
    <div className="pt-24">
      <div className="container py-12">
        <Link
          href="/#portfolio"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t('backToProjects')}
        </Link>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
              <span className="text-8xl text-muted-foreground/10">
                {slug.charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:pt-12">
            <h1 className="mb-6 text-3xl font-bold tracking-tight capitalize">
              {slug.replace(/-/g, ' ')}
            </h1>

            <div className="mb-8 space-y-6">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t('problem')}
                </h2>
                <p className="text-muted-foreground">
                  {locale === 'es'
                    ? 'El cliente necesitaba una solución moderna que resolviera problemas de escalabilidad y rendimiento en su infraestructura existente.'
                    : 'The client needed a modern solution to address scalability and performance issues in their existing infrastructure.'}
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t('solution')}
                </h2>
                <p className="text-muted-foreground">
                  {locale === 'es'
                    ? 'Implementé una arquitectura basada en microservicios con Next.js en el frontend y una API robusta en el backend, optimizando cada capa para máximo rendimiento.'
                    : 'I implemented a microservices architecture with Next.js on the frontend and a robust API on the backend, optimizing each layer for maximum performance.'}
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t('results')}
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-border/50 bg-card/50 p-3 text-center"
                    >
                      <div className="text-xl font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants())}
                >
                  <ExternalLink className="mr-2 size-4" />
                  {t('liveDemo')}
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline' }))}
                >
                  <Github className="mr-2 size-4" />
                  {t('sourceCode')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
