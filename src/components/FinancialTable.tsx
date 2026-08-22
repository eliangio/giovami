import { financialHistory } from '../data/finances'

const formatEuro = (n: number | null) =>
  n === null ? '—' : n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })

export function FinancialTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-grigio-caldo/30 text-left font-narrow uppercase tracking-wide text-xs text-grigio-caldo">
            <th className="py-3 pr-4">Anno</th>
            <th className="py-3 pr-4">Entrate</th>
            <th className="py-3 pr-4">Uscite</th>
            <th className="py-3 pr-4">Risultato</th>
            <th className="py-3">Note</th>
          </tr>
        </thead>
        <tbody>
          {financialHistory.map((row) => (
            <tr key={row.year} className="border-b border-grigio-caldo/10">
              <td className="py-3 pr-4 font-semibold text-blu-notte">{row.year}</td>
              <td className="py-3 pr-4">{formatEuro(row.entrate)}</td>
              <td className="py-3 pr-4">{formatEuro(row.uscite)}</td>
              <td className="py-3 pr-4">{formatEuro(row.risultato)}</td>
              <td className="py-3 text-grigio-caldo italic">{row.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
