import { useState, useId, useRef, useEffect } from 'react'

/* ── Shared base styles ──────────────────────────────────────── */

const LABEL_STYLE = {
  fontFamily:  'var(--type-family-primary)',
  fontSize:    'var(--type-size-body-sm)',
  lineHeight:  'var(--type-lh-body-sm)',
  fontWeight:  500,
  color:       'var(--color-text-grey-dark)',
  display:     'block',
}

const HINT_STYLE_BASE = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-label-md)',
  lineHeight: 'var(--type-lh-label-md)',
}

const FIELD_STYLE = {
  flex:        1,
  border:      'none',
  outline:     'none',
  background:  'transparent',
  fontFamily:  'var(--type-family-primary)',
  fontSize:    'var(--type-size-body-md)',
  lineHeight:  'var(--type-lh-body-md)',
  color:       'var(--color-text-dark)',
  minWidth:    0,
  width:       '100%',
}

const ICON_STYLE = {
  fontFamily:            'Material Symbols Rounded',
  fontSize:              'var(--size-icon-xl)',
  lineHeight:            1,
  color:                 'var(--color-text-grey)',
  userSelect:            'none',
  flexShrink:            0,
}

function borderColor(state, focused) {
  if (state === 'error')  return 'var(--color-border-red)'
  if (focused)            return 'var(--color-border-brand-primary)'
  return 'var(--color-border-grey)'
}

function inputBg(state) {
  if (state === 'disabled') return 'var(--color-bg-input-disabled)'
  return 'var(--color-bg-white)'
}

const SIZE_PADDING = {
  md: 'var(--spacing-sm) var(--spacing-sm-md)',
  sm: 'var(--spacing-xs) var(--spacing-sm)',
}

const SIZE_FONT = {
  md: { fontSize: 'var(--type-size-body-md)', lineHeight: 'var(--type-lh-body-md)' },
  sm: { fontSize: 'var(--type-size-body-sm)', lineHeight: 'var(--type-lh-body-sm)' },
}

function wrapperStyle(state, focused, size = 'md', extra = {}) {
  return {
    display:         'flex',
    alignItems:      'center',
    backgroundColor: inputBg(state),
    border:          `var(--border-width-default) solid ${borderColor(state, focused)}`,
    boxShadow:       state === 'error' || focused ? `0 0 0 1px ${borderColor(state, focused)}` : 'none',
    borderRadius:    'var(--radius-sm)',
    padding:         SIZE_PADDING[size] ?? SIZE_PADDING.md,
    gap:             'var(--spacing-sm)',
    width:           '100%',
    boxSizing:       'border-box',
    ...extra,
  }
}

function Hint({ text, state }) {
  if (!text) return null
  return (
    <span style={{
      ...HINT_STYLE_BASE,
      color: state === 'error' ? 'var(--color-text-red)' : 'var(--color-text-grey-dark)',
    }}>
      {text}
    </span>
  )
}

/* ── Input — plain text ──────────────────────────────────────── */

export function Input({
  label,
  placeholder = 'Placeholder text',
  state = 'enabled',
  size = 'md',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused, size)}>
        <input
          id={inputId}
          style={{ ...FIELD_STYLE, ...SIZE_FONT[size] }}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── NumberInput — numeric entry ────────────────────────────── */

export function NumberInput({
  label,
  placeholder = '0',
  state = 'enabled',
  size = 'md',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused, size)}>
        <input
          id={inputId}
          type="number"
          style={{ ...FIELD_STYLE, ...SIZE_FONT[size] }}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── DollarInput — leading $ icon ────────────────────────────── */

export function DollarInput({
  label,
  placeholder = '0.00',
  state = 'enabled',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused)}>
        <span style={ICON_STYLE} aria-hidden="true">attach_money</span>
        <input
          id={inputId}
          type="number"
          style={FIELD_STYLE}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── SelectInput — custom dropdown ──────────────────────────── */

