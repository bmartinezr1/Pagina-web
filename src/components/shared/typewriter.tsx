'use client'

import { useState, useEffect, useRef } from 'react'

type Props = {
  text: string
  speed?: number
  onComplete?: () => void
}

export function Typewriter({ text, speed = 40, onComplete }: Props) {
  const [displayed, setDisplayed] = useState('')
  const onCompleteRef = useRef(onComplete)
  const doneRef = useRef(false)

  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  useEffect(() => {
    doneRef.current = false
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        if (!doneRef.current) {
          doneRef.current = true
          onCompleteRef.current?.()
        }
      }
    }, speed)
    return () => {
      clearInterval(interval)
    }
  }, [text, speed])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse ml-0.5 align-middle" />
      )}
    </span>
  )
}
