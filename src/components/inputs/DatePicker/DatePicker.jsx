/* ─────────────────────────────────────────────────────────────
   DatePicker — Design System component library
   Figma file: TI2QRswI37Xh8W8h5CrypW · Node: 96:2304

   Named exports:
     DatePicker   Single-date picker with calendar dropdown
   ───────────────────────────────────────────────────────────── */

import { useState, useId, useRef, useEffect } from 'react'

/* ── Shared styles ─────────────────────────────────────────── */

const LABEL_STYLE = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  fontWeight: 500,
  color:      'var(--color-text-grey-dark)',
  display:    'block',
}

const HINT_STYLE = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-label-md)',
  lineHeight: 'var(--type-lh-label-md)',
}

const MAT_ICON = {
  fontFamily:            'Material Symbols Rounded',
  lineHeight:            1,
  userSelect:            'none',
}

function Hint({ text, state }) {
  if (!text) return null
  return (
    <span style={{
      ...HINT_STYLE,
      color: state === 'error' ? 'var(--color-text-red)' : 'var(--color-text-grey-dark)',
    }}>
      {text}
    </span>
  )
}

/* ── Calendar logic ────────────────────────────────────────── */

const MONTHS     = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_LABELS = ['M','T','W','T','F','S','S']

function getCalendarDays(year, month) {
  const firstDay    = new Date(year, month, 1)
  const lastDay     = new Date(year, month + 1, 0)
  const startOffset = (firstDay.getDay() + 6) % 7  // Mon = 0

  const days = []

  // Trailing days from previous month
  for (let i = startOffset - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), inMonth: false })
  }
  // Current month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), inMonth: true })
  }
  // Leading days from next month to complete last row
  let next = 1
  while (days.length % 7 !== 0) {
    days.push({ date: new Date(year, month + 1, next++), inMonth: false })
  }

  return days
}

function isSameDay(a, b) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate()
}

function formatDate(date) {
  if (!date) return ''
  const d = String(date.getDate()).padStart(2, '0')
  const m = String(date.getMonth() + 1).padStart(2, '0')
  return `${d} / ${m} / ${date.getFullYear()}`
}

/* ── DayCell ───────────────────────────────────────────────── */

function DayCell({ date, inMonth, isSelected, isToday, onSelect }) {
  const [hovered, setHovered] = useState(false)

  const bg     = isSelected          ? 'var(--color-brand-primary)'  : hovered ? 'var(--color-bg-grey-light)' : 'transparent'
  const color  = isSelected          ? 'var(--color-text-white)'     : isToday  ? 'var(--color-brand-primary)' : 'var(--color-text-grey-dark)'
  const weight = isSelected || isToday ? 500 : 400
  // Always reserve border space to prevent layout shift
  const border = !isSelected && isToday
    ? `var(--border-width-default) solid var(--color-brand-primary)`
    : `var(--border-width-default) solid transparent`

  return (
    <button
      type="button"
      onClick={() => onSelect(date)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width:           '28px',
        height:          '28px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        backgroundColor: bg,
        border,
        borderRadius:    'var(--radius-sm)',
        cursor:          'pointer',
        padding:         'var(--spacing-0-5)',
        boxSizing:       'border-box',
        opacity:         inMonth ? 1 : 'var(--opacity-subtle)',
        fontFamily:      'var(--type-family-primary)',
        fontSize:        'var(--type-size-body-sm)',
        lineHeight:      'var(--type-lh-body-sm)',
        fontWeight:      weight,
        color,
      }}
    >
      {date.getDate()}
    </button>
  )
}

/* ── CalendarPanel ─────────────────────────────────────────── */

