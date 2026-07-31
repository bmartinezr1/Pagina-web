'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'

const lines: { prompt?: string; text: string; output?: boolean }[] = [
  { prompt: '$', text: 'whoami' },
  { prompt: '>', text: `${personalInfo.shortName} — ${personalInfo.roleEs}`, output: true },
  { prompt: '$', text: 'mission' },
  { prompt: '>', text: 'Construyo soluciones que tu negocio necesita', output: true },
  { prompt: '$', text: 'stack' },
  { prompt: '>', text: 'React · Next.js · Laravel · Node.js · TypeScript · PostgreSQL', output: true },
  { prompt: '$', text: 'contact' },
  { prompt: '>', text: `${personalInfo.email} · ${personalInfo.phone}`, output: true },
]

export function Hero() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showActions, setShowActions] = useState(false)

  useEffect(() => {
    if (visibleCount >= lines.length) {
      const t = setTimeout(() => setShowActions(true), 300)
      return () => clearTimeout(t)
    }

    const line = lines[visibleCount]

    if (charIndex < line.text.length) {
      const delay = 20 + Math.random() * 40
      const t = setTimeout(() => setCharIndex((i) => i + 1), delay)
      return () => clearTimeout(t)
    } else {
      const delay = 150 + Math.random() * 200
      const t = setTimeout(() => {
        setVisibleCount((v) => v + 1)
        setCharIndex(0)
      }, delay)
      return () => clearTimeout(t)
    }
  }, [visibleCount, charIndex])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-primary/20 blur-[120px] animate-orb" />
      <div className="absolute bottom-1/3 right-1/4 size-80 rounded-full bg-accent/20 blur-[120px] animate-orb-slow" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card/30 backdrop-blur-sm card-glow">
            <div className="flex items-center gap-1.5 border-b border-primary/10 px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground/60 font-mono">
                {personalInfo.shortName.toLowerCase()}@dev:~/{personalInfo.domain.split('.')[0]}
              </span>
            </div>

            <div className="space-y-2 p-8 sm:p-12 font-mono text-base sm:text-lg leading-relaxed min-h-[280px]">
              {lines.slice(0, visibleCount).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex gap-2"
                >
                  {line.prompt && (
                    <span className="shrink-0 text-primary/80 font-semibold">{line.prompt}</span>
                  )}
                  <span className={cn(line.output && 'text-muted-foreground')}>{line.text}</span>
                </motion.div>
              ))}

              {visibleCount < lines.length && (
                <motion.div
                  key={visibleCount}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex gap-2"
                >
                  {lines[visibleCount].prompt && (
                    <span className="shrink-0 text-primary/80 font-semibold">
                      {lines[visibleCount].prompt}
                    </span>
                  )}
                  <span className={cn(lines[visibleCount].output && 'text-muted-foreground')}>
                    {lines[visibleCount].text.slice(0, charIndex)}
                    <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse align-middle ml-0.5" />
                  </span>
                </motion.div>
              )}

              {visibleCount >= lines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 pt-2"
                >
                  <span className="text-primary/80 font-semibold">$</span>
                  <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse align-middle" />
                </motion.div>
              )}
            </div>
          </div>

          {showActions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: 'lg' }), 'relative overflow-hidden group text-base sm:text-lg px-8 py-6')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 size-5" />
                  Agendar Llamada
                </span>
              </Link>
              <Link
                href="/#portfolio"
                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'border-primary/30 hover:border-primary/60 hover:bg-primary/5 text-base sm:text-lg px-8 py-6')}
              >
                Ver Portafolio
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
