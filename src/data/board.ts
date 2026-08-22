export type BoardMember = {
  name: string
  role: string
  bio?: string
  photo?: string
}

// Consiglio Direttivo confirmed by the association, 2026.
// Bios and photos are intentionally left as TODOs — do not invent biographical
// details about real people.
export const boardMembers: BoardMember[] = [
  { name: 'Emanuele D’Uva', role: 'Presidente' },
  { name: 'Emanuele Mennella', role: 'Vice-Presidente' },
  { name: 'Elian Giordano', role: 'Segretario' },
  { name: 'Andrea Avellino', role: 'Rappresentante Assemblea dei Soci' },
  { name: 'Piero Salvestri', role: 'Rappresentante Assemblea dei Soci' },
  { name: 'Luca Roggi', role: 'Rappresentante Assemblea dei Soci' },
  { name: 'Daniele Ruocco', role: 'Revisore dei conti' },
]
