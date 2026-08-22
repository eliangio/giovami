import type { BoardMember } from '../data/board'

export function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="bg-avorio border border-grigio-caldo/20 rounded-sm p-6 text-center">
      <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-calce border border-grigio-caldo/30 flex items-center justify-center">
        <span className="font-narrow text-[10px] uppercase tracking-wide text-grigio-caldo">
          Foto in arrivo
        </span>
      </div>
      <p className="font-semibold text-blu-notte">{member.name}</p>
      <p className="font-narrow text-xs uppercase tracking-wide text-arancio mt-1">{member.role}</p>
      <p className="text-xs text-grigio-caldo mt-3 italic">Biografia in aggiornamento.</p>
    </div>
  )
}
