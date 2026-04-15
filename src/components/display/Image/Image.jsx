import { useState } from 'react'

const RADIUS = {
  none: '0',
  sm:   'var(--radius-sm)',
  md:   'var(--radius-md)',
  lg:   'var(--radius-lg)',
  full: 'var(--radius-full)',
}

function Placeholder({ radius, icon = false }) {
  return (
    <div
      className={icon ? undefined : 'shimmer'}
      style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-bg-grey-light)',
        borderRadius:    radius,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
      }}
    >
      {icon && (
        <span style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              '32px',
          lineHeight:            1,
          color:                 'var(--color-border-grey)',
          userSelect:            'none',
        }} aria-hidden="true">broken_image</span>
      )}
    </div>
  )
}

export function Image({
  src,
  alt       = '',
  aspectRatio = '3/2',
  radius    = 'none',
  fit       = 'cover',
  style,
  className,
}) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'error'
  const r = RADIUS[radius] ?? radius

  return (
    <div
      className={className}
      style={{
        position:     'relative',
        width:        '100%',
        aspectRatio,
        borderRadius: r,
        overflow:     'hidden',
        flexShrink:   0,
        ...style,
      }}
    >
      {/* Skeleton shown while loading */}
      {status === 'loading' && <Placeholder radius={r} />}

      {/* Error fallback */}
      {status === 'error' && <Placeholder radius={r} icon />}

      {/* Image — always rendered so onLoad/onError fire */}
      {src && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{
            position:   'absolute',
            inset:      0,
            width:      '100%',
            height:     '100%',
            objectFit:  fit,
            borderRadius: r,
            display:    status === 'loaded' ? 'block' : 'none',
          }}
        />
      )}

      {/* No src — show skeleton permanently */}
      {!src && status === 'loading' && <Placeholder radius={r} />}
    </div>
  )
}

export default Image
