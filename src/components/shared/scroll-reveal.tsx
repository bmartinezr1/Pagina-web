'use client'

import { motion, type MotionProps } from 'framer-motion'
import { useRef } from 'react'

type Props = MotionProps & {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
