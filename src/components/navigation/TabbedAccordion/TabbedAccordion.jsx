/* ─────────────────────────────────────────────────────────────
   TabbedAccordion — Design System component library

   Named exports:
     TabbedAccordion   Tab bar + collapsible accordion sections

   tabs:         { value, label, icon?, sections: [{ id, title, icon?, content }] }[]
   defaultTab:   string — value of the initially selected tab
   defaultOpen:  string[] — section IDs open by default (omit = all closed)
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react'

/* ── Accordion item ─────────────────────────────────────────── */

function AccordionItem({ id, title, icon, content, open, onToggle, isLast }) {
  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--color-border-grey-light)' }}>
      <button
        onClick={() => onToggle(id)}
        aria-expanded={open}
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          width:          '100%',
          background:     'none',
          border:         'none',
          padding:        'var(--spacing-md) var(--spacing-lg)',
          cursor:         'pointer',
          fontFamily:     'var(--type-family-primary)',
          fontSize:       'var(--type-size-title-md)',
          lineHeight:     'var(--type-lh-title-md)',
          fontWeight:     600,
          color:          'var(--color-text-dark)',
          textAlign:      'left',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          {icon && (
            <span aria-hidden="true" style={{
              fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              '22px',
              lineHeight:            1,
              color:                 'var(--color-text-dark)',
              userSelect:            'none',
            }}>{icon}</span>
          )}
          {title}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '24px',
            lineHeight:            1,
            color:                 'var(--color-text-grey)',
            userSelect:            'none',
            transition:            'transform 0.2s ease',
            transform:             open ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink:            0,
          }}
        >
          expand_more
        </span>
      </button>

      {/* Body — grid-row collapse for smooth animation */}
      <div
        style={{
          display:       'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition:    'grid-template-rows 0.2s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{ paddingTop: 'var(--spacing-md)', paddingBottom: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)', paddingRight: 'var(--spacing-lg)' }}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── TabbedAccordion ────────────────────────────────────────── */

export function TabbedAccordion({
  tabs = [],
  defaultOpen = [],
  style,
}) {
  const [openItems, setOpenItems] = useState(() => new Set(defaultOpen))

  const handleToggle = (id) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const currentTab = tabs[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}>
      {/* Accordion sections */}
      <div style={{ width: '100%' }}>
        {currentTab?.sections?.map((section, i, arr) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
            icon={section.icon}
            content={section.content}
            open={openItems.has(section.id)}
            onToggle={handleToggle}
            isLast={i === arr.length - 1}
          />
        ))}
      </div>

    </div>
  )
}

export default TabbedAccordion
