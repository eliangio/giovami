import { projects } from '../data/projects'
import { ProjectSubEvent } from '../components/ProjectSubEvent'

export function Progetti() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow mb-3">Progetti</p>
      <h1 className="text-3xl font-semibold text-blu-notte mb-4">Quello che abbiamo fatto</h1>
      <p className="text-oliva-scuro max-w-xl mb-16">
        Un resoconto delle nostre attività, dalla biblioteca comunale ai tornei ed eventi
        organizzati dai soci nel corso degli anni.
      </p>

      {projects.map((project) => (
        <section key={project.slug} className="mb-20">
          <h2 className="text-2xl font-semibold text-blu-notte mb-3">{project.title}</h2>
          <p className="text-oliva-scuro max-w-2xl mb-6">{project.intro}</p>
          <div>
            {project.events.map((event) => (
              <ProjectSubEvent key={event.title} event={event} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
