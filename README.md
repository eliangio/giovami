# giovami APS

Sito ufficiale di **giovami APS** (già Associazione Atypical), ente del terzo settore con sede a Minori (SA), Costiera Amalfitana.

## Stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/), con i token del brand (`tailwind.config.js`) presi da `GiovaMI Identita visiva.html`
- `react-router-dom` (HashRouter, per compatibilità diretta con GitHub Pages)

## Sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Il sito è servito sotto `/giovami/` (vedi `base` in `vite.config.ts`), pensato per GitHub Pages come project site.

## Struttura

```
src/
├── components/   # Logo, Header, Footer, BoardMemberCard, TimelineItem, FinancialTable
├── pages/        # Home, ChiSiamo, Timeline, Trasparenza, Contatti
├── data/         # board.ts, milestones.ts, finances.ts — contenuti reali, no dati fittizi
└── assets/images/
public/
└── documents/statuto-giovami-aps.pdf
```

## Deploy

Push su `main` attiva `.github/workflows/deploy.yml`, che builda ed effettua il deploy su GitHub Pages tramite Actions. Va abilitato "GitHub Actions" come source in Settings → Pages del repository, una tantum.

## Note su privacy e contenuti

- I dati economici in `src/data/finances.ts` sono trascritti dai rendiconti interni dell'associazione (2018–2023); 2024–2025 sono segnalati come attività minima, in modo trasparente.
- Il roster del Consiglio Direttivo (`src/data/board.ts`) riporta solo nome e ruolo dei membri attuali — nessun dato personale (codice fiscale, indirizzo, contatti privati) va mai aggiunto qui.
- I contatti in `src/pages/Contatti.tsx` sono segnaposto (`TODO`) fino a conferma dei recapiti reali.
