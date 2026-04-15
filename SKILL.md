---
name: design-system
description: >
  Build, update, and maintain UI components for the Design System design system
  at AuctionsPlus. Use this skill whenever working with the Design System component
  library, building React components from Figma designs, wiring Design System tokens,
  running Figma console scripts, auditing component coverage, or doing any design-to-code
  work in the design-system project. Triggers on: "build a component", "from Figma",
  "Design System", "design system", "token wiring", "component library", "lot card",
  "tag component", or any mention of the AuctionsPlus UI. Always use this skill
  when the user is working on anything in the design-system project directory.
---

# Design System — AuctionsPlus Design System

Design System is the AuctionsPlus design system. React + Vite + Tailwind (v3).
Connects a Figma file to code via Figma MCP and Code Connect.

**Figma file key:** `TI2QRswI37Xh8W8h5CrypW`
**Project:** `~/Desktop/design-system/`

## Reference Files — Read Before Building

| File | When to read |
|---|---|
| `references/html-structure.md` | **Always — read first** |
| `references/tokens.md` | When wiring tokens or checking variable names |
| `references/components.md` | When finding node IDs or checking build status |

---

## Quick Start Workflow

**Every task — component, pattern, shell, screen, or prototype — must follow these steps in order. No skipping.**

1. Read `references/html-structure.md` — HTML/flexbox rules, nesting rules
2. Read `references/tokens.md` — token names and values, never guess
3. Read `references/components.md` — check what already exists, always reuse before rebuilding
4. Build flat component, inline styles, CSS variables only
5. Write `src/components/[category]/[Name]/[Name].jsx` + `index.js`
6. Add to `src/App.jsx` showcase under correct section
7. Update `references/components.md` — set status ✅, add file path

## Figma Rules

- **Never call Figma tools automatically** — only use `get_design_context` or any other Figma MCP tool when the user explicitly asks (e.g. "check Figma", "pull from Figma", or provides a Figma URL)
- When Figma is needed, get the node ID from `references/components.md`

---

## Project Structure

```
src/
  tokens/
    primitives.css      ← raw values — NEVER use in components
    semantics.css       ← semantic aliases — ALWAYS use these
  components/
    actions/            ← Button, IconButton
    display/            ← Tag, Badge, Chip, Avatar
    inputs/             ← Input, Checkbox, Radio, SearchBar, Dropdown
    feedback/           ← Message, Tooltip, Toast
    navigation/         ← Breadcrumb, Tab
  patterns/
    cards/              ← LotCard, AuctionCard, NewsCard
    navigation/         ← SideNav, Header
    lot/                ← LotDetails, AgentContact
    catalogue/          ← CatalogueHeader, FilterBar
  experiences/          ← full page layouts
  index.css             ← tokens + Tailwind base
  App.jsx               ← component showcase
```

---

## Icons

Always use **Material Symbols Rounded**. Never Outlined, never Sharp.

```jsx
// ✅ CORRECT
<span style={{ fontFamily: "'Material Symbols Rounded'", fontSize: 'var(--size-icon-xl)', lineHeight: 1 }}>
  dashboard
</span>

// ❌ WRONG
<span style={{ fontFamily: "'Material Symbols Outlined'" }}>dashboard</span>
```

Font is loaded in `src/index.css`. Size should always use a `--size-icon-` token.

---

## Styling Rules — Summary

Full rules in `references/html-structure.md`. Key points:

```jsx
// ✅ CORRECT — inline styles with CSS variables
<span style={{
  backgroundColor: 'var(--color-brand-primary-subtle)',
  color:           'var(--color-text-subtle)',
  fontSize:        'var(--type-size-label-md)',
  lineHeight:      'var(--type-lh-label-md)',
  padding:         'var(--spacing-0-5) var(--spacing-xs)',
  borderRadius:    'var(--radius-xs)',
  fontWeight:      500,
  fontFamily:      'var(--type-family-primary)',
}}>

// ❌ WRONG — hardcoded values
<span style={{ backgroundColor: '#E3F2FE', fontSize: '12px' }}>

// ❌ WRONG — Tailwind colour/type classes
<span className="bg-blue-100 text-sm text-gray-700">
```

---

## Token Mapping — Figma → CSS

| Figma variable | CSS variable |
|---|---|
| `color/brand/primary` | `var(--color-brand-primary)` |
| `color/bg/white` | `var(--color-bg-white)` |
| `color/bg/grey-extra-light` | `var(--color-bg-light)` |
| `color/bg/dark-dark` | `var(--color-bg-dark)` |
| `color/bg/dark-default` | `var(--color-bg-default)` |
| `color/bg/green` | `var(--color-bg-green)` |
| `color/text/white` | `var(--color-text-white)` |
| `color/text/black` | `var(--color-text-black)` |
| `color/border/grey-dark` | `var(--color-border-grey-dark)` |
| `color/accent/yellow` | `var(--color-accent-yellow)` |
| `spacing/md` | `var(--spacing-md)` |
| `spacing/0-5` | `var(--spacing-0-5)` |
| `border-radius/xs` | `var(--radius-xs)` |
| `border-radius/sm` | `var(--radius-sm)` |
| `border-radius/md` | `var(--radius-md)` |
| `border-radius/full` | `var(--radius-full)` |
| `typography/size/label-md` | `var(--type-size-label-md)` |
| `typography/line-height/label-md` | `var(--type-lh-label-md)` |
| `typography/family/primary` | `var(--type-family-primary)` |

