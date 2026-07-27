'use client'

type Props = {
  src: string
  fallback: string
}

export function ProjectImage({ src, fallback }: Props) {
  return (
    <>
      <img
        src={src}
        alt=""
        className="size-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          target.parentElement?.querySelector('.img-fallback')?.classList.remove('hidden')
        }}
        loading="lazy"
      />
      <span className="img-fallback absolute text-6xl font-bold text-muted-foreground/10 hidden">
        {fallback}
      </span>
    </>
  )
}
