import { useEffect, useRef, useState } from 'react'
import type { Milestone } from '../data/milestones'

const images: Record<string, string> = {}
const modules = import.meta.glob('../assets/images/*.{jpg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})
for (const path in modules) {
  const key = path.split('/').pop()!.replace(/\.(jpg|png)$/, '')
  images[key] = modules[path] as string
}

export function TimelineItem({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const image = milestone.image ? images[milestone.image] : undefined
  const alignRight = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`relative pl-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-center mb-16 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <span className="absolute left-0 sm:left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-arancio ring-4 ring-avorio" />
      <div className={alignRight ? 'sm:order-2' : ''}>
        <p className="eyebrow mb-2">{milestone.year}</p>
        <h3 className="text-xl font-semibold text-blu-notte mb-2">{milestone.title}</h3>
        <p className="text-sm text-oliva-scuro leading-relaxed">{milestone.description}</p>
      </div>
      {image && (
        <div className={alignRight ? 'sm:order-1' : ''}>
          <img src={image} alt={milestone.title} className="rounded-sm aspect-video object-cover w-full" />
        </div>
      )}
    </div>
  )
}
