import { useState } from 'react'

const SIZES = {
  lg: { height: 'var(--size-btn-lg)', fontSize: 'var(--type-size-body-md)', lineHeight: 'var(--type-lh-body-md)', iconSize: 'var(--size-icon-xl)' },
  sm: { height: 'var(--size-btn-md)', fontSize: 'var(--type-size-body-sm)', lineHeight: 'var(--type-lh-body-sm)', iconSize: 'var(--size-icon-lg)' },
}

export function SearchBar({
  placeholder = 'Search Upcoming Lots & Auctions',
  size = 'lg',
  outline = false,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const s = SIZES[size] ?? SIZES.lg
  const showBorder = outline || focused

  return (
    <div
      style={{
        display:         'flex',
        alignItems:      'center',
        gap:             'var(--spacing-sm)',
        backgroundColor: 'var(--color-bg-white)',
        borderRadius:    'var(--radius-full)',
        border:          showBorder ? `var(--border-width-default) solid ${focused ? 'var(--color-border-brand-primary)' : 'var(--color-border-grey)'}` : `var(--border-width-default) solid transparent`,
        boxShadow:       focused ? `0 0 0 1px var(--color-border-brand-primary)` : 'none',
        paddingLeft:     'var(--spacing-md)',
        paddingRight:    'var(--spacing-lg)',
        height:          s.height,
        width:           '100%',
        boxSizing:       'border-box',
        ...style,
      }}
      className={className}
    >
      <span
        style={{
          fontFamily:            'Material Symbols Rounded',
          fontSize:              s.iconSize,
          lineHeight:            1,
          color:                 'var(--color-text-grey)',
          flexShrink:            0,
          userSelect:            'none',
        }}
        aria-hidden="true"
      >
        search
      </span>
      <input
        style={{
          flex:       1,
          border:     'none',
          outline:    'none',
          background: 'transparent',
          fontFamily: 'var(--type-family-primary)',
          fontSize:   s.fontSize,
          lineHeight: s.lineHeight,
          color:      'var(--color-text-dark)',
          minWidth:   0,
        }}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
    </div>
  )
}

export default SearchBar
