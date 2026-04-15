import { Badge } from '../../display/Badge/index.js'

/* ── Tab ────────────────────────────────────────────────────── */

export function Tab({
  label,
  leadingIcon,
  badge,
  active    = false,
  onClick,
  style,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            'var(--spacing-sm)',
        padding:        'var(--spacing-md-lg) 2px',
        background:     'none',
        border:         'none',
        borderBottom:   active
          ? '3px solid var(--color-brand-primary-dark)'
          : '3px solid transparent',
        cursor:         'pointer',
        fontFamily:     'var(--type-family-primary)',
        fontSize:       'var(--type-size-body-sm)',
        lineHeight:     'var(--type-lh-body-sm)',
        fontWeight:     500,
        color:          active
          ? 'var(--color-brand-primary-dark)'
          : 'var(--color-text-slate)',
        whiteSpace:     'nowrap',
        marginBottom:   '-1px',
        ...style,
      }}
    >
      {leadingIcon && (
        typeof leadingIcon === 'string' ? (
          <span style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '18px',
            lineHeight:            1,
            userSelect:            'none',
          }} aria-hidden="true">{leadingIcon}</span>
        ) : leadingIcon
      )}
      {label}
      {badge !== undefined && (
        <Badge count={badge} variant={active ? 'blue' : 'grey'} />
      )}
    </button>
  )
}

/* ── TabBar ─────────────────────────────────────────────────── */

export function TabBar({
  tabs = [],
  value,
  onChange,
  style,
  className,
}) {
  return (
    <div
      className={className}
      style={{
        display:      'flex',
        alignItems:   'flex-end',
        gap:          'var(--spacing-md-lg)',
        borderBottom: 'var(--border-width-default) solid var(--color-border-grey-light)',
        ...style,
      }}
    >
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          label={tab.label}
          leadingIcon={tab.icon}
          badge={tab.badge}
          active={tab.value === value}
          onClick={() => onChange?.(tab.value)}
        />
      ))}
    </div>
  )
}

export default Tab