export function SelectInput({
  label,
  placeholder = 'Select an option',
  options = [],
  state = 'enabled',
  hint,
  id,
  value,
  onChange,
  style,
  className,
}) {
  const [open,    setOpen]    = useState(false)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(null)
  const autoId     = useId()
  const inputId    = id ?? autoId
  const disabled   = state === 'disabled'
  const wrapperRef = useRef(null)

  // Normalise options to { value, label }
  const items = options.map(opt =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  )
  const selected = items.find(o => o.value === value)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function onDown(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') { setOpen(false); setFocused(false) }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function handleSelect(item) {
    onChange?.({ target: { value: item.value } })
    setOpen(false)
    setFocused(false)
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}

      <div ref={wrapperRef} style={{ position: 'relative' }}>

      {/* Trigger */}
      <button
        id={inputId}
        type="button"
        disabled={disabled}
        onClick={() => { if (!disabled) { setOpen(o => !o); setFocused(true) } }}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          ...wrapperStyle(state, focused || open),
          cursor:  disabled ? 'not-allowed' : 'pointer',
          padding: 'var(--spacing-sm) var(--spacing-sm-md)',
        }}
      >
        <span style={{
          ...FIELD_STYLE,
          color:    selected ? 'var(--color-text-dark)' : 'var(--color-text-grey)',
          textAlign: 'left',
          flex:      1,
        }}>
          {selected ? selected.label : placeholder}
        </span>
        <span
          aria-hidden="true"
          style={{
            ...ICON_STYLE,
            transition: 'transform 0.15s',
            transform:  open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          keyboard_arrow_down
        </span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          style={{
            position:        'absolute',
            top:             'calc(100% + var(--spacing-xs))',
            left:            0,
            right:           0,
            zIndex:          'var(--z-dropdown)',
            backgroundColor: 'var(--color-bg-white)',
            border:          'var(--border-width-default) solid var(--color-border-grey-light)',
            borderRadius:    'var(--radius-md)',
            boxShadow:       'var(--shadow-light)',
            padding:         'var(--spacing-xs)',
            display:         'flex',
            flexDirection:   'column',
          }}
        >
          {items.map(item => {
            const isSelected = item.value === value
            const isHovered  = hovered === item.value
            return (
              <div
                key={item.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHovered(item.value)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding:         'var(--spacing-sm) var(--spacing-sm-md)',
                  borderRadius:    'var(--radius-sm)',
                  cursor:          'pointer',
                  backgroundColor: isSelected
                    ? 'var(--color-brand-primary-light)'
                    : isHovered
                    ? 'var(--color-bg-grey-light)'
                    : 'transparent',
                  fontFamily:  'var(--type-family-primary)',
                  fontSize:    'var(--type-size-body-md)',
                  lineHeight:  'var(--type-lh-body-md)',
                  fontWeight:  isSelected ? 500 : 400,
                  color:       isSelected
                    ? 'var(--color-brand-primary-dark)'
                    : 'var(--color-text-dark)',
                }}
              >
                {item.label}
              </div>
            )
          })}
        </div>
      )}

      </div>{/* end position:relative wrapper */}

      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── DefinedUnitInput — attached unit badge on the right ─────── */

