import { useState, useId } from 'react'

const LABEL_STYLE = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  fontWeight: 500,
  color:      'var(--color-text-grey-dark)',
  display:    'block',
}

const FIELD_STYLE = {
  flex:       1,
  border:     'none',
  outline:    'none',
  background: 'transparent',
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-md)',
  lineHeight: 'var(--type-lh-body-md)',
  color:      'var(--color-text-grey-dark)',
  minWidth:   0,
  width:      '100%',
}

function fieldWrapper(focused, isError) {
  const bc = isError
    ? 'var(--color-border-red)'
    : focused
    ? 'var(--color-border-brand-primary)'
    : 'var(--color-border-grey)'
  return {
    display:         'flex',
    alignItems:      'center',
    flex:            1,
    backgroundColor: 'var(--color-bg-white)',
    border:          `var(--border-width-default) solid ${bc}`,
    boxShadow:       isError || focused ? `0 0 0 1px ${bc}` : 'none',
    borderRadius:    'var(--radius-sm)',
    padding:         'var(--spacing-sm) var(--spacing-sm-md)',
    minWidth:        0,
    boxSizing:       'border-box',
  }
}

export function MinMaxInput({
  label,
  minPlaceholder = 'Min',
  maxPlaceholder = 'Max',
  state = 'enabled',
  style,
  className,
}) {
  const [focusedMin, setFocusedMin] = useState(false)
  const [focusedMax, setFocusedMax] = useState(false)
  const minId = useId()
  const maxId = useId()
  const disabled = state === 'disabled'
  const isError  = state === 'error'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', opacity: disabled ? 'var(--opacity-disabled)' : 1, ...style }}
      className={className}
    >
      {label && <span style={LABEL_STYLE}>{label}</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        <div style={fieldWrapper(focusedMin, isError)}>
          <input
            id={minId}
            style={FIELD_STYLE}
            placeholder={minPlaceholder}
            disabled={disabled}
            onFocus={() => setFocusedMin(true)}
            onBlur={() => setFocusedMin(false)}
          />
        </div>
        <span style={{
          color:      'var(--color-border-grey)',
          fontSize:   'var(--type-size-body-md)',
          flexShrink: 0,
        }}>—</span>
        <div style={fieldWrapper(focusedMax, isError)}>
          <input
            id={maxId}
            style={FIELD_STYLE}
            placeholder={maxPlaceholder}
            disabled={disabled}
            onFocus={() => setFocusedMax(true)}
            onBlur={() => setFocusedMax(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default MinMaxInput
