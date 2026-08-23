import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { values } from '../data/values'
import bibliotecaImg from '../assets/images/biblioteca-angela-lembo.jpg'
import coppaImg from '../assets/images/coppa-reghinna-minor.png'
import bookcrossingImg from '../assets/images/bookcrossing-1.jpg'

const pillars = [
  {
    title: 'Diritti e cittadinanza attiva',
    description:
      'Promozione dei diritti umani, civili e sociali, e integrazione delle voci giovanili nelle politiche pubbliche del territorio.',
  },
  {
    title: 'Cultura e creatività',
    description:
      'Cineforum, rassegne, tornei ed eventi che nascono dal confronto tra le prospettive diverse di ogni socio.',
  },
  {
    title: 'Ambiente e Agenda 2030',
    description:
      'Azioni di consapevolezza ecologica e tutela del patrimonio paesaggistico della Costiera Amalfitana.',
  },
  {
    title: 'Servizi e orientamento',
    description:
      'Mentoring per l’orientamento universitario e lavorativo, corsi di lingua e consulenza ai giovani della zona.',
  },
  {
    title: 'Ricerca e studi',
    description:
      'Indagini e analisi sulle dinamiche demografiche ed economiche specifiche della Costiera Amalfitana.',
  },
  {
    title: 'Spazi di comunità',
    description:
      'Gestione della Biblioteca Comunale “Angela Lembo” come punto di incontro, studio e aggregazione.',
  },
]

export function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <Link to="/chi-siamo" className="inline-block">
          <Logo size={64} animated className="justify-center" />
        </Link>
        <p className="eyebrow mt-6 mb-10">Minori (SA) · Costiera Amalfitana</p>
        <p className="text-lg text-oliva-scuro max-w-2xl mx-auto">
          Associazione giovanile — Ente del Terzo Settore. Nata come Atypical nel 2018, oggi{' '}
          <strong className="text-blu-notte">giovami</strong> continua a costruire spazi di
          aggregazione, cultura e opportunità per i giovani della Costiera Amalfitana.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/chi-siamo"
            className="bg-blu-notte text-avorio px-6 py-3 rounded-sm font-narrow text-sm uppercase tracking-wide hover:bg-arancio transition-colors"
          >
            Chi siamo
          </Link>
          <Link
            to="/contatti"
            className="border border-blu-notte text-blu-notte px-6 py-3 rounded-sm font-narrow text-sm uppercase tracking-wide hover:bg-blu-notte hover:text-avorio transition-colors"
          >
            Unisciti a noi
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="eyebrow mb-3">I nostri valori</p>
        <h2 className="text-2xl font-semibold text-blu-notte mb-10">Cosa ci guida</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-calce p-6 rounded-sm">
              <h3 className="font-semibold text-blu-notte mb-2">{v.title}</h3>
              <p className="text-sm text-oliva-scuro leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-calce py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="eyebrow mb-3">Cosa facciamo</p>
          <h2 className="text-2xl font-semibold text-blu-notte mb-10">Le nostre iniziative</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {pillars.map((p) => (
              <div key={p.title} className="bg-avorio p-6 rounded-sm border border-grigio-caldo/20">
                <h3 className="font-semibold text-blu-notte mb-2">{p.title}</h3>
                <p className="text-sm text-oliva-scuro leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { img: bibliotecaImg, label: 'Biblioteca Angela Lembo', to: '/progetti' },
              { img: coppaImg, label: 'Coppa Reghinna Minor', to: '/progetti' },
              { img: bookcrossingImg, label: 'Bookcrossing', to: '/progetti' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-grigio-caldo/10">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 font-narrow text-sm uppercase tracking-wide text-blu-notte">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/progetti" className="text-arancio font-semibold hover:underline">
              Scopri tutti i progetti →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
