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

// Grounded in the association's own records — in particular the two official
// management reports ("Relazione Gestione Biblioteca Angela Lembo 2019-2020"
// and "Report Attività e Servizi SET 2021-MAR 2023") plus manifesti and
// rendiconti. Numbers are transcribed, not estimated. Activities that were
// only ever planned or proposed, and never actually realized, are left out.
// Individual volunteers'/participants' personal data is never included.
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
          'Parete in cartongesso, rifacimento del controsoffitto dopo un allagamento, nuovo cablaggio di rete e un layout open-space. I lavori e la pandemia hanno però rinviato l’apertura al pubblico, arrivata solo l’11 ottobre 2021.',
        image: 'biblioteca-angela-lembo',
      },
      {
        period: '2019–2020 · 2021–2023',
        title: 'Due mandati di gestione',
        description:
          'Due mandati consecutivi affidati all’associazione dal Comune di Minori: il primo nel biennio 2019–2020, il secondo da settembre 2021 a marzo 2023.',
      },
      {
        period: 'Dal 2019',
        title: 'Catalogazione da zero',
        description:
          'Da un fondo di 4.753 volumi, censiti su un vecchio registro cartaceo e in parte danneggiati da anni di incuria, a un catalogo digitale su Libib.',
        stat: 'Catalogo finale: 3.255 libri e 86 DVD',
      },
      {
        period: 'Dal 2018',
        title: 'Bookcrossing',
        description: 'Scambio libero di libri tra soci e visitatori, avviato con l’Assessorato alla Cultura del Comune di Minori.',
        image: 'bookcrossing-1',
      },
      {
        period: '2018 – 2023',
        title: 'Biblioteca in Spiaggia',
        description:
          'Nata come "Un bagno di libri" per supplire alla biblioteca fisica non ancora aperta, l’iniziativa porta il prestito bibliotecario sul Lungomare California ogni estate. Numeri per edizione: 2018, 14 associati coinvolti, 15–25 visitatori al giorno; 2020, 104 libri disponibili, 34 prestiti, 19 persone coinvolte; 2021, 55 libri, 28 prestiti, 21 persone; 2022, 104 libri, 28 prestiti, 14 persone.',
        image: 'biblioteca-in-spiaggia',
      },
      {
        period: '23 dicembre 2021',
        title: 'Serata Giochi da Tavolo',
        description: 'Serata di giochi da tavolo in biblioteca.',
        image: 'serata-giochi-da-tavolo',
        stat: '12 partecipanti',
      },
      {
        period: 'Aprile 2022',
        title: '"PCTO – Laboratorio di Cultura Digitale"',
        description:
          'Percorso per le competenze trasversali e l’orientamento con l’Istituto Marini Gioia di Amalfi, su patrimonio culturale e marketing.',
        image: 'pcto-laboratorio',
        stat: '6 studenti partecipanti',
      },
      {
        period: 'Dal 19 agosto 2022',
        title: 'Gruppo di studio',
        description: 'Aperture della biblioteca fuori dagli orari convenzionali, organizzate tramite un canale Telegram dedicato.',
        stat: '24 iscritti al canale',
      },
      {
        period: '22 agosto 2022',
        title: 'Corso di LaTeX',
        description: 'Introduzione a LaTeX con Overleaf, utile per chi studia o lavora in ambito accademico.',
        image: 'corso-latex',
        stat: '6 partecipanti',
      },
      {
        period: 'Dal 18 febbraio 2023',
        title: 'Corso di inglese',
        description: 'Corso di lingua inglese con insegnante madrelingua, ogni sabato pomeriggio, rivolto in particolare agli operatori del settore turistico.',
        image: 'corso-inglese',
        stat: '12 partecipanti',
      },
      {
        period: '15 febbraio · 1 marzo 2023',
        title: 'SWAP Bambini',
        description: 'Due appuntamenti di scambio gratuito di oggetti e vestiti per bambini.',
        stat: '13 e 16 partecipanti',
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
        title: 'Edizione 2019',
        description:
          'Quando Atypical ne cura l’organizzazione, il torneo ha già raggiunto la quinta edizione — una tradizione locale precedente alla fondazione dell’associazione.',
        image: 'coppa-reghinna-minor',
      },
      {
        period: '2022',
        title: 'Edizione 2022',
        description: 'Sesta edizione, dal 4 al 18 agosto, Campo "Leo Lieto", con categorie Esordienti, Allievi e Amatoriale.',
        image: 'coppa-reghinna-minor-2022',
      },
      {
        period: '2023',
        title: 'Edizione 2023',
        description: 'Dal 14 luglio al 10 agosto, formato a gironi seguito da playoff.',
        image: 'coppa-reghinna-minor-2023',
        stat: '16 squadre',
      },
      {
        period: '2024',
        title: 'Edizione 2024',
        description: 'Torneo di calcio a 5, girone unico seguito da playoff.',
        image: 'coppa-reghinna-minor-2024',
        stat: '16 squadre',
      },
      {
        period: '2025',
        title: 'Edizione 2025',
        description: 'Il torneo raggiunge la decima edizione, un traguardo per una delle iniziative più longeve dell’associazione.',
        image: 'coppa-reghinna-minor-2025',
      },
      {
        period: '2026',
        title: 'Edizione 2026',
        description: 'Dal 14 luglio al 10 agosto, 4 gironi da 16 squadre, minimo 11 giocatori a squadra.',
        image: 'coppa-reghinna-minor-2026',
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
]
