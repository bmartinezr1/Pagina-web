'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectImage } from '@/components/shared/project-image'

type Props = {
  images: string[]
  fallback: string
  logo?: string
}

export function ProjectGallery({ images, fallback, logo }: Props) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0])
  const isLogo = logo != null && images[index] === logo

  const goTo = useCallback(
    (i: number) => {
      setState(([current]) => {
        const next = (i + images.length) % images.length
        return [next, next > current ? 1 : -1]
      })
    },
    [images.length]
  )

  if (images.length === 0) {
    return (
      <div className="relative flex aspect-[2/1] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
        <span className="text-8xl text-muted-foreground/10">{fallback}</span>
      </div>
    )
  }

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 ${
        isLogo ? 'aspect-[1032/873]' : 'aspect-[2/1]'
      }`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goTo(index - 1)
        if (e.key === 'ArrowRight') goTo(index + 1)
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {isLogo ? (
            <img src={images[index]} alt="" className="size-full object-contain" />
          ) : (
            <ProjectImage src={images[index]} fallback={fallback} fit="cover" />
          )}
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-foreground/80 opacity-0 backdrop-blur transition-all hover:bg-black/70 hover:text-foreground focus:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-foreground/80 opacity-0 backdrop-blur transition-all hover:bg-black/70 hover:text-foreground focus:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Imagen ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>

          <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}
