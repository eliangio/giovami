import type { ProjectSubEvent as ProjectSubEventType } from '../data/projects'
import { images } from '../lib/images'

export function ProjectSubEvent({ event }: { event: ProjectSubEventType }) {
  const image = event.image ? images[event.image] : undefined

  return (
    <div className="flex gap-5 py-5 border-b border-grigio-caldo/15 last:border-none">
      {image ? (
        <img
          src={image}
          alt={event.title}
          className="hidden sm:block h-20 w-28 shrink-0 rounded-sm object-cover"
        />
      ) : (
        <span className="hidden sm:flex h-20 w-28 shrink-0 items-center justify-center rounded-sm bg-calce">
          <span className="h-2 w-2 rounded-full bg-arancio" />
        </span>
      )}
      <div>
        <p className="eyebrow mb-1">{event.period}</p>
        <h3 className="font-semibold text-blu-notte">{event.title}</h3>
        <p className="text-sm text-oliva-scuro leading-relaxed mt-1">{event.description}</p>
        {event.stat && (
          <p className="text-xs text-grigio-caldo italic mt-2">{event.stat}</p>
        )}
      </div>
    </div>
  )
}
