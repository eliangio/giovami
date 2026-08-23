import type { BoardMember } from '../data/board'
import { images } from '../lib/images'

export function BoardMemberCard({ member }: { member: BoardMember }) {
  const photo = member.photo ? images[member.photo] : undefined

  return (
    <div className="bg-avorio border border-grigio-caldo/20 rounded-sm p-6 text-center">
      {photo ? (
        <img
          src={photo}
          alt={member.name}
          className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border border-grigio-caldo/30"
        />
      ) : (
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-calce border border-grigio-caldo/30 flex items-center justify-center">
          <span className="font-narrow text-[10px] uppercase tracking-wide text-grigio-caldo">
            Foto in arrivo
          </span>
        </div>
      )}
      <p className="font-semibold text-blu-notte">{member.name}</p>
      <p className="font-narrow text-xs uppercase tracking-wide text-arancio mt-1">{member.role}</p>
      <p className="text-xs text-oliva-scuro mt-3">
        {member.bio ?? <span className="italic text-grigio-caldo">Biografia in aggiornamento.</span>}
      </p>
    </div>
  )
}
