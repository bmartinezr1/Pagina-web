type Props = {
  text: string
}

export function SectionBadge({ text }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
      {text}
    </span>
  )
}
