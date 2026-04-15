/* ─────────────────────────────────────────────────────────────
   Header — Design System pattern library
   Figma node: 2286:14218 (main) · 2286:14419 (sub-nav)
   File: TI2QRswI37Xh8W8h5CrypW
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react'
import { Logo } from '../../display/Logo/index.js'
import { SearchBar } from '../../inputs/SearchBar/index.js'
import { Avatar } from '../../display/Avatar/index.js'

const matIcon = (name, size = '24px', color = 'var(--color-text-white)') => (
  <span style={{
    fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    fontSize:              size,
    lineHeight:            1,
    color,
    userSelect:            'none',
    flexShrink:            0,
  }} aria-hidden="true">{name}</span>
)

const navBtnBase = {
  display:    'inline-flex',
  alignItems: 'stretch',
  background: 'transparent',
  border:     'none',
  cursor:     'pointer',
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-md)',
  fontWeight: 400,
  color:      'var(--color-text-white)',
  padding:    0,
  whiteSpace: 'nowrap',
}

function IconButton({ icon, label }) {
  return (
    <button
      aria-label={label}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           '40px',
        height:          '40px',
        background:      'transparent',
        border:          'none',
        borderRadius:    'var(--radius-sm)',
        cursor:          'pointer',
        flexShrink:      0,
      }}
    >
      {matIcon(icon)}
    </button>
  )
}

/* ── Exported nav sub-components ────────────────────────────── */

const TOP_LINKS = [
  { label: 'Listings',  dropdown: true  },
  { label: 'Dashboard', dropdown: false },
]

const BOTTOM_LEFT = [
  { label: 'Livestock', dropdown: true  },
  { label: 'Machinery', dropdown: true  },
]

const BOTTOM_RIGHT = [
  { label: 'Price Discovery', icon: 'chart_data' },
  { label: 'News',            icon: 'newspaper' },
  { label: 'Auctions',        icon: 'gavel' },
  { label: 'Results',         icon: 'insert_chart' },
]

export function TopBarNav({ links = TOP_LINKS }) {
  const [active, setActive] = useState(null)
  return (
    <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-lg)' }}>
      {links.map(({ label, dropdown }) => {
        const isActive = active === label
        return (
          <button key={label} onClick={() => setActive(label)} style={{
            ...navBtnBase,
            alignItems: 'center',
            gap:        'var(--spacing-xs)',
            borderTop:  isActive ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
          }}>
            {label}
            {dropdown && (
              <span style={{
                fontFamily:            "'Material Symbols Rounded'",
                fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                fontSize:              '18px',
                lineHeight:            1,
                color:                 'inherit',
              }} aria-hidden="true">expand_more</span>
            )}
          </button>
        )
      })}
    </nav>
  )
}

export function BottomBarLeftNav() {
  const [active, setActive] = useState('Livestock')
  return (
    <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-lg)' }}>
      {BOTTOM_LEFT.map(({ label, dropdown }) => {
        const isActive = active === label
        return (
          <button key={label} onClick={() => setActive(label)} style={{
            ...navBtnBase,
            alignItems:   'center',
            gap:          'var(--spacing-xs)',
            borderBottom: isActive ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
          }}>
            {label}
            {dropdown && matIcon('keyboard_arrow_down', '20px')}
          </button>
        )
      })}
    </nav>
  )
}

export function BottomBarRightNav() {
  const [active, setActive] = useState(null)
  return (
    <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-lg)' }}>
      {BOTTOM_RIGHT.map(({ label, icon }) => {
        const isActive = active === label
        return (
          <button key={label} onClick={() => setActive(label)} style={{
            ...navBtnBase,
            alignItems:   'center',
            gap:          'var(--spacing-xs)',
            borderBottom: isActive ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
          }}>
            {matIcon(icon, '20px', 'var(--color-brand-primary)')}
            {label}
          </button>
        )
      })}
    </nav>
  )
}

/* ── Mobile header ──────────────────────────────────────────── */

export function MobileHeader({ searchPlaceholder = 'Search Upcoming Lots & Auctions' }) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        paddingTop:      'var(--spacing-sm)',
        paddingBottom:   'var(--spacing-sm)',
        paddingLeft:     'var(--spacing-md)',
        paddingRight:    'var(--spacing-md)',
        backgroundColor: 'var(--color-bg-dark)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconButton icon="menu" label="Menu" />
          <Logo variant="light" iconOnly width="32px" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton icon="star" label="Favourites" />
          <IconButton icon="notifications" label="Notifications" />
          <Avatar size={32} verified src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="User" style={{ marginLeft: 'var(--spacing-xs)' }} />
        </div>
      </div>
    </header>
  )
}

/* ── Header ─────────────────────────────────────────────────── */

export function Header({
  navLinks = TOP_LINKS,
  searchPlaceholder = 'Search Upcoming Lots & Auctions',
  style,
}) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', flexShrink: 0, ...style }}>

      {/* Top bar */}
      <div style={{
        display:         'flex',
        alignItems:      'stretch',
        justifyContent:  'space-between',
        minHeight:       '56px',
        paddingLeft:     'var(--spacing-lg)',
        paddingRight:    'var(--spacing-lg)',
        backgroundColor: 'var(--color-bg-dark)',
        gap:             'var(--spacing-lg)',
      }}>

        {/* Left — logo + search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', flexShrink: 0, alignSelf: 'center' }}>
          <Logo variant="light" width="175px" />
          <div style={{ width: '450px', flexShrink: 0 }}>
            <SearchBar placeholder={searchPlaceholder} size="sm" />
          </div>
        </div>

        {/* Right — nav links + icon buttons */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-md)', flexShrink: 0 }}>
          <TopBarNav links={navLinks} />

          <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'center', gap: 'var(--spacing-sm)' }}>
            <div style={{ width: '1px', backgroundColor: 'var(--color-text-white)', opacity: 0.3, flexShrink: 0, height: '24px', marginLeft: '4px' }} />
            <IconButton icon="star" label="Favourites" />
            <IconButton icon="notifications" label="Notifications" />
          </div>

          <Avatar size={36} verified src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="User" style={{ alignSelf: 'center' }} />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display:         'flex',
        alignItems:      'stretch',
        justifyContent:  'space-between',
        height:          '48px',
        paddingLeft:     'var(--spacing-lg)',
        paddingRight:    'var(--spacing-lg)',
        backgroundColor: 'var(--color-bg-dark)',
        borderTop:       '1px solid rgba(255,255,255,0.1)',
        flexShrink:      0,
      }}>
        <BottomBarLeftNav />
        <BottomBarRightNav />
      </div>

    </header>
  )
}

export default Header