function CalendarPanel({ value, viewDate, onSelect, onPrev, onNext }) {
  const today = new Date()
  const days  = getCalendarDays(viewDate.getFullYear(), viewDate.getMonth())
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))

  const navBtn = {
    display:         'inline-flex',
    alignItems:      'center',
    justifyContent:  'center',
    width:           '24px',
    height:          '24px',
    background:      'none',
    border:          'none',
    padding:         0,
    cursor:          'pointer',
    color:           'var(--color-text-grey)',
    borderRadius:    'var(--radius-sm)',
    flexShrink:      0,
  }

  return (
    <div style={{
      backgroundColor: 'var(--color-bg-white)',
      border:          `var(--border-width-default) solid var(--color-border-grey-light)`,
      borderRadius:    'var(--radius-md)',
      padding:         'var(--spacing-md)',
      boxShadow:       'var(--shadow-light)',
      width:           '228px',
      boxSizing:       'border-box',
      display:         'flex',
      flexDirection:   'column',
      gap:             'var(--spacing-md)',
    }}>

      {/* Month/year header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '24px' }}>
        <button onClick={onPrev} style={navBtn} aria-label="Previous month">
          <span style={{ ...MAT_ICON, fontSize: 'var(--size-icon-lg)' }} aria-hidden="true">chevron_left</span>
        </button>
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-md)',
          lineHeight: 'var(--type-lh-body-md)',
          fontWeight: 500,
          color:      'var(--color-text-dark)',
        }}>
          {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
        </span>
        <button onClick={onNext} style={navBtn} aria-label="Next month">
          <span style={{ ...MAT_ICON, fontSize: 'var(--size-icon-lg)' }} aria-hidden="true">chevron_right</span>
        </button>
      </div>

      {/* Calendar grid */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Day-of-week header row */}
        <div style={{
          display:               'grid',
          gridTemplateColumns:   'repeat(7, 28px)',
          backgroundColor:       'var(--color-bg-light)',
          borderRadius:          'var(--radius-xs)',
        }}>
          {DAY_LABELS.map((d, i) => (
            <div key={i} style={{
              width:      '28px',
              height:     '28px',
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-sm)',
              lineHeight: 'var(--type-lh-body-sm)',
              fontWeight: 500,
              color:      'var(--color-text-dark)',
            }}>
              {d}
            </div>
          ))}
        </div>

        {/* Day rows */}
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 28px)' }}>
            {week.map(({ date, inMonth }, di) => (
              <DayCell
                key={di}
                date={date}
                inMonth={inMonth}
                isSelected={isSameDay(date, value)}
                isToday={isSameDay(date, today)}
                onSelect={onSelect}
              />
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}

/* ── DatePicker ────────────────────────────────────────────── */

export function DatePicker({
  label,
  placeholder = 'DD / MM / YYYY',
  value       = null,
  onChange,
  state       = 'enabled',
  hint,
  id,
  style,
  className,
}) {
  const [open,     setOpen]     = useState(false)
  const [focused,  setFocused]  = useState(false)
  const [viewDate, setViewDate] = useState(() => value ?? new Date())

  const autoId    = useId()
  const inputId   = id ?? autoId
  const disabled  = state === 'disabled'
  const isError   = state === 'error'
  const wrapperRef = useRef(null)

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

  // Sync view when value prop changes
  useEffect(() => { if (value) setViewDate(value) }, [value])

  const borderColor = isError
    ? 'var(--color-border-red)'
    : focused || open
    ? 'var(--color-border-brand-primary)'
    : 'var(--color-border-grey)'

  function handleSelect(date) {
    onChange?.(date)
    setViewDate(date)
    setOpen(false)
    setFocused(false)
  }

  return (
    <div
      ref={wrapperRef}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', position: 'relative', ...style }}
      className={className}
    >
      {label && <label htmlFor={inputId} style={LABEL_STYLE}>{label}</label>}

      {/* Trigger button */}
      <button
        id={inputId}
        type="button"
        disabled={disabled}
        onClick={() => { setOpen(o => !o); setFocused(true) }}
        aria-haspopup="true"
        aria-expanded={open}
        style={{
          display:         'flex',
          alignItems:      'center',
          gap:             'var(--spacing-sm)',
          backgroundColor: disabled ? 'var(--color-bg-input-disabled)' : 'var(--color-bg-white)',
          border:          `var(--border-width-default) solid ${borderColor}`,
          boxShadow:       isError || focused || open ? `0 0 0 1px ${borderColor}` : 'none',
          borderRadius:    'var(--radius-sm)',
          padding:         'var(--spacing-sm) var(--spacing-sm-md)',
          width:           '100%',
          boxSizing:       'border-box',
          cursor:          disabled ? 'not-allowed' : 'pointer',
          opacity:         disabled ? 'var(--opacity-disabled)' : 1,
          textAlign:       'left',
        }}
      >
        <span
          aria-hidden="true"
          style={{ ...MAT_ICON, fontSize: 'var(--size-icon-xl)', color: 'var(--color-text-grey)', flexShrink: 0 }}
        >
          calendar_month
        </span>
        <span style={{
          flex:       1,
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-md)',
          lineHeight: 'var(--type-lh-body-md)',
          color:      value ? 'var(--color-text-dark)' : 'var(--color-text-grey)',
        }}>
          {value ? formatDate(value) : placeholder}
        </span>
      </button>

      {/* Calendar dropdown */}
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + var(--spacing-xs))', left: 0, zIndex: 'var(--z-dropdown)' }}>
          <CalendarPanel
            value={value}
            viewDate={viewDate}
            onSelect={handleSelect}
            onPrev={() => setViewDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
            onNext={() => setViewDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
          />
        </div>
      )}

      <Hint text={hint} state={state} />
    </div>
  )
}

export default DatePicker
