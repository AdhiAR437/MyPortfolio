import { ChevronLeft, ChevronRight } from 'lucide-react'
import { type ReactNode, useRef } from 'react'

export function ContentRail({
  title,
  description,
  children,
  labelledBy,
}: {
  title: string
  description?: string
  children: ReactNode
  labelledBy: string
}) {
  const rail = useRef<HTMLDivElement>(null)
  const scroll = (direction: -1 | 1) =>
    rail.current?.scrollBy({
      left: direction * Math.min(rail.current.clientWidth * 0.82, 760),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })

  return (
    <section className="content-rail-block" aria-labelledby={labelledBy}>
      <header className="rail-header">
        <div>
          <p className="rail-kicker">Browse chapter</p>
          <h2 id={labelledBy}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="rail-controls" aria-label={`${title} controls`}>
          <button onClick={() => scroll(-1)} aria-label={`Scroll ${title} left`}>
            <ChevronLeft />
          </button>
          <button onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}>
            <ChevronRight />
          </button>
        </div>
      </header>
      <div className="content-rail" ref={rail} tabIndex={0} aria-label={title}>
        {children}
      </div>
    </section>
  )
}
