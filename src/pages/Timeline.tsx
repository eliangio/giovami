import { milestones } from '../data/milestones'
import { TimelineItem } from '../components/TimelineItem'

export function Timeline() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow mb-3">Dal 2018 a oggi</p>
      <h1 className="text-3xl font-semibold text-blu-notte mb-4">La nostra storia</h1>
      <p className="text-oliva-scuro max-w-xl mb-16">
        Da Associazione Atypical a giovami APS: le tappe principali, senza soluzione di
        continuità.
      </p>

      <div className="relative before:absolute before:left-0 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-grigio-caldo/30 before:-translate-x-1/2 sm:before:translate-x-0">
        {milestones.map((m, i) => (
          <TimelineItem key={m.title} milestone={m} index={i} />
        ))}
      </div>
    </div>
  )
}
