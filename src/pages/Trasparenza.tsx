import { FinancialTable } from '../components/FinancialTable'

const categorieSoci = [
  { tipo: 'Soci Ordinari', desc: 'Presentano domanda di adesione e partecipano alle attività istituzionali.' },
  { tipo: 'Soci Sostenitori', desc: 'Sostengono l’associazione con una quota associativa maggiorata o erogazioni liberali.' },
  { tipo: 'Soci Volontari', desc: 'Iscritti nell’apposito registro, prestano attività in modo personale, spontaneo e gratuito.' },
  { tipo: 'Soci Onorari', desc: 'Riconosciuti dall’Assemblea per il contributo dato al raggiungimento degli scopi sociali; esentati dalla quota.' },
]

export function Trasparenza() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow mb-3">Trasparenza</p>
      <h1 className="text-3xl font-semibold text-blu-notte mb-8">Documenti e rendiconti</h1>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-blu-notte mb-3">Statuto</h2>
        <p className="text-oliva-scuro mb-4 max-w-2xl">
          Lo Statuto dell’Associazione di Promozione Sociale «giovami», adottato ai sensi del
          Codice del Terzo Settore (D.Lgs. 117/2017), in continuità con la preesistente
          associazione «Atypical» (stesso Codice Fiscale 95174950659).
        </p>
        <a
          href="/giovami/documents/statuto-giovami-aps.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blu-notte text-avorio px-5 py-3 rounded-sm font-narrow text-sm uppercase tracking-wide hover:bg-arancio transition-colors"
        >
          Scarica lo Statuto (PDF)
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-blu-notte mb-3">Rendiconti economico-finanziari</h2>
        <p className="text-oliva-scuro mb-6 max-w-2xl">
          Sintesi interna dei rendiconti di cassa dell’associazione, dal 2018 a oggi. Non
          sostituiscono i bilanci depositati agli organi competenti; sono pubblicati per
          trasparenza verso soci e comunità.
        </p>
        <FinancialTable />
        <p className="text-xs text-grigio-caldo mt-4">
          2024–2025: attività economica minima, coerente con la fase di transizione statutaria
          verso giovami APS.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-blu-notte mb-3">Libri sociali</h2>
        <p className="text-oliva-scuro max-w-2xl">
          Come previsto dallo Statuto (art. 13), l’associazione tiene aggiornati il Libro dei
          Soci, il Registro dei Volontari e i Libri delle adunanze e delle deliberazioni
          dell’Assemblea e del Consiglio Direttivo. I soci possono richiederne consultazione al
          Consiglio Direttivo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blu-notte mb-3">Categorie di soci</h2>
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
      </section>
    </div>
  )
}
