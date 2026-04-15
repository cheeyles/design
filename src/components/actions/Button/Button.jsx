/* ─────────────────────────────────────────────────────────────
   Button — Design System component library
   Figma file: TI2QRswI37Xh8W8h5CrypW · Components page (4:3877)

   Named exports:
     Button           CTA buttons — primary/secondary/positive/destructive/text
     FavouriteButton  Star toggle — standalone (8:4065)
     CardFavouriteButton  Star toggle — on card with shadow (98:1722)
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react'

/* ── Shared constants ──────────────────────────────────────── */

const ICON_STYLE = {
  fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
  fontSize:              'var(--size-icon-md)',
  lineHeight:            1,
  flexShrink:            0,
  userSelect:            'none',
}

/* ── Button ────────────────────────────────────────────────── */
/*
  variant:      'primary' | 'secondary' | 'positive' | 'destructive' | 'text'
  children:     button label text
  leadingIcon:  Material Symbol name string, or ReactNode
  trailingIcon: Material Symbol name string, or ReactNode
  disabled:     boolean
  onClick:      handler
  type:         'button' | 'submit' | 'reset'
  style:        style overrides
  className:    class overrides

  Figma node IDs:
    primary     5:3906
    secondary   7:4258  (Secondary/Dark)
    positive    7:3896
    text/link   125:11848
*/

const VARIANTS = {
  primary: {
    bg:          'var(--color-brand-primary)',
    color:       'var(--color-text-white)',
    border:      'none',
    hoverBg:     'var(--color-btn-primary-hover)',
    hoverColor:  'var(--color-text-white)',
  },
  secondary: {
    bg:          'transparent',
    color:       'var(--color-text-grey)',
    border:      'var(--border-width-default) solid var(--color-border-grey)',
    hoverBg:     'transparent',
    hoverColor:  'var(--color-text-grey)',
  },
  positive: {
    bg:          'var(--color-bg-green)',
    color:       'var(--color-text-white)',
    border:      'none',
    hoverBg:     'var(--color-btn-positive-hover)',
    hoverColor:  'var(--color-text-white)',
  },
  destructive: {
    bg:          'var(--color-bg-red)',
    color:       'var(--color-text-white)',
    border:      'none',
    hoverBg:     'var(--color-btn-destructive-hover)',
    hoverColor:  'var(--color-text-white)',
  },
  text: {
    bg:          'transparent',
    color:       'var(--color-brand-primary)',
    border:      'none',
    hoverBg:     'transparent',
    hoverColor:  'var(--color-brand-primary-dark)',
  },
}

function MatIcon({ name, size = '18px' }) {
  return (
    <span
      aria-hidden="true"
      style={{ ...ICON_STYLE, fontSize: size }}
    >
      {name}
    </span>
  )
}

function resolveIcon(icon, size) {
  if (!icon) return null
  if (typeof icon === 'string') return <MatIcon name={icon} size={size} />
  return icon
}

const SIZES = {
  sm: {
    height:       'var(--size-btn-sm)',    // 32px
    paddingX:     'var(--spacing-sm-md)', // 12px no-icon
    paddingXIcon: 'var(--spacing-sm-md)', // 12px with icon
    gap:          'var(--spacing-xs)',     // 4px
    iconSize:     'var(--size-icon-sm)',   // 16px
    fontSize:     'var(--type-size-label-md)', // 12px
  },
  md: {
    height:       'var(--size-btn-md)',   // 40px
    paddingX:     'var(--spacing-lg)',    // 24px no-icon
    paddingXIcon: 'var(--spacing-md)',   // 16px with icon
    gap:          'var(--spacing-sm)',    // 8px
    iconSize:     'var(--size-icon-md)', // 18px
    fontSize:     'var(--type-size-body-sm)', // 14px
  },
}

export function Button({
  variant      = 'primary',
  size         = 'md',
  children,
  leadingIcon,
  trailingIcon,
  disabled     = false,
  onClick,
  type         = 'button',
  style,
  className,
}) {
  const [hovered, setHovered] = useState(false)
  const v = VARIANTS[variant] ?? VARIANTS.primary
  const s = SIZES[size] ?? SIZES.md
  const isText = variant === 'text'
  const hasLeading  = !!leadingIcon
  const hasTrailing = !!trailingIcon

  // Text/link variant has no height/padding chrome
  if (isText) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:         'inline-flex',
          alignItems:      'center',
          gap:             (hasLeading || hasTrailing) ? 'var(--spacing-xs)' : 0,
          background:      'none',
          border:          'none',
          padding:         0,
          cursor:          disabled ? 'not-allowed' : 'pointer',
          opacity:         disabled ? 'var(--opacity-disabled)' : 1,
          color:           hovered ? v.hoverColor : v.color,
          fontFamily:      'var(--type-family-primary)',
          fontSize:        'var(--type-size-body-sm)',
          lineHeight:      'var(--type-lh-body-sm)',
          fontWeight:      400,
          whiteSpace:      'nowrap',
          textDecoration:  'none',
          ...style,
        }}
      >
        {resolveIcon(leadingIcon, 'var(--size-icon-lg)')}
        {children}
        {resolveIcon(trailingIcon, 'var(--size-icon-lg)')}
      </button>
    )
  }

  const paddingLeft  = hasLeading  ? s.paddingXIcon : s.paddingX
  const paddingRight = hasTrailing ? s.paddingXIcon : s.paddingX

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             (hasLeading || hasTrailing) ? s.gap : 0,
        height:          s.height,
        paddingLeft,
        paddingRight,
        backgroundColor: hovered ? v.hoverBg : v.bg,
        color:           hovered ? v.hoverColor : v.color,
        border:          v.border,
        borderRadius:    'var(--radius-sm)',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        opacity:         disabled ? 'var(--opacity-disabled)' : 1,
        fontFamily:      'var(--type-family-primary)',
        fontSize:        s.fontSize,
        lineHeight:      'var(--type-lh-body-sm)',
        fontWeight:      500,
        whiteSpace:      'nowrap',
        ...style,
      }}
    >
      {resolveIcon(leadingIcon, s.iconSize)}
      {children}
      {resolveIcon(trailingIcon, s.iconSize)}
    </button>
  )
}

