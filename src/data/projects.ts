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

// Grounded in the association's own records (convenzioni, relazioni finali,
// manifesti, rendiconti). Numbers are transcribed, not estimated; anything
// without a confirmed source is left out rather than guessed. Individual
// volunteers'/participants' personal data is never included.
export const projects: Project[] = [
  {
    slug: 'biblioteca',
    title: 'Biblioteca Comunale "Angela Lembo"',
    intro:
      'La nostra attività principale: gli associati hanno rilanciato, catalogato e animato la biblioteca comunale di Minori, chiusa al pubblico dal 2014, per due mandati consecutivi di gestione.',
    events: [
      {
        period: '2019',
        title: 'Il rilancio della biblioteca',
        description:
          'Riapertura dopo anni di chiusura: parete in cartongesso, rifacimento del controsoffitto dopo un allagamento, nuovo cablaggio di rete e un layout open-space per studio e aggregazione.',
        image: 'biblioteca-angela-lembo',
      },
      {
        period: '2019–2020 · 2021–2023',
        title: 'Due mandati di gestione',
        description:
          'Due mandati consecutivi affidati all’associazione per la gestione della biblioteca: il primo nel biennio 2019–2020, il secondo da settembre 2021 a marzo 2023.',
      },
      {
        period: 'Dal 2019',
        title: 'Catalogazione da zero',
        description:
          'Da un fondo di quasi 4.750 volumi, molti danneggiati da anni di incuria, a un catalogo digitale attivo su Libib.',
        stat: 'Catalogo finale: 3.255 libri e 86 DVD',
      },
      {
        period: '2022',
        title: 'Adesione al Polo SBN',
        description:
          'Su delibera dell’Assemblea dei Soci del 6 gennaio 2022, la biblioteca aderisce al Polo SBN di Napoli, entrando nel Servizio Bibliotecario Nazionale.',
      },
      {
        period: 'Cineforum',
        title: 'Rassegna di cineforum',
        description:
          'Otto classici del cinema italiano in rassegna: La dolce vita, C’eravamo tanto amati, Roma città aperta, Ladri di biciclette, Pane amore e fantasia, I soliti ignoti, Mediterraneo, Nuovo Cinema Paradiso.',
      },
      {
        period: 'Dal 2019',
        title: 'Bookcrossing',
        description: 'Scambio libero di libri tra soci e visitatori della biblioteca.',
        image: 'bookcrossing-1',
      },
      {
        period: 'Ricorrente',
        title: '"Un bagno di libri"',
        description: 'Letture e attività all’aperto legate alla biblioteca, aperte a tutte le età.',
        image: 'un-bagno-di-libri-1',
      },
      {
        period: '2018 · 2020 · 2021 · 2022 · 2023',
        title: 'Biblioteca in Spiaggia',
        description:
          'Edizione estiva della biblioteca sul Lungomare California. Nel 2018, prima edizione: 14 associati coinvolti, 15–25 visitatori al giorno. Nelle edizioni successive, tra i 104 e i 55 libri a disposizione del pubblico e fino a 34 prestiti a edizione, con 14–21 persone coinvolte ogni anno.',
        image: 'biblioteca-in-spiaggia',
      },
      {
        period: 'Aula Consiliare',
        title: 'Torneo di Ping Pong',
        description: 'Torneo amatoriale presso l’Aula Consiliare di Minori.',
        stat: 'Montepremi primo classificato: 100€',
      },
      {
        period: '23 dicembre 2021',
        title: 'Serata Giochi da Tavolo',
        description: 'Serata di giochi da tavolo in biblioteca, dalle 17:00 alle 22:00.',
        stat: '20 posti disponibili',
      },
      {
        period: '2023',
        title: 'Corso di inglese',
        description:
          'Corso di lingua inglese con insegnante madrelingua, ogni sabato pomeriggio da febbraio a maggio, rivolto in particolare agli operatori del settore turistico.',
      },
      {
        period: '22 agosto 2022',
        title: 'Corso di LaTeX',
        description: 'Introduzione a LaTeX con Overleaf, utile per chi studia o lavora in ambito accademico.',
      },
      {
        period: 'Estivo',
        title: 'Gruppo di studio estivo',
        description: 'Spazio di studio condiviso in biblioteca durante i mesi estivi.',
      },
      {
        period: 'Letturiamo · SWAP Shop',
        title: 'Letturiamo e SWAP Shop',
        description:
          'Letturiamo, appuntamento periodico di lettura condivisa, e lo SWAP Shop, scambio gratuito di oggetti e vestiti; tra le iniziative, "Storie a Cantilena", letture bilingui italiano/inglese per bambini in Piazza Cantilena.',
      },
      {
        period: '5 aprile 2022',
        title: '"PCTO – Laboratorio di Cultura Digitale"',
        description:
          'Percorso per le competenze trasversali e l’orientamento con l’Istituto Marini Gioia di Amalfi, su patrimonio culturale e marketing.',
        stat: '7 studenti ospitati',
      },
      {
        period: 'Occasionale',
        title: 'Torneo FIFA 19',
        description: 'Torneo di calcio su Playstation aperto a tutti i soci.',
      },
    ],
  },
  {
    slug: 'coppa-reghinna-minor',
    title: 'Coppa Reghinna Minor',
    intro:
      'Torneo di calcetto amatoriale già radicato sul territorio prima della nascita di Atypical, che ne ha assunto l’organizzazione insieme al Comune di Minori.',
    events: [
      {
        period: '2019',
        title: 'V Edizione',
        description:
          'Quando Atypical ne cura l’organizzazione, il torneo ha già raggiunto la quinta edizione — una tradizione locale precedente alla fondazione dell’associazione.',
        image: 'coppa-reghinna-minor',
      },
      {
        period: '2022',
        title: 'Edizione 2022',
        description: 'Nuova edizione del torneo, con affitto del campo da gioco.',
      },
      {
        period: '2023',
        title: 'Edizione 2023',
        description: 'Dal 14 luglio al 10 agosto, formato a gironi seguito da playoff.',
        stat: '15 squadre iscritte',
      },
      {
        period: '2024',
        title: 'Edizione 2024',
        description: 'Il torneo cresce ulteriormente per numero di squadre partecipanti.',
        stat: '19 squadre iscritte',
      },
      {
        period: '2025',
        title: 'X Edizione',
        description: 'Il torneo raggiunge la decima edizione, un traguardo per una delle iniziative più longeve dell’associazione.',
      },
      {
        period: '2026',
        title: 'Prossima edizione',
        description: 'Nuova edizione in preparazione.',
      },
    ],
  },
  {
    slug: 'cinema-sotto-le-stelle',
    title: 'Cinema Sotto le Stelle',
    intro:
      'Rassegna cinematografica all’aperto, su richiesta del Comune di Minori nell’ambito degli "Appuntamenti d’estate".',
    events: [
      {
        period: '15 luglio – 15 agosto 2023',
        title: 'Edizione 2023',
        description:
          'Proiezioni ogni sera alle 21:00 nel cortile dell’Istituto Comprensivo "R. Rossellini", con oltre 20 titoli in cartellone tra cui Avatar: La Via dell’Acqua, Barbie, John Wick 4, Top Gun: Maverick e La Sirenetta.',
        image: 'cinema-sotto-le-stelle',
        stat: 'Ingresso 6€ (ridotto 5€) · capienza autorizzata 100 posti',
      },
    ],
  },
  {
    slug: 'torneo-beyond-3-point-line',
    title: '"Beyond the 3-point-line"',
    intro:
      'Torneo di streetball 3 contro 3, organizzato in collaborazione con G.S. Minori Pallacanestro e il Comune di Minori.',
    events: [
      {
        period: '1–3 agosto 2018',
        title: 'Edizione 2018',
        description:
          'Tre giorni di basket 3 contro 3 sul Lungomare California, nei pressi della Fontana dei Leoni.',
        image: 'torneo-beyond-3-point-line',
        stat: 'Iscrizione 10€ a persona, maglietta inclusa',
      },
    ],
  },
  {
    slug: 'spesa-solidale',
    title: 'Spesa Solidale',
    intro: 'Raccolta di beni di prima necessità in collaborazione con il Comune di Minori.',
    events: [
      {
        period: 'Ricorrente',
        title: 'Spesa Solidale',
        description:
          'Undici punti di raccolta tra negozi e farmacie del paese. I beni raccolti — pasta, farina, legumi, latte, olio e altri generi di prima necessità — sono confluiti nelle scorte del Comune.',
        image: 'spesa-solidale',
        stat: '11 punti di raccolta · 11 famiglie aiutate',
      },
    ],
  },
  {
    slug: 'eutanasia-legale',
    title: 'Referendum Eutanasia Legale',
    intro:
      'Un punto di raccolta firme per il referendum nazionale sull’eutanasia legale, come forma di partecipazione civica.',
    events: [
      {
        period: '2021',
        title: 'Raccolta firme',
        description:
          'Banchetto informativo e di raccolta firme in piazza, aperto alla cittadinanza, a sostegno della richiesta di referendum nazionale.',
        image: 'eutanasia-legale',
      },
    ],
  },
  {
    slug: 'aperisummer',
    title: 'Aperisummer',
    intro: 'Evento sociale estivo organizzato dai soci per la comunità di Minori.',
    events: [
      {
        period: 'Estate 2020',
        title: 'Aperisummer',
        description: 'Momento di ritrovo e socialità estiva.',
      },
    ],
  },
]
