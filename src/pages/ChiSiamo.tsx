import { boardMembers } from '../data/board'
import { milestones } from '../data/milestones'
import { values } from '../data/values'
import { BoardMemberCard } from '../components/BoardMemberCard'
import { TimelineItem } from '../components/TimelineItem'

const organi = [
  {
    title: 'Assemblea dei Soci',
    description:
      'Composta da tutti i soci, elegge gli organi associativi e delibera su statuto, bilancio e indirizzi generali.',
  },
  {
    title: 'Consiglio Direttivo',
    description:
      'Organo di amministrazione, formato da un numero dispari di componenti eletti dall’Assemblea. Elegge al proprio interno Presidente, Vice-Presidente e Segretario/Tesoriere.',
  },
  {
    title: 'Presidente',
    description:
      'Ha la rappresentanza legale dell’associazione, cura le relazioni istituzionali e opera sui conti dell’ente.',
  },
]

const categorieSoci = [
  { tipo: 'Soci Ordinari', desc: 'Condividono le finalità dell’ente e partecipano alle attività istituzionali.' },
  { tipo: 'Soci Sostenitori', desc: 'Contribuiscono con una quota maggiorata o erogazioni liberali.' },
  { tipo: 'Soci Volontari', desc: 'Prestano attività in favore della comunità in modo personale, spontaneo e gratuito.' },
  { tipo: 'Soci Onorari', desc: 'Riconosciuti dall’Assemblea per il contributo dato al raggiungimento degli scopi sociali.' },
]

export function ChiSiamo() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Chi siamo</p>
      <h1 className="text-3xl font-semibold text-blu-notte mb-8">La nostra storia</h1>

      <div className="prose-content max-w-2xl text-oliva-scuro leading-relaxed space-y-4 mb-16">
        <p>
          Un gruppo di ragazzi fuori dagli schemi di Minori fonda, nel maggio 2018,{' '}
          <strong className="text-blu-notte">Associazione Atypical</strong>: la voglia di
          esprimere il proprio potenziale sul territorio locale e sviluppare un senso di
          appartenenza attraverso cultura e divertimento, rivolgendosi in particolare alla fascia
          giovanile della Costiera Amalfitana.
        </p>
        <p>
          Nel 2026, in applicazione del Codice del Terzo Settore (D.Lgs. 117/2017),
          l’associazione prosegue senza soluzione di continuità — mantenendo lo stesso Codice
          Fiscale 95174950659 — sotto la nuova denominazione{' '}
          <strong className="text-blu-notte">giovami</strong>. Cambia il nome, non la
          missione: restare un punto di riferimento per i giovani di Minori e della Costiera
          Amalfitana.
        </p>
      </div>

      <p className="eyebrow mb-3">Dal 2018 a oggi</p>
      <h2 className="text-2xl font-semibold text-blu-notte mb-10">Le tappe principali</h2>
      <div className="relative mb-20 before:absolute before:left-0 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-grigio-caldo/30 before:-translate-x-1/2 sm:before:translate-x-0">
        {milestones.map((m, i) => (
          <TimelineItem key={m.title} milestone={m} index={i} />
        ))}
      </div>

      <p className="eyebrow mb-3">I nostri valori</p>
      <div className="grid gap-6 sm:grid-cols-3 mb-16">
        {values.map((v) => (
          <div key={v.title} className="bg-calce p-6 rounded-sm">
            <h3 className="font-semibold text-blu-notte mb-2">{v.title}</h3>
            <p className="text-sm text-oliva-scuro leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>

      <p className="eyebrow mb-3">Governance</p>
      <h2 className="text-2xl font-semibold text-blu-notte mb-8">Come siamo organizzati</h2>
      <div className="grid gap-6 sm:grid-cols-3 mb-10">
        {organi.map((o) => (
          <div key={o.title} className="border border-grigio-caldo/20 rounded-sm p-6">
            <h3 className="font-semibold text-blu-notte mb-2">{o.title}</h3>
            <p className="text-sm text-oliva-scuro leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-grigio-caldo mb-16">
        Dettagli completi su categorie di soci, quorum e funzionamento nello{' '}
        <a href="/documents/statuto-giovami-aps.pdf" className="text-arancio underline">
          Statuto
        </a>
        .
      </p>

      <p className="eyebrow mb-3">Consiglio Direttivo 2026</p>
      <h2 className="text-2xl font-semibold text-blu-notte mb-8">Il team operativo</h2>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4 mb-16">
        {boardMembers.map((m) => (
          <BoardMemberCard key={m.name} member={m} />
        ))}
      </div>

      <p className="eyebrow mb-3">Categorie di soci</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {categorieSoci.map((c) => (
          <div key={c.tipo} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-arancio" />
            <div>
              <p className="font-semibold text-blu-notte text-sm">{c.tipo}</p>
              <p className="text-sm text-oliva-scuro">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
