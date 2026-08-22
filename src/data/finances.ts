export type FinancialYear = {
  year: string
  entrate: number | null
  uscite: number | null
  risultato: number | null
  note?: string
}

// Transcribed from the association's own rendiconti (Registro Entrate-Uscite).
// 2023 has only a preventivo (forecast), no consuntivo was ever filed.
// 2024 has no records at all; 2025 has a single donation receipt.
export const financialHistory: FinancialYear[] = [
  { year: '2018', entrate: 35.2, uscite: 11.0, risultato: 24.2 },
  { year: '2019', entrate: 3846.89, uscite: 3639.26, risultato: 207.63 },
  { year: '2020', entrate: 4973.64, uscite: 3964.93, risultato: 1008.71 },
  { year: '2021', entrate: 4041.75, uscite: 1578.83, risultato: 2462.92 },
  { year: '2022', entrate: 2462.92, uscite: 1986.43, risultato: 476.49 },
  {
    year: '2023',
    entrate: null,
    uscite: null,
    risultato: null,
    note: 'Solo bilancio preventivo depositato, nessun consuntivo disponibile.',
  },
  {
    year: '2024',
    entrate: null,
    uscite: null,
    risultato: null,
    note: 'Nessuna attività economica registrata.',
  },
  {
    year: '2025',
    entrate: null,
    uscite: null,
    risultato: null,
    note: 'Attività minima: una sola erogazione liberale registrata.',
  },
]