---

## Button Hover Tokens

Button hover states use `color-mix()` to produce a 90% tint of the base colour. Always reference these tokens — never hardcode hover colours.

| Token | Formula | Variant |
|---|---|---|
| `--color-btn-primary-hover` | `color-mix(in srgb, var(--color-brand-primary) 90%, white)` | Primary |
| `--color-btn-secondary-hover` | `var(--color-bg-grey-light)` | Secondary |
| `--color-btn-positive-hover` | `color-mix(in srgb, var(--color-bg-green) 90%, white)` | Positive |
| `--color-btn-destructive-hover` | `color-mix(in srgb, var(--color-bg-red) 90%, white)` | Destructive |

Usage in `VARIANTS` map:
```js
primary: {
  bg:      'var(--color-brand-primary)',
  hoverBg: 'var(--color-btn-primary-hover)',
},
secondary: {
  bg:      'transparent',
  hoverBg: 'var(--color-btn-secondary-hover)',
},
```

---

## Component Template

```jsx
// src/components/[category]/[Name]/[Name].jsx

const variants = {
  primary: {
    bg:     'var(--color-brand-primary)',
    text:   'var(--color-text-white)',
    border: null,
  },
  secondary: {
    bg:     'var(--color-bg-white)',
    text:   'var(--color-text-grey-dark)',
    border: 'var(--color-border-grey)',
  },
  default: {
    bg:     'var(--color-bg-white)',
    text:   'var(--color-text-grey)',
    border: null,
  },
}

const sizes = {
  sm: {
    fontSize:   'var(--type-size-label-sm)',
    lineHeight: 'var(--type-lh-label-sm)',
    py:         'var(--spacing-0-5)',
    px:         'var(--spacing-xs)',
  },
  md: {
    fontSize:   'var(--type-size-label-md)',
    lineHeight: 'var(--type-lh-label-md)',
    py:         'var(--spacing-0-5)',
    px:         'var(--spacing-xs)',
  },
  lg: {
    fontSize:   'var(--type-size-body-sm)',
    lineHeight: 'var(--type-lh-body-sm)',
    py:         'var(--spacing-xs)',
    px:         'var(--spacing-sm)',
  },
}

export function ComponentName({ label, variant = 'default', size = 'md', className, style }) {
  const v = variants[variant] ?? variants.default
  const s = sizes[size] ?? sizes.md

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           v.text,
        fontSize:        s.fontSize,
        lineHeight:      s.lineHeight,
        paddingTop:      s.py,
        paddingBottom:   s.py,
        paddingLeft:     s.px,
        paddingRight:    s.px,
        borderRadius:    'var(--radius-xs)',
        fontWeight:      500,
        fontFamily:      'var(--type-family-primary)',
        whiteSpace:      'nowrap',
        border:          v.border ? `1px solid ${v.border}` : 'none',
        ...style,
      }}
    >
      {label}
    </span>
  )
}

export default ComponentName
```

```js
// src/components/[category]/[Name]/index.js
export { ComponentName, default } from './ComponentName.jsx'
```

---

## App.jsx Showcase Pattern

```jsx
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
      <h2 style={{
        fontSize:      'var(--type-size-label-md)',
        fontWeight:    600,
        color:         'var(--color-text-grey)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin:        '0 0 var(--spacing-sm-md) 0',
      }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
        {children}
      </div>
    </div>
  )
}
```

---

## Figma Page Node IDs

| Page | Node ID |
|---|---|
| Foundations | `0:1` |
| Components | `4:3877` |
| Patterns | `10:5151` |
| Experiences | `10:4961` |

---

## Build Status

See `references/components.md` for the full component inventory and all node IDs.

**Actions**
| Component | Status |
|---|---|
| Token system | ✅ Done |
| Button | ✅ Done |

**Display**
| Component | Status |
|---|---|
| Tag | ✅ Done |
| Badge | ✅ Done |
| Chip | ✅ Done |
| Avatar | ✅ Done |
| Image | ✅ Done |
| Logo | ✅ Done |
| EmptyState | ✅ Done |

**Inputs**
| Component | Status |
|---|---|
| Input | ✅ Done |
| MinMaxInput | ✅ Done |
| SearchBar | ✅ Done |
| Checkbox | ✅ Done |
| Radio | ✅ Done |
| Toggle | ✅ Done |
| DatePicker | ✅ Done |

**Feedback**
| Component | Status |
|---|---|
| Message | ✅ Done |
| Toast | ✅ Done |
| Tooltip | ✅ Done |
| ProgressIndicator | ✅ Done |
| ProgressTracker | ✅ Done |
| Announcement | ✅ Done |

**Navigation**
| Component | Status |
|---|---|
| Tab | ✅ Done |
| TabbedAccordion | ✅ Done |
| Breadcrumb | ✅ Done |
| Pagination | ✅ Done |
| CommodityNav | ✅ Done |

**Patterns**
| Component | Status |
|---|---|
| Header | ✅ Done |
| Footer | ✅ Done |
| LotCard | ✅ Done |
| AgentContactCard | ✅ Done |
| LotDetailHeader | ✅ Done |
| DataTable | ✅ Done |

> Node IDs are added to `references/components.md` as components are built.
> Always check that file for the latest list before starting new work.