/* ── FavouriteButton ───────────────────────────────────────── */
/*
  Standalone 24×24 star icon toggle.
  Figma node: 8:4065

  selected: boolean — filled yellow star vs outlined gray star
*/

export function FavouriteButton({ selected = false, onClick, 'aria-label': ariaLabel = 'Favourite', style, className }) {
  const [hovered, setHovered] = useState(false)

  const color = selected
    ? 'var(--color-accent-yellow)'               // filled → yellow
    : hovered
      ? 'var(--color-text-grey-dark)'               // hover unselected → darker gray
      : 'var(--color-text-grey)'             // default unselected → light gray

  const fill = selected ? 1 : 0

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={selected}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        background: 'none',
        border:     'none',
        padding:    0,
        cursor:     'pointer',
        color,
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              'var(--size-icon-xl)',
          lineHeight:            1,
        }}
      >
        star
      </span>
    </button>
  )
}

/* ── IconButton ────────────────────────────────────────────── */
/*
  Square button containing a single Material Symbol icon.

  icon:     Material Symbol name string
  size:     'sm' (32px) | 'md' (40px, default) | 'lg' (48px)
  variant:  'default' (ghost) | 'outlined' (with border)
  active:   boolean — brand-primary-light background
  disabled: boolean
  onClick:  handler
  style:    overrides
*/

export function IconButton({
  icon,
  size     = 'md',
  variant  = 'default',
  active   = false,
  disabled = false,
  onClick,
  style,
  'aria-label': ariaLabel,
}) {
  const dim = size === 'sm' ? '32px' : size === 'lg' ? '48px' : '40px'
  const iconSize = size === 'sm' ? 'var(--size-icon-md)' : size === 'lg' ? 'var(--size-icon-xl)' : 'var(--size-icon-lg)'

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel ?? icon}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           dim,
        height:          dim,
        flexShrink:      0,
        border:          variant === 'outlined' ? '1px solid var(--color-border-grey-light)' : 'none',
        borderRadius:    'var(--radius-sm)',
        backgroundColor: active ? 'var(--color-brand-primary-light)' : 'transparent',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        opacity:         disabled ? 'var(--opacity-disabled)' : 1,
        padding:         0,
        ...style,
      }}
    >
      <span style={{
        fontFamily:            "'Material Symbols Rounded'",
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              iconSize,
        lineHeight:            1,
        color:                 active ? 'var(--color-brand-primary-dark)' : 'var(--color-text-dark)',
        userSelect:            'none',
        display:               'block',
      }} aria-hidden="true">{icon}</span>
    </button>
  )
}

/* ── LargeIconButton ───────────────────────────────────────── */
/*
  Icon stacked above a label — used in commodity nav and similar
  large-icon navigation patterns.

  icon:     ReactNode (e.g. an <img> or inline SVG)
  label:    string
  active:   boolean — blue bottom border + blue label
  disabled: boolean
  onClick:  handler
  style:    overrides
*/

export function LargeIconButton({ iconSrc, label, active = false, disabled = false, onClick, style }) {
  const [hovered, setHovered] = useState(false)
  const emphasised = active || hovered

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             'var(--spacing-xs)',
        padding:         'var(--spacing-md)',
        width:           '88px',
        height:          '88px',
        flexShrink:      0,
        border:          'none',
        borderRadius:    'var(--radius-md)',
        backgroundColor: emphasised ? 'var(--color-bg-light)' : 'transparent',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        opacity:         disabled ? 'var(--opacity-disabled)' : 1,
        ...style,
      }}
    >
      <div style={{
        width:                '40px',
        height:               '40px',
        flexShrink:           0,
        backgroundColor:      'var(--color-text-grey-dark)',
        WebkitMaskImage:      `url(${iconSrc})`,
        maskImage:            `url(${iconSrc})`,
        WebkitMaskSize:       'contain',
        maskSize:             'contain',
        WebkitMaskRepeat:     'no-repeat',
        maskRepeat:           'no-repeat',
        WebkitMaskPosition:   'center',
        maskPosition:         'center',
      }} />
      <span style={{
        fontFamily: 'var(--type-family-primary)',
        fontSize:   'var(--type-size-body-md)',
        lineHeight: 'var(--type-lh-body-md)',
        fontWeight: 400,
        color:      'var(--color-text-grey)',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </button>
  )
}

/* ── CardFavouriteButton ───────────────────────────────────── */
/*
  Star toggle designed to sit on a card image.
  Figma node: 98:1722

  Unselected: drop shadow to lift it off the image background.
  Selected:   filled yellow, no shadow.
*/

export function CardFavouriteButton({ selected = false, onClick, 'aria-label': ariaLabel = 'Favourite', style, className }) {
  const color = selected ? 'var(--color-accent-yellow)' : 'var(--color-text-white)'
  const fill  = selected ? 1 : 0

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={selected}
      className={className}
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        background: 'none',
        border:     'none',
        padding:    0,
        cursor:     'pointer',
        color,
        filter:     selected ? 'none' : 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              'var(--size-icon-xl)',
          lineHeight:            1,
        }}
      >
        star
      </span>
    </button>
  )
}
