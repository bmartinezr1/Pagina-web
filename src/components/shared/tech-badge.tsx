'use client'

import { motion } from 'framer-motion'

type Props = {
  name: string
  index?: number
  variant?: 'hero' | 'grid'
}

const heroVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
}

export function TechBadge({ name, index = 0, variant = 'hero' }: Props) {
  if (variant === 'hero') {
    return (
      <motion.span
        custom={index}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary/90 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
      >
        {name}
      </motion.span>
    )
  }

  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
      {name}
    </span>
  )
}