export function DefinedUnitInput({
  label,
  placeholder = 'Placeholder text',
  unit = '$/Head',
  unitWidth,
  state = 'enabled',
  size = 'md',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'
  const bc = borderColor(state, focused)
  const pad = SIZE_PADDING[size] ?? SIZE_PADDING.md

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={{
        display:      'flex',
        alignItems:   'stretch',
        width:        '100%',
        borderRadius: 'var(--radius-sm)',
        boxShadow:    state === 'error' || focused ? `0 0 0 1px ${bc}` : 'none',
      }}>
        {/* Text field — left half */}
        <div style={{
          display:         'flex',
          alignItems:      'center',
          flex:            1,
          backgroundColor: inputBg(state),
          border:          `var(--border-width-default) solid ${bc}`,
          borderRight:     'none',
          borderRadius:    'var(--radius-sm) 0 0 var(--radius-sm)',
          padding:         pad,
          minWidth:        0,
          boxSizing:       'border-box',
        }}>
          <input
            id={inputId}
            type="number"
            style={{ ...FIELD_STYLE, ...SIZE_FONT[size] }}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...rest}
          />
        </div>
        {/* Unit label — right badge */}
        <div style={{
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'flex-start',
          backgroundColor: 'var(--color-bg-grey-light)',
          border:          `var(--border-width-default) solid ${bc}`,
          borderLeft:      'none',
          borderRadius:    '0 var(--radius-sm) var(--radius-sm) 0',
          padding:         pad,
          flexShrink:      0,
          ...(unitWidth ? { width: unitWidth, boxSizing: 'border-box' } : {}),
        }}>
          <span style={{
            fontFamily:  'var(--type-family-primary)',
            fontSize:    'var(--type-size-body-sm)',
            lineHeight:  'var(--type-lh-body-sm)',
            fontWeight:  500,
            color:       'var(--color-text-dark)',
            whiteSpace:  'nowrap',
          }}>
            {unit}
          </span>
        </div>
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── PasswordInput — show/hide toggle ───────────────────────── */

export function PasswordInput({
  label,
  placeholder = 'Enter password',
  state = 'enabled',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused,  setFocused]  = useState(false)
  const [showPw,   setShowPw]   = useState(false)
  const [iconHovered, setIconHovered] = useState(false)
  const autoId  = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused)}>
        <input
          id={inputId}
          type={showPw ? 'text' : 'password'}
          style={FIELD_STYLE}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        {!disabled && (
          <button
            type="button"
            onClick={() => setShowPw(s => !s)}
            aria-label={showPw ? 'Hide password' : 'Show password'}
            onMouseEnter={() => setIconHovered(true)}
            onMouseLeave={() => setIconHovered(false)}
            style={{
              display:    'inline-flex',
              alignItems: 'center',
              background: 'none',
              border:     'none',
              padding:    0,
              cursor:     'pointer',
              color:      iconHovered ? 'var(--color-text-grey-dark)' : 'var(--color-text-grey)',
              flexShrink: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily:            'Material Symbols Rounded',
                fontSize:              'var(--size-icon-xl)',
                lineHeight:            1,
                userSelect:            'none',
              }}
            >
              {showPw ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── EmailInput — leading mail icon ─────────────────────────── */

export function EmailInput({
  label,
  placeholder = 'email@example.com',
  state = 'enabled',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId  = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused)}>
        <span style={ICON_STYLE} aria-hidden="true">mail</span>
        <input
          id={inputId}
          type="email"
          style={FIELD_STYLE}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── UrlInput — leading link icon ───────────────────────────── */

export function UrlInput({
  label,
  placeholder = 'https://',
  state = 'enabled',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId  = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused)}>
        <span style={ICON_STYLE} aria-hidden="true">link</span>
        <input
          id={inputId}
          type="url"
          style={FIELD_STYLE}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── TelInput — leading phone icon ──────────────────────────── */

export function TelInput({
  label,
  placeholder = '0400 000 000',
  state = 'enabled',
  hint,
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId  = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused)}>
        <span style={ICON_STYLE} aria-hidden="true">call</span>
        <input
          id={inputId}
          type="tel"
          style={FIELD_STYLE}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

/* ── TextArea — multi-line text entry ───────────────────────── */

export function TextArea({
  label,
  placeholder = 'Enter text',
  state = 'enabled',
  hint,
  rows = 4,
  resize = 'vertical',
  id,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false)
  const autoId  = useId()
  const inputId = id ?? autoId
  const disabled = state === 'disabled'

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}
      <div style={wrapperStyle(state, focused, 'md', { alignItems: 'flex-start' })}>
        <textarea
          id={inputId}
          rows={rows}
          style={{
            ...FIELD_STYLE,
            resize,
            minHeight: '0',
            padding:   0,
          }}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      <Hint text={hint} state={state} />
    </div>
  )
}

export default Input
