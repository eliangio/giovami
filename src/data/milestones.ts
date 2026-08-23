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
    year: '2018–2019',
    title: 'Prima Coppa Reghinna Minor',
    description:
      'Il torneo di calcetto amatoriale diventa uno degli appuntamenti fissi dell’associazione, con la gestione autonoma di iscrizioni e cassa.',
    image: 'coppa-reghinna-minor',
  },
  {
    year: '2019–2022',
    title: 'Biblioteca Comunale “Angela Lembo”',
    description:
      'I soci autogestiscono la biblioteca: bookcrossing, letture in spiaggia, corsi e uno dei punti wi-fi più stabili del paese diventano un punto di ritrovo invernale.',
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
