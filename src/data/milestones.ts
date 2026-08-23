export type Milestone = {
  year: string
  title: string
  description: string
  image?: string
}

export const milestones: Milestone[] = [
  {
    year: '2018',
    title: 'Nasce Atypical',
    description:
      'Un gruppo di ragazzi di Minori fonda l’Associazione Atypical: cultura, divertimento e senso di appartenenza al territorio per la fascia giovanile della Costiera Amalfitana.',
  },
  {
    year: '2019',
    title: 'Coppa Reghinna Minor',
    description:
      'Atypical assume l’organizzazione del torneo di calcetto amatoriale — già alla sua quinta edizione, una tradizione locale precedente alla nascita dell’associazione.',
    image: 'coppa-reghinna-minor',
  },
  {
    year: '2019–2023',
    title: 'Biblioteca Comunale “Angela Lembo”',
    description:
      'I soci rilanciano e catalogano da zero la biblioteca comunale — oltre 3.250 libri, adesione al Polo SBN Napoli — trasformandola in un punto di ritrovo per lo studio e l’aggregazione.',
    image: 'biblioteca-angela-lembo',
  },
  {
    year: '2020 · 2021 · 2022',
    title: 'Rinnovo delle cariche sociali',
    description:
      'Tre rinnovi del Consiglio Direttivo scandiscono la crescita dell’associazione, mantenendo continuità di missione e codice fiscale.',
  },
  {
    year: '2026',
    title: 'Da Atypical a giovami',
    description:
      'L’associazione adotta un nuovo Statuto ai sensi del Codice del Terzo Settore, diventando “giovami” (con l’acronimo APS) — stesso C.F. 95174950659, nuova identità visiva, missione aggiornata sugli Obiettivi Agenda 2030.',
  },
]
