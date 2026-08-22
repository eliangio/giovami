export type ProjectSubEvent = {
  period: string
  title: string
  description: string
  image?: string
  stat?: string
}

export type Project = {
  slug: string
  title: string
  intro: string
  events: ProjectSubEvent[]
}

// Grounded in the association's own records where available (invoices, receipts,
// assemblee); numbers marked "dato in aggiornamento" are real activities without
// a confirmed headline figure yet — placeholders, not estimates.
export const projects: Project[] = [
  {
    slug: 'biblioteca',
    title: 'Biblioteca Comunale "Angela Lembo"',
    intro:
      'La nostra attività principale: gli associati hanno rilanciato, catalogato e animato la biblioteca comunale di Minori per due mandati consecutivi di gestione.',
    events: [
      {
        period: 'Rilancio degli spazi',
        title: 'Il rilancio della biblioteca',
        description:
          'Riqualificazione e riapertura degli spazi della biblioteca comunale, resi punto di riferimento per lo studio e l’aggregazione a Minori.',
        image: 'biblioteca-angela-lembo',
        stat: 'Metri quadri riqualificati: dato in aggiornamento',
      },
      {
        period: 'Due mandati',
        title: 'Gestione della biblioteca',
        description:
          'Due mandati consecutivi di gestione della biblioteca da parte dell’associazione; il più recente documentato da settembre 2021 a marzo 2023.',
        stat: 'Date esatte del primo mandato: dato in aggiornamento',
      },
      {
        period: '2023',
        title: 'Catalogazione da zero',
        description:
          'L’intera collezione è stata catalogata da zero con un software dedicato, con un lavoro sostenuto per tutto il 2023.',
        stat: 'Libri catalogati: dato in aggiornamento',
      },
      {
        period: 'Dal 2019',
        title: 'Bookcrossing',
        description: 'Scambio libero di libri tra soci e visitatori della biblioteca.',
        image: 'bookcrossing-1',
        stat: 'Libri messi in circolo: dato in aggiornamento',
      },
      {
        period: 'Ricorrente',
        title: '"Un bagno di libri"',
        description: 'Letture e attività all’aperto legate alla biblioteca, aperte a tutte le età.',
        image: 'un-bagno-di-libri-1',
      },
      {
        period: '2022 · 2023',
        title: 'Biblioteca in Spiaggia',
        description:
          'Edizione estiva della biblioteca, portata direttamente sulla spiaggia di Minori. Edizioni confermate nel 2022 e nel 2023; altre edizioni in aggiornamento.',
        image: 'biblioteca-in-spiaggia',
      },
      {
        period: '2023',
        title: 'Corso di inglese',
        description: 'Corso di lingua inglese organizzato per i soci e la comunità.',
        stat: 'Partecipanti: dato in aggiornamento',
      },
      {
        period: 'Ricorrente',
        title: 'Corso di LaTeX',
        description: 'Corso introduttivo a LaTeX per lo studio e la scrittura tecnica.',
        stat: 'Partecipanti: dato in aggiornamento',
      },
      {
        period: 'Estivo',
        title: 'Gruppo di studio estivo',
        description: 'Spazio di studio condiviso in biblioteca durante i mesi estivi.',
      },
      {
        period: 'Ricorrente',
        title: 'Letturiamo',
        description: 'Appuntamento periodico di lettura condivisa in biblioteca.',
      },
      {
        period: 'Ricorrente',
        title: 'SWAP shop',
        description: 'Scambio gratuito di oggetti e vestiti tra soci e comunità.',
      },
      {
        period: 'PCTO',
        title: '"PCTO – Laboratorio di Cultura Digitale"',
        description:
          'Percorso per le competenze trasversali e l’orientamento rivolto agli studenti, incentrato su cultura digitale.',
        stat: 'Studenti coinvolti: dato in aggiornamento',
      },
    ],
  },
  {
    slug: 'coppa-reghinna-minor',
    title: 'Coppa Reghinna Minor',
    intro:
      'Torneo di calcetto amatoriale tra i più sentiti dell’associazione, con cassa e iscrizioni gestite autonomamente dai soci.',
    events: [
      {
        period: '2019',
        title: 'Prima edizione',
        description: 'Prima edizione documentata del torneo, con gestione autonoma di iscrizioni e cassa.',
        image: 'coppa-reghinna-minor',
        stat: 'Squadre partecipanti: dato in aggiornamento',
      },
      {
        period: '2022',
        title: 'Edizione 2022',
        description: 'Nuova edizione del torneo, con affitto del campo da gioco.',
      },
      {
        period: 'Altre edizioni',
        title: 'Edizioni successive',
        description: 'Il torneo è proseguito negli anni; l’elenco completo delle edizioni è in aggiornamento.',
      },
    ],
  },
  {
    slug: 'cinema-sotto-le-stelle',
    title: 'Cinema sotto le stelle',
    intro: 'Rassegna cinematografica all’aperto organizzata dall’associazione nei mesi estivi.',
    events: [
      {
        period: 'Estate 2023',
        title: 'Edizione 2023',
        description:
          'Oltre 10 titoli in cartellone, tra cui Barbie, Super Mario Bros, Fast X, Mission Impossible, Avatar: La Via dell’Acqua e Tramite Amicizia.',
        stat: 'Titoli in cartellone: 10+',
      },
      {
        period: 'Altre edizioni',
        title: 'Edizioni successive',
        description: 'La rassegna è proseguita negli anni; l’elenco completo delle edizioni è in aggiornamento.',
      },
    ],
  },
  {
    slug: 'spesa-solidale',
    title: 'Spesa Solidale',
    intro: 'Raccolta e distribuzione di beni di prima necessità in favore della comunità locale.',
    events: [
      {
        period: 'Ricorrente',
        title: 'Spesa Solidale',
        description: 'Iniziativa di solidarietà rivolta alla comunità di Minori.',
        image: 'spesa-solidale',
        stat: 'Beni raccolti e distribuiti: dato in aggiornamento',
      },
    ],
  },
]
