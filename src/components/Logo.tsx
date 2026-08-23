type LogoProps = {
  variant?: 'positiva' | 'negativa'
  size?: number
  showEts?: boolean
  straight?: boolean
  animated?: boolean
  className?: string
}

/**
 * The giova/mi wordmark, reproduced from GiovaMI Identita visiva.html:
 * two spans skewed in opposite directions meeting at a shared vertex,
 * with ETS tucked into the pocket the fold opens beneath "mi".
 *
 * `straight` drops the skew/scale fold, rendering both halves on a flat
 * baseline — used where the angled "piega" doesn't fit the layout (e.g. the
 * header, at small size).
 *
 * `animated` plays the identity guide's entrance sequence once on mount:
 * giova rises into place (0–0.7s), mi rises along the fold (0.7–1.1s), ETS
 * opens (1.1–1.8s) — see the `logo-rise-*`/`logo-open-ets` keyframes in
 * index.css. Only meaningful together with the angled (non-straight) mark.
 */
export function Logo({
  variant = 'positiva',
  size = 32,
  showEts = true,
  straight = false,
  animated = false,
  className = '',
}: LogoProps) {
  const giovaColor = variant === 'positiva' ? '#1C2E5E' : '#FFFFFF'
  const miColor = '#EE7623'
  const etsColor = variant === 'positiva' ? '#1C2E5E' : '#FFFFFF'

  return (
    <span
      className={`inline-flex items-center ${animated ? 'animate-logo' : ''} ${className}`}
      style={{ fontSize: size, lineHeight: 1, paddingBottom: size * 0.3 }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: straight ? undefined : 'skewY(18deg) scaleY(0.94)',
          transformOrigin: 'right center',
          fontWeight: 600,
          letterSpacing: '-0.035em',
          color: giovaColor,
          animation: animated ? 'logo-rise-giova 0.7s ease-out both' : undefined,
        }}
      >
        giova
      </span>
      <span style={{ position: 'relative', display: 'inline-block', marginLeft: size * 0.09 }}>
        <span
          style={{
            display: 'inline-block',
            transform: straight ? undefined : 'skewY(-18deg) scaleY(0.94)',
            transformOrigin: 'left center',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: miColor,
            animation: animated ? 'logo-rise-mi 0.4s ease-out 0.7s both' : undefined,
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
              animation: animated ? 'logo-open-ets 0.7s ease-out 1.1s both' : undefined,
            }}
          >
            ETS
          </span>
        )}
      </span>
    </span>
  )
}
