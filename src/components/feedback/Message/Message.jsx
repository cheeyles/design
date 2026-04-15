const VARIANTS = {
  info: {
    bg:     'var(--color-bg-light)',
    border: 'var(--color-brand-primary-dark)',
    icon:   'info',
    color:  'var(--color-brand-primary-dark)',
  },
  announcement: {
    bg:     'var(--color-bg-orange-light)',
    border: 'var(--color-border-orange)',
    icon:   'message',
    color:  'var(--color-text-orange)',
  },
  error: {
    bg:     'var(--color-bg-red-light)',
    border: 'var(--color-border-red)',
    icon:   'error',
    color:  'var(--color-text-red)',
  },
}

export function Message({ variant = 'info', heading, cta, children, className, style }) {
  const v = VARIANTS[variant] ?? VARIANTS.info

  return (
    <div
      className={className}
      role="status"
      style={{
        display:         'flex',
        alignItems:      'flex-start',
        gap:             'var(--spacing-sm)',
        padding:         'var(--spacing-sm-md) var(--spacing-sm)',
        borderRadius:    'var(--radius-sm)',
        border:          `1px solid ${v.border}`,
        backgroundColor: v.bg,
        ...style,
      }}
    >
      <span style={{
        fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              '18px',
        lineHeight:            1,
        color:                 v.color,
        flexShrink:            0,
        userSelect:            'none',
        paddingTop:            '2px',
      }} aria-hidden="true">{v.icon}</span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {heading && (
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            lineHeight: 'var(--type-lh-body-sm)',
            fontWeight: 600,
            color:      'var(--color-text-grey-dark)',
          }}>{heading}</span>
        )}
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          lineHeight: 'var(--type-lh-body-sm)',
          fontWeight: 400,
          color:      'var(--color-text-grey-dark)',
        }}>
          {children}
        </span>
        {cta && (
          <button
            onClick={cta.onClick}
            style={{
              background:  'none',
              border:      'none',
              padding:     0,
              cursor:      'pointer',
              fontFamily:  'var(--type-family-primary)',
              fontSize:    'var(--type-size-body-sm)',
              lineHeight:  'var(--type-lh-body-sm)',
              fontWeight:  500,
              color:       'var(--color-text-grey-dark)',
              textDecoration: 'underline',
              alignSelf:   'flex-start',
            }}
          >{cta.label}</button>
        )}
      </div>
    </div>
  )
}

export default Message
