export type BoardMember = {
  name: string
  role: string
  bio?: string
  photo?: string
}

// Consiglio Direttivo confirmed by the association, 2026. Bios are verbatim
// from the association (direttivo/bios.txt) — real, first-person content,
// not to be edited or softened.
export const boardMembers: BoardMember[] = [
  {
    name: 'Emanuele D’Uva',
    role: 'Presidente',
    photo: 'emanuele-duva',
    bio: 'Operatore del turismo ad Amalfi. Diretto e puntuale. Se qualcosa non gli fila liscio, te lo farà notare senza filtri.',
  },
  {
    name: 'Luca Roggi',
    role: 'Vice-Presidente',
    photo: 'luca-roggi',
    bio: 'Studente di Business Analytics a Copenhagen. Entusiasta dell’innovazione tecnologica, si cimenta in qualsiasi sfida gli venga proposta.',
  },
  {
    name: 'Elian Giordano',
    role: 'Segretario',
    photo: 'elian-giordano',
    bio: 'Ricercatore universitario a Barcellona. Idealista di prim’ordine, ma è sempre il primo a tagliare le ali alle iniziative degli associati per far rispettare la legge.',
  },
  {
    name: 'Daniele Ruocco',
    role: 'Revisore dei conti',
    photo: 'daniele-ruocco',
    bio: 'Laureato in Green Economy a Ferrara. Il più pacato del Direttivo. Non si lascia influenzare facilmente da nessuno.',
  },
  {
    name: 'Samira Casabona',
    role: 'Rappresentante Assemblea dei Soci',
    photo: 'samira-casabona',
    bio: 'Laureata in Storia dell’Arte a Salerno e studentessa di Infermieristica. Ha sempre ragione lei, altrimenti sono problemi per il resto del gruppo.',
  },
  {
    name: 'Emanuele Mennella',
    role: 'Rappresentante Assemblea dei Soci',
    photo: 'emanuele-mennella',
    bio: 'Operatore del turismo a Minori. Di poche parole, ma una certezza: è sempre presente in tutte le iniziative.',
  },
  {
    name: 'Piero Salvestri',
    role: 'Rappresentante Assemblea dei Soci',
    photo: 'piero-salvestri',
    bio: 'Operatore del turismo a Minori. Il più social del Direttivo. Non gli sfugge assolutamente nulla.',
  },
]
