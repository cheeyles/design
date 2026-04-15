export function Avatar({
  src,
  alt      = '',
  size     = 40,
  verified = false,
  style,
  className,
}) {
  const badgeSize = Math.round(size * 0.4)

  return (
    <div
      className={className}
      style={{
        position:   'relative',
        width:      size,
        height:     size,
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Circle image / fallback — overflow:hidden here, not on outer */}
      <div
        style={{
          width:           '100%',
          height:          '100%',
          borderRadius:    'var(--radius-full)',
          overflow:        'hidden',
          backgroundColor: 'var(--color-bg-grey-light)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width:     '100%',
              height:    '100%',
              objectFit: 'cover',
              display:   'block',
            }}
          />
        ) : (
          <span
            aria-hidden="true"
            style={{
              fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              Math.round(size * 0.55) + 'px',
              lineHeight:            1,
              color:                 'var(--color-border-grey)',
              userSelect:            'none',
            }}
          >
            person
          </span>
        )}
      </div>

      {verified && (
        <div
          style={{
            position:        'absolute',
            bottom:          0,
            right:           0,
            width:           badgeSize,
            height:          badgeSize,
            borderRadius:    'var(--radius-full)',
            backgroundColor: 'var(--color-bg-green-dark)',
            border:          '1px solid var(--color-bg-white)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              Math.round(badgeSize * 0.6) + 'px',
              lineHeight:            1,
              color:                 'var(--color-text-white)',
              userSelect:            'none',
            }}
          >
            check
          </span>
        </div>
      )}
    </div>
  )
}

export default Avatar
