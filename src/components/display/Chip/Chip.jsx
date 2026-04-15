export function Chip({ label, onRemove, className, style }) {
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        gap:             'var(--spacing-xs)',
        padding:         'var(--spacing-xs)',
        borderRadius:    'var(--radius-sm)',
        backgroundColor: 'var(--color-bg-grey-light)',
        ...style,
      }}
    >
      <span style={{
        fontFamily: 'var(--type-family-primary)',
        fontSize:   'var(--type-size-body-sm)',
        lineHeight: 'var(--type-lh-body-sm)',
        fontWeight: 400,
        color:      'var(--color-text-dark)',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            width:          '18px',
            height:         '18px',
            background:     'none',
            border:         'none',
            cursor:         'pointer',
            padding:        0,
            flexShrink:     0,
            color:          'var(--color-text-dark)',
          }}
        >
          <span style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '18px',
            lineHeight:            1,
            userSelect:            'none',
          }} aria-hidden="true">close</span>
        </button>
      )}
    </span>
  )
}

export default Chip
