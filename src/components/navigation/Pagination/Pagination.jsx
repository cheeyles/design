import React from 'react'

const RADIUS = '999px'

const BTN_BASE = {
  display:        'inline-flex',
  alignItems:     'center',
  justifyContent: 'center',
  minWidth:       '40px',
  height:         'var(--size-btn-md)',
  padding:        '0 var(--spacing-xs)',
  border:         '1px solid var(--color-border-grey-light)',
  borderRadius:   0,
  background:     'none',
  cursor:         'pointer',
  fontFamily:     'var(--type-family-primary)',
  fontSize:       'var(--type-size-body-sm)',
  lineHeight:     1,
  fontWeight:     400,
  userSelect:     'none',
  marginLeft:     '-1px',
  position:       'relative',
  zIndex:         0,
  transition:     'background 0.15s, color 0.15s',
}

function PageButton({ page, active, onClick }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onClick={!active ? onClick : undefined}
      aria-current={active ? 'page' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...BTN_BASE,
        zIndex:     active ? 1 : hovered ? 1 : 0,
        background: active || hovered ? 'var(--color-bg-light)' : 'none',
        fontWeight: active ? 600 : 400,
        color:      'var(--color-text-grey-dark)',
        cursor:     active ? 'default' : 'pointer',
      }}
    >
      {page}
    </button>
  )
}

function NavButton({ icon, onClick, disabled, label, isFirst, isLast }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...BTN_BASE,
        borderRadius: isFirst
          ? `${RADIUS} 0 0 ${RADIUS}`
          : isLast
            ? `0 ${RADIUS} ${RADIUS} 0`
            : 0,
        zIndex:     hovered && !disabled ? 1 : 0,
        background: hovered && !disabled ? 'var(--color-bg-light)' : 'none',
        color:      'var(--color-text-grey-dark)',
        opacity:    disabled ? 0.35 : 1,
        cursor:     disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <span style={{
        fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              'var(--size-icon-xl)',
        lineHeight:            1,
      }} aria-hidden="true">{icon}</span>
    </button>
  )
}

function getPages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 4)         return [1, 2, 3, 4, 5, '…', total]
  if (current >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total]
  return [1, '…', current - 1, current, current + 1, '…', total]
}

export function Pagination({ page = 1, total, onChange, style, className }) {
  const pages = getPages(page, total)

  return (
    <nav
      aria-label="Pagination"
      className={className}
      style={{ display: 'inline-flex', ...style }}
    >
      <NavButton
        isFirst
        icon="chevron_left"
        label="Previous page"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      />

      {pages.map((p, i) =>
        p === '…' ? (
          <span
            key={`ellipsis-${i}`}
            style={{
              ...BTN_BASE,
              cursor:        'default',
              color:         'var(--color-text-grey-dark)',
              pointerEvents: 'none',
            }}
          >
            …
          </span>
        ) : (
          <PageButton
            key={p}
            page={p}
            active={p === page}
            onClick={() => onChange(p)}
          />
        )
      )}

      <NavButton
        isLast
        icon="chevron_right"
        label="Next page"
        disabled={page >= total}
        onClick={() => onChange(page + 1)}
      />
    </nav>
  )
}

export default Pagination
