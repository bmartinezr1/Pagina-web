'use client'

import { motion, type MotionProps } from 'framer-motion'

type Props = MotionProps & {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className, ...props }: Props) {
  return (
    <motion.div
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
