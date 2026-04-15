/* ─────────────────────────────────────────────────────────────
   NavItem — Design System navigation component
   Figma file: TI2QRswI37Xh8W8h5CrypW
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react'
import { Tooltip } from '../../feedback/Tooltip/index.js'

const matIcon = (name, size) => (
  <span style={{
    fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    fontSize:              size,
    lineHeight:            1,
    color:                 'inherit',
    flexShrink:            0,
    userSelect:            'none',
  }} aria-hidden="true">{name}</span>
)

/* ── NavItem ─────────────────────────────────────────────────── */

export function NavItem({
  label,
  icon,
  size     = 'lg',
  active   = false,
  disabled = false,
  onClick,
  mx       = 'var(--spacing-sm)',
  style,
}) {
  const sm = size === 'sm'
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        display:      'flex',
        alignItems:   'center',
        gap:          icon ? (sm ? 'var(--spacing-xs)' : 'var(--spacing-sm-md)') : 0,
        padding:      sm
          ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
          : 'var(--spacing-sm-md)',
        margin:       `var(--spacing-0-5) ${mx}`,
        width:        `calc(100% - 2 * ${mx})`,
        borderRadius: 'var(--radius-sm)',
        background:   active ? 'var(--color-brand-primary-light)' : 'none',
        border:       'none',
        cursor:       disabled ? 'default' : 'pointer',
        textAlign:    'left',
        fontFamily:   'var(--type-family-primary)',
        fontSize:     sm ? 'var(--type-size-body-sm)' : 'var(--type-size-body-md)',
        lineHeight:   sm ? 'var(--type-lh-body-sm)' : 1,
        fontWeight:   500,
        color:        active ? 'var(--color-brand-primary-dark)' : disabled ? 'var(--color-text-grey)' : 'var(--color-text-dark)',
        ...style,
      }}
    >
      {icon && matIcon(icon, sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)')}
      {label}
    </button>
  )
}

/* ── NavSubItem ──────────────────────────────────────────────── */

export function NavSubItem({
  label,
  size   = 'lg',
  active = false,
  onClick,
  style,
}) {
  const sm = size === 'sm'
  return (
    <button
      onClick={onClick}
      style={{
        display:      'flex',
        alignItems:   'center',
        padding:      sm
          ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
          : 'var(--spacing-sm-md)',
        paddingLeft:  'var(--spacing-2xl)',
        minHeight:    sm ? 'auto' : 'calc(var(--size-icon-xl) + 2 * var(--spacing-sm-md))',
        margin:       'var(--spacing-0-5) var(--spacing-sm)',
        width:        'calc(100% - 2 * var(--spacing-sm))',
        borderRadius: 'var(--radius-sm)',
        background:   active ? 'var(--color-brand-primary-light)' : 'none',
        border:       'none',
        cursor:       'pointer',
        textAlign:    'left',
        fontFamily:   'var(--type-family-primary)',
        fontSize:     sm ? 'var(--type-size-body-sm)' : 'var(--type-size-body-md)',
        lineHeight:   sm ? 'var(--type-lh-body-sm)' : 1,
        fontWeight:   500,
        color:        active ? 'var(--color-brand-primary-dark)' : 'var(--color-text-dark)',
        ...style,
      }}
    >
      {label}
    </button>
  )
}

/* ── NavGroup ────────────────────────────────────────────────── */

export function NavGroup({
  label,
  icon,
  size        = 'lg',
  mx          = 'var(--spacing-sm)',
  defaultOpen = false,
  children,
  style,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const sm = size === 'sm'
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display:     'flex',
          alignItems:  'center',
          gap:         icon ? (sm ? 'var(--spacing-xs)' : 'var(--spacing-sm-md)') : 0,
          padding:     sm
            ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
            : 'var(--spacing-sm-md)',
          margin:      `var(--spacing-0-5) ${mx}`,
          width:       `calc(100% - 2 * ${mx})`,
          borderRadius:'var(--radius-sm)',
          background:  'none',
          border:      'none',
          cursor:      'pointer',
          textAlign:   'left',
          fontFamily:  'var(--type-family-primary)',
          fontSize:    sm ? 'var(--type-size-body-sm)' : 'var(--type-size-body-md)',
          lineHeight:  sm ? 'var(--type-lh-body-sm)' : 1,
          fontWeight:  500,
          color:       'var(--color-text-dark)',
          ...style,
        }}
      >
        {icon && matIcon(icon, sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)')}
        {label}
        <span style={{
          fontFamily:            "'Material Symbols Rounded'",
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)',
          lineHeight:            1,
          color:                 'var(--color-bg-dark)',
          marginLeft:            'auto',
          userSelect:            'none',
        }} aria-hidden="true">
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      {open && children}
    </div>
  )
}

/* ── NavIconItem ─────────────────────────────────────────────── */

export function NavIconItem({
  icon,
  label,
  active  = false,
  onClick,
  style,
}) {
  return (
    <Tooltip content={label} placement="right">
      <button
        onClick={onClick}
        aria-label={label}
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          width:          '48px',
          minWidth:       '48px',
          height:         '48px',
          margin:         'var(--spacing-0-5) 8px',
          padding:        0,
          flexShrink:     0,
          borderRadius:   'var(--radius-sm)',
          background:     active ? 'var(--color-brand-primary-light)' : 'none',
          border:         'none',
          cursor:         'pointer',
          color:          active ? 'var(--color-brand-primary-dark)' : 'var(--color-text-dark)',
          ...style,
        }}
      >
        <span style={{
          fontFamily:            "'Material Symbols Rounded'",
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              'var(--size-icon-xl)',
          lineHeight:            1,
          userSelect:            'none',
        }} aria-hidden="true">{icon}</span>
      </button>
    </Tooltip>
  )
}

export default NavItem
