import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/progetti', label: 'Progetti' },
  { to: '/trasparenza', label: 'Trasparenza' },
  { to: '/contatti', label: 'Contatti' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-avorio/95 backdrop-blur border-b border-grigio-caldo/20">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <NavLink to="/" aria-label="giovami — home">
          <Logo size={26} straight showEts />
        </NavLink>
        <nav className="flex gap-5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-narrow text-[12px] uppercase tracking-[0.12em] transition-colors ${
                  isActive ? 'text-arancio' : 'text-blu-notte hover:text-arancio'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
