/* ─────────────────────────────────────────────────────────────
   Toggle — Design System component library
   Figma file: TI2QRswI37Xh8W8h5CrypW
   Switch/Large: 261:657  ·  Switch/Small: 1001:16752

   Named exports:
     Toggle   On/off switch in two sizes
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react'

/* ── Size scale ────────────────────────────────────────────── */
/*
  All positions are relative to the track element (border-box).
  Handle is absolutely positioned; top: 50% + translateY(-50%) centres it vertically.

  Large (52 × 32):
    Off handle (16px): left 8px  → centre 16px
    On  handle (24px): left 24px → centre 36px
    Hover layer (40px): off left −4px, on left 16px

  Small (44 × 24):
    Off handle (12px): left 7px  → centre 13px
    On  handle (18px): left 20px → centre 29px
    Hover layer (30px): off left −2px, on left 14px
*/

const SIZES = {
  lg: {
    trackW:      '52px',
    trackH:      '32px',
    handleOnSz:  '24px',
    handleOffSz: '16px',
    handleOnL:   '24px',
    handleOffL:  '8px',
    hoverSz:     '40px',
    hoverOnL:    '16px',
    hoverOffL:   '-4px',
  },
  sm: {
    trackW:      '44px',
    trackH:      '24px',
    handleOnSz:  '18px',
    handleOffSz: '12px',
    handleOnL:   '22px',
    handleOffL:  '7px',
    hoverSz:     '30px',
    hoverOnL:    '16px',
    hoverOffL:   '-2px',
  },
}

const LABEL_TEXT = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  color:      'var(--color-text-grey-dark)',
}

/* ── Toggle ────────────────────────────────────────────────── */

export function Toggle({
  label,
  checked   = false,
  onChange,
  disabled  = false,
  size      = 'lg',
  style,
  className,
}) {
  const [hovered, setHovered] = useState(false)
  const s = SIZES[size] ?? SIZES.lg

  /* Track */
  const trackBg = checked ? 'var(--color-brand-primary)' : 'var(--color-bg-grey-light)'

  /* Handle */
  const handleBg = checked
    ? (hovered && !disabled ? 'var(--color-brand-primary-light)' : 'var(--color-bg-white)')
    : 'var(--color-bg-white)'

  /* Hover state layer colours — colour-mix references semantic tokens */
  const hoverLayerBg = checked
    ? 'color-mix(in srgb, var(--color-brand-primary) 8%, transparent)'
    : 'color-mix(in srgb, var(--color-text-grey) 8%, transparent)'

  return (
    <label
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        gap:        'var(--spacing-sm)',
        cursor:     disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
      className={className}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hidden native checkbox — keeps form semantics */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ display: 'none' }}
      />

      {/* Track */}
      <span style={{
        position:        'relative',
        display:         'inline-block',
        width:           s.trackW,
        height:          s.trackH,
        borderRadius:    'var(--radius-full)',
        backgroundColor: trackBg,
        boxSizing:       'border-box',
        flexShrink:      0,
        transition:      'background-color 0.15s ease, border-color 0.15s ease',
      }}>

        {/* Hover state layer — ripple behind thumb */}
        {hovered && !disabled && (
          <span style={{
            position:        'absolute',
            width:           s.hoverSz,
            height:          s.hoverSz,
            borderRadius:    'var(--radius-full)',
            top:             '50%',
            transform:       'translateY(-50%)',
            left:            checked ? s.hoverOnL : s.hoverOffL,
            backgroundColor: hoverLayerBg,
            pointerEvents:   'none',
          }} />
        )}

        {/* Thumb */}
        <span style={{
          position:        'absolute',
          width:           checked ? s.handleOnSz : s.handleOffSz,
          height:          checked ? s.handleOnSz : s.handleOffSz,
          borderRadius:    'var(--radius-full)',
          top:             '50%',
          transform:       'translateY(-50%)',
          left:            checked ? s.handleOnL : s.handleOffL,
          backgroundColor: handleBg,
          opacity:         disabled && !checked ? 0.38 : 1,
          boxShadow:       checked && !disabled ? 'var(--shadow-soft)' : 'none',
          transition:      'left 0.15s ease, width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        }} />

      </span>

      {label && <span style={LABEL_TEXT}>{label}</span>}
    </label>
  )
}

export default Toggle
