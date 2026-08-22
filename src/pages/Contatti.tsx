// TODO: replace placeholder email/social/address with current details before publishing.
const CONTACT_EMAIL = 'info@giovami.org' // TODO: confirm real address
const SOCIAL = [
  { label: 'Instagram', href: '#' }, // TODO
  { label: 'Facebook', href: '#' }, // TODO
]

export function Contatti() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow mb-3">Contatti</p>
      <h1 className="text-3xl font-semibold text-blu-notte mb-8">Parliamone</h1>

      <div className="bg-calce rounded-sm p-6 mb-12 text-sm text-oliva-scuro">
        <p>
          <strong>Nota:</strong> i recapiti qui sotto sono segnaposto — verranno aggiornati con i
          contatti reali di giovami APS.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 mb-16">
        <div>
          <h2 className="font-semibold text-blu-notte mb-3">Scrivici</h2>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-arancio hover:underline">
            {CONTACT_EMAIL}
          </a>
          <p className="text-sm text-oliva-scuro mt-4">Minori (SA), Costiera Amalfitana</p>
        </div>
        <div>
          <h2 className="font-semibold text-blu-notte mb-3">Seguici</h2>
          <ul className="space-y-2">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-arancio hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blu-notte mb-3">Come iscriversi</h2>
        <p className="text-oliva-scuro max-w-2xl mb-4">
          Puoi aderire come Socio Ordinario, contribuendo direttamente alle attività
          istituzionali, o come Socio Sostenitore, supportando l’associazione con una quota
          maggiorata o un’erogazione liberale. La richiesta di adesione va indirizzata al
          Consiglio Direttivo, che delibera secondo criteri non discriminatori.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-arancio font-semibold hover:underline">
          Scrivici per aderire →
        </a>
      </div>
    </div>
  )
}
