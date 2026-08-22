type LogoProps = {
  variant?: 'positiva' | 'negativa'
  size?: number
  showEts?: boolean
  className?: string
}

/**
 * The giova/mi wordmark, reproduced from GiovaMI Identita visiva.html:
 * two spans skewed in opposite directions meeting at a shared vertex,
 * with ETS tucked into the pocket the fold opens beneath "mi".
 */
export function Logo({ variant = 'positiva', size = 32, showEts = true, className = '' }: LogoProps) {
  const giovaColor = variant === 'positiva' ? '#1C2E5E' : '#FFFFFF'
  const miColor = '#EE7623'
  const etsColor = variant === 'positiva' ? '#1C2E5E' : '#FFFFFF'

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ fontSize: size, lineHeight: 1, paddingBottom: size * 0.3 }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: 'skewY(18deg) scaleY(0.94)',
          transformOrigin: 'right center',
          fontWeight: 600,
          letterSpacing: '-0.035em',
          color: giovaColor,
        }}
      >
        giova
      </span>
      <span style={{ position: 'relative', display: 'inline-block', marginLeft: size * 0.09 }}>
        <span
          style={{
            display: 'inline-block',
            transform: 'skewY(-18deg) scaleY(0.94)',
            transformOrigin: 'left center',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: miColor,
          }}
        >
          mi
        </span>
        {showEts && (
          <span
            className="font-narrow"
            style={{
              position: 'absolute',
              left: size * 0.05,
              top: '100%',
              marginTop: size * 0.12,
              fontWeight: 700,
              fontSize: size * 0.15,
              letterSpacing: '0.32em',
              color: etsColor,
              whiteSpace: 'nowrap',
            }}
          >
            ETS
          </span>
        )}
      </span>
    </span>
  )
}
