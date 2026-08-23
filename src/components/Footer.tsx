import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-blu-notte text-avorio mt-24">
      <div className="mx-auto max-w-5xl px-6 py-12 grid gap-8 sm:grid-cols-2">
        <div>
          <Logo variant="negativa" size={22} showEts={false} />
          <p className="mt-4 text-sm text-avorio/80 max-w-sm">
            giovami — associazione giovanile, ente del terzo settore. Minori (SA), Costiera
            Amalfitana.
          </p>
        </div>
        <div className="text-sm text-avorio/70 sm:text-right">
          <p>Prosecuzione di Associazione Atypical (fondata nel 2018).</p>
          <p>Codice Fiscale 95174950659</p>
          <p className="mt-3">© {new Date().getFullYear()} giovami</p>
        </div>
      </div>
    </footer>
  )
}
