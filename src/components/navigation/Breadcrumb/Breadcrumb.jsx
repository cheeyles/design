const TEXT = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  fontWeight: 400,
  whiteSpace: 'nowrap',
}

export function Breadcrumb({ items = [], style, className }) {
  return (
    <nav aria-label="Breadcrumb" style={style} className={className}>
      <ol style={{
        display:    'flex',
        alignItems: 'center',
        gap:        'var(--spacing-sm)',
        listStyle:  'none',
        margin:     0,
        padding:    0,
      }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              {isLast ? (
                <span
                  aria-current="page"
                  style={{ ...TEXT, color: 'var(--color-text-dark)', fontWeight: 500 }}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <a
                    href={item.href ?? '#'}
                    style={{
                      ...TEXT,
                      color:          'var(--color-text-dark)',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </a>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                      fontSize:              '16px',
                      lineHeight:            1,
                      color:                 'var(--color-text-dark)',
                      userSelect:            'none',
                      flexShrink:            0,
                    }}
                  >
                    chevron_right
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
