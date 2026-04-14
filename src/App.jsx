import { useState, createContext, useContext } from 'react'
import { ToastProvider, useToast } from './components/feedback/Toast/index.js'
import './index.css'
import './aplus-design-system.css'
import {
  PriceTag, AssessmentTag, AccreditationTag,
  LotStatusTag, PercentileTag, SoldStatusTag,
  NewTag, CardKeyInfoTag,
  AuctionTypeTag, PackageTypeTag, BidStatusTag,
  ListingStatusTag, FeederOptimisedTag,
} from './components/display/Tag/index.js'
import { Button, LargeIconButton, FavouriteButton, CardFavouriteButton } from './components/actions/Button/index.js'
import { Input, NumberInput, DollarInput, SelectInput, DefinedUnitInput, PasswordInput, EmailInput, UrlInput, TelInput, TextArea } from './components/inputs/Input/index.js'
import { MinMaxInput } from './components/inputs/MinMaxInput/index.js'
import { DatePicker } from './components/inputs/DatePicker/index.js'
import { Toggle } from './components/inputs/Toggle/index.js'
import { Logo } from './components/display/Logo/index.js'
import { Badge } from './components/display/Badge/index.js'
import { Chip } from './components/display/Chip/index.js'
import { Message } from './components/feedback/Message/index.js'
import { Tooltip } from './components/feedback/Tooltip/index.js'
import { ProgressIndicator } from './components/feedback/ProgressIndicator/index.js'
import { ProgressTracker } from './components/feedback/ProgressTracker/index.js'
import { Announcement } from './components/feedback/Announcement/index.js'
import { Tab, TabBar } from './components/navigation/Tab/index.js'
import { TabbedAccordion } from './components/navigation/TabbedAccordion/index.js'
import { Breadcrumb } from './components/navigation/Breadcrumb/index.js'
import { Pagination } from './components/navigation/Pagination/index.js'
import { Image } from './components/display/Image/index.js'
import { Avatar } from './components/display/Avatar/index.js'
import { EmptyState } from './components/display/EmptyState/index.js'
import { Radio, RadioGroup } from './components/inputs/Radio/index.js'
import { Checkbox } from './components/inputs/Checkbox/index.js'
import { SearchBar } from './components/inputs/SearchBar/index.js'
import { Header, MobileHeader, TopBarNav, BottomBarLeftNav, BottomBarRightNav } from './components/patterns/Header/index.js'
import { Footer, MobileFooter } from './components/patterns/Footer/index.js'
import { LotCard } from './components/patterns/LotCard/index.js'
import { AgentContactCard } from './components/patterns/AgentContactCard/index.js'
import { LotDetailHeader } from './components/patterns/LotDetailHeader/index.js'
import { DataTable } from './components/patterns/DataTable/index.js'
import { CommodityNav } from './components/navigation/CommodityNav/index.js'

/* ─────────────────────────────────────────────────────────────
   DESIGN CRUSH — Foundations  (dashboard shell)
   ───────────────────────────────────────────────────────────── */

const NAV = [
  { id: 'colours',    label: 'Colours',    icon: '⬤' },
  { id: 'typography', label: 'Typography', icon: 'Aa' },
  { id: 'icons',      label: 'Icons',      icon: '✦' },
  { id: 'spacing',    label: 'Spacing',    icon: '↔' },
  { id: 'shadows',    label: 'Shadows',    icon: '◻' },
  { id: 'radius',     label: 'Radius',     icon: '▢' },
]

const SECTIONS = [
  { id: 'home',         label: 'Home',         matIcon: 'home'        },
  { id: 'foundations',  label: 'Foundations',  matIcon: 'layers'      },
  { id: 'components',   label: 'Components',   matIcon: 'widgets'     },
  { id: 'patterns',     label: 'Patterns',     matIcon: 'view_quilt'  },
  { id: 'experiences',  label: 'Experiences',  matIcon: 'devices'     },
]

export default function App() {
  return (
    <ToastProvider>
      <AppShell />
    </ToastProvider>
  )
}

function AppShell() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="ds-shell">

      {/* ── TOP HEADER ── */}
      <header className="ds-topbar">
        <div className="ds-topbar__logo">
          <img src={`${import.meta.env.BASE_URL}auctionsplus-logo.svg`} alt="AuctionsPlus" />
        </div>
        <div className="ds-topbar__right">
          <span className="ds-topbar__title">Design System</span>
          <span className="ds-topbar__star">☆</span>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="ds-body">

        {/* ── SIDEBAR ── */}
        <nav className="ds-sidebar">
          <div className="ds-sidebar__nav">
            {SECTIONS.map(({ id, label, matIcon }) => (
              <Tooltip key={id} content={label} placement="right" style={{ left: 'calc(100% - -12px)' }}>
                <button
                  className={`ds-nav-icon${id === activeSection ? ' ds-nav-icon--active' : ''}`}
                  onClick={() => setActiveSection(id)}
                >
                  <span className="ds-nav-icon__symbol">{matIcon}</span>
                </button>
              </Tooltip>
            ))}
          </div>
          <div className="ds-sidebar__version">
            <span>v1</span>
          </div>
        </nav>

        {/* ── MAIN CONTENT ── */}
        <main className="ds-main">

          {/* Page header — hidden on home */}
          {activeSection !== 'home' && (
            <div className="ds-page-header">
              <h1 className="ds-page-header__title">
                {SECTIONS.find(s => s.id === activeSection)?.label}
              </h1>
              <p className="ds-page-header__desc">
                {activeSection === 'foundations'  && 'Our core visual language. Built for ag.'}
                {activeSection === 'components'   && 'Reusable UI building blocks for livestock, machinery and commodity workflows.'}
                {activeSection === 'patterns'     && 'Proven layouts and interaction patterns to support ag industry tasks.'}
                {activeSection === 'experiences'  && 'End-to-end flows connecting producers, agents and buyers across the supply chain.'}
              </p>
            </div>
          )}

          {/* ── Home ── */}
          {activeSection === 'home' && (
            <div className="ds-home">
              {/* Guide lines — responsive frame, max 1024px */}
              <div className="ds-home__frame">

                {/* Hero content — heading, subtitle, CTA */}
                <div className="ds-home__hero">
                  <h1 className="ds-home__headline">
                    AuctionsPlus{' '}
                    <span className="ds-home__headline-gradient">Design System</span>
                  </h1>
                  <p className="ds-home__subtitle">
                    A UI component library crafted for consistency, built for ag
                  </p>
                  <Button variant="primary" style={{ marginTop: 'var(--spacing-lg)' }} onClick={() => setActiveSection('foundations')}>Get Started</Button>
                </div>

                {/* Bottom divider */}
                <div className="ds-home__divider" />

                {/* Ticker */}
                <div className="ds-home__ticker">
                  {(() => {
                    const ITEMS = ['Assessment Entry', 'Listings Portal', 'Mobile App', 'Website', 'LiveAssess', 'Dashboard', 'Console']
                    const repeated = [...ITEMS, ...ITEMS]
                    return (
                      <div className="ds-home__ticker-track">
                        {repeated.map((item, i) => (
                          <span key={i} className="ds-home__ticker-item">{item}</span>
                        ))}
                      </div>
                    )
                  })()}
                </div>

                {/* Outline box */}
                <div className="ds-home__outline" />

                {/* Crosshair guide lines */}
                <div className="ds-home__guide ds-home__guide--top" />
                <div className="ds-home__guide ds-home__guide--bottom" />
                <div className="ds-home__guide ds-home__guide--left" />
                <div className="ds-home__guide ds-home__guide--right" />

              </div>
            </div>
          )}

          {/* ── Foundations ── */}
          {activeSection === 'foundations' && <FoundationsSection />}

          {/* ── Components ── */}
          {activeSection === 'components' && <ComponentsSection />}

          {/* ── Patterns ── */}
          {activeSection === 'patterns' && <PatternsSection />}

          {/* ── Experiences ── */}
          {activeSection === 'experiences' && <ExperiencesSection />}

        </main>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Tab Nav  — matches Figma node 2202:30687
   White bar · bottom border · active tab = 3px --color-brand-primary-dark underline
   ───────────────────────────────────────────────────────────── */

function TabNav({ tabs, active, onChange }) {
  return (
    <div className="ds-tab-bar">
      <div className="ds-tab-bar__inner">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`ds-tab-bar__tab${id === active ? ' ds-tab-bar__tab--active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Shared
   ───────────────────────────────────────────────────────────── */

function Card({ children, style = {} }) {
  return (
    <div className="ds-card" style={style}>
      {children}
    </div>
  )
}

function CardHeading({ children }) {
  return (
    <h2 className="ds-card__heading">{children}</h2>
  )
}

function GroupHeader({ children }) {
  return (
    <div className="ds-group-header">
      <span className="ds-group-header__label">{children}</span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Foundations Section
   ───────────────────────────────────────────────────────────── */

const FOUND_NAV = [
  { id: 'colours',      label: 'Colours'      },
  { id: 'typography',   label: 'Typography'   },
  { id: 'icons',        label: 'Icons'        },
  { id: 'logo',         label: 'Logo'         },
  { id: 'spacing',      label: 'Spacing'      },
  { id: 'sizing',       label: 'Sizing'       },
  { id: 'shadows',      label: 'Shadows'      },
  { id: 'radius',       label: 'Radius'       },
  { id: 'border-width', label: 'Border Width' },
  { id: 'opacity',      label: 'Opacity'      },
  { id: 'transition',   label: 'Transition'   },
  { id: 'z-index',      label: 'Z-Index'      },
]

function FoundationsSection() {
  const [active, setActive] = useState('colours')
  return (
    <div className="ds-section-layout">
      <nav className="ds-section-nav">
        {FOUND_NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`ds-section-nav__item${id === active ? ' ds-section-nav__item--active' : ''}`}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="ds-section-content">
        {active === 'colours'      && <ColoursPanel />}
        {active === 'typography'   && <TypographyPanel />}
        {active === 'spacing'      && <SpacingPanel />}
        {active === 'sizing'       && <SizingPanel />}
        {active === 'shadows'      && <ShadowsPanel />}
        {active === 'radius'       && <RadiusPanel />}
        {active === 'border-width' && <BorderWidthPanel />}
        {active === 'opacity'      && <OpacityPanel />}
        {active === 'transition'   && <TransitionPanel />}
        {active === 'z-index'      && <ZIndexPanel />}
        {active === 'icons'        && <IconsPanel />}
        {active === 'logo'         && <LogoDoc />}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Components Section — documentation layout
   ───────────────────────────────────────────────────────────── */

const COMP_NAV = [
  { id: 'button',    label: 'Buttons',       done: true },
  {
    id: 'inputs', label: 'Inputs',
    children: [
      { id: 'inputs-text',     label: 'Text Inputs',   done: true },
      { id: 'inputs-number',   label: 'Number Inputs', done: true },
      { id: 'inputs-dropdown', label: 'Dropdown Menu', done: true },
      { id: 'inputs-special',  label: 'Search Field',  done: true },
      { id: 'inputs-radio',    label: 'Radio Button',  done: true },
      { id: 'inputs-checkbox', label: 'Checkboxes',    done: true },
      { id: 'inputs-date',     label: 'Date Picker',   done: true },
      { id: 'inputs-toggle',   label: 'Toggle',        done: true },
    ],
  },
  { id: 'tags',      label: 'Tags & Badges', done: true },
  { id: 'menu-item', label: 'Nav Item',     done: true },
  { id: 'tab',        label: 'Tab',           done: true },
  { id: 'image',     label: 'Image',         done: true },
  { id: 'avatar',     label: 'Avatar',        done: true },
  { id: 'message',   label: 'Message',       done: true },
  { id: 'tooltip',   label: 'Tooltip',       done: true },
]

function ComponentsSection() {
  const [active, setActive] = useState('button')
  const [openGroups, setOpenGroups] = useState({})

  const toggleGroup = (id) => setOpenGroups(s => ({ ...s, [id]: !s[id] }))

  return (
    <div className="ds-section-layout">
      <nav className="ds-section-nav">
        {COMP_NAV.map((item) => item.children ? (
          <div key={item.id}>
            <button
              onClick={() => toggleGroup(item.id)}
              className="ds-section-nav__group-toggle"
            >
              {item.label}
              <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: '18px', lineHeight: 1 }}>
                {openGroups[item.id] ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openGroups[item.id] && item.children.map(({ id, label, done }) => (
              <button
                key={id}
                onClick={() => done && setActive(id)}
                className={`ds-section-nav__item${id === active ? ' ds-section-nav__item--active' : ''}${!done ? ' ds-section-nav__item--disabled' : ''}`}
                style={{ paddingLeft: 'var(--spacing-lg)' }}
              >
                {label}
              </button>
            ))}
          </div>
        ) : (
          <button
            key={item.id}
            onClick={() => item.done && setActive(item.id)}
            className={`ds-section-nav__item${item.id === active ? ' ds-section-nav__item--active' : ''}${!item.done ? ' ds-section-nav__item--disabled' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="ds-section-content">
        {active === 'button'          && <ButtonDoc />}
        {active === 'inputs-text'     && <TextInputDoc />}
        {active === 'inputs-number'   && <NumberDoc />}
        {active === 'inputs-dropdown' && <DropdownDoc />}
        {active === 'inputs-special'  && <SpecialDoc />}
        {active === 'inputs-radio'    && <RadioDoc />}
        {active === 'inputs-checkbox' && <CheckboxDoc />}
        {active === 'inputs-date'     && <DatePickerDoc />}
        {active === 'inputs-toggle'   && <ToggleDoc />}
        {active === 'tab'             && <TabDoc />}
        {active === 'tags'            && <TagsDoc />}
        {active === 'image'           && <ImageDoc />}
        {active === 'avatar'          && <AvatarDoc />}
        {active === 'message'         && <MessageDoc />}
        {active === 'tooltip'         && <TooltipDoc />}
        {active === 'menu-item'       && <MenuItemDoc />}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Patterns Section
   ───────────────────────────────────────────────────────────── */

const PATTERNS_NAV = [
  {
    id: 'pat-navigation', label: 'Navigation',
    children: [
      { id: 'pat-header',          label: 'Header',               description: 'The top-level navigation bar containing the logo, primary navigation links, and account controls.' },
      { id: 'pat-footer',          label: 'Footer',               description: 'Site-wide footer with navigation links, legal text, and supporting information.' },
      { id: 'pat-mega-menu',       label: 'Mega Menu',            description: 'An expanded navigation panel revealing categorised links and featured content on hover.' },
      { id: 'pat-side-nav',        label: 'Side Navigation',      description: 'A vertical navigation panel used in dashboards and admin interfaces for page-level routing.' },
      { id: 'pat-tabbed-nav',      label: 'Tabbed Navigation',    description: 'A horizontal tab strip for switching between related content sections within a page.' },
      { id: 'pat-commodity-nav',   label: 'Commodity Navigation', description: 'A specialised horizontal nav for filtering and switching between livestock commodity types.' },
      { id: 'pat-breadcrumbs',     label: 'Breadcrumbs',          description: "A secondary navigation aid showing the user's current location within the site hierarchy." },
      { id: 'pat-pagination',      label: 'Pagination',           description: 'Controls for navigating between pages of a large data set or search results list.' },
    ],
  },
  {
    id: 'pat-content', label: 'Content',
    children: [
      { id: 'pat-header-content',   label: 'Content Header',   description: 'Content patterns used within page headers, including titles, metadata, and contextual actions.' },
      { id: 'pat-flyout-filter',    label: 'Filter',           description: 'A slide-in panel from the left containing filter categories as individual accordion sections.' },
      { id: 'pat-tabbed-accordion', label: 'Tabbed Accordion', description: 'A hybrid component combining tab navigation with collapsible accordion sections.' },
      { id: 'pat-table',            label: 'Table',            description: 'A structured data display for listing records with sortable columns and row actions.' },
    ],
  },
  {
    id: 'pat-cards', label: 'Cards',
    children: [
      { id: 'pat-contact-card',    label: 'Contact Card',     description: "A compact card displaying a person's name, role, and contact details." },
      { id: 'pat-action-card',     label: 'Action Card',      description: 'A card with a primary call-to-action used to drive users toward a key task.' },
      { id: 'pat-lot-card',        label: 'Lot Card',         description: 'The primary card pattern for displaying auction lot listings with image, key info, and pricing.' },
      { id: 'pat-auction-card',    label: 'Auction Card',     description: 'A card representing an auction event with key details, status, and entry information.' },
      { id: 'pat-advertising-card',label: 'Advertising Card', description: 'A promotional card used for featured listings, banners, and sponsored content placements.' },
    ],
  },
  {
    id: 'pat-overlays', label: 'Overlays',
    children: [
      { id: 'pat-modal',         label: 'Modal',          description: 'A dialog that appears over the page to capture user input or confirm a critical action.' },
      { id: 'pat-search-modal',  label: 'Search Modal',   description: 'A full-width overlay providing an expanded search experience with live results.' },
      { id: 'pat-flyout',        label: 'Fly-Out Drawer', description: 'A panel that slides in from the edge of the screen for filters, detail views, or secondary content.' },
    ],
  },
  {
    id: 'pat-feedback', label: 'Feedback',
    children: [
      { id: 'pat-toast',              label: 'Toast Notifications', description: 'Temporary inline messages that confirm an action or alert the user to a system event.' },
      { id: 'pat-announcements',      label: 'Announcements',       description: 'Persistent banners used to communicate important platform-wide updates to all users.' },
      { id: 'pat-empty-state',        label: 'Empty State',         description: 'A placeholder displayed when a list, page, or section has no content to show.' },
      { id: 'pat-progress-indicator', label: 'Progress Indicator',  description: 'A visual indicator showing completion status for a loading process or multi-step task.' },
      { id: 'pat-progress-tracker',   label: 'Progress Tracker',    description: 'A stepped indicator guiding users through a multi-stage workflow or form.' },
    ],
  },
]

const EXPERIENCES_NAV = [
  { id: 'exp-website',          label: 'Website' },
  { id: 'exp-dashboard',        label: 'Dashboard' },
  { id: 'exp-listings-portal',  label: 'Listings Portal' },
  { id: 'exp-assessment-entry', label: 'Assessment Entry' },
  { id: 'exp-mobile-app',       label: 'Mobile App' },
  { id: 'exp-liveassess',       label: 'LiveAssess' },
  { id: 'exp-console',          label: 'Console' },
]

function ExperiencesSection() {
  const [active, setActive] = useState('exp-website')
  const activeItem = EXPERIENCES_NAV.find(n => n.id === active)

  return (
    <div className="ds-section-layout">
      <nav className="ds-section-nav">
        {EXPERIENCES_NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`ds-section-nav__item${id === active ? ' ds-section-nav__item--active' : ''}`}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="ds-section-content">
        <ComingSoonDoc title={activeItem?.label} />
      </div>
    </div>
  )
}

function PatternsSection() {
  const [active, setActive] = useState('pat-header')
  const [openGroups, setOpenGroups] = useState({ 'pat-navigation': true })

  const toggleGroup = (id) => setOpenGroups(s => ({ ...s, [id]: !s[id] }))

  const activeItem = PATTERNS_NAV.flatMap(g => g.children).find(c => c.id === active)

  return (
    <div className="ds-section-layout">
      <nav className="ds-section-nav">
        {PATTERNS_NAV.map(({ id, label, children }) => (
          <div key={id}>
            <button
              onClick={() => toggleGroup(id)}
              className="ds-section-nav__group-toggle"
            >
              {label}
              <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: '18px', lineHeight: 1 }}>
                {openGroups[id] ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openGroups[id] && children.map(({ id: cId, label: cLabel }) => (
              <button
                key={cId}
                onClick={() => setActive(cId)}
                className={`ds-section-nav__item${cId === active ? ' ds-section-nav__item--active' : ''}`}
                style={{ paddingLeft: 'var(--spacing-lg)' }}
              >
                {cLabel}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="ds-section-content">
        {active === 'pat-header'             ? <HeaderDoc /> :
         active === 'pat-footer'             ? <FooterDoc /> :
         active === 'pat-contact-card'       ? <ContactCardDoc /> :
         active === 'pat-auction-card'       ? <AuctionCardDoc /> :
         active === 'pat-advertising-card'   ? <AdvertisingCardDoc /> :
         active === 'pat-lot-card'           ? <LotCardDoc /> :
         active === 'pat-empty-state'        ? <EmptyStateDoc /> :
         active === 'pat-progress-indicator' ? <ProgressIndicatorDoc /> :
         active === 'pat-progress-tracker'   ? <ProgressTrackerDoc /> :
         active === 'pat-announcements'      ? <AnnouncementsDoc /> :
         active === 'pat-toast'              ? <ToastDoc /> :
         active === 'pat-header-content'     ? <HeaderContentDoc /> :
         active === 'pat-flyout-filter'      ? <FlyoutFilterDoc /> :
         active === 'pat-tabbed-accordion'   ? <TabbedAccordionDoc /> :
         active === 'pat-table'              ? <TableDoc /> :
         active === 'pat-side-nav'           ? <SideNavDoc /> :
         active === 'pat-tabbed-nav'         ? <TabbedNavDoc /> :
         active === 'pat-commodity-nav'      ? <CommodityNavDoc /> :
         active === 'pat-breadcrumbs'        ? <BreadcrumbDoc /> :
         active === 'pat-pagination'         ? <PaginationDoc /> :
         <ComingSoonDoc title={activeItem?.label} description={activeItem?.description} />}
      </div>
    </div>
  )
}

/* ── Pattern docs ───────────────────────────────────────────── */

function HeaderDoc() {
  const [view, setView] = useState('desktop')
  const isDesktop = view === 'desktop'
  return (
    <DocPage
      title="Header"
      description="Global navigation bar with logo, search, nav links, and user controls."
      figmaNodeId="2286:14218"
    >
      <DocSection title="Interactive">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-lg)' }}>
          <Toggle
            label="Mobile view"
            checked={!isDesktop}
            onChange={() => setView(isDesktop ? 'mobile' : 'desktop')}
            size="sm"
          />
          <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', ...(isDesktop ? {} : { maxWidth: '390px' }) }}>
            {isDesktop ? <Header /> : <MobileHeader />}
          </div>
        </div>
        <CodeBlock code={`<Header navLinks={['Listings', 'Dashboard']} />`} />
      </DocSection>
    </DocPage>
  )
}

function FooterDoc() {
  const [view, setView] = useState('desktop')
  const isDesktop = view === 'desktop'
  return (
    <DocPage
      title="Footer"
      description="Site-wide footer with nav links, app badges, and social icons."
      figmaNodeId="2286:14270"
    >
      <DocSection title="Interactive">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-lg)' }}>
          <Toggle
            label="Mobile view"
            checked={!isDesktop}
            onChange={() => setView(isDesktop ? 'mobile' : 'desktop')}
            size="sm"
          />
          <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', ...(isDesktop ? {} : { maxWidth: '390px' }) }}>
            {isDesktop ? <Footer /> : <MobileFooter />}
          </div>
        </div>
        <CodeBlock code={`<Footer />`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Contact Card documentation ─────────────────────────────── */

const ELDERS_LOGO = `${import.meta.env.BASE_URL}elders-logo.png`
const AGENT_PHOTO = 'https://images.unsplash.com/photo-1504224357642-c87eacea1da4?q=80&w=1775&auto=format&fit=crop'

function ContactCardDoc() {
  return (
    <DocPage
      title="Contact Card"
      description="Agent card with name, role, contact actions, and agency branding."
    >
      <DocSection title="Contact Card">
        <Demo style={{ padding: 'var(--spacing-lg)', background: 'var(--color-bg-light)' }}>
          <AgentContactCard
              agentName="Tim Smith"
              agentRole="Agent/Assessor"
              avatarSrc={AGENT_PHOTO}
              agencyLogo={ELDERS_LOGO}
              agencyName="Elders Roma"
            />
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Advertising Card documentation ─────────────────────────── */

function AdvertisingCardDoc() {
  return (
    <DocPage
      title="Advertising Card"
      description="Promotional card for featured listings and sponsored content."
    >
      <DocSection title="Horizontal Ad — 16/3">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <p style={{ fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-sm)', color: 'var(--color-text-grey-dark)' }}>Coming soon</p>
        </Demo>
      </DocSection>

      <DocSection title="Vertical Ad — 16/3">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <p style={{ fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-sm)', color: 'var(--color-text-grey-dark)' }}>Coming soon</p>
        </Demo>
      </DocSection>

      <DocSection title="Ad — 1/1">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <p style={{ fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-sm)', color: 'var(--color-text-grey-dark)' }}>Coming soon</p>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Auction Card documentation ─────────────────────────────── */

function AuctionCardRow({ commodity = 'cattle', title, auctionNo, commodityLabel, auctionType, lotCount, timer, cta }) {
  return (
    <div style={{
      display:        'flex',
      alignItems:     'flex-start',
      justifyContent: 'space-between',
      padding:        'var(--spacing-md) var(--spacing-md)',
      borderBottom:   '1px solid var(--color-border-grey-light)',
      width:          '100%',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        {/* Commodity tag */}
        <div style={{
          width:           '62px',
          height:          '62px',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-bg-blue-light)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          flexShrink:      0,
        }}>
          <img
            src={`${import.meta.env.BASE_URL}icons/commodity/${commodity}.svg`}
            alt={commodity}
            style={{ width: '40px', height: '40px' }}
          />
        </div>

        {/* Text block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-md)',
            lineHeight: 'var(--type-lh-body-md)',
            fontWeight: 600,
            color:      'var(--color-text-dark)',
            whiteSpace: 'nowrap',
          }}>{title}</span>

          {/* Features row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            {[auctionNo, commodityLabel, auctionType, lotCount].filter(Boolean).map((item, i, arr) => (
              <span key={i} style={{
                fontFamily: 'var(--type-family-primary)',
                fontSize:   'var(--type-size-body-sm)',
                lineHeight: 'var(--type-lh-body-sm)',
                color:      'var(--color-text-grey-dark)',
                whiteSpace: 'nowrap',
              }}>
                {item}{i < arr.length - 1 && <span style={{ marginLeft: 'var(--spacing-xs)' }}>•</span>}
              </span>
            ))}
          </div>

          {/* Timer */}
          {timer && (
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-label-md)',
              lineHeight: 'var(--type-lh-label-md)',
              color:      'var(--color-text-grey-dark)',
              whiteSpace: 'nowrap',
            }}>{timer}</span>
          )}
        </div>
      </div>

      {/* CTA */}
      {cta && (
        <button
          onClick={cta.onClick}
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            justifyContent:  'center',
            height:          'var(--size-btn-md)',
            padding:         '0 var(--spacing-lg)',
            backgroundColor: 'var(--color-bg-green)',
            border:          'none',
            borderRadius:    'var(--radius-sm)',
            cursor:          'pointer',
            fontFamily:      'var(--type-family-primary)',
            fontSize:        'var(--type-size-body-sm)',
            fontWeight:      500,
            color:           'var(--color-text-white)',
            whiteSpace:      'nowrap',
            flexShrink:      0,
          }}
        >{cta.label}</button>
      )}
    </div>
  )
}

function AuctionCardDoc() {
  return (
    <DocPage
      title="Auction Card"
      description="Auction event card with key details, status, and entry info."
    >
      <DocSection title="Row">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <AuctionCardRow
            commodity="cattle"
            title="Eastern States Cattle Sale"
            auctionNo="Auction No."
            commodityLabel="Commodity"
            auctionType="Auction Type"
            lotCount="No. of Lots"
            timer="Timer on: Mon, 17 February 2025, 4:00 PM AEDT"
            cta={{ label: 'Connect to Bid', onClick: () => {} }}
          />
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Lot Card documentation ────────────────────────────────── */

function LotCardDoc() {
  return (
    <DocPage
      title="Lot Card"
      description="Auction lot card with photo, specs, EBV indices, tags, and agency footer."
      figmaNodeId="2199:24939"
    >
      <DocSection title="Full card — with ABVs">
        <Demo style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <DemoGroup column>
            <LotCard
              images={[
                'https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?q=80&w=774&auto=format&fit=crop',
              ]}
              imgObjectPosition="center calc(100% + 50px)"
              location="Elmore, VIC"
              title="Lot 12 - Pepperton Tag 512"
              breeder="Pepperton Poll Dorsets"
              specs={[
                { key: 'Breed',  value: 'Poll Dorset' },
                { key: 'Type',   value: 'Ram'         },
                { key: 'Sire',   value: 'Pepperton'   },
                { key: 'Dam',    value: 'Pepperton'   },
                { key: 'Age',    value: '22 months'   },
                { key: 'Weight', value: '92 kg'       },
              ]}
              abvs={[
                { key: 'WWT',    value: '13.80', percentile: 5  },
                { key: 'CWT',    value: '8.58',  percentile: 5  },
                { key: 'PEMD',   value: '4.64',  percentile: 5  },
                { key: 'LE_DIR', value: '1.51',  percentile: 20 },
              ]}
              tags={['$/Head', 'Assessed']}
              agencyLogo={`${import.meta.env.BASE_URL}elders-logo.png`}
              agencyName="Elders Bendigo"
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<LotCard\n  images={[img1, img2]}\n  location="Elmore, VIC"\n  title="Lot 12 - Pepperton Tag 512"\n  breeder="Pepperton Poll Dorsets"\n  specs={[\n    { key: 'Breed', value: 'Poll Dorset' },\n    { key: 'Type',  value: 'Ram' },\n  ]}\n  abvs={[\n    { key: 'WWT', value: '13.80', percentile: 5 },\n  ]}\n  tags={['$/Head', 'Assessed']}\n  agencyName="Elders Bendigo"\n/>`} />
      </DocSection>

      <DocSection title="Minimal — no ABVs">
        <Demo style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <DemoGroup column>
            <LotCard
              images={['https://images.unsplash.com/photo-1734678341315-09625ffd8bf0?q=80&w=774&auto=format&fit=crop']}
              location="Wagga Wagga, NSW"
              title="Lot 4 - Angus Steers"
              breeder="Hillside Pastoral"
              specs={[
                { key: 'Breed',  value: 'Angus'    },
                { key: 'Type',   value: 'Steer'    },
                { key: 'Age',    value: '18 months' },
                { key: 'Weight', value: '480 kg'   },
              ]}
              tags={['$/kg']}
              agencyLogo={`${import.meta.env.BASE_URL}elders-logo.png`}
              agencyName="Elders Wagga"
            />
          </DemoGroup>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Doc primitives ────────────────────────────────────────── */

const DocPageContext = createContext('')

function DocPage({ title, description, figmaNodeId, children }) {
  return (
    <DocPageContext.Provider value={title}>
      <div className="ds-doc-page">
        {children}
      </div>
    </DocPageContext.Provider>
  )
}

/* Each child of DocSection is rendered as a row separated by a border-top */
function DocSection({ title, children }) {
  const pageTitle = useContext(DocPageContext)
  const fullTitle = pageTitle ? `${pageTitle} — ${title}` : title
  const items = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean)
  return (
    <div className="ds-card" style={{ padding: 0, overflow: 'hidden' }}>
      <GroupHeader>{fullTitle}</GroupHeader>
      {items.map((child, i) => (
        <div key={i} style={{ borderTop: i > 0 ? '1px solid var(--color-border-grey-light)' : 'none' }}>
          {child}
        </div>
      ))}
    </div>
  )
}

/* Demo: flex row — each DemoGroup child gets flex:1 with a vertical divider */
function Demo({ children, style }) {
  const items = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean)
  return (
    <div className="ds-demo" style={style}>
      {items.map((child, i) => (
        <div key={i} className="ds-demo__cell">
          {child}
          {i < items.length - 1 && <div className="ds-demo__divider" />}
        </div>
      ))}
    </div>
  )
}

/* DemoGroup: a padded column cell inside Demo */
function DemoGroup({ label, children, column = false, gap }) {
  return (
    <div className="ds-demo-group">
      {label && <span className="ds-demo-group__label">{label}</span>}
      <div
        className={`ds-demo-group__content${column ? ' ds-demo-group__content--column' : ''}`}
        style={gap ? { gap } : undefined}
      >
        {children}
      </div>
    </div>
  )
}

/* CodeBlock: dark code row — border-top comes from DocSection */
const JSX_KEYWORDS = new Set([
  'import','export','default','from','const','let','var','function',
  'return','if','else','for','while','true','false','null','undefined',
])

function tokenizeJSX(code) {
  const C = {
    comment:   'var(--color-text-grey)',
    string:    'var(--color-text-green)',
    keyword:   'var(--color-accent-purple)',
    component: 'var(--color-brand-primary)',
    tag:       'var(--color-text-grey-dark)',
    punct:     'var(--color-text-grey)',
    prop:      'var(--color-bg-dark)',
    expr:      'var(--color-text-orange)',
    plain:     'var(--color-text-grey-dark)',
  }

  const tokens = []
  let i = 0

  while (i < code.length) {
    // Line comment
    if (code[i] === '/' && code[i + 1] === '/') {
      const end = code.indexOf('\n', i)
      const text = end === -1 ? code.slice(i) : code.slice(i, end)
      tokens.push({ text, color: C.comment })
      i += text.length
      continue
    }
    // Block comment
    if (code[i] === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2)
      const text = end === -1 ? code.slice(i) : code.slice(i, end + 2)
      tokens.push({ text, color: C.comment })
      i += text.length
      continue
    }
    // Double-quoted string
    if (code[i] === '"') {
      let j = i + 1
      while (j < code.length && !(code[j] === '"' && code[j - 1] !== '\\')) j++
      tokens.push({ text: code.slice(i, j + 1), color: C.string })
      i = j + 1
      continue
    }
    // Single-quoted string
    if (code[i] === "'") {
      let j = i + 1
      while (j < code.length && !(code[j] === "'" && code[j - 1] !== '\\')) j++
      tokens.push({ text: code.slice(i, j + 1), color: C.string })
      i = j + 1
      continue
    }
    // Template literal
    if (code[i] === '`') {
      let j = i + 1
      while (j < code.length && !(code[j] === '`' && code[j - 1] !== '\\')) j++
      tokens.push({ text: code.slice(i, j + 1), color: C.string })
      i = j + 1
      continue
    }
    // JSX expression { … }
    if (code[i] === '{') {
      let depth = 0, j = i
      while (j < code.length) {
        if (code[j] === '{') depth++
        else if (code[j] === '}') { depth--; if (depth === 0) { j++; break } }
        j++
      }
      tokens.push({ text: code.slice(i, j), color: C.expr })
      i = j
      continue
    }
    // Self-close />
    if (code[i] === '/' && code[i + 1] === '>') {
      tokens.push({ text: '/>', color: C.punct })
      i += 2
      continue
    }
    // JSX tag < or </
    if (code[i] === '<' && /[A-Za-z/]/.test(code[i + 1] ?? '')) {
      let j = i + 1
      const hasSlash = code[j] === '/'
      if (hasSlash) j++
      const nameStart = j
      while (j < code.length && /[A-Za-z0-9_.]/.test(code[j])) j++
      const name = code.slice(nameStart, j)
      tokens.push({ text: code.slice(i, nameStart), color: C.punct })
      if (name) tokens.push({ text: name, color: /^[A-Z]/.test(name) ? C.component : C.tag })
      i = j
      continue
    }
    // Close >
    if (code[i] === '>') {
      tokens.push({ text: '>', color: C.punct })
      i++
      continue
    }
    // Word — keyword, prop, or plain identifier
    if (/[A-Za-z_$]/.test(code[i])) {
      let j = i
      while (j < code.length && /[A-Za-z0-9_$]/.test(code[j])) j++
      const word = code.slice(i, j)
      let k = j
      while (k < code.length && code[k] === ' ') k++
      let color
      if (JSX_KEYWORDS.has(word)) color = C.keyword
      else if (code[k] === '=') color = C.prop
      else color = C.plain
      tokens.push({ text: word, color })
      i = j
      continue
    }
    // Default — single char
    tokens.push({ text: code[i], color: C.plain })
    i++
  }

  return tokens
}

function CodeBlock({ code }) {
  const tokens = tokenizeJSX(code)
  return (
    <pre className="ds-code-block" style={{ borderRadius: 0 }}>
      <code>
        {tokens.map((t, idx) => (
          <span key={idx} style={{ color: t.color }}>{t.text}</span>
        ))}
      </code>
    </pre>
  )
}

function PropsTable({ rows }) {
  return (
    <div>
      <table className="ds-props-table">
        <thead>
          <tr>
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td><code className="ds-props-table__code--prop">{row.prop}</code></td>
              <td><code className="ds-props-table__code--type">{row.type}</code></td>
              <td>
                {row.default
                  ? <code className="ds-props-table__code--default">{row.default}</code>
                  : <span style={{ color: 'var(--color-text-grey)' }}>—</span>}
              </td>
              <td>{row.desc ?? row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TokensTable({ rows }) {
  return (
    <div>
      <table className="ds-tokens-table">
        <thead>
          <tr>
            {['Token', 'Role'].map(h => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>
                <span className="ds-tokens-table__token-cell">
                  <span className="ds-tokens-table__swatch" style={{ backgroundColor: `var(${row.token})` }} />
                  <code className="ds-tokens-table__code">{row.token}</code>
                </span>
              </td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Breadcrumb documentation ──────────────────────────────── */

function BreadcrumbDoc() {
  return (
    <DocPage
      title="Breadcrumb"
      description="Shows the user's current location within the site hierarchy."
      figmaNodeId="2289:14896"
    >
      <DocSection title="Example">
        <Demo>
          <DemoGroup column>
            <Breadcrumb items={[
              { label: 'Home',                        href: '#' },
              { label: 'Auctions',                    href: '#' },
              { label: 'Cattle',                      href: '#' },
              { label: 'Eastern States Cattle Sale',  href: '#' },
              { label: '40 PTIC Heifers' },
            ]} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Breadcrumb items={[\n  { label: 'Home',     href: '/' },\n  { label: 'Auctions', href: '/auctions' },\n  { label: 'Cattle',   href: '/auctions/cattle' },\n  { label: 'Eastern States Cattle Sale' },\n]} />`} />
      </DocSection>

      <DocSection title="Short trail">
        <Demo>
          <DemoGroup>
            <Breadcrumb items={[
              { label: 'Home',     href: '#' },
              { label: 'Auctions', href: '#' },
              { label: 'Cattle' },
            ]} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Breadcrumb items={[\n  { label: 'Home',     href: '/' },\n  { label: 'Auctions', href: '/auctions' },\n  { label: 'Cattle' },\n]} />`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Pagination documentation ──────────────────────────────── */

function PaginationDoc() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(5)
  const [page3, setPage3] = useState(1)

  return (
    <DocPage
      title="Pagination"
      description="Page navigation for large data sets. Collapses to ellipsis automatically."
    >
      <DocSection title="Few pages">
        <Demo>
          <DemoGroup column>
            <Pagination page={page3} total={5} onChange={setPage3} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`const [page, setPage] = useState(1)\n\n<Pagination page={page} total={5} onChange={setPage} />`} />
      </DocSection>

      <DocSection title="Many pages — start">
        <Demo>
          <DemoGroup column>
            <Pagination page={page1} total={24} onChange={setPage1} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Pagination page={page} total={24} onChange={setPage} />`} />
      </DocSection>

      <DocSection title="Many pages — middle">
        <Demo>
          <DemoGroup column>
            <Pagination page={page2} total={24} onChange={setPage2} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Pagination page={5} total={24} onChange={setPage} />`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Tab documentation ─────────────────────────────────────── */

function ImageDoc() {
  return (
    <DocPage
      title="Image"
      description="Responsive image with aspect ratio lock, skeleton loader, and broken-image fallback."
    >
      <DocSection title="Aspect ratios">
        <Demo>
          <DemoGroup label="3/2 — lot cards (default)" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="3/2" style={{ width: '240px' }} />
          </DemoGroup>
          <DemoGroup label="16/9 — banners" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="16/9" style={{ width: '240px' }} />
          </DemoGroup>
          <DemoGroup label="1/1 — avatars" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="1/1" style={{ width: '120px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Image src={url} alt="Cattle" aspectRatio="3/2" />\n<Image src={url} alt="Cattle" aspectRatio="16/9" />\n<Image src={url} alt="Cattle" aspectRatio="1/1" />`} />
      </DocSection>

      <DocSection title="Border radius">
        <Demo>
          <DemoGroup label="none (default)" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="3/2" radius="none" style={{ width: '180px' }} />
          </DemoGroup>
          <DemoGroup label="md" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="3/2" radius="md" style={{ width: '180px' }} />
          </DemoGroup>
          <DemoGroup label="lg" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="3/2" radius="lg" style={{ width: '180px' }} />
          </DemoGroup>
          <DemoGroup label="full" column>
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=600" alt="Cattle" aspectRatio="1/1" radius="full" style={{ width: '120px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Image src={url} alt="Cattle" radius="md" />\n<Image src={url} alt="Cattle" radius="lg" />\n<Image src={url} alt="Cattle" aspectRatio="1/1" radius="full" />`} />
      </DocSection>

      <DocSection title="Loading & fallback states">
        <Demo>
          <DemoGroup label="Loading skeleton (no src)" column>
            <Image aspectRatio="3/2" style={{ width: '240px' }} />
          </DemoGroup>
          <DemoGroup label="Error fallback (bad src)" column>
            <Image src="https://broken.url/image.jpg" alt="Broken" aspectRatio="3/2" style={{ width: '240px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`{/* Loading skeleton */}\n<Image aspectRatio="3/2" />\n\n{/* Error fallback */}\n<Image src={brokenUrl} alt="Image" aspectRatio="3/2" />`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Avatar documentation ──────────────────────────────────── */

function EmptyStateDoc() {
  return (
    <DocPage
      title="Empty State"
      description="Shown when no data is available. Guides the user to a next action."
    >
      <DocSection title="With action">
        <Demo>
          <DemoGroup column>
            <EmptyState
              icon="search_off"
              title="No results found"
              message="Try adjusting your filters or search terms to find what you're looking for."
              action={{ label: 'Clear filters', onClick: () => {} }}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<EmptyState\n  icon="search_off"\n  title="No results found"\n  message="Try adjusting your filters or search terms."\n  action={{ label: 'Clear filters', onClick: handleClear }}\n/>`} />
      </DocSection>

      <DocSection title="Without action">
        <Demo>
          <DemoGroup column>
            <EmptyState
              icon="inbox"
              title="No lots yet"
              message="You haven't saved any lots to your watchlist. Browse auctions to get started."
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<EmptyState\n  icon="inbox"\n  title="No lots yet"\n  message="Browse auctions to get started."\n/>`} />
      </DocSection>

      <DocSection title="Variants">
        <Demo>
          <DemoGroup label="Watchlist" column>
            <EmptyState
              icon="favorite_border"
              title="Your watchlist is empty"
              message="Save lots you're interested in to keep track of them here."
              action={{ label: 'Browse auctions', onClick: () => {} }}
            />
          </DemoGroup>
          <DemoGroup label="No connection" column>
            <EmptyState
              icon="cloud_off"
              title="Unable to load"
              message="Check your connection and try again."
              action={{ label: 'Retry', onClick: () => {} }}
            />
          </DemoGroup>
          <DemoGroup label="No bids" column>
            <EmptyState
              icon="gavel"
              title="No bids placed"
              message="You haven't placed any bids yet."
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<EmptyState icon="favorite_border" title="Your watchlist is empty" message="..." action={{ label: 'Browse auctions', onClick: fn }} />\n<EmptyState icon="cloud_off" title="Unable to load" message="..." action={{ label: 'Retry', onClick: fn }} />`} />
      </DocSection>
    </DocPage>
  )
}

function AvatarDoc() {
  return (
    <DocPage
      title="Avatar"
      description="Circular avatar with optional verified badge and icon fallback."
    >
      <DocSection title="With image">
        <Demo>
          <DemoGroup label="Default (40px)">
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Farmer" />
          </DemoGroup>
          <DemoGroup label="With verified badge">
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Grazier" verified />
          </DemoGroup>
          <DemoGroup label="Large (56px)">
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face" alt="Agronomist" size={56} />
          </DemoGroup>
          <DemoGroup label="Large + verified">
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face" alt="Stock agent" size={56} verified />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Avatar src={url} alt="User" />\n<Avatar src={url} alt="User" verified />\n<Avatar src={url} alt="User" size={56} />`} />
      </DocSection>

      <DocSection title="Fallback (no src)">
        <Demo>
          <DemoGroup label="Default (40px)">
            <Avatar alt="User" />
          </DemoGroup>
          <DemoGroup label="With verified badge">
            <Avatar alt="User" verified />
          </DemoGroup>
          <DemoGroup label="Large (56px)">
            <Avatar alt="User" size={56} />
          </DemoGroup>
          <DemoGroup label="Large + verified">
            <Avatar alt="User" size={56} verified />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`{/* No src — person icon fallback */}\n<Avatar alt="User" />\n<Avatar alt="User" size={56} />`} />
      </DocSection>
    </DocPage>
  )
}

function TabDoc() {
  const [tab1, setTab1] = useState('lots')
  const [tab2, setTab2] = useState('cattle')
  const [tab3, setTab3] = useState('upcoming')
  return (
    <DocPage
      title="Tab"
      description="Tab strip for switching between related content sections."
      figmaNodeId="Components · 17:5098"
    >
      <DocSection title="Tabbed variants">
        <Demo>
          <DemoGroup label="Text tabs" column>
            <TabBar
              value={tab1}
              onChange={setTab1}
              tabs={[
                { value: 'lots',     label: 'Lots' },
                { value: 'results',  label: 'Results' },
                { value: 'upcoming', label: 'Upcoming' },
              ]}
            />
          </DemoGroup>
          <DemoGroup label="With leading icon" column>
            <TabBar
              value={tab2}
              onChange={setTab2}
              tabs={['cattle', 'sheep', 'machinery'].map(id => ({
                value: id,
                label: id.charAt(0).toUpperCase() + id.slice(1),
                icon: (
                  <span aria-hidden="true" style={{
                    display:              'inline-block',
                    width:                '20px',
                    height:               '20px',
                    flexShrink:           0,
                    backgroundColor:      'currentColor',
                    WebkitMaskImage:      `url(${import.meta.env.BASE_URL}icons/commodity/${id}.svg)`,
                    maskImage:            `url(${import.meta.env.BASE_URL}icons/commodity/${id}.svg)`,
                    WebkitMaskSize:       'contain',
                    maskSize:             'contain',
                    WebkitMaskRepeat:     'no-repeat',
                    maskRepeat:           'no-repeat',
                    WebkitMaskPosition:   'center',
                    maskPosition:         'center',
                  }} />
                ),
              }))}
            />
          </DemoGroup>
          <DemoGroup label="With trailing badge" column>
            <TabBar
              value={tab3}
              onChange={setTab3}
              tabs={[
                { value: 'upcoming', label: 'Lots',     badge: 4 },
                { value: 'watching', label: 'Watching', badge: 12 },
                { value: 'sold',     label: 'Sold',     badge: 1 },
              ]}
            />
          </DemoGroup>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Tags documentation ────────────────────────────────────── */

function TagsDoc() {
  return (
    <DocPage
      title="Tags & Badges"
      description="Non-interactive labels for classification, status, and key information."
      figmaNodeId="Components · 4:3877"
    >

      <DocSection title="Price type">
        <Demo>
          <DemoGroup label="Variants">
            <PriceTag label="$/Head" />
            <PriceTag label="$/Lot" />
            <PriceTag label="$/Unit" />
            <PriceTag label="c/kg L" />
            <PriceTag label="c/kg D" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<PriceTag label="$/Head" />\n<PriceTag label="$/Lot" />\n<PriceTag label="c/kg L" />`} />
      </DocSection>

      <DocSection title="Assessment type">
        <Demo>
          <DemoGroup label="Variants">
            <AssessmentTag label="Assessed" />
            <AssessmentTag label="Described" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<AssessmentTag label="Assessed" />\n<AssessmentTag label="Described" />`} />
      </DocSection>

      <DocSection title="Accreditation">
        <Demo>
          <DemoGroup label="Livestock">
            <AccreditationTag label="EU" />
            <AccreditationTag label="PCAS Elig" />
            <AccreditationTag label="PCAS Cert" />
            <AccreditationTag label="NE" />
            <AccreditationTag label="WHP/ESI" />
            <FeederOptimisedTag />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<AccreditationTag label="EU" />\n<AccreditationTag label="PCAS Cert" />\n<AccreditationTag label="WHP/ESI" />\n<FeederOptimisedTag />`} />
      </DocSection>

      <DocSection title="Lot status">
        <Demo>
          <DemoGroup label="Variants">
            <LotStatusTag variant="published" />
            <LotStatusTag variant="in-progress" />
            <LotStatusTag variant="live" />
            <LotStatusTag variant="stud-verified" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<LotStatusTag variant="published" />\n<LotStatusTag variant="in-progress" />\n<LotStatusTag variant="live" />\n<LotStatusTag variant="stud-verified" />`} />
      </DocSection>

      <DocSection title="Percentile">
        <Demo>
          <DemoGroup label="Small (default)">
            <PercentileTag percentile={5}  size="sm" />
            <PercentileTag percentile={10} size="sm" />
            <PercentileTag percentile={20} size="sm" />
            <PercentileTag percentile={50} size="sm" />
          </DemoGroup>
          <DemoGroup label="Large">
            <PercentileTag percentile={5}  size="md" />
            <PercentileTag percentile={10} size="md" />
            <PercentileTag percentile={20} size="md" />
            <PercentileTag percentile={50} size="md" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<PercentileTag percentile={5} />\n<PercentileTag percentile={10} size="md" />`} />
      </DocSection>

      <DocSection title="Bid status">
        <Demo>
          <DemoGroup label="Variants">
            <SoldStatusTag variant="sold" />
            <SoldStatusTag variant="passed-in" />
            <SoldStatusTag variant="withdrawn" />
            <SoldStatusTag variant="no-bids" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<SoldStatusTag variant="sold" />\n<SoldStatusTag variant="passed-in" />\n<SoldStatusTag variant="withdrawn" />\n<SoldStatusTag variant="no-bids" />`} />
      </DocSection>

      <DocSection title="New / beta">
        <Demo>
          <DemoGroup label="Variants">
            <NewTag variant="new" />
            <NewTag variant="beta" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<NewTag variant="new" />\n<NewTag variant="beta" />`} />
      </DocSection>

      <DocSection title="Card key">
        <Demo>
          <DemoGroup label="Variants" column>
            <CardKeyInfoTag variant="buy-now"    label="Buy Now for $1,150.00/Head" />
            <CardKeyInfoTag variant="make-offer" />
            <CardKeyInfoTag variant="reoffered"  label="Reoffered in 776 — Weaner & Yearling Sale" />
            <CardKeyInfoTag variant="withdrawn"  label="Lot has been withdrawn from this auction" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<CardKeyInfoTag variant="buy-now" label="Buy Now for $1,150.00/Head" />\n<CardKeyInfoTag variant="make-offer" />\n<CardKeyInfoTag variant="reoffered" label="Reoffered in 776 — Weaner Sale" />\n<CardKeyInfoTag variant="withdrawn" label="Lot has been withdrawn" />`} />
      </DocSection>

      <DocSection title="Auction type">
        <Demo>
          <DemoGroup label="Variants">
            <AuctionTypeTag variant="stud" />
            <AuctionTypeTag variant="commercial" />
            <AuctionTypeTag variant="machinery" />
            <AuctionTypeTag variant="property" />
            <AuctionTypeTag variant="special-commercial" />
            <AuctionTypeTag variant="charity" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<AuctionTypeTag variant="stud" />\n<AuctionTypeTag variant="commercial" />\n<AuctionTypeTag variant="machinery" />\n<AuctionTypeTag variant="property" />\n<AuctionTypeTag variant="special-commercial" />\n<AuctionTypeTag variant="charity" />`} />
      </DocSection>

      <DocSection title="Package type">
        <Demo>
          <DemoGroup label="Variants">
            <PackageTypeTag variant="premium" />
            <PackageTypeTag variant="prime" />
            <PackageTypeTag variant="classic" />
            <PackageTypeTag variant="sim-online" />
            <PackageTypeTag variant="attended" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<PackageTypeTag variant="premium" />\n<PackageTypeTag variant="prime" />\n<PackageTypeTag variant="classic" />\n<PackageTypeTag variant="sim-online" />\n<PackageTypeTag variant="attended" />`} />
      </DocSection>


      <DocSection title="Listing status">
        <Demo>
          <DemoGroup label="Variants">
            <ListingStatusTag variant="published" />
            <ListingStatusTag variant="draft" />
            <ListingStatusTag variant="unpublished" />
            <ListingStatusTag variant="withdrawn" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<ListingStatusTag variant="published" />\n<ListingStatusTag variant="draft" />\n<ListingStatusTag variant="unpublished" />\n<ListingStatusTag variant="withdrawn" />`} />
      </DocSection>

      <DocSection title="Badge">
        <Demo>
          <DemoGroup label="Blue (default)">
            <Badge count={1} variant="blue" />
            <Badge count={10} variant="blue" />
            <Badge count={100} variant="blue" />
          </DemoGroup>
          <DemoGroup label="Red">
            <Badge count={1} variant="red" />
            <Badge count={10} variant="red" />
            <Badge count={100} variant="red" />
          </DemoGroup>
          <DemoGroup label="Yellow">
            <Badge count={1} variant="yellow" />
            <Badge count={10} variant="yellow" />
            <Badge count={100} variant="yellow" />
          </DemoGroup>
          <DemoGroup label="Grey">
            <Badge count={1} variant="grey" />
            <Badge count={10} variant="grey" />
            <Badge count={100} variant="grey" />
          </DemoGroup>
          <DemoGroup label="Overflow — caps at 99+">
            <Badge count={99} variant="blue" />
            <Badge count={100} variant="blue" />
            <Badge count={999} variant="red" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Badge count={1} variant="blue" />\n<Badge count={10} variant="red" />\n<Badge count={100} variant="yellow" />\n<Badge count={1} variant="grey" />\n<Badge count={100} />  {/* renders "99+" */}`} />
      </DocSection>

      <DocSection title="Chip">
        <Demo>
          <DemoGroup label="With remove handler">
            <Chip label="Dubbo" onRemove={() => {}} />
            <Chip label="NSW" onRemove={() => {}} />
            <Chip label="Angus × Hereford" onRemove={() => {}} />
          </DemoGroup>
          <DemoGroup label="Without remove handler">
            <Chip label="Dubbo" />
            <Chip label="NSW" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Chip label="Dubbo" onRemove={() => removeFilter('dubbo')} />\n<Chip label="NSW" onRemove={() => removeFilter('nsw')} />`} />
      </DocSection>

    </DocPage>
  )
}

/* ── Button documentation ──────────────────────────────────── */


function SplitSelectGroup({ options, initial = null, disabled = false }) {
  const [sel, setSel] = useState(initial)
  const last = options.length - 1
  return (
    <div style={{
      display:      'inline-flex',
      height:       'var(--size-btn-md)',
      borderRadius: 'var(--radius-full)',
      border:       '1.5px solid var(--color-border-grey)',
      opacity:      disabled ? 'var(--opacity-disabled)' : 1,
    }}>
      {options.map((o, i) => {
        const selected = sel === o
        const isFirst = i === 0
        const isLast  = i === last
        const borderRadius = isFirst && isLast ? 'var(--radius-full)'
          : isFirst ? 'var(--radius-full) 0 0 var(--radius-full)'
          : isLast  ? '0 var(--radius-full) var(--radius-full) 0'
          : '0'
        return (
          <div key={o} style={{ display: 'contents' }}>
            {i > 0 && (
              <div style={{ width: '1.5px', backgroundColor: 'var(--color-border-grey)', flexShrink: 0 }} />
            )}
            <button
              onClick={() => !disabled && setSel(o)}
              disabled={disabled}
              style={{
                display:         'inline-flex',
                alignItems:      'center',
                justifyContent:  'center',
                padding:         '0 var(--spacing-md)',
                minWidth:        '80px',
                border:          'none',
                borderRadius,
                backgroundColor: selected ? 'var(--color-bg-light)' : 'var(--color-bg-white)',
                color:           selected ? 'var(--color-brand-primary-dark)' : 'var(--color-text-grey-dark)',
                position:        'relative',
                zIndex:          selected ? 1 : 0,
                outline:         selected ? '1.5px solid var(--color-brand-primary-dark)' : 'none',
                outlineOffset:   '0px',
                fontFamily:      'var(--type-family-primary)',
                fontSize:        'var(--type-size-body-sm)',
                lineHeight:      'var(--type-lh-body-sm)',
                fontWeight:      400,
                whiteSpace:      'nowrap',
                cursor:          'pointer',
              }}
            >
              {o}
            </button>
          </div>
        )
      })}
    </div>
  )
}

function SelectGroup({ options, initial = [] }) {
  const [sel, setSel] = useState(new Set(initial))
  function toggle(o) {
    setSel(prev => {
      const next = new Set(prev)
      next.has(o) ? next.delete(o) : next.add(o)
      return next
    })
  }
  return (
    <>
      {options.map(o => (
        <SelectDemoBtn key={o} label={o} selected={sel.has(o)} onClick={() => toggle(o)} />
      ))}
    </>
  )
}

function RadioSelectGroup({ options, initial }) {
  const [sel, setSel] = useState(initial)
  return (
    <>
      {options.map(o => (
        <RadioSelectDemoBtn key={o} label={o} selected={sel === o} onClick={() => setSel(o)} />
      ))}
    </>
  )
}

function RadioSelectDemoBtn({ label, selected = false, disabled = false, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      disabled={disabled}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        minWidth:        '80px',
        height:          'var(--size-btn-md)',
        padding:         '0 var(--spacing-md)',
        borderRadius:    'var(--radius-full)',
        border:          `1.5px solid ${selected ? 'var(--color-brand-primary-dark)' : 'var(--color-border-grey)'}`,
        backgroundColor: selected ? 'var(--color-bg-light)' : 'var(--color-bg-white)',
        color:           selected ? 'var(--color-brand-primary-dark)' : 'var(--color-text-grey-dark)',
        fontFamily:      'var(--type-family-primary)',
        fontSize:        'var(--type-size-body-sm)',
        lineHeight:      'var(--type-lh-body-sm)',
        fontWeight:      400,
        whiteSpace:      'nowrap',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        opacity:         disabled ? 'var(--opacity-disabled)' : 1,
      }}
    >
      {label}
    </button>
  )
}

function SelectDemoBtn({ label, selected = false, disabled = false, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      disabled={disabled}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             'var(--spacing-xs)',
        minWidth:        '80px',
        height:          'var(--size-btn-md)',
        padding:         '0 var(--spacing-md)',
        borderRadius:    'var(--radius-full)',
        border:          `1.5px solid ${selected ? 'var(--color-brand-primary-dark)' : 'var(--color-border-grey)'}`,
        backgroundColor: selected ? 'var(--color-bg-light)' : 'var(--color-bg-white)',
        color:           selected ? 'var(--color-brand-primary-dark)' : 'var(--color-text-grey-dark)',
        fontFamily:      'var(--type-family-primary)',
        fontSize:        'var(--type-size-body-sm)',
        lineHeight:      'var(--type-lh-body-sm)',
        fontWeight:      400,
        whiteSpace:      'nowrap',
        cursor:          disabled ? 'not-allowed' : 'pointer',
        opacity:         disabled ? 'var(--opacity-disabled)' : 1,
      }}
    >
      <span aria-hidden="true" style={{
        fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              '16px',
        lineHeight:            1,
        userSelect:            'none',
        flexShrink:            0,
        color:                 selected ? 'var(--color-brand-primary-dark)' : 'var(--color-border-grey)',
      }}>check</span>
      {label}
    </button>
  )
}

function LargeIconDemoBtn({ commodity, label, active = false }) {
  const [hovered, setHovered] = useState(false)
  const emphasised = active || hovered
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 'var(--spacing-xs)',
        padding: 'var(--spacing-md)',
        width: '88px', height: '88px',
        flexShrink: 0,
        border: 'none', borderRadius: 'var(--radius-md)',
        backgroundColor: emphasised ? 'var(--color-bg-light)' : 'transparent',
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: '40px', height: '40px', flexShrink: 0,
        backgroundColor: 'var(--color-text-grey-dark)',
        WebkitMaskImage: `url(${COMMODITY_ICONS[commodity]})`,
        maskImage:        `url(${COMMODITY_ICONS[commodity]})`,
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
      }} />
      <span style={{
        fontFamily: 'var(--type-family-primary)',
        fontSize: 'var(--type-size-body-md)',
        lineHeight: 'var(--type-lh-body-md)',
        fontWeight: 400,
        color: 'var(--color-text-grey)',
        whiteSpace: 'nowrap',
      }}>{label}</span>
    </button>
  )
}

function IconDemoBtn({ commodity, active = false }) {
  const [hovered, setHovered] = useState(false)
  const emphasised = active || hovered
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '44px', height: '44px',
        flexShrink: 0,
        border: 'none', borderRadius: 'var(--radius-sm)',
        backgroundColor: emphasised ? 'var(--color-brand-primary-light)' : 'transparent',
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: '24px', height: '24px', flexShrink: 0,
        backgroundColor: emphasised ? 'var(--color-brand-primary-dark)' : 'var(--color-text-grey-dark)',
        WebkitMaskImage: `url(${COMMODITY_ICONS[commodity]})`,
        maskImage:        `url(${COMMODITY_ICONS[commodity]})`,
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
      }} />
    </button>
  )
}

function ButtonDoc() {
  const [fav, setFav] = useState(false)
  const [cardFav, setCardFav] = useState(false)
  return (
    <DocPage
      title="Button"
      description="Action element with CTA, text, and icon variants."
      figmaNodeId="Components · 5:3906"
    >

      <DocSection title="Button variants">
        <Demo>
          <DemoGroup label="Medium — enabled">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="positive">Positive</Button>
            <Button variant="destructive">Destructive</Button>
          </DemoGroup>
          <DemoGroup label="Medium — disabled">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
          </DemoGroup>
        </Demo>
        <Demo>
          <DemoGroup label="Small — enabled">
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="positive" size="sm">Positive</Button>
            <Button variant="destructive" size="sm">Destructive</Button>
          </DemoGroup>
          <DemoGroup label="Small — disabled">
            <Button variant="primary" size="sm" disabled>Primary</Button>
            <Button variant="secondary" size="sm" disabled>Secondary</Button>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Button variant="primary">Label</Button>\n<Button variant="primary" size="sm">Label</Button>`} />
      </DocSection>

      <DocSection title="Button with icons">
        <Demo>
          <DemoGroup label="Leading icon">
            <Button variant="primary" leadingIcon="add">Create Lot</Button>
            <Button variant="secondary" leadingIcon="filter_list">Filter</Button>
            <Button variant="positive" leadingIcon="check">Confirm</Button>
          </DemoGroup>
          <DemoGroup label="Trailing icon">
            <Button variant="primary" trailingIcon="keyboard_arrow_down">More</Button>
            <Button variant="secondary" trailingIcon="keyboard_arrow_down">Sort</Button>
          </DemoGroup>
          <DemoGroup label="Icon">
            <Button variant="primary"     leadingIcon="add"         style={{ width: 'var(--size-btn-md)', padding: 0 }} />
            <Button variant="secondary"   leadingIcon="filter_list" style={{ width: 'var(--size-btn-md)', padding: 0 }} />
            <Button variant="positive"    leadingIcon="check"       style={{ width: 'var(--size-btn-md)', padding: 0 }} />
            <Button variant="destructive" leadingIcon="delete"      style={{ width: 'var(--size-btn-md)', padding: 0 }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`// leadingIcon / trailingIcon accept any Material Symbol name\n<Button variant="primary" leadingIcon="add">Create Lot</Button>\n<Button variant="secondary" trailingIcon="keyboard_arrow_down">Sort</Button>\n\n// Icon only — square button\n<Button variant="primary" leadingIcon="add" style={{ width: 'var(--size-btn-md)', padding: 0 }} />`} />
      </DocSection>

      <DocSection title="Icon button variants">
        <Demo>
          <DemoGroup label="Large — default" gap="var(--spacing-md)">
            {[['Cattle', 'Cattle'], ['Sheep', 'Sheep']].map(([commodity, label]) => (
              <LargeIconDemoBtn key={commodity} commodity={commodity} label={label} />
            ))}
          </DemoGroup>
          <DemoGroup label="Large — active" gap="var(--spacing-md)">
            {[['Cattle', 'Cattle'], ['Sheep', 'Sheep']].map(([commodity, label]) => (
              <LargeIconDemoBtn key={commodity} commodity={commodity} label={label} active />
            ))}
          </DemoGroup>
          <DemoGroup label="Medium — default">
            {['Cattle', 'Sheep', 'Machinery'].map(c => (
              <IconDemoBtn key={c} commodity={c} />
            ))}
          </DemoGroup>
          <DemoGroup label="Medium — active">
            {['Cattle', 'Sheep', 'Machinery'].map(c => (
              <IconDemoBtn key={c} commodity={c} active />
            ))}
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<button style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'transparent' }}>\n  <span style={{ fontFamily: "'Material Symbols Outlined'", color: 'var(--color-text-grey-dark)' }}>tune</span>\n</button>`} />
      </DocSection>

      <DocSection title="Select button variants">
        <Demo>
          <DemoGroup label="Interactive">
            <SelectGroup options={['Sheep', 'Cattle', 'Machinery']} initial={['Sheep']} />
          </DemoGroup>
          <DemoGroup label="Disabled">
            <SelectDemoBtn label="Sheep" disabled />
            <SelectDemoBtn label="Cattle" disabled />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<button style={{\n  height: 'var(--size-btn-md)',\n  padding: '0 var(--spacing-md)',\n  borderRadius: 'var(--radius-full)',\n  border: '1px solid var(--color-border-grey)',\n  backgroundColor: 'var(--color-bg-white)',\n  color: 'var(--color-text-grey-dark)',\n  fontSize: 'var(--type-size-body-md)',\n  fontWeight: 400,\n}}>Yes</button>`} />
      </DocSection>

      <DocSection title="Radio select button variants">
        <Demo>
          <DemoGroup label="Interactive">
            <RadioSelectGroup options={['Sheep', 'Cattle', 'Machinery']} initial="Sheep" />
          </DemoGroup>
          <DemoGroup label="Disabled">
            <RadioSelectDemoBtn label="Sheep" disabled />
            <RadioSelectDemoBtn label="Cattle" disabled />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<button style={{\n  height: 'var(--size-btn-md)',\n  padding: '0 var(--spacing-md)',\n  borderRadius: 'var(--radius-full)',\n  border: '1px solid var(--color-border-grey)',\n  backgroundColor: 'var(--color-bg-white)',\n  color: 'var(--color-text-grey-dark)',\n  fontSize: 'var(--type-size-body-md)',\n  fontWeight: 400,\n}}>Sheep</button>`} />
      </DocSection>

      <DocSection title="Split select button variants">
        <Demo>
          <DemoGroup label="2 split">
            <SplitSelectGroup options={['Sheep', 'Cattle']} initial="Sheep" />
          </DemoGroup>
          <DemoGroup label="3 split">
            <SplitSelectGroup options={['Sheep', 'Cattle', 'Machinery']} initial="Sheep" />
          </DemoGroup>
          <DemoGroup label="Disabled">
            <SplitSelectGroup options={['Sheep', 'Cattle']} initial="Sheep" disabled />
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Text button variants">
        <Demo>
          <DemoGroup label="Link" gap="var(--spacing-lg)">
            <Button variant="text">View today's auctions</Button>
          </DemoGroup>
          <DemoGroup label="Leading icon" gap="var(--spacing-lg)">
            <Button variant="text" leadingIcon="keyboard_arrow_down">Expand</Button>
          </DemoGroup>
          <DemoGroup label="Trailing icon" gap="var(--spacing-lg)">
            <Button variant="text" trailingIcon="chevron_right">View today's auctions</Button>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Button variant="text">View today's auctions</Button>\n<Button variant="text" trailingIcon="chevron_right">View today's auctions</Button>`} />
      </DocSection>

    </DocPage>
  )
}

/* ─────────────────────────────────────────────────────────────
   Input docs
   ───────────────────────────────────────────────────────────── */

function TextInputDoc() {
  return (
    <DocPage
      title="Text Input"
      description="Text input variants for user data entry."
      figmaNodeId="Components · 170:860"
    >
      <DocSection title="Text field">
        <Demo>
          <DemoGroup>
            <Input label="Default" placeholder="Placeholder text" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <Input label="Error" placeholder="Placeholder text" state="error" hint="This field is required" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <Input label="Disabled" placeholder="Placeholder text" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Input label="Label" placeholder="Enter value" />\n<Input label="Label" state="error" hint="This field is required" />\n<Input label="Label" state="disabled" />`} />
      </DocSection>

      <DocSection title="Password field">
        <Demo>
          <DemoGroup>
            <PasswordInput label="Password" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <PasswordInput label="Error" state="error" hint="Password must be at least 8 characters" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <PasswordInput label="Disabled" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<PasswordInput label="Password" />\n<PasswordInput label="Password" state="error" hint="Password must be at least 8 characters" />\n<PasswordInput label="Password" state="disabled" />`} />
      </DocSection>

      <DocSection title="Email field">
        <Demo>
          <DemoGroup>
            <EmailInput label="Email address" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <EmailInput label="Email address" state="error" hint="Please enter a valid email address" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <EmailInput label="Email address" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<EmailInput label="Email address" />\n<EmailInput label="Email address" state="error" hint="Please enter a valid email address" />\n<EmailInput label="Email address" state="disabled" />`} />
      </DocSection>

      <DocSection title="URL field">
        <Demo>
          <DemoGroup>
            <UrlInput label="Website" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <UrlInput label="Website" state="error" hint="Please enter a valid URL" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <UrlInput label="Website" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<UrlInput label="Website" />\n<UrlInput label="Website" state="error" hint="Please enter a valid URL" />\n<UrlInput label="Website" state="disabled" />`} />
      </DocSection>

      <DocSection title="Telephone field">
        <Demo>
          <DemoGroup>
            <TelInput label="Phone number" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <TelInput label="Phone number" state="error" hint="Please enter a valid phone number" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <TelInput label="Phone number" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<TelInput label="Phone number" />\n<TelInput label="Phone number" state="error" hint="Please enter a valid phone number" />\n<TelInput label="Phone number" state="disabled" />`} />
      </DocSection>

      <DocSection title="Small text field">
        <Demo>
          <DemoGroup>
            <Input label="Default" placeholder="Placeholder text" size="sm" style={{ width: '220px' }} />
          </DemoGroup>
          <DemoGroup>
            <Input label="Error" placeholder="Placeholder text" size="sm" state="error" hint="This field is required" style={{ width: '220px' }} />
          </DemoGroup>
          <DemoGroup>
            <Input label="Disabled" placeholder="Placeholder text" size="sm" state="disabled" style={{ width: '220px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Input label="Label" size="sm" placeholder="Enter value" />`} />
      </DocSection>

      <DocSection title="Text area">
        <Demo>
          <DemoGroup>
            <TextArea label="Description" placeholder="Enter a description…" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <TextArea label="Description" state="error" hint="This field is required" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <TextArea label="Description" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<TextArea label="Description" placeholder="Enter a description…" />\n<TextArea label="Description" rows={6} />\n<TextArea label="Description" resize="none" />\n<TextArea label="Description" state="error" hint="This field is required" />\n<TextArea label="Description" state="disabled" />`} />
      </DocSection>
    </DocPage>
  )
}

function NumberDoc() {
  return (
    <DocPage
      title="Number"
      description="Numeric input variants for data entry."
      figmaNodeId="Components · 170:864"
    >
      <DocSection title="Number field">
        <Demo>
          <DemoGroup>
            <NumberInput label="Default" placeholder="0" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <NumberInput label="Error" state="error" hint="Must be a valid number" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <NumberInput label="Disabled" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<NumberInput label="Quantity" placeholder="0" />\n<NumberInput label="Quantity" state="error" hint="Must be a valid number" />\n<NumberInput label="Quantity" state="disabled" />`} />
      </DocSection>

      <DocSection title="Small number field">
        <Demo>
          <DemoGroup>
            <NumberInput label="Default" placeholder="0" size="sm" style={{ width: '160px' }} />
          </DemoGroup>
          <DemoGroup>
            <NumberInput label="Error" size="sm" state="error" hint="Must be a valid number" style={{ width: '160px' }} />
          </DemoGroup>
          <DemoGroup>
            <NumberInput label="Disabled" size="sm" state="disabled" style={{ width: '160px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<NumberInput label="Quantity" size="sm" placeholder="0" />`} />
      </DocSection>

      <DocSection title="Currency field">
        <Demo>
          <DemoGroup>
            <DollarInput label="Default" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <DollarInput label="Error" state="error" hint="Must be greater than 0" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <DollarInput label="Disabled" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<DollarInput label="Price per head" />\n<DollarInput label="Price per head" state="error" hint="Must be greater than 0" />`} />
      </DocSection>

      <DocSection title="Tagged field">
        <Demo>
          <DemoGroup>
            <DefinedUnitInput label="Default" unit="kg/Head" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <DefinedUnitInput label="Custom unit" unit="$/Head" style={{ width: '280px' }} />
          </DemoGroup>
          <DemoGroup>
            <DefinedUnitInput label="Disabled" unit="kg/Head" state="disabled" style={{ width: '280px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<DefinedUnitInput label="Weight" unit="kg/Head" />\n<DefinedUnitInput label="Price" unit="$/Head" />`} />
      </DocSection>

      <DocSection title="Telephone field">
        <Demo>
          <DemoGroup label="Coming soon">
            <span style={{ color: 'var(--color-text-grey)', fontSize: 'var(--type-size-body-md)', fontFamily: 'var(--type-family-primary)' }}>Coming soon</span>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Min / max">
        <Demo>
          <DemoGroup>
            <MinMaxInput label="Default" minPlaceholder="Min kg" maxPlaceholder="Max kg" />
          </DemoGroup>
          <DemoGroup>
            <MinMaxInput label="Error" state="error" />
          </DemoGroup>
          <DemoGroup>
            <MinMaxInput label="Disabled" state="disabled" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<MinMaxInput\n  label="Weight range"\n  minPlaceholder="Min kg"\n  maxPlaceholder="Max kg"\n/>\n\n<MinMaxInput label="Price range" state="error" />\n<MinMaxInput label="Price range" state="disabled" />`} />
      </DocSection>
    </DocPage>
  )
}

function DropdownDoc() {
  const [val, setVal] = useState('')
  return (
    <DocPage
      title="Dropdown Menu"
      description="Select input for choosing a single option from a list."
      figmaNodeId="Components · 172:5260"
    >
      <DocSection title="Select dropdown">
        <Demo>
          <DemoGroup>
            <SelectInput
              label="Default"
              options={['Auction', 'Buy Now', 'Make An Offer']}
              value={val}
              onChange={e => setVal(e.target.value)}
              style={{ width: '320px' }}
            />
          </DemoGroup>
          <DemoGroup>
            <SelectInput
              label="Error"
              state="error"
              hint="Please select an option"
              options={['Auction', 'Buy Now', 'Make An Offer']}
              style={{ width: '320px' }}
            />
          </DemoGroup>
          <DemoGroup>
            <SelectInput
              label="Disabled"
              state="disabled"
              options={['Auction', 'Buy Now', 'Make An Offer']}
              style={{ width: '320px' }}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<SelectInput\n  label="Sale type"\n  options={['Auction', 'Buy Now', 'Make An Offer']}\n  value={val}\n  onChange={e => setVal(e.target.value)}\n/>`} />
      </DocSection>
    </DocPage>
  )
}

function RadioDoc() {
  const [val, setVal] = useState('auction')
  return (
    <DocPage
      title="Radio Button"
      description="Single-select control for choosing one option from a group."
      figmaNodeId="Components · 172:5129"
    >
      <DocSection title="States">
        <Demo>
          <DemoGroup>
            <Radio label="Default" checked={false} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup>
            <Radio label="Selected" checked={true} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup column>
            <Radio label="Disabled" checked={false} disabled onChange={() => {}} />
            <Radio label="Disabled selected" checked={true} disabled onChange={() => {}} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Radio label="Option" checked={checked} onChange={() => setChecked(c => !c)} />`} />
      </DocSection>
      <DocSection title="Radio Group">
        <Demo>
          <DemoGroup column>
            <RadioGroup
              name="sale-type"
              value={val}
              onChange={setVal}
              options={[
                { value: 'auction', label: 'Auction' },
                { value: 'buynow',  label: 'Buy Now' },
                { value: 'tender',  label: 'Make An Offer'  },
              ]}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<RadioGroup\n  label="Sale type"\n  name="sale-type"\n  value={val}\n  onChange={setVal}\n  options={[\n    { value: 'auction', label: 'Auction' },\n    { value: 'buynow',  label: 'Buy Now' },\n    { value: 'tender',  label: 'Make An Offer'  },\n  ]}\n/>`} />
      </DocSection>
    </DocPage>
  )
}

function CheckboxDoc() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(true)
  return (
    <DocPage
      title="Checkboxes"
      description="Binary toggle with indeterminate state support."
      figmaNodeId="Components · 172:5131"
    >
      <DocSection title="States">
        <Demo>
          <DemoGroup>
            <Checkbox label="Default" checked={false} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup>
            <Checkbox label="Checked" checked={true} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup>
            <Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup column>
            <Checkbox label="Disabled" checked={false} disabled onChange={() => {}} />
            <Checkbox label="Disabled checked" checked={true} disabled onChange={() => {}} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Checkbox label="Option" checked={false} onChange={() => {}} />\n<Checkbox label="Option" checked={true} onChange={() => {}} />\n<Checkbox label="Select all" indeterminate checked={false} onChange={() => {}} />`} />
      </DocSection>
      <DocSection title="Interactive">
        <Demo>
          <DemoGroup column>
            <Checkbox label="Include sold lots" checked={a} onChange={e => setA(e.target.checked)} />
            <Checkbox label="Assessed only" checked={b} onChange={e => setB(e.target.checked)} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`const [checked, setChecked] = useState(false)\n\n<Checkbox\n  label="Include sold lots"\n  checked={checked}\n  onChange={e => setChecked(e.target.checked)}\n/>`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Progress Indicator documentation ──────────────────────── */

function ProgressIndicatorDoc() {
  const [value, setValue] = useState(60)
  return (
    <DocPage
      title="Progress Indicator"
      description="Horizontal bar showing process completion. Four variants, two sizes."
    >
      <DocSection title="Variants">
        <Demo>
          <DemoGroup label="Default" column>
            <div style={{ width: '320px' }}>
              <ProgressIndicator value={72} label="Uploading document" />
            </div>
          </DemoGroup>
          <DemoGroup label="Success" column>
            <div style={{ width: '320px' }}>
              <ProgressIndicator value={100} label="Assessment complete" variant="success" />
            </div>
          </DemoGroup>
          <DemoGroup label="Warning" column>
            <div style={{ width: '320px' }}>
              <ProgressIndicator value={45} label="Storage used" variant="warning" />
            </div>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<ProgressIndicator value={72} label="Uploading document" />\n<ProgressIndicator value={100} label="Assessment complete" variant="success" />\n<ProgressIndicator value={45} label="Storage used" variant="warning" />`} />
      </DocSection>

      <DocSection title="Sizes">
        <Demo>
          <DemoGroup label="Medium (default)" column>
            <div style={{ width: '320px' }}>
              <ProgressIndicator value={60} label="Lot images" size="md" />
            </div>
          </DemoGroup>
          <DemoGroup label="Small" column>
            <div style={{ width: '320px' }}>
              <ProgressIndicator value={60} label="Lot images" size="sm" />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Interactive">
        <Demo>
          <DemoGroup label="Drag to update" column>
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <ProgressIndicator value={value} label="Auction progress" />
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={e => setValue(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Progress Tracker documentation ────────────────────────── */

const TRACKER_STEPS = [
  { label: 'Account details',   description: 'Name, email and password' },
  { label: 'Verification',      description: 'Confirm your identity' },
  { label: 'Listing details',   description: 'Add lot information' },
  { label: 'Review & submit',   description: 'Check and confirm' },
]

function ProgressTrackerDoc() {
  const [activeH, setActiveH] = useState(1)
  const [activeV, setActiveV] = useState(1)
  return (
    <DocPage
      title="Progress Tracker"
      description="Stepped indicator for multi-stage workflows. Horizontal and vertical."
    >
      <DocSection title="Horizontal">
        <Demo>
          <DemoGroup label="Step 1 of 4" column>
            <div style={{ width: '480px' }}>
              <ProgressTracker steps={TRACKER_STEPS} activeStep={0} />
            </div>
          </DemoGroup>
          <DemoGroup label="Step 2 of 4" column>
            <div style={{ width: '480px' }}>
              <ProgressTracker steps={TRACKER_STEPS} activeStep={1} />
            </div>
          </DemoGroup>
          <DemoGroup label="Complete" column>
            <div style={{ width: '480px' }}>
              <ProgressTracker steps={TRACKER_STEPS} activeStep={4} />
            </div>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<ProgressTracker\n  steps={[\n    { label: 'Account details' },\n    { label: 'Verification' },\n    { label: 'Listing details' },\n    { label: 'Review & submit' },\n  ]}\n  activeStep={1}\n/>`} />
      </DocSection>

      <DocSection title="Vertical">
        <Demo>
          <DemoGroup label="Step 2 of 4" column>
            <ProgressTracker steps={TRACKER_STEPS} activeStep={1} variant="vertical" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<ProgressTracker steps={steps} activeStep={1} variant="vertical" />`} />
      </DocSection>

      <DocSection title="Interactive">
        <Demo>
          <DemoGroup label="Horizontal — click to advance" column>
            <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              <ProgressTracker steps={TRACKER_STEPS} activeStep={activeH} />
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <Button variant="secondary" size="sm" disabled={activeH === 0} onClick={() => setActiveH(s => s - 1)}>Back</Button>
                <Button variant="primary"   size="sm" disabled={activeH >= TRACKER_STEPS.length} onClick={() => setActiveH(s => s + 1)}>
                  {activeH >= TRACKER_STEPS.length ? 'Complete' : 'Next'}
                </Button>
              </div>
            </div>
          </DemoGroup>
          <DemoGroup label="Vertical — click to advance" column>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              <ProgressTracker steps={TRACKER_STEPS} activeStep={activeV} variant="vertical" />
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <Button variant="secondary" size="sm" disabled={activeV === 0} onClick={() => setActiveV(s => s - 1)}>Back</Button>
                <Button variant="primary"   size="sm" disabled={activeV >= TRACKER_STEPS.length} onClick={() => setActiveV(s => s + 1)}>
                  {activeV >= TRACKER_STEPS.length ? 'Complete' : 'Next'}
                </Button>
              </div>
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

/* ── Announcements documentation ────────────────────────────── */

function AnnouncementsDoc() {
  const [visible, setVisible] = useState(true)

  return (
    <DocPage
      title="Announcements"
      description="Full-width dismissible banner for platform-wide communications."
    >
      <DocSection title="In context">
        <div style={{ padding: 'var(--spacing-lg)' }}>
        <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
          {visible && (
            <Announcement
              title="AuctionsPlus National Sheep Sale — entries now open."
              message="Early bird listing fee waived until 15 April."
              action={{ label: 'Enter your lots', onClick: () => {} }}
              onDismiss={() => setVisible(false)}
            />
          )}
          <Header />
        </div>
        {!visible && (
          <Button variant="text" leadingIcon="refresh" onClick={() => setVisible(true)} style={{ marginTop: 'var(--spacing-md)' }}>
            Restore banner
          </Button>
        )}
        </div>
        <CodeBlock code={`{visible && (\n  <Announcement\n    title="National Sheep Sale — entries now open."\n    message="Early bird listing fee waived until 15 April."\n    action={{ label: 'Enter your lots', onClick: () => {} }}\n    onDismiss={() => setVisible(false)}\n  />\n)}\n<Header />`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Table ──────────────────────────────────────────────────── */


function EngagementCell({ views, secondary, secondaryIcon = 'gavel' }) {
  const iconStyle = {
    fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    fontSize:              '14px',
    lineHeight:            1,
    color:                 'var(--color-text-grey)',
    userSelect:            'none',
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)',
        fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)',
        color: 'var(--color-text-grey-dark)' }}>
        <span aria-hidden="true" style={iconStyle}>visibility</span>
        {views}
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)',
        fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)',
        color: 'var(--color-text-grey-dark)' }}>
        <span aria-hidden="true" style={iconStyle}>{secondaryIcon}</span>
        {secondary}
      </span>
    </div>
  )
}

/* --- Extended management table --- */

const EXTENDED_COLUMNS = [
  { id: 'lot',        label: 'Lot',        width: 60,  verticalAlign: 'middle', align: 'center' },
  { id: 'title',      label: 'Title',      minWidth: 200 },
  { id: 'pricing',    label: 'Pricing',    width: 160 },
  { id: 'status',     label: 'Status',     sortable: true, width: 130 },
  { id: 'engagement', label: 'Engagement', width: 110 },
  { id: 'actions',    label: 'Actions',    minWidth: 280 },
]

const EXTENDED_ROWS_INITIAL = [
  { id: '101', lot: '101', title: 'Caterpillar 305.5E2 Mini Excavator',     ref: '128945 – Melbourne Industrial Supply', type: 'Auction', reserve: 42000, start: 35000, increment: 1000, status: 'published',   views: 845, bids: 23 },
  { id: '102', lot: '102', title: 'Toyota 8FG25 Forklift – 2.5T',           ref: '234567 – ABC Contractors',             type: 'Auction', reserve: 20000, start: 18000, increment: 500,  status: 'published',   views: 623, bids: 18 },
  { id: '103', lot: '103', title: 'Compair C38 Air Compressor',              ref: '345678 – Sydney Equipment Co.',        type: 'Buy Now', reserve: 7500,  start: 6000,  increment: 250,  status: 'withdrawn',   views: 342, bids: 7  },
  { id: '104', lot: '104', title: 'Miller Syncrowave 250 TIG Welder',        ref: '456789 – Precision Manufacturing',     type: 'Auction', reserve: 2800,  start: 2500,  increment: 100,  status: 'published',   views: 289, bids: 12 },
  { id: '105', lot: '105', title: 'Bobcat S570 Skid Steer Loader',           ref: '567890 – QLD Plant Hire',              type: 'Auction', reserve: 58000, start: 45000, increment: 2000, status: 'unpublished', views: 0,   bids: 0  },
  { id: '106', lot: '106', title: 'DeWalt DCD996 Hammer Drill – 3 Pack',     ref: '678901 – Trade Tools Direct',          type: 'Buy Now', reserve: 840,   start: 700,   increment: 50,   status: 'published',   views: 198, bids: 4  },
]

function ActionToggles() {
  const [featured,  setFeatured]  = useState(false)
  const [buyNow,    setBuyNow]    = useState(false)
  const [makeOffer, setMakeOffer] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
      <Button variant="secondary" size="sm" leadingIcon="edit">Edit Listing</Button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        <Toggle label="Featured"      checked={featured}  onChange={e => setFeatured(e.target.checked)}  size="sm" />
        <Toggle label="Buy Now"       checked={buyNow}    onChange={e => setBuyNow(e.target.checked)}    size="sm" />
        <Toggle label="Make an Offer" checked={makeOffer} onChange={e => setMakeOffer(e.target.checked)} size="sm" />
      </div>
    </div>
  )
}

function ExtendedTableDemo() {
  const [sortBy, setSortBy]   = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const handleSort = (colId) => {
    if (sortBy === colId) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortBy(colId); setSortDir('asc') }
  }

  const sorted = [...EXTENDED_ROWS_INITIAL].sort((a, b) => {
    if (!sortBy) return 0
    const av = a[sortBy], bv = b[sortBy]
    const cmp = typeof av === 'string' ? av.localeCompare(bv) : av - bv
    return sortDir === 'asc' ? cmp : -cmp
  })

  const renderCell = (colId, row) => {
    if (colId === 'lot') {
      return (
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          fontWeight: 500,
          color:      'var(--color-text-dark)',
        }}>{row.lot}</span>
      )
    }
    if (colId === 'title') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-0-5)' }}>
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            fontWeight: 500,
            color:      'var(--color-text-dark)',
          }}>{row.title}</span>
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            color:      'var(--color-text-grey)',
          }}>{row.ref}</span>
        </div>
      )
    }
    if (colId === 'pricing') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
          <DefinedUnitInput size="sm" unit="Reserve" unitWidth="68px" defaultValue={row.reserve} style={{ width: '160px' }} />
          <DefinedUnitInput size="sm" unit="Start"   unitWidth="68px" defaultValue={row.start}   style={{ width: '160px' }} />
        </div>
      )
    }
    if (colId === 'status') {
      return <ListingStatusTag variant={row.status} />
    }
    if (colId === 'engagement') {
      return <EngagementCell views={row.views} secondary={row.bids} secondaryIcon="gavel" />
    }
    if (colId === 'actions') {
      return <ActionToggles />
    }
  }

  return (
    <div style={{ border: '1px solid var(--color-border-grey-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <DataTable
        columns={EXTENDED_COLUMNS}
        rows={sorted}
        renderCell={renderCell}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={handleSort}
      />
    </div>
  )
}

/* --- Simple read-only table --- */

const SIMPLE_COLUMNS = [
  { id: 'id',     label: 'ID',     width: 60 },
  { id: 'name',   label: 'Name',   minWidth: 200 },
  { id: 'role',   label: 'Role',   minWidth: 120 },
  { id: 'status', label: 'Status', sortable: true, width: 120 },
  { id: 'joined', label: 'Joined', width: 120 },
  { id: 'actions',label: 'Actions', width: 120 },
]

const SIMPLE_ROWS = [
  { id: 'U-001', name: 'Sarah Mitchell',  role: 'Agent',    status: 'active',   joined: '12 Jan 2024' },
  { id: 'U-002', name: 'James Nguyen',    role: 'Buyer',    status: 'active',   joined: '3 Mar 2024'  },
  { id: 'U-003', name: 'Priya Sharma',    role: 'Seller',   status: 'inactive', joined: '19 Jun 2023' },
  { id: 'U-004', name: 'Tom Callaghan',   role: 'Agent',    status: 'pending',  joined: '8 Nov 2024'  },
  { id: 'U-005', name: 'Emma Whitfield',  role: 'Buyer',    status: 'active',   joined: '21 Feb 2024' },
]

function SimpleTableDemo() {
  const [sortBy, setSortBy]   = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const handleSort = (colId) => {
    if (sortBy === colId) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortBy(colId); setSortDir('asc') }
  }

  const sorted = [...SIMPLE_ROWS].sort((a, b) => {
    if (!sortBy) return 0
    const cmp = a[sortBy].localeCompare(b[sortBy])
    return sortDir === 'asc' ? cmp : -cmp
  })

  const renderCell = (colId, row) => {
    if (colId === 'name') {
      return (
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          fontWeight: 600,
          color:      'var(--color-text-dark)',
        }}>{row.name}</span>
      )
    }
    if (colId === 'status') {
      if (row.status === 'active')   return <LotStatusTag variant="published" />
      if (row.status === 'pending')  return <LotStatusTag variant="in-progress" />
      return <AccreditationTag label="Inactive" />
    }
    if (colId === 'actions') {
      return (
        <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
          <Button variant="text" size="sm">Edit</Button>
          <Button variant="text" size="sm" style={{ color: 'var(--color-text-red)' }}>Remove</Button>
        </div>
      )
    }
    return (
      <span style={{
        fontFamily: 'var(--type-family-primary)',
        fontSize:   'var(--type-size-body-sm)',
        color:      'var(--color-text-grey-dark)',
      }}>{row[colId]}</span>
    )
  }

  return (
    <div style={{ border: '1px solid var(--color-border-grey-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <DataTable
        columns={SIMPLE_COLUMNS}
        rows={sorted}
        renderCell={renderCell}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={handleSort}
      />
    </div>
  )
}

function TableDoc() {
  return (
    <DocPage
      title="Table"
      description="Data table with sortable columns, inline editing, and row actions."
    >
      <DocSection title="Extended — management table">
        <div style={{ padding: 'var(--spacing-lg)' }}>
          <ExtendedTableDemo />
        </div>
      </DocSection>

      <DocSection title="Simple — read-only table">
        <div style={{ padding: 'var(--spacing-lg)' }}>
          <SimpleTableDemo />
        </div>
      </DocSection>
    </DocPage>
  )
}

/* ── Commodity Nav ──────────────────────────────────────────── */

const COMMODITY_ITEMS = [
  { id: 'auction',   label: 'Today'     },
  { id: 'cattle',    label: 'Cattle'    },
  { id: 'sheep',     label: 'Sheep'     },
  { id: 'machinery', label: 'Machinery' },
  { id: 'equine',    label: 'Equine'    },
  { id: 'dog',       label: 'Dog'       },
  { id: 'goat',      label: 'Goat'      },
  { id: 'property',  label: 'Property'  },
  { id: 'charity',   label: 'Charity'   },
]

function SideNav({ children }) {
  return (
    <div style={{
      width:           '280px',
      backgroundColor: 'var(--color-bg-white)',
      borderRadius:    'var(--radius-md)',
      border:          '1px solid var(--color-border-grey-light)',
      padding:         'var(--spacing-sm) 0',
      display:         'flex',
      flexDirection:   'column',
    }}>
      {children}
    </div>
  )
}

function SideNavDoc() {
  return (
    <DocPage
      title="Side Navigation"
      description="Vertical nav panel for dashboard and admin page routing."
    >
      <DocSection title="Default">
        <Demo style={{ padding: 'var(--spacing-lg)', alignItems: 'flex-start' }}>
          <SideNav>
            <NavItemDemo icon="dashboard"     label="Overview"            active />
            <NavItemDemo icon="list_alt"      label="My Sales" />
            <NavItemDemo icon="shopping_bag"  label="My Purchases" />
            <NavItemDemo icon="notifications" label="Notification Centre" />
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-grey-light)', margin: 'var(--spacing-sm) 0' }} />
            <NavGroupDemo icon="person"       label="My Account" />
            <NavItemDemo icon="insights"      label="Market Insights" />
            <NavGroupDemo icon="menu_book"    label="Help & Resources" />
            <NavItemDemo icon="settings"      label="Communication Settings" />
          </SideNav>
        </Demo>
      </DocSection>

    </DocPage>
  )
}

function TabbedNavDoc() {
  const [tab1, setTab1] = useState('buy')
  const [tab2, setTab2] = useState('lots')
  const [tab3, setTab3] = useState('details')

  return (
    <DocPage
      title="Tabbed Navigation"
      description="Tab strip for switching between page sections."
    >
      <DocSection title="Default">
        <Demo>
          <DemoGroup column>
            <TabBar
              tabs={[
                { value: 'buy',   label: 'Buy'  },
                { value: 'sold',  label: 'Sold' },
                { value: 'news',  label: 'News' },
              ]}
              value={tab1}
              onChange={setTab1}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<TabBar\n  tabs={[\n    { value: 'overview', label: 'Overview' },\n    { value: 'pedigree', label: 'Pedigree' },\n  ]}\n  value={tab}\n  onChange={setTab}\n/>`} />
      </DocSection>

      <DocSection title="With badge">
        <Demo>
          <DemoGroup column>
            <TabBar
              tabs={[
                { value: 'lots',        label: 'Lots',        badge: 24 },
                { value: 'held',        label: 'Held',        badge: 6  },
                { value: 'lost',        label: 'Lost',        badge: 18 },
                { value: 'favourites',  label: 'Favourites',  badge: 3  },
              ]}
              value={tab2}
              onChange={setTab2}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<TabBar\n  tabs={[\n    { value: 'all', label: 'All', badge: 24 },\n    { value: 'active', label: 'Active', badge: 6 },\n  ]}\n  value={tab}\n  onChange={setTab}\n/>`} />
      </DocSection>

      <DocSection title="With leading icon">
        <Demo>
          <DemoGroup column>
            <TabBar
              tabs={[
                { value: 'details',   label: 'Details',   icon: 'fact_check'    },
                { value: 'pedigree',  label: 'Pedigree',  icon: 'genetics'      },
                { value: 'delivery',  label: 'Delivery',  icon: 'local_shipping' },
                { value: 'contact',   label: 'Contact',   icon: 'person'        },
              ]}
              value={tab3}
              onChange={setTab3}
            />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<TabBar\n  tabs={[\n    { value: 'details', label: 'Details', icon: 'fact_check' },\n    { value: 'delivery', label: 'Delivery', icon: 'local_shipping' },\n  ]}\n  value={tab}\n  onChange={setTab}\n/>`} />
      </DocSection>
    </DocPage>
  )
}

function CommodityNavDoc() {
  return (
    <DocPage
      title="Commodity Navigation"
      description="Icon button row for switching between commodity types."
    >
      <DocSection title="Default">
        <div style={{ padding: 'var(--spacing-lg)' }}><div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid var(--color-border-grey-light)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
          {COMMODITY_ITEMS.map(({ id, label }) => (
            <LargeIconButton
              key={id}
              label={label}
              iconSrc={`${import.meta.env.BASE_URL}icons/commodity/${id}.svg`}
            />
          ))}
        </div></div>
      </DocSection>
    </DocPage>
  )
}

/* ── Tabbed Accordion ───────────────────────────────────────── */

const LABEL_STYLE = { fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)', fontWeight: 600, color: 'var(--color-text-grey-dark)' }
const VALUE_STYLE = { fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)', fontWeight: 400, color: 'var(--color-text-grey-dark)' }
const GRID_4 = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: 'var(--spacing-md)', rowGap: 'var(--spacing-md)', paddingBottom: 'var(--spacing-xs)' }
const GRID_2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 'var(--spacing-md)', rowGap: 'var(--spacing-md)', paddingBottom: 'var(--spacing-xs)' }

function FieldGrid({ items, cols = 4 }) {
  return (
    <div style={cols === 2 ? GRID_2 : GRID_4}>
      {items.flatMap(({ label, value, icon }) => [
        <span key={`${label}-l`} style={{ ...LABEL_STYLE, display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          {icon && (
            <span aria-hidden="true" style={{
              fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              '18px',
              lineHeight:            1,
              color:                 'var(--color-text-grey-dark)',
              userSelect:            'none',
              flexShrink:            0,
            }}>{icon}</span>
          )}
          {label}
        </span>,
        <span key={`${label}-v`} style={VALUE_STYLE}>{value}</span>,
      ])}
    </div>
  )
}

const LOT_DETAIL_SECTIONS = [
  {
    id: 'detail',
    title: 'Detail',
    icon: 'fact_check',
    content: <FieldGrid cols={2} items={[
      { label: 'Lot number',   value: '1234',         icon: 'confirmation_number' },
      { label: 'Head count',   value: '42',           icon: 'calculate' },
      { label: 'State',        value: 'NSW',          icon: 'location_on' },
      { label: 'Listing date', value: '12 Apr 2026',  icon: 'calendar_today' },
    ]} />,
  },
  {
    id: 'pedigree',
    title: 'Pedigree',
    icon: 'fact_check',
    content: <FieldGrid items={[
      { label: 'Sire',    value: 'Classy Merino 123' },
      { label: 'Dam',     value: 'Poll Merino 456' },
      { label: 'Sire ID', value: 'AU-1234567' },
      { label: 'Dam ID',  value: 'AU-7654321' },
    ]} />,
  },
  {
    id: 'ebv',
    title: 'Estimated Breeding Values (EBV)',
    icon: 'fact_check',
    content: <FieldGrid items={[
      { label: 'Birth weight',   value: '+0.8' },
      { label: 'Weaning weight', value: '+12.4' },
      { label: 'Fleece weight',  value: '+0.6' },
      { label: 'Fibre diameter', value: '-1.2' },
    ]} />,
  },
  {
    id: 'delivery',
    title: 'Delivery',
    icon: 'local_shipping',
    content: <FieldGrid cols={2} items={[
      { label: 'Pick-up location', value: 'Dubbo, NSW' },
      { label: 'Trucking access',  value: 'B-double' },
      { label: 'Loading',          value: 'Crush available' },
      { label: 'Est. travel',      value: '3–4 hours' },
    ]} />,
  },
  {
    id: 'contact',
    title: 'Other Contact Details',
    icon: 'fact_check',
    content: <FieldGrid items={[
      { label: 'Agent',  value: 'John Smith' },
      { label: 'Agency', value: 'Elders Dubbo' },
      { label: 'Phone',  value: '02 6882 0000' },
      { label: 'Email',  value: 'john@elders.com.au' },
    ]} />,
  },
]

const TABBED_ACCORDION_DEMO_TABS = [
  { value: 'lot', label: 'Lot Details', sections: LOT_DETAIL_SECTIONS },
]

function CatalogueHeader({ style }) {
  return (
    <div style={{
      display:      'flex',
      alignItems:   'center',
      gap:          'var(--spacing-lg)',
      width:        '100%',
      border:       '1px solid var(--color-border-grey-light)',
      borderRadius: 'var(--radius-md)',
      padding:      'var(--spacing-lg)',
      background:   'var(--color-bg-white)',
      ...style,
    }}>

      {/* Logo circle */}
      <div style={{
        width:          '96px',
        height:         '96px',
        borderRadius:   'var(--radius-full)',
        border:         '1px solid var(--color-border-grey-light)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
        background:     'var(--color-bg-white)',
        padding:        'var(--spacing-md)',
      }}>
        <Logo variant="light" iconOnly width="48px" />
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-lg)', minWidth: 0 }}>

        {/* Left — title + time */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-headline-sm)',
            lineHeight: 'var(--type-lh-headline-sm)',
            fontWeight: 600,
            color:      'var(--color-text-dark)',
          }}>Eastern States Cattle Sale</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <span style={{
              fontFamily:            "'Material Symbols Outlined'",
              fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              '18px',
              lineHeight:            1,
              color:                 'var(--color-text-grey-dark)',
            }} aria-hidden="true">update</span>
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-md)',
              lineHeight: 'var(--type-lh-body-md)',
              color:      'var(--color-text-grey-dark)',
            }}>19 hours 32 minutes</span>
          </div>
        </div>

        {/* Right — icon buttons + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexShrink: 0, alignSelf: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            {['star', 'ios_share', 'more_vert'].map(icon => (
              <button key={icon} aria-label={icon} style={{
                width:          '36px',
                height:         '36px',
                border:         'none',
                background:     'none',
                cursor:         'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          'var(--color-text-grey-dark)',
              }}>
                <span style={{
                  fontFamily:            "'Material Symbols Outlined'",
                  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  fontSize:              '22px',
                  lineHeight:            1,
                }} aria-hidden="true">{icon}</span>
              </button>
            ))}
          </div>
          <button style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            height:         'var(--size-btn-md)',
            padding:        '0 var(--spacing-lg)',
            border:         'none',
            borderRadius:   'var(--radius-sm)',
            background:     'var(--color-brand-primary)',
            cursor:         'pointer',
            fontFamily:     'var(--type-family-primary)',
            fontSize:       'var(--type-size-body-sm)',
            fontWeight:     500,
            color:          'var(--color-text-white)',
          }}>
            View Lots
          </button>
        </div>
      </div>
    </div>
  )
}

const STUD_LOGO = 'https://www.figma.com/api/mcp/asset/825e60f5-67fe-414f-bcb1-56aa432b1d65'

function StudProfileHeader({ style }) {
  return (
    <div style={{
      display:      'flex',
      alignItems:   'center',
      gap:          'var(--spacing-lg)',
      width:        '100%',
      border:       '1px solid var(--color-border-grey-light)',
      borderRadius: 'var(--radius-md)',
      padding:      'var(--spacing-lg)',
      background:   'var(--color-bg-white)',
      ...style,
    }}>

      {/* Stud logo */}
      <div style={{
        width:          '96px',
        height:         '96px',
        borderRadius:   'var(--radius-full)',
        border:         '1px solid var(--color-border-grey-light)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
        overflow:       'hidden',
        padding:        'var(--spacing-md)',
        background:     'var(--color-bg-white)',
      }}>
        <img src={STUD_LOGO} alt="Te Mania Angus" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--spacing-lg)', minWidth: 0 }}>

        {/* Left — title + meta + social */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', minWidth: 0 }}>
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-headline-sm)',
            lineHeight: 'var(--type-lh-headline-sm)',
            fontWeight: 600,
            color:      'var(--color-text-dark)',
          }}>Te Mania Angus Northern Spring Bull Sale</span>

          {/* Location + website */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
              <span style={{
                fontFamily:            "'Material Symbols Outlined'",
                fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                fontSize:              '18px',
                lineHeight:            1,
                color:                 'var(--color-text-grey-dark)',
              }} aria-hidden="true">location_on</span>
              <span style={{ fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)', lineHeight: 'var(--type-lh-body-md)', color: 'var(--color-text-grey-dark)' }}>
                Victoria, Australia
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
              <span style={{
                fontFamily:            "'Material Symbols Outlined'",
                fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                fontSize:              '18px',
                lineHeight:            1,
                color:                 'var(--color-brand-primary)',
              }} aria-hidden="true">language</span>
              <span style={{ fontFamily: 'var(--type-family-primary)', fontSize: 'var(--type-size-body-md)', lineHeight: 'var(--type-lh-body-md)', color: 'var(--color-brand-primary)' }}>
                www.temaniaangus.com
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            {[
              { label: 'Facebook',  path: 'M11.25 11.25H13.125L13.875 8.75H11.25V7.5C11.25 6.8125 11.25 6.25 12.5 6.25H13.875V4.1C13.6469 4.07013 12.8106 4 11.9269 4C10.0806 4 8.75 5.1175 8.75 7.15V8.75H6.875V11.25H8.75V17.5H11.25V11.25Z' },
              { label: 'Instagram', path: 'M10 4.324c1.884 0 2.107.007 2.85.041.688.031 1.061.146 1.31.243.329.128.564.281.811.528.247.247.4.482.528.811.097.249.212.622.243 1.31.034.743.041.966.041 2.85s-.007 2.107-.041 2.85c-.031.688-.146 1.061-.243 1.31a2.184 2.184 0 0 1-.528.811 2.184 2.184 0 0 1-.811.528c-.249.097-.622.212-1.31.243-.743.034-.966.041-2.85.041s-2.107-.007-2.85-.041c-.688-.031-1.061-.146-1.31-.243a2.184 2.184 0 0 1-.811-.528 2.184 2.184 0 0 1-.528-.811c-.097-.249-.212-.622-.243-1.31C4.331 12.107 4.324 11.884 4.324 10s.007-2.107.041-2.85c.031-.688.146-1.061.243-1.31.128-.329.281-.564.528-.811.247-.247.482-.4.811-.528.249-.097.622-.212 1.31-.243.743-.034.966-.041 2.85-.041M10 3c-1.916 0-2.156.008-2.91.042-.751.034-1.265.153-1.715.327a3.465 3.465 0 0 0-1.252.815 3.465 3.465 0 0 0-.815 1.252c-.174.45-.293.964-.327 1.715C3.008 7.844 3 8.084 3 10s.008 2.156.042 2.91c.034.751.153 1.265.327 1.715.18.463.42.856.815 1.252.396.396.789.636 1.252.815.45.174.964.293 1.715.327C7.844 16.992 8.084 17 10 17s2.156-.008 2.91-.042c.751-.034 1.265-.153 1.715-.327a3.465 3.465 0 0 0 1.252-.815 3.465 3.465 0 0 0 .815-1.252c.174-.45.293-.964.327-1.715.034-.754.042-.994.042-2.91s-.008-2.156-.042-2.91c-.034-.751-.153-1.265-.327-1.715a3.465 3.465 0 0 0-.815-1.252 3.465 3.465 0 0 0-1.252-.815c-.45-.174-.964-.293-1.715-.327C12.156 3.008 11.916 3 10 3zm0 3.595a3.405 3.405 0 1 0 0 6.81 3.405 3.405 0 0 0 0-6.81zm0 5.614a2.209 2.209 0 1 1 0-4.418 2.209 2.209 0 0 1 0 4.418zm4.339-5.75a.796.796 0 1 1-1.592 0 .796.796 0 0 1 1.592 0z' },
              { label: 'LinkedIn',  path: 'M4.5 7H6.5V15.5H4.5V7ZM5.5 4C4.67 4 4 4.67 4 5.5C4 6.33 4.67 7 5.5 7C6.33 7 7 6.33 7 5.5C7 4.67 6.33 4 5.5 4ZM14.5 7C13.12 7 12.15 7.62 11.75 8.25V7H9.75V15.5H11.75V11C11.75 9.9 12.65 9 13.75 9C14.85 9 15.75 9.9 15.75 11V15.5H17.75V10.75C17.75 8.68 16.32 7 14.5 7Z' },
            ].map(({ label, path }) => (
              <button key={label} aria-label={label} style={{
                width:          '28px',
                height:         '28px',
                borderRadius:   'var(--radius-full)',
                border:         '1px solid var(--color-border-grey-light)',
                background:     'none',
                cursor:         'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
              }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--color-text-grey-dark)"><path d={path} /></svg>
              </button>
            ))}
          </div>

        </div>

        {/* Right — actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexShrink: 0, alignSelf: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            {['star', 'ios_share', 'more_vert'].map(icon => (
              <button key={icon} aria-label={icon} style={{
                width:          '36px',
                height:         '36px',
                borderRadius:   'var(--radius-full)',
                border:         'none',
                background:     'none',
                cursor:         'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          'var(--color-text-grey-dark)',
              }}>
                <span style={{
                  fontFamily:            "'Material Symbols Outlined'",
                  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  fontSize:              '22px',
                  lineHeight:            1,
                }} aria-hidden="true">{icon}</span>
              </button>
            ))}
          </div>
          <button style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            height:         'var(--size-btn-md)',
            padding:        '0 var(--spacing-lg)',
            border:         'none',
            borderRadius:   'var(--radius-sm)',
            background:     'var(--color-brand-primary)',
            cursor:         'pointer',
            fontFamily:     'var(--type-family-primary)',
            fontSize:       'var(--type-size-body-sm)',
            fontWeight:     500,
            color:          'var(--color-text-white)',
          }}>
            View Lots
          </button>
        </div>
      </div>
    </div>
  )
}

function HeaderContentDoc() {
  return (
    <DocPage
      title="Content Header"
      description="Page header patterns with titles, metadata, and actions."
    >
      <DocSection title="Catalogue header">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <CatalogueHeader />
        </Demo>
      </DocSection>

      <DocSection title="Stud profile header">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <StudProfileHeader />
        </Demo>
      </DocSection>

      <DocSection title="Lot detail header">
        <Demo style={{ padding: 'var(--spacing-lg)' }}>
          <LotDetailHeader
            title="Pepperton Poll Dorset - Tag 512"
            location="Elmore, VIC"
            lotNumber="Lot 12"
            cta={{ label: 'Bid to Connect', onClick: () => {} }}
            style={{ border: '1px solid var(--color-border-grey-light)', borderRadius: 'var(--radius-md)', width: '100%', boxSizing: 'border-box' }}
          />
        </Demo>
      </DocSection>
    </DocPage>
  )
}

function TabbedAccordionDoc() {
  return (
    <DocPage
      title="Tabbed Accordion"
      description="Tabs combined with collapsible accordion sections."
    >
      <DocSection title="Interactive">
        <div style={{ padding: 'var(--spacing-lg)' }}>
          <TabbedAccordion
            tabs={TABBED_ACCORDION_DEMO_TABS}
            style={{ maxWidth: '720px', border: '1px solid var(--color-border-grey-light)', borderRadius: 'var(--radius-md)' }}
          />
        </div>
        <CodeBlock code={`<TabbedAccordion
  tabs={[
    {
      value: 'lot',
      label: 'Lot Details',
      sections: [
        { id: 'details',  title: 'Details',  content: <DetailsContent /> },
        { id: 'pedigree', title: 'Pedigree', content: <PedigreeContent /> },
        { id: 'delivery', title: 'Delivery', content: <DeliveryContent /> },
      ],
    },
  ]}
/>`} />
      </DocSection>

    </DocPage>
  )
}

/* ── Flyout Filter ──────────────────────────────────────────── */

const FILTER_ITEMS = [
  { id: 'title',       label: 'Title',              type: 'text' },
  { id: 'buy-type',    label: 'Buy Type',            type: 'checkboxes', options: ['Auction', 'Buy Now', 'Expression of Interest', 'Tender'] },
  { id: 'location',    label: 'Location',            type: 'text' },
  { id: 'distance',    label: 'Distance (km radius)', type: 'number' },
  { id: 'agent',       label: 'Agent',               type: 'text' },
  { id: 'breed',       label: 'Breed',               type: 'checkboxes', options: ['Merino', 'Poll Merino', 'Angus', 'Hereford', 'Charolais', 'Brahman', 'Wagyu'] },
  { id: 'bloodline',   label: 'Bloodline',           type: 'text' },
  { id: 'category',    label: 'Category / Sex',      type: 'checkboxes', options: ['Ewe', 'Ram', 'Wether', 'Ewe Lamb', 'Ram Lamb', 'Wether Lamb'] },
  { id: 'pregnancy',   label: 'Pregnancy Status',    type: 'checkboxes', options: ['In Calf', 'In Lamb', 'PTIC', 'Empty', 'Unknown'] },
  { id: 'age',         label: 'Age',                 type: 'minmax', unit: 'months' },
  { id: 'weight',      label: 'Weight',              type: 'minmax', unit: 'kg' },
  { id: 'accreditation', label: 'Accreditation',     type: 'checkboxes', options: ['MSA', 'PCAS', 'EU Accredited', 'HGP Free', 'Organic'] },
  { id: 'weaning',     label: 'Weaning',             type: 'checkboxes', options: ['Weaned', 'Not Weaned', 'Unknown'] },
  { id: 'sample',      label: 'Min Sample Size %',   type: 'number' },
  { id: 'trucking',    label: 'Trucking Access',     type: 'toggle' },
]

function FilterAccordionItem({ item, values, onChange }) {
  const [open, setOpen] = useState(false)

  const header = (
    <button onClick={() => setOpen(o => !o)} style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      width:          '100%',
      background:     'none',
      border:         'none',
      padding:        'var(--spacing-sm-md) 0',
      cursor:         'pointer',
      fontFamily:     'var(--type-family-primary)',
      fontSize:       'var(--type-size-body-sm)',
      fontWeight:     600,
      color:          'var(--color-text-dark)',
    }}>
      {item.label}
      <span aria-hidden="true" style={{
        fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              '18px',
        lineHeight:            1,
        color:                 'var(--color-text-grey)',
        userSelect:            'none',
        transition:            'transform 0.2s ease',
        transform:             open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}>expand_more</span>
    </button>
  )

  let body = null
  if (item.type === 'checkboxes') {
    const checked = values[item.id] ?? []
    body = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', paddingBottom: 'var(--spacing-md)' }}>
        {item.options.map(opt => (
          <Checkbox
            key={opt}
            label={opt}
            checked={checked.includes(opt)}
            onChange={() => {
              const next = checked.includes(opt) ? checked.filter(v => v !== opt) : [...checked, opt]
              onChange(item.id, next)
            }}
          />
        ))}
      </div>
    )
  } else if (item.type === 'minmax') {
    body = (
      <div style={{ paddingBottom: 'var(--spacing-md)' }}>
        <MinMaxInput minPlaceholder={`Min ${item.unit ?? ''}`} maxPlaceholder={`Max ${item.unit ?? ''}`} />
      </div>
    )
  } else if (item.type === 'number') {
    body = (
      <div style={{ paddingBottom: 'var(--spacing-md)' }}>
        <NumberInput
          value={values[item.id] ?? ''}
          onChange={e => onChange(item.id, e.target.value)}
        />
      </div>
    )
  } else if (item.type === 'text') {
    body = (
      <div style={{ paddingBottom: 'var(--spacing-md)' }}>
        <Input
          value={values[item.id] ?? ''}
          onChange={e => onChange(item.id, e.target.value)}
          placeholder={`Enter ${item.label.toLowerCase()}`}
        />
      </div>
    )
  } else if (item.type === 'toggle') {
    body = (
      <div style={{ paddingBottom: 'var(--spacing-md)' }}>
        <Toggle
          label={item.label}
          checked={values[item.id] ?? false}
          onChange={e => onChange(item.id, e.target.checked)}
          size="sm"
        />
      </div>
    )
  }

  return (
    <div style={{ borderBottom: '1px solid var(--color-border-grey-light)' }}>
      {header}
      {open && body}
    </div>
  )
}

function FlyoutFilter({ open, onClose }) {
  const [values, setValues]   = useState({})
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => { setClosing(false); onClose() }, 220)
  }

  const handleChange = (id, val) => setValues(v => ({ ...v, [id]: val }))

  const activeCount = Object.values(values).filter(v =>
    Array.isArray(v) ? v.length > 0 : v !== '' && v !== false && v != null
  ).length

  if (!open && !closing) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 'var(--z-modal)', display: 'flex' }}>
      {/* Overlay */}
      <div
        className={closing ? 'overlay-exit' : 'overlay-enter'}
        onClick={handleClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}
      />

      {/* Panel */}
      <div
        className={closing ? 'flyout-exit' : 'flyout-enter'}
        style={{
          position:        'relative',
          width:           '360px',
          height:          '100%',
          backgroundColor: 'var(--color-bg-white)',
          display:         'flex',
          flexDirection:   'column',
          boxShadow:       'var(--shadow-xl)',
          zIndex:          1,
        }}
      >
        {/* Header */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        'var(--spacing-md) var(--spacing-lg)',
          borderBottom:   '1px solid var(--color-border-grey-light)',
          flexShrink:     0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-title-md)',
              fontWeight: 600,
              color:      'var(--color-text-dark)',
            }}>Filters</span>
            {activeCount > 0 && (
              <span style={{
                display:         'inline-flex',
                alignItems:      'center',
                justifyContent:  'center',
                minWidth:        '20px',
                height:          '20px',
                borderRadius:    'var(--radius-full)',
                backgroundColor: 'var(--color-brand-primary)',
                fontFamily:      'var(--type-family-primary)',
                fontSize:        'var(--type-size-label-md)',
                fontWeight:      600,
                color:           'var(--color-text-white)',
                padding:         '0 var(--spacing-xs)',
              }}>{activeCount}</span>
            )}
          </div>
          <button onClick={handleClose} aria-label="Close filters" style={{
            display:    'inline-flex',
            alignItems: 'center',
            background: 'none',
            border:     'none',
            padding:    0,
            cursor:     'pointer',
            color:      'var(--color-text-grey)',
          }}>
            <span aria-hidden="true" style={{
              fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize:              '22px',
              lineHeight:            1,
              userSelect:            'none',
            }}>close</span>
          </button>
        </div>

        {/* Accordion body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--spacing-lg)' }}>
          {FILTER_ITEMS.map(item => (
            <FilterAccordionItem key={item.id} item={item} values={values} onChange={handleChange} />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display:    'flex',
          gap:        'var(--spacing-sm)',
          padding:    'var(--spacing-md) var(--spacing-lg)',
          borderTop:  '1px solid var(--color-border-grey-light)',
          flexShrink: 0,
        }}>
          <Button variant="secondary" onClick={() => setValues({})} style={{ flex: 1 }}>Clear all</Button>
          <Button variant="primary"   onClick={handleClose}         style={{ flex: 1 }}>Apply filters</Button>
        </div>
      </div>
    </div>
  )
}

function FlyoutFilterDoc() {
  const [open, setOpen] = useState(false)
  return (
    <DocPage
      title="Filter"
      description="Slide-in filter panel with accordion sections."
    >
      <DocSection title="Interactive">
        <div style={{ padding: 'var(--spacing-lg)' }}>
          <Button variant="secondary" leadingIcon="filter_list" onClick={() => setOpen(true)}>
            Open filters
          </Button>
        </div>
        <FlyoutFilter open={open} onClose={() => setOpen(false)} />
        <CodeBlock code={`const [open, setOpen] = useState(false)\n\n<Button variant="secondary" leadingIcon="filter_list" onClick={() => setOpen(true)}>\n  Open filters\n</Button>\n\n<FlyoutFilter open={open} onClose={() => setOpen(false)} />`} />
      </DocSection>
    </DocPage>
  )
}

function ComingSoonDoc({ title, description = 'This component is coming soon.' }) {
  return (
    <DocPage title={title} description={description}>
      <div className="ds-coming-soon">
        <span className="ds-coming-soon__label">Coming soon</span>
      </div>
    </DocPage>
  )
}

function DatePickerDemo({ state, hint, preselected }) {
  const [date, setDate] = useState(preselected ?? null)
  return (
    <DatePicker
      label="Date"
      value={date}
      onChange={setDate}
      state={state}
      hint={hint}
      style={{ width: '280px' }}
    />
  )
}

function DatePickerDoc() {
  return (
    <DocPage
      title="Date Picker"
      description="Single-date input with a calendar dropdown."
      figmaNodeId="Components · 96:2304"
    >
      <DocSection title="States">
        <Demo>
          <DemoGroup label="Default">
            <DatePickerDemo />
          </DemoGroup>
<DemoGroup label="Error">
            <DatePickerDemo state="error" hint="Please select a date" />
          </DemoGroup>
          <DemoGroup label="Disabled">
            <DatePickerDemo state="disabled" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`const [date, setDate] = useState(null)\n\n<DatePicker label="Date" value={date} onChange={setDate} />\n<DatePicker label="Date" value={date} onChange={setDate} state="error" hint="Please select a date" />\n<DatePicker label="Date" value={date} onChange={setDate} state="disabled" />`} />
      </DocSection>
    </DocPage>
  )
}

function ToggleDoc() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(true)
  const [c, setC] = useState(false)
  const [d, setD] = useState(true)
  return (
    <DocPage
      title="Toggle"
      description="On/off control for activating or deactivating a setting."
      figmaNodeId="Components · 261:657"
    >
      <DocSection title="Sizes">
        <Demo>
          <DemoGroup label="Large (default)">
            <Toggle label="Enable notifications" checked={a} onChange={e => setA(e.target.checked)} />
          </DemoGroup>
          <DemoGroup label="Small">
            <Toggle label="Enable notifications" size="sm" checked={b} onChange={e => setB(e.target.checked)} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Toggle label="Enable notifications" size="lg" checked={on} onChange={e => setOn(e.target.checked)} />\n<Toggle label="Enable notifications" size="sm" checked={on} onChange={e => setOn(e.target.checked)} />`} />
      </DocSection>
      <DocSection title="States">
        <Demo>
          <DemoGroup label="Off">
            <Toggle checked={false} onChange={() => {}} />
          </DemoGroup>
          <DemoGroup label="On">
            <Toggle checked={true} onChange={() => {}} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Toggle checked={false} onChange={() => {}} />\n<Toggle checked={true} onChange={() => {}} />`} />
      </DocSection>
      <DocSection title="With label">
        <Demo>
          <DemoGroup column>
            <Toggle label="Dark mode" checked={c} onChange={e => setC(e.target.checked)} />
            <Toggle label="Email notifications" checked={d} onChange={e => setD(e.target.checked)} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`const [on, setOn] = useState(false)\n\n<Toggle\n  label="Dark mode"\n  checked={on}\n  onChange={e => setOn(e.target.checked)}\n/>`} />
      </DocSection>
    </DocPage>
  )
}

/* ── Toast documentation ───────────────────────────────────── */

function ToastDoc() {
  const { show } = useToast()
  return (
    <DocPage
      title="Toast"
      description="Floating notifications that auto-dismiss after 4 seconds."
    >
      <DocSection title="Variants">
        <Demo>
          <DemoGroup label="Success">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'success', title: 'Lot saved', message: 'Your changes have been saved successfully.' })}>
              Show success
            </Button>
          </DemoGroup>
          <DemoGroup label="Error">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'error', title: 'Submission failed', message: 'There was a problem placing your bid. Please try again.' })}>
              Show error
            </Button>
          </DemoGroup>
          <DemoGroup label="Warning">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'warning', title: 'Session expiring', message: 'Your session will expire in 5 minutes.' })}>
              Show warning
            </Button>
          </DemoGroup>
          <DemoGroup label="Info">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'info', title: 'Heads up', message: 'Auction opens in 10 minutes.' })}>
              Show info
            </Button>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`const { show } = useToast()\n\nshow({ variant: 'success', title: 'Lot saved',         message: 'Your changes have been saved.' })\nshow({ variant: 'error',   title: 'Submission failed', message: 'Something went wrong.' })\nshow({ variant: 'warning', title: 'Session expiring',  message: 'Session expiring soon.' })\nshow({ variant: 'info',    title: 'Heads up',          message: 'Auction opens in 10 minutes.' })`} />
      </DocSection>

      <DocSection title="With action">
        <Demo>
          <DemoGroup label="Info with CTA">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'info', title: 'New auction listed', message: 'Merino wool ewe flock, 240 head.', action: { label: 'View auction', onClick: () => {} } })}>
              Show with action
            </Button>
          </DemoGroup>
          <DemoGroup label="Error with CTA">
            <Button variant="primary" size="sm" onClick={() => show({ variant: 'error', title: 'Payment declined', message: 'Your payment could not be processed.', action: { label: 'Update payment method', onClick: () => {} } })}>
              Show with action
            </Button>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`show({\n  variant: 'info',\n  title: 'New auction listed',\n  message: 'Merino wool ewe flock, 240 head.',\n  action: { label: 'View auction', onClick: () => navigate('/auction/123') },\n})`} />
      </DocSection>

      <DocSection title="Persistent">
        <Demo>
          <DemoGroup label="Persistent (no auto-dismiss)">
            <Button variant="secondary" size="sm" onClick={() => show({ variant: 'warning', title: 'Action required', message: 'Please verify your account details.', duration: 0 })}>
              Persistent
            </Button>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`{/* Persistent — dismiss manually */}\nshow({ variant: 'warning', title: 'Action required', message: 'Action required.', duration: 0 })`} />
      </DocSection>
    </DocPage>
  )
}

function MessageDoc() {
  return (
    <DocPage
      title="Message"
      description="Inline feedback banners for info, warning, and error states."
      figmaNodeId="Components · 182:22244"
    >
      <DocSection title="Variants">
        <Demo>
          <DemoGroup label="Info" column>
            <Message variant="info" heading="Auction closing soon">This auction closes in 2 hours. Make sure your bids are placed.</Message>
          </DemoGroup>
          <DemoGroup label="Announcement" column>
            <Message variant="announcement" heading="Dubbo Spring Sale">New auction catalogue is now available. Entries close 18 Apr 2026.</Message>
          </DemoGroup>
          <DemoGroup label="Error" column>
            <Message variant="error" heading="Something went wrong">We couldn't process your request. Please try again or contact support.</Message>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Message variant="info" heading="Auction closing soon">This auction closes in 2 hours.</Message>\n<Message variant="announcement" heading="Dubbo Spring Sale">New auction catalogue is now available.</Message>\n<Message variant="error" heading="Something went wrong">We couldn't process your request.</Message>`} />
      </DocSection>

      <DocSection title="With link">
        <Demo>
          <DemoGroup label="Info" column>
            <Message variant="info" heading="Auction closing soon" cta={{ label: 'View auction', onClick: () => {} }}>This auction closes in 2 hours. Make sure your bids are placed.</Message>
          </DemoGroup>
          <DemoGroup label="Announcement" column>
            <Message variant="announcement" heading="Dubbo Spring Sale" cta={{ label: 'View catalogue', onClick: () => {} }}>New auction catalogue is now available. Entries close 18 Apr 2026.</Message>
          </DemoGroup>
          <DemoGroup label="Error" column>
            <Message variant="error" heading="Something went wrong" cta={{ label: 'Contact support', onClick: () => {} }}>We couldn't process your request. Please try again.</Message>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Message variant="info" heading="Auction closing soon" cta={{ label: 'View auction', onClick: () => {} }}>This auction closes in 2 hours.</Message>`} />
      </DocSection>

    </DocPage>
  )
}

function TooltipDoc() {
  return (
    <DocPage
      title="Tooltip"
      description="Hover label that provides context for an element."
      figmaNodeId="Components · 183:22289"
    >
      <DocSection title="Placement">
        <Demo>
          <DemoGroup label="Hover each button">
            <Tooltip content="Top tooltip" placement="top">
              <Button variant="secondary">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button variant="secondary">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button variant="secondary">Right</Button>
            </Tooltip>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Tooltip content="Save your listing" placement="top">\n  <Button variant="secondary">Save</Button>\n</Tooltip>`} />
      </DocSection>

      <DocSection title="On any element">
        <Demo>
          <DemoGroup>
            <Tooltip content="AuctionsPlus brand logo">
              <Logo width="120px" />
            </Tooltip>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Tooltip content="AuctionsPlus brand logo">\n  <Logo width="120px" />\n</Tooltip>`} />
      </DocSection>
    </DocPage>
  )
}

function DocGroup({ title }) {
  return (
    <div style={{ paddingBottom: 'var(--spacing-xs)', paddingTop: 'var(--spacing-sm)' }}>
      <span style={{
        fontFamily: 'var(--type-family-primary)',
        fontSize:   'var(--type-size-body-md)',
        lineHeight: 'var(--type-lh-body-md)',
        fontWeight: 600,
        color:      'var(--color-text-dark)',
      }}>{title}</span>
    </div>
  )
}

function NavItemDemo({ label, active = false, disabled = false, icon, size = 'lg' }) {
  const sm = size === 'sm'
  return (
    <button
      disabled={disabled}
      style={{
        display:      'flex',
        alignItems:   'center',
        gap:          icon ? (sm ? 'var(--spacing-xs)' : 'var(--spacing-sm-md)') : 0,
        padding:      sm
          ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
          : 'var(--spacing-sm-md)',
        margin:       'var(--spacing-0-5) var(--spacing-sm)',
        width:        'calc(100% - 2 * var(--spacing-sm))',
        borderRadius: 'var(--radius-sm)',
        background:   active ? 'var(--color-brand-primary-light)' : 'none',
        border:       'none',
        cursor:       disabled ? 'default' : 'pointer',
        textAlign:    'left',
        fontFamily:   'var(--type-family-primary)',
        fontSize:     sm ? 'var(--type-size-body-sm)' : 'var(--type-size-body-md)',
        lineHeight:   sm ? 'var(--type-lh-body-sm)' : 1,
        fontWeight:   500,
        color:        active ? 'var(--color-brand-primary-dark)' : disabled ? 'var(--color-text-grey)' : 'var(--color-text-grey-dark)',
      }}
    >
      {icon && (
        <span style={{
          fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)',
          lineHeight:            1,
          color:                 'inherit',
          flexShrink:            0,
        }} aria-hidden="true">{icon}</span>
      )}
      {label}
    </button>
  )
}

function NavIconOnlyDemo({ icon, active = false }) {
  return (
    <button
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        margin:         'var(--spacing-0-5) var(--spacing-sm)',
        padding:        'var(--spacing-sm-md)',
        borderRadius:   'var(--radius-sm)',
        background:     active ? 'var(--color-brand-primary-light)' : 'none',
        border:         'none',
        cursor:         'pointer',
        color:          active ? 'var(--color-brand-primary-dark)' : 'var(--color-text-grey-dark)',
      }}
    >
      <span style={{
        fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize:              'var(--size-icon-xl)',
        lineHeight:            1,
      }} aria-hidden="true">{icon}</span>
    </button>
  )
}

function NavGroupDemo({ label, icon, size = 'lg' }) {
  const [open, setOpen] = useState(false)
  const sm = size === 'sm'
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display:        'flex',
          alignItems:     'center',
          gap:            icon ? (sm ? 'var(--spacing-xs)' : 'var(--spacing-sm-md)') : 0,
          padding:        sm
            ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
            : 'var(--spacing-sm-md)',
          margin:         'var(--spacing-0-5) var(--spacing-sm)',
          width:          'calc(100% - 2 * var(--spacing-sm))',
          borderRadius:   'var(--radius-sm)',
          background:     'none',
          border:         'none',
          cursor:         'pointer',
          textAlign:      'left',
          fontFamily:     'var(--type-family-primary)',
          fontSize:       sm ? 'var(--type-size-body-sm)' : 'var(--type-size-body-md)',
          lineHeight:     sm ? 'var(--type-lh-body-sm)' : 1,
          fontWeight:     500,
          color:          'var(--color-text-dark)',
        }}
      >
        {icon && (
          <span style={{
            fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)',
            lineHeight:            1,
            color:                 'inherit',
            flexShrink:            0,
          }} aria-hidden="true">{icon}</span>
        )}
        {label}
        <span style={{
          fontFamily:            "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              sm ? 'var(--size-icon-md)' : 'var(--size-icon-xl)',
          lineHeight:            1,
          color:                 'var(--color-text-grey-dark)',
          marginLeft:            'auto',
        }}>
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      {open && (
        <>
          <NavSubItemDemo label="Child item one" size={size} />
          <NavSubItemDemo label="Child item two" active size={size} />
        </>
      )}
    </div>
  )
}

function NavSubItemDemo({ label, active = false, size = 'lg' }) {
  const sm = size === 'sm'
  return (
    <button
      style={{
        display:      'flex',
        alignItems:   'center',
        padding:      sm
          ? 'var(--spacing-sm) calc(var(--spacing-sm) + var(--spacing-xs))'
          : 'var(--spacing-sm-md)',
        paddingLeft:  'var(--spacing-2xl)',
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
      }}
    >
      {label}
    </button>
  )
}

function HeaderMainNavDemo() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0 var(--spacing-md)', height: '48px' }}>
      <TopBarNav links={[{ label: 'Livestock', dropdown: true }, { label: 'Machinery', dropdown: false }]} />
    </div>
  )
}

function HeaderSubNavCommodityDemo() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0 var(--spacing-md)', height: '48px' }}>
      <BottomBarLeftNav />
    </div>
  )
}

function HeaderSubNavToolsDemo() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0 var(--spacing-md)', height: '48px' }}>
      <BottomBarRightNav />
    </div>
  )
}

function HeaderNavDefaultDemo() {
  const [active, setActive] = useState('Livestock')
  const links = ['Livestock', 'Machinery']
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0 var(--spacing-md)', height: '48px' }}>
      <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-md)' }}>
        {links.map(label => {
          const isActive = active === label
          return (
            <button key={label} onClick={() => setActive(label)} style={{
              display:    'inline-flex',
              alignItems: 'center',
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              padding:    '0 var(--spacing-xs)',
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-sm)',
              lineHeight: 'var(--type-lh-body-sm)',
              fontWeight: 500,
              color:      isActive ? 'var(--color-text-white)' : 'var(--color-text-grey-light)',
            }}>{label}</button>
          )
        })}
      </nav>
    </div>
  )
}

function HeaderNavBottomActiveDemo() {
  const [active, setActive] = useState('Livestock')
  const links = ['Livestock', 'Machinery']
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0 var(--spacing-md)', height: '48px' }}>
      <nav style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-md)' }}>
        {links.map(label => {
          const isActive = active === label
          return (
            <button key={label} onClick={() => setActive(label)} style={{
              display:      'inline-flex',
              alignItems:   'center',
              background:   'none',
              border:       'none',
              borderBottom: isActive ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
              cursor:       'pointer',
              padding:      '0 var(--spacing-xs)',
              fontFamily:   'var(--type-family-primary)',
              fontSize:     'var(--type-size-body-sm)',
              lineHeight:   'var(--type-lh-body-sm)',
              fontWeight:   500,
              color:        'var(--color-text-white)',
            }}>{label}</button>
          )
        })}
      </nav>
    </div>
  )
}

function MenuItemDoc() {
  return (
    <DocPage
      title="Nav Item"
      description="Navigation elements for sidebar, header, and footer contexts."
    >
      <DocSection title="Sidebar item - Large with icon">
        <Demo>
          <DemoGroup column>
            <div style={{ width: '200px', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', padding: 'var(--spacing-sm) 0', border: '1px solid var(--color-border-grey-light)' }}>
              <NavItemDemo icon="dashboard" label="Overview" />
              <NavItemDemo icon="list_alt" label="My Sales" active />
              <NavItemDemo icon="shopping_bag" label="My Purchases" />
              <NavItemDemo icon="notifications" label="Notifications" disabled />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Sidebar item - Large icon">
        <Demo>
          <DemoGroup column>
            <div style={{ display: 'inline-flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', padding: 'var(--spacing-sm) 0', border: '1px solid var(--color-border-grey-light)' }}>
              <NavIconOnlyDemo icon="dashboard" active />
              <NavIconOnlyDemo icon="list_alt" />
              <NavIconOnlyDemo icon="shopping_bag" />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Sidebar item - Large with icon and child">
        <Demo>
          <DemoGroup label="Click to expand" column>
            <div style={{ width: '200px', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', padding: 'var(--spacing-sm) 0', border: '1px solid var(--color-border-grey-light)' }}>
              <NavItemDemo icon="dashboard" label="Overview" />
              <NavGroupDemo icon="tune" label="Inputs" />
              <NavItemDemo icon="shopping_bag" label="My Purchases" />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Sidebar item - Small">
        <Demo>
          <DemoGroup column>
            <div style={{ width: '200px', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', padding: 'var(--spacing-sm) 0', border: '1px solid var(--color-border-grey-light)' }}>
              <NavItemDemo label="Overview" size="sm" />
              <NavItemDemo label="My Sales" active size="sm" />
              <NavItemDemo label="My Purchases" size="sm" />
              <NavItemDemo label="Notifications" disabled size="sm" />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Sidebar item - Small child">
        <Demo>
          <DemoGroup label="Click to expand" column>
            <div style={{ width: '200px', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', padding: 'var(--spacing-sm) 0', border: '1px solid var(--color-border-grey-light)' }}>
              <NavItemDemo label="Overview" size="sm" />
              <NavGroupDemo label="Inputs" size="sm" />
              <NavItemDemo label="My Purchases" size="sm" />
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Header item - With leading icon">
        <Demo>
          <DemoGroup label="Click to select" column>
            <HeaderSubNavToolsDemo />
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Header item - With trailing icon">
        <Demo>
          <DemoGroup label="Click to select" column>
            <HeaderSubNavCommodityDemo />
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Header item - Top active">
        <Demo>
          <DemoGroup label="Click to select" column>
            <HeaderMainNavDemo />
          </DemoGroup>
        </Demo>
      </DocSection>

      <DocSection title="Footer item - link">
        <Demo>
          <DemoGroup column>
            <div style={{ padding: 'var(--spacing-lg)', backgroundColor: 'var(--color-bg-dark)', borderRadius: 'var(--radius-sm)', display: 'inline-flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              {['About Us', 'Careers', 'Contact Us'].map(label => (
                <a key={label} href="#" style={{
                  fontFamily:     'var(--type-family-primary)',
                  fontSize:       'var(--type-size-body-sm)',
                  lineHeight:     'var(--type-lh-body-sm)',
                  fontWeight:     400,
                  color:          'var(--color-border-grey-light)',
                  textDecoration: 'none',
                }}>{label}</a>
              ))}
            </div>
          </DemoGroup>
        </Demo>
      </DocSection>
    </DocPage>
  )
}

function LogoDoc() {
  return (
    <DocPage
      title="Logo"
      description="AuctionsPlus logo in dark, light, and white variants."
      figmaNodeId="Components · 10:4564"
    >
      <DocSection title="Variants">
        <Demo>
          <DemoGroup label="Dark (default)">
            <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="dark" width="175px" />
            </div>
          </DemoGroup>
          <DemoGroup label="Light — on dark background">
            <div style={{ backgroundColor: 'var(--color-bg-dark)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="light" width="175px" />
            </div>
          </DemoGroup>
          <DemoGroup label="White — on brand background">
            <div style={{ backgroundColor: 'var(--color-bg-dark)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="white" width="175px" />
            </div>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Logo variant="dark" />\n<Logo variant="light" />\n<Logo variant="white" />`} />
      </DocSection>
      <DocSection title="Icon only">
        <Demo>
          <DemoGroup label="Dark">
            <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="dark" iconOnly width="32px" />
            </div>
          </DemoGroup>
          <DemoGroup label="Light — on dark background">
            <div style={{ backgroundColor: 'var(--color-bg-dark)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="light" iconOnly width="32px" />
            </div>
          </DemoGroup>
          <DemoGroup label="White — on brand background">
            <div style={{ backgroundColor: 'var(--color-bg-dark)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)', display: 'inline-flex' }}>
              <Logo variant="white" iconOnly width="32px" />
            </div>
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Logo variant="dark" iconOnly width="32px" />`} />
      </DocSection>
      <DocSection title="Sizing">
        <Demo>
          <DemoGroup label="Small">
            <Logo width="120px" />
          </DemoGroup>
          <DemoGroup label="Default (175px)">
            <Logo />
          </DemoGroup>
          <DemoGroup label="Large">
            <Logo width="240px" />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<Logo width="120px" />\n<Logo width="175px" />\n<Logo width="240px" />`} />
      </DocSection>
    </DocPage>
  )
}

function SpecialDoc() {
  return (
    <DocPage
      title="Search Field"
      description="Search input component."
      figmaNodeId="Components · 172:5260"
    >
      <DocSection title="Search bar">
        <Demo>
          <DemoGroup>
            <SearchBar outline style={{ maxWidth: '400px' }} />
            <SearchBar size="sm" outline style={{ maxWidth: '320px' }} />
          </DemoGroup>
        </Demo>
        <CodeBlock code={`<SearchBar outline />\n<SearchBar size="sm" outline />`} />
      </DocSection>
    </DocPage>
  )
}

/* ─────────────────────────────────────────────────────────────
   Colours
   ───────────────────────────────────────────────────────────── */

const COLOUR_GROUPS = [
  {
    label: 'Brand',
    tokens: [
      { name: '--color-brand-primary-dark',  hex: '#1542A7', light: false },
      { name: '--color-brand-primary',       hex: '#1971D8', light: false },
      { name: '--color-brand-primary-light', hex: '#E3F2FE', light: true  },
      null,
    ],
  },
  {
    label: 'Text',
    text: true,
    tokens: [
      // Neutral
      { name: '--color-text-black',              hex: '#000000' },
      { name: '--color-text-dark',               hex: '#002341' },
      { name: '--color-text-grey-dark',          hex: '#3D4041' },
      { name: '--color-text-grey',               hex: '#5C5E60' },
      { name: '--color-text-grey-light',         hex: '#B7BABC' },
      { name: '--color-text-white',              hex: '#FFFFFF' },
      null,
      null,
      // Blue
      { name: '--color-text-brand-primary-dark', hex: '#1542A7' },
      { name: '--color-text-brand-primary',      hex: '#1971D8' },
      null,
      null,
      // Status
      { name: '--color-text-red',                hex: '#CD002B' },
      { name: '--color-text-orange',             hex: '#D96725' },
      { name: '--color-text-green',              hex: '#006728' },
      null,
    ],
  },
  {
    label: 'Background',
    tokens: [
      // Dark navy
      { name: '--color-bg-dark',         hex: '#002341', light: false },
      { name: '--color-bg-default',      hex: '#013C65', light: false },
      { name: '--color-bg-dark-light',   hex: '#E4E8ED', light: true  },
      null,
      // Grey / neutral
      { name: '--color-bg-grey-dark',    hex: '#3D4041', light: false },
      { name: '--color-bg-grey-medium',  hex: '#B7BABC', light: true  },
      { name: '--color-bg-grey-light',   hex: '#DBDEE0', light: true  },
      { name: '--color-bg-light',        hex: '#F4F4F4', light: true  },
      { name: '--color-bg-white',        hex: '#FFFFFF', light: true  },
      { name: '--color-bg-blue-light',   hex: '#E3F2FE', light: true  },
      null,
      null,
      // Red
      { name: '--color-bg-red',          hex: '#CD002B', light: false },
      { name: '--color-bg-red-light',    hex: '#FFECF1', light: true  },
      null,
      null,
      // Orange
      { name: '--color-bg-orange',       hex: '#D96725', light: false },
      { name: '--color-bg-orange-light', hex: '#FDF4E3', light: true  },
      null,
      null,
      // Green
      { name: '--color-bg-green-dark',   hex: '#006728', light: false },
      { name: '--color-bg-green',        hex: '#00873D', light: false },
      { name: '--color-bg-green-light',  hex: '#E7F7EB', light: true  },
      null,
    ],
  },
  {
    label: 'Border',
    border: true,
    tokens: [
      // Grey
      { name: '--color-border-grey-dark',          hex: '#3D4041' },
      { name: '--color-border-grey',               hex: '#B7BABC' },
      { name: '--color-border-grey-light',         hex: '#DBDEE0' },
      null,
      // Blue
      { name: '--color-border-brand-primary-dark', hex: '#1542A7' },
      { name: '--color-border-brand-primary',      hex: '#1971D8' },
      null,
      null,
      // Status
      { name: '--color-border-red',                hex: '#CD002B' },
      { name: '--color-border-orange',             hex: '#D96725' },
      { name: '--color-border-green',              hex: '#00873D' },
      null,
    ],
  },
  {
    label: 'Status',
    tokens: [
      // Red
      { name: '--color-status-red',          hex: '#CD002B', light: false },
      { name: '--color-status-red-light',    hex: '#FFECF1', light: true  },
      null,
      null,
      // Orange
      { name: '--color-status-orange',       hex: '#D96725', light: false },
      { name: '--color-status-orange-light', hex: '#FDF4E3', light: true  },
      null,
      null,
      // Green
      { name: '--color-status-green-dark',   hex: '#006728', light: false },
      { name: '--color-status-green',        hex: '#00873D', light: false },
      { name: '--color-status-green-light',  hex: '#E7F7EB', light: true  },
      null,
    ],
  },
  {
    label: 'Accent',
    tokens: [
      // Teal
      { name: '--color-accent-teal',          hex: '#005147', light: false },
      { name: '--color-accent-teal-light',    hex: '#DDEEED', light: true  },
      null,
      null,
      // Yellow
      { name: '--color-accent-yellow',        hex: '#FFB700', light: true  },
      { name: '--color-accent-yellow-light',  hex: '#FFF9E1', light: true  },
      null,
      null,
      // Purple
      { name: '--color-accent-purple',        hex: '#6A1B9A', light: false },
      { name: '--color-accent-purple-light',  hex: '#F3E5F5', light: true  },
      null,
      null,
      // Pink
      { name: '--color-accent-pink',          hex: '#760046', light: false },
      { name: '--color-accent-pink-light',    hex: '#F3E0EA', light: true  },
      null,
      null,
    ],
  },
]

function ColoursPanel() {
  return (
    <div className="ds-panel">
      {COLOUR_GROUPS.map(({ label, tokens, text, border }) => {
        const kind = text ? 'text' : border ? 'border' : 'fill'
        // Split into rows of 4, padding the last row to 4 if needed
        const rows = []
        for (let i = 0; i < tokens.length; i += 4) {
          const chunk = tokens.slice(i, i + 4)
          while (chunk.length < 4) chunk.push(null)
          rows.push(chunk)
        }
        return (
          <Card key={label} style={{ padding: 0, overflow: 'hidden' }}>
            <GroupHeader>{label}</GroupHeader>
            {/* Token rows of 4 */}
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} style={{
                display: 'flex',
                alignItems: 'stretch',
                borderTop: rowIdx > 0 ? '1px solid var(--color-border-grey-light)' : 'none',
              }}>
                {row.map((tok, i) => (
                  <div key={tok?.name ?? `empty-${rowIdx}-${i}`} style={{ display: 'flex', flex: '1 0 0', alignItems: 'stretch' }}>
                    <ColourTile tok={tok} kind={kind} />
                    {i < 3 && (
                      <div style={{ width: '1px', backgroundColor: 'var(--color-border-grey-light)', alignSelf: 'stretch', flexShrink: 0 }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </Card>
        )
      })}
    </div>
  )
}

function ColourTile({ tok, kind }) {
  const [copied, setCopied] = useState(false)

  if (!tok) {
    return <div style={{ flex: 1, padding: 'var(--spacing-lg)' }} />
  }

  const { name, hex } = tok
  const short = name.replace('--color-', '')

  function handleCopy(e) {
    e.stopPropagation()
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const swatch = kind === 'fill' ? (
    <div className="ds-colour-tile__swatch" style={{ backgroundColor: `var(${name})` }} />
  ) : kind === 'text' ? (
    <div className="ds-colour-tile__swatch ds-colour-tile__swatch--text">
      <span style={{ fontSize: 'var(--type-size-title-lg)', lineHeight: 1, color: `var(${name})`, fontWeight: 700 }}>Aa</span>
    </div>
  ) : (
    <div className="ds-colour-tile__swatch ds-colour-tile__swatch--border" style={{ border: `2px solid var(${name})` }} />
  )

  return (
    <div className="ds-colour-tile">
      <button
        onClick={handleCopy}
        title="Copy token name"
        className="ds-colour-tile__copy-btn"
      >
        <span className={`ds-colour-tile__copy-icon${copied ? ' ds-colour-tile__copy-icon--copied' : ''}`}>
          {copied ? 'check' : 'content_copy'}
        </span>
      </button>
      {swatch}
      <div className="ds-colour-tile__meta">
        <div className="ds-colour-tile__label">{short}</div>
        {hex && <div className="ds-colour-tile__hex">{hex}</div>}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Typography
   ───────────────────────────────────────────────────────────── */

const TYPE_GROUPS = [
  { label: 'Display', tokens: [
    { label: 'display-lg',  size: '--type-size-display-lg',  lh: '--type-lh-display-lg',  raw: '57 / 86', family: 'Roboto', weight: 400 },
    { label: 'display-md',  size: '--type-size-display-md',  lh: '--type-lh-display-md',  raw: '45 / 68', family: 'Roboto', weight: 400 },
    { label: 'display-sm',  size: '--type-size-display-sm',  lh: '--type-lh-display-sm',  raw: '36 / 54', family: 'Roboto', weight: 400 },
  ]},
  { label: 'Headline', tokens: [
    { label: 'headline-lg', size: '--type-size-headline-lg', lh: '--type-lh-headline-lg', raw: '32 / 48', family: 'Roboto', weight: 400 },
    { label: 'headline-md', size: '--type-size-headline-md', lh: '--type-lh-headline-md', raw: '28 / 42', family: 'Roboto', weight: 400 },
    { label: 'headline-sm', size: '--type-size-headline-sm', lh: '--type-lh-headline-sm', raw: '24 / 36', family: 'Roboto', weight: 400 },
  ]},
  { label: 'Title', tokens: [
    { label: 'title-lg', size: '--type-size-title-lg', lh: '--type-lh-title-lg', raw: '20 / 30', family: 'Roboto', weight: 500 },
    { label: 'title-md', size: '--type-size-title-md', lh: '--type-lh-title-md', raw: '18 / 28', family: 'Roboto', weight: 500 },
  ]},
  { label: 'Body', tokens: [
    { label: 'body-md', size: '--type-size-body-md', lh: '--type-lh-body-md', raw: '16 / 24', family: 'Roboto', weight: 400 },
    { label: 'body-sm', size: '--type-size-body-sm', lh: '--type-lh-body-sm', raw: '14 / 22', family: 'Roboto', weight: 400 },
  ]},
  { label: 'Label', tokens: [
    { label: 'label-md', size: '--type-size-label-md', lh: '--type-lh-label-md', raw: '12 / 18', family: 'Roboto', weight: 500 },
    { label: 'label-sm', size: '--type-size-label-sm', lh: '--type-lh-label-sm', raw: '10 / 16', family: 'Roboto', weight: 500 },
  ]},
]

function TypographyPanel() {
  return (
    <div className="ds-panel">

      {/* Font Family */}
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Font Family</GroupHeader>
        <div className="ds-token-row">
          <div className="ds-token-cell">
            <code className="ds-token-name">type-family-primary</code>
            <span className="ds-token-raw">Roboto</span>
          </div>
          <p className="ds-token-preview" style={{ fontSize: 'var(--type-size-title-lg)', lineHeight: 'var(--type-lh-title-lg)', fontFamily: 'var(--type-family-primary)', color: 'var(--color-text-dark)', margin: 0 }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
        </div>
      </Card>

      {/* Font Weights */}
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Font Weight</GroupHeader>
        {[
          { token: 'type-weight-regular',  label: 'Regular',   weight: 400 },
          { token: 'type-weight-medium',   label: 'Medium',    weight: 500 },
          { token: 'type-weight-semibold', label: 'Semi Bold', weight: 600 },
          { token: 'type-weight-bold',     label: 'Bold',      weight: 700 },
        ].map(({ token, label, weight }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{token}</code>
              <span className="ds-token-raw">{weight}</span>
            </div>
            <p className="ds-token-preview" style={{ fontSize: 'var(--type-size-title-lg)', lineHeight: 'var(--type-lh-title-lg)', fontWeight: weight, fontFamily: 'var(--type-family-primary)', color: 'var(--color-text-dark)', margin: 0 }}>
              {label} — The quick brown fox
            </p>
          </div>
        ))}
      </Card>

      {TYPE_GROUPS.map(({ label, tokens }) => (
        <Card key={label} style={{ padding: 0, overflow: 'hidden' }}>
          <GroupHeader>{label}</GroupHeader>
          {tokens.map(({ label: tok, size, lh, raw, family, weight }) => (
            <div key={tok} className="ds-token-row">
              <div className="ds-token-cell">
                <code className="ds-token-name">{tok}</code>
                <span className="ds-token-raw">{raw}px</span>
              </div>
              <div className="ds-token-cell" style={{ width: '120px' }}>
                <span className="ds-token-desc">{family}</span>
                <span className="ds-token-raw">{weight === 400 ? 'Regular · 400' : 'Medium · 500'}</span>
              </div>
              <p className="ds-token-preview" style={{ fontSize: `var(${size})`, lineHeight: `var(${lh})`, fontWeight: weight, color: 'var(--color-text-dark)', margin: 0 }}>
                The quick brown fox
              </p>
            </div>
          ))}
        </Card>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Spacing
   ───────────────────────────────────────────────────────────── */

const SPACING = [
  { token: '--spacing-0-5', label: 'spacing-0-5', raw: '2px'   },
  { token: '--spacing-xs',  label: 'spacing-xs',  raw: '4px'   },
  { token: '--spacing-sm',  label: 'spacing-sm',  raw: '8px'   },
  { token: '--spacing-sm-md', label: 'spacing-sm-md', raw: '12px' },
  { token: '--spacing-md',  label: 'spacing-md',  raw: '16px'  },
  { token: '--spacing-lg',  label: 'spacing-lg',  raw: '24px'  },
  { token: '--spacing-xl',  label: 'spacing-xl',  raw: '32px'  },
  { token: '--spacing-2xl', label: 'spacing-2xl', raw: '48px'  },
  { token: '--spacing-3xl', label: 'spacing-3xl', raw: '64px'  },
  { token: '--spacing-4xl', label: 'spacing-4xl', raw: '80px'  },
  { token: '--spacing-5xl', label: 'spacing-5xl', raw: '96px'  },
  { token: '--spacing-6xl', label: 'spacing-6xl', raw: '128px' },
]

function SpacingPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Spacing Scale</GroupHeader>
        {SPACING.map(({ token, label, raw }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
            </div>
            <div className="ds-token-preview">
              <div style={{
                height: '8px',
                width: `var(${token})`,
                minWidth: '2px',
                backgroundColor: 'var(--color-brand-primary)',
                borderRadius: 'var(--radius-xs)',
              }} />
            </div>
            <span style={{ width: '60px', flexShrink: 0, fontSize: 'var(--type-size-body-md)', color: 'var(--color-text-grey-dark)', fontFamily: 'monospace', textAlign: 'right' }}>{raw}</span>
          </div>
        ))}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Shadows
   ───────────────────────────────────────────────────────────── */

const SHADOWS = [
  { token: '--shadow-xs', label: 'shadow-xs', desc: '0 1px 2px · 5% black' },
  { token: '--shadow-sm', label: 'shadow-sm', desc: '0 1px 3px · 10%' },
  { token: '--shadow-md', label: 'shadow-md', desc: '0 4px 6px · 7%' },
  { token: '--shadow-lg', label: 'shadow-lg', desc: '0 10px 15px · 10%' },
  { token: '--shadow-xl', label: 'shadow-xl', desc: '0 20px 25px · 10%' },
]

function ShadowsPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Elevation</GroupHeader>
        {SHADOWS.map(({ token, label, desc }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
              <span className="ds-token-raw">{desc}</span>
            </div>
            <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-token-swatch" style={{
                width: '48px', height: '48px',
                backgroundColor: 'var(--color-bg-white)',
                boxShadow: `var(${token})`,
                border: '1px solid var(--color-border-grey-light)',
              }} />
            </div>
            <div className="ds-token-preview" />
          </div>
        ))}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Radius
   ───────────────────────────────────────────────────────────── */

const RADII = [
  { token: '--radius-xs',   label: 'radius-xs',   raw: '2px'    },
  { token: '--radius-sm',   label: 'radius-sm',   raw: '4px'    },
  { token: '--radius-md',   label: 'radius-md',   raw: '8px'    },
  { token: '--radius-lg',   label: 'radius-lg',   raw: '12px'   },
  { token: '--radius-xl',   label: 'radius-xl',   raw: '16px'   },
  { token: '--radius-full', label: 'radius-full', raw: '9999px' },
]

function RadiusPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Border Radius</GroupHeader>
        {RADII.map(({ token, label, raw }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
              <span className="ds-token-raw">{raw}</span>
            </div>
            <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-token-swatch" style={{
                width: '48px', height: '48px',
                borderRadius: `var(${token})`,
                backgroundColor: 'var(--color-brand-primary)',
              }} />
            </div>
            <div className="ds-token-preview" />
          </div>
        ))}
      </Card>
    </div>
  )
}


/* ─────────────────────────────────────────────────────────────
   Sizing
   ───────────────────────────────────────────────────────────── */

const ICON_SIZES = [
  { token: '--size-icon-xs',  label: 'size-icon-xs',  raw: '14px', use: 'Inline icon at label-sm scale' },
  { token: '--size-icon-sm',  label: 'size-icon-sm',  raw: '16px', use: 'Icon inside tags / badges' },
  { token: '--size-icon-md',  label: 'size-icon-md',  raw: '18px', use: 'Icon inside CTA buttons' },
  { token: '--size-icon-lg',  label: 'size-icon-lg',  raw: '20px', use: 'Icon inside text/link buttons' },
  { token: '--size-icon-xl',  label: 'size-icon-xl',  raw: '24px', use: 'Standalone icon, nav icons' },
  { token: '--size-icon-2xl', label: 'size-icon-2xl', raw: '32px', use: 'Large decorative icons' },
]

const BTN_SIZES = [
  { token: '--size-btn-sm', label: 'size-btn-sm', raw: '32px', use: 'Compact / toolbar buttons' },
  { token: '--size-btn-md', label: 'size-btn-md', raw: '40px', use: 'Default CTA button height' },
  { token: '--size-btn-lg', label: 'size-btn-lg', raw: '48px', use: 'Large / hero CTAs' },
]

function SizingRow({ token, label, raw, use }) {
  return (
    <div className="ds-token-row">
      <div className="ds-token-cell">
        <code className="ds-token-name">{label}</code>
        <span className="ds-token-raw">{raw}</span>
      </div>
      <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: `var(${token})`,
          height: `var(${token})`,
          backgroundColor: 'var(--color-brand-primary-light)',
          border: '1px solid var(--color-brand-primary)',
          borderRadius: 'var(--radius-xs)',
          flexShrink: 0,
        }} />
      </div>
      <span className="ds-token-desc">{use}</span>
    </div>
  )
}

function SizingPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Icon Sizes</GroupHeader>
        {ICON_SIZES.map((row) => <SizingRow key={row.token} {...row} />)}
      </Card>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Button Heights</GroupHeader>
        {BTN_SIZES.map((row) => <SizingRow key={row.token} {...row} />)}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Border Width
   ───────────────────────────────────────────────────────────── */

const BORDER_WIDTHS = [
  { token: '--border-width-default', label: 'border-width-default', raw: '1px', use: 'Input borders, card outlines, dividers' },
  { token: '--border-width-thick',   label: 'border-width-thick',   raw: '2px', use: 'Active states, selected items, emphasis' },
  { token: '--border-width-focus',   label: 'border-width-focus',   raw: '3px', use: 'Keyboard focus rings — accessibility' },
]

function BorderWidthPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Border Width</GroupHeader>
        {BORDER_WIDTHS.map(({ token, label, raw, use }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
              <span className="ds-token-raw">{raw}</span>
            </div>
            <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '56px', height: '32px',
                borderRadius: 'var(--radius-sm)',
                border: `var(${token}) solid var(--color-brand-primary)`,
                backgroundColor: 'var(--color-brand-primary-light)',
              }} />
            </div>
            <span className="ds-token-desc">{use}</span>
          </div>
        ))}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Opacity
   ───────────────────────────────────────────────────────────── */

const OPACITIES = [
  { token: '--opacity-disabled', label: 'opacity-disabled', raw: '0.4', use: 'Disabled interactive elements' },
  { token: '--opacity-subtle',   label: 'opacity-subtle',   raw: '0.6', use: 'Placeholder text, secondary hints' },
  { token: '--opacity-overlay',  label: 'opacity-overlay',  raw: '0.8', use: 'Modal backdrop overlay' },
]

function OpacityPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Opacity</GroupHeader>
        {OPACITIES.map(({ token, label, raw, use }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
              <span className="ds-token-raw">{raw}</span>
            </div>
            <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '56px', height: '32px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%)', backgroundSize: '12px 12px' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-brand-primary)', opacity: `var(${token})` }} />
              </div>
            </div>
            <span className="ds-token-desc">{use}</span>
          </div>
        ))}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Transition
   ───────────────────────────────────────────────────────────── */

const TRANSITIONS = [
  { token: '--transition-fast',  label: 'transition-fast',  raw: '100ms ease',     use: 'Micro-interactions — hover colour, icon swap' },
  { token: '--transition-base',  label: 'transition-base',  raw: '150ms ease',     use: 'Standard UI — button hover, menu highlight' },
  { token: '--transition-enter', label: 'transition-enter', raw: '200ms ease-out', use: 'Elements entering — menus, tooltips appearing' },
  { token: '--transition-exit',  label: 'transition-exit',  raw: '150ms ease-in',  use: 'Elements leaving — menus, tooltips dismissing' },
  { token: '--transition-slow',  label: 'transition-slow',  raw: '300ms ease',     use: 'Content reveals — panels, accordions, modals' },
]

function TransitionDemo({ token, raw }) {
  const [active, setActive] = useState(false)
  return (
    <button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{
        width: '56px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: active ? 'var(--color-brand-primary)' : 'var(--color-brand-primary-light)',
      }}
    />
  )
}

function TransitionPanel() {
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Transition</GroupHeader>
        {TRANSITIONS.map(({ token, label, raw, use }) => (
          <div key={token} className="ds-token-row">
            <div className="ds-token-cell">
              <code className="ds-token-name">{label}</code>
              <span className="ds-token-raw">{raw}</span>
            </div>
            <div style={{ width: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TransitionDemo token={token} raw={raw} />
            </div>
            <span className="ds-token-desc">{use}</span>
          </div>
        ))}
      </Card>
      <p className="ds-panel__hint">Hover each swatch to see the transition speed live.</p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Z-Index
   ───────────────────────────────────────────────────────────── */

const Z_INDICES = [
  { token: '--z-base',     label: 'z-base',     raw: '0',   use: 'Default document flow' },
  { token: '--z-dropdown', label: 'z-dropdown', raw: '100', use: 'Dropdowns, select menus, popovers' },
  { token: '--z-sticky',   label: 'z-sticky',   raw: '200', use: 'Sticky headers, fixed navigation' },
  { token: '--z-modal',    label: 'z-modal',    raw: '300', use: 'Modal dialogs, drawers, side panels' },
  { token: '--z-toast',    label: 'z-toast',    raw: '400', use: 'Toast notifications' },
  { token: '--z-tooltip',  label: 'z-tooltip',  raw: '500', use: 'Tooltips — always on top of everything' },
]

function ZIndexPanel() {
  const max = 500
  return (
    <div className="ds-panel">
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <GroupHeader>Z-Index Scale</GroupHeader>
        {Z_INDICES.map(({ token, label, raw, use }) => {
          const pct = (parseInt(raw) / max) * 100
          return (
            <div key={token} className="ds-token-row">
              <div className="ds-token-cell">
                <code className="ds-token-name">{label}</code>
                <span className="ds-token-raw">{raw}</span>
              </div>
              <div className="ds-token-preview" style={{ gap: 'var(--spacing-sm)' }}>
                <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--color-bg-grey-medium)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: raw === '0' ? '2px' : `${pct}%`,
                    backgroundColor: 'var(--color-brand-primary)',
                    borderRadius: 'var(--radius-full)',
                  }} />
                </div>
              </div>
              <span className="ds-token-desc" style={{ width: '280px', flexShrink: 0 }}>{use}</span>
            </div>
          )
        })}
      </Card>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Icons
   ───────────────────────────────────────────────────────────── */

const ICON_GROUPS = [
  {
    id: 'custom',
    label: 'Commodity Icons',
    kind: 'custom',
    icons: ['Cattle','Sheep','Dog','Goat','Alpaca','Equine','Machinery','Property','Charity','Feed','Auction'],
  },
  {
    id: 'pages',
    label: 'Pages',
    icons: ['Home','grid_view','dashboard','settings','manufacturing','shopping_bag','local_mall','shopping_cart','calendar_view_month','menu','more_horiz','more_Vert','grid_on','view_module','save','border_color','edit','close','close_small','add_2','add','remove','add_circle','delete','auto_delete','tune','filter_list','content_copy','file_copy','explore','call_split','build','swap_vert'],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icons: ['drag_handle','drag_indicator','collapse_content','expand_content','drag_pan','recenter','open_in_full','keyboard_double_arrow_left','keyboard_double_arrow_right','arrow_back_ios_new','arrow_forward_ios','chevron_forward','chevron_backward','redo','undo','open_in_new','logout','arrow_outward','arrow_selector_tool','replay','forward_media','keyboard_arrow_down','keyboard_arrow_up','arrow_drop_up','arrow_drop_down','arrow_upward_alt','arrow_downward_alt','arrow_upward','arrow_downward','fullscreen','stadia_controller'],
  },
  {
    id: 'status',
    label: 'Status',
    icons: ['check','check_small','download_done','check_box_outline_blank','check_box','check_box_filled','select_check_box','radio_button_unchecked','radio_button_checked','check_circle','cancel','info','help','error','info_i','do_not_disturb_on','warning','clock_loader_40','smart_toy','verified'],
  },
  {
    id: 'search',
    label: 'Search',
    icons: ['search','saved_search','data_loss_prevention','group_search','person_search','document_search','manage_search','mail','mark_email_read','mark_email_unread','forward_to_inbox','send','schedule_send','download','file_download_off','upload','downloading','download_for_offline','rocket_launch'],
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icons: ['notifications','notification_important','notification_add','notification_settings','notifications_active','notifications_paused','notifications_unread','add_alert','notifications_off'],
  },
  {
    id: 'favouriting',
    label: 'Favouriting',
    icons: ['star','star_filled','bookmark_star','cards_star','favorite','favorite_filled','license','workspace_premium','stars','push_pin','diamond','calendar_month','calendar_today','calendar_clock','event_available','event_busy','event','today','edit_calendar','calendar_add_on','view_week','alarm_filled','alarm','acute','avg_pace','timer','update','timer_off','history','more_time','pace','schedule','hourglass'],
  },
  {
    id: 'location',
    label: 'Location',
    icons: ['where_to_vote','add_location','add_location_alt','location_on','location_on_filled','location_off','fmd_bad','person_pin_circle','location_searching','map','navigation','near_me','near_me_disabled','flag','flag_2','personal_places','swap_calls'],
  },
  {
    id: 'people',
    label: 'People',
    icons: ['person','group','account_box','account_circle','account_circle_off','supervised_user_circle','person_check','person_raised_hand','sentiment_neutral','sentiment_dissatisfied','sentiment_satisfied','support_agent','group_add','manage_accounts','price_check','request_quote','account_balance','add_card','currency_exchange','sell','shoppingmode','attach_money','percent','credit_card','price_change','tag','paid','credit_score','list_alt','list_alt_check','article','post_add','news','newspaper','format_list_bulleted','draft','sticky_note_2','docs','scan_delete','upload_file','task','edit_document','content_paste','inventory','folder','folder_copy','fact_check','problem','contract','contract_edit'],
  },
  {
    id: 'charts',
    label: 'Charts',
    icons: ['insert_chart','chart_data','bid_landscape','bar_chart','bar_chart_4_bars','trending_up','trending_down','troubleshoot','search_insights','pie_chart','computer','laptop_mac','desktop_mac','live_tv','phone_android','add_a_photo','photo_camera','no_photography','videocam','videocam_off','devices','devices_off','keyboard_alt','headphones','headset_mic','headset_off','call','code','wifi','wifi_off','cloud_done','cloud_alert','cloud_off','cloud_download','backup','sensors','podcasts','leak_add','cloud_sync','sync_desktop','sync_problem','published_with_changes','bluetooth','repeat','repeat_one','captive_portal','web','mic','mic_off','brand_awareness'],
  },
  {
    id: 'assessment',
    label: 'Assessment',
    icons: ['gavel','body_fat','content_cut','syringe','vaccines','fluid','fluid_balance','healing','dermatology','business_center','grass','psychiatry','rainy','clear_day','partly_cloudy_day','scale','local_shipping','delivery_truck_speed','gite','labs','science','genetics','confirmation_number','ecg_heart','pediatrics','male','family_history','category','garden_cart','domain','back_hand','palette','gpp_maybe','gpp_bad','lock_open','lock','lock_clock','visibility','visibility_off','visibility_lock','shield_with_heart'],
  },
  {
    id: 'messages',
    label: 'Messages',
    icons: ['chat_bubble','3p','chat','mark_chat_unread','chat_info','feedback','forum','campaign','lightbulb','light'],
  },
]

const BASE = import.meta.env.BASE_URL
const COMMODITY_ICONS = {
  Cattle:    `${BASE}icons/commodity/cattle.svg`,
  Sheep:     `${BASE}icons/commodity/sheep.svg`,
  Dog:       `${BASE}icons/commodity/dog.svg`,
  Goat:      `${BASE}icons/commodity/goat.svg`,
  Alpaca:    `${BASE}icons/commodity/alpaca.svg`,
  Equine:    `${BASE}icons/commodity/equine.svg`,
  Machinery: `${BASE}icons/commodity/machinery.svg`,
  Property:  `${BASE}icons/commodity/property.svg`,
  Charity:   `${BASE}icons/commodity/charity.svg`,
  Feed:      `${BASE}icons/commodity/feed.svg`,
  Auction:   `${BASE}icons/commodity/auction.svg`,
}


function MatIcon({ name, weight, fill = 0 }) {
  return (
    <span style={{
      fontFamily: "'Material Symbols Outlined'",
      fontSize: 'var(--type-size-headline-sm)',
      lineHeight: 'var(--type-lh-headline-sm)',
      color: 'var(--color-text-grey-dark)',
      userSelect: 'none',
      display: 'block',
    }}>
      {name}
    </span>
  )
}

function CommodityIcon({ id }) {
  const src = COMMODITY_ICONS[id]
  if (!src) return null
  return (
    <img src={src} alt={id} width="24" height="24" style={{ display: 'block', objectFit: 'contain' }} />
  )
}

/* IconTile — commodity uses kind='custom', material passes a weight */
function IconTile({ name, kind, weight }) {
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied]   = useState(false)

  if (!name) return <div style={{ flex: 1 }} />

  const isFilled = name.endsWith('_filled')
  const baseName = isFilled ? name.slice(0, -7) : name

  function handleCopy(e) {
    e.stopPropagation()
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  if (kind === 'custom') {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', padding: 'var(--spacing-lg)' }}
      >
        {hovered && (
          <button
            onClick={handleCopy}
            title="Copy icon name"
            style={{
              position: 'absolute', top: 'var(--spacing-xs)', right: 'var(--spacing-xs)',
              width: '24px', height: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'var(--color-bg-white)',
              border: '1px solid var(--color-border-grey-light)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-xs)',
              cursor: 'pointer', padding: 0,
            }}
          >
            <span style={{
              fontFamily: "'Material Symbols Outlined'",
              fontSize: '16px', lineHeight: 1,
              color: copied ? 'var(--color-status-green)' : 'var(--color-text-grey-dark)',
              userSelect: 'none', display: 'block',
            }}>
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        )}
        <div style={{
          width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'var(--color-bg-light)',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--color-border-grey-light)',
        }}>
          <CommodityIcon id={name} />
        </div>
        <span style={{ fontSize: 'var(--type-size-body-md)', lineHeight: 'var(--type-lh-body-sm)', color: 'var(--color-text-dark)', fontFamily: 'var(--type-family-primary)', fontWeight: 400, wordBreak: 'break-all' }}>
          {name}
        </span>
      </div>
    )
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', padding: 'var(--spacing-md)' }}
    >
      {hovered && (
        <button
          onClick={handleCopy}
          title="Copy icon name"
          style={{
            position: 'absolute', top: 'var(--spacing-xs)', right: 'var(--spacing-xs)',
            width: '24px', height: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'var(--color-bg-white)',
            border: '1px solid var(--color-border-grey-light)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-xs)',
            cursor: 'pointer', padding: 0,
          }}
        >
          <span style={{
            fontFamily: "'Material Symbols Outlined'",
            fontSize: '14px', lineHeight: 1,
            color: copied ? 'var(--color-status-green)' : 'var(--color-text-grey-dark)',
            userSelect: 'none', display: 'block',
          }}>
            {copied ? 'check' : 'content_copy'}
          </span>
        </button>
      )}
      <div style={{
        width: '40px', height: '40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'var(--color-bg-light)',
        borderRadius: 'var(--radius-xs)',
        border: '1px solid var(--color-border-grey-light)',
      }}>
        <MatIcon name={baseName} weight={weight} fill={isFilled ? 1 : 0} />
      </div>
      <span style={{ fontSize: 'var(--type-size-body-md)', color: 'var(--color-text-grey)', fontFamily: 'monospace', fontWeight: 400 }}>{weight}</span>
      <span style={{ fontSize: 'var(--type-size-body-md)', color: 'var(--color-text-dark)', fontFamily: 'var(--type-family-primary)', fontWeight: 400, wordBreak: 'break-all' }}>
        {name}
      </span>
    </div>
  )
}

const DIVIDER = <div style={{ width: '1px', backgroundColor: 'var(--color-border-grey-light)', flexShrink: 0, alignSelf: 'stretch' }} />

function IconsPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
      {ICON_GROUPS.map(g => {
        /* Commodity: 4-per-row */
        if (g.kind === 'custom') {
          const rows = []
          for (let i = 0; i < g.icons.length; i += 4) {
            const chunk = g.icons.slice(i, i + 4)
            while (chunk.length < 4) chunk.push(null)
            rows.push(chunk)
          }
          return (
            <Card key={g.id} style={{ padding: 0, overflow: 'hidden' }}>
              <GroupHeader>{g.label}</GroupHeader>
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} style={{ display: 'flex', alignItems: 'stretch', borderTop: rowIdx > 0 ? '1px solid var(--color-border-grey-light)' : 'none' }}>
                  {row.map((name, i) => (
                    <div key={name ?? `empty-${rowIdx}-${i}`} style={{ display: 'flex', flex: '1 0 0', alignItems: 'stretch' }}>
                      <IconTile name={name} kind="custom" />
                      {i < 3 && DIVIDER}
                    </div>
                  ))}
                </div>
              ))}
            </Card>
          )
        }

        /* Material icons: 8-per-row (4 icons × 2 weights) */
        const tiles = []
        g.icons.forEach(name => {
          tiles.push({ name, weight: 300 })
          tiles.push({ name, weight: 400 })
        })
        // pad to multiple of 8
        while (tiles.length % 8 !== 0) tiles.push(null)
        const rows = []
        for (let i = 0; i < tiles.length; i += 8) rows.push(tiles.slice(i, i + 8))

        return (
          <Card key={g.id} style={{ padding: 0, overflow: 'hidden' }}>
            <GroupHeader>{g.label}</GroupHeader>
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex', alignItems: 'stretch', borderTop: rowIdx > 0 ? '1px solid var(--color-border-grey-light)' : 'none' }}>
                {row.map((tile, i) => (
                  <div key={tile ? `${tile.name}-${tile.weight}` : `empty-${i}`} style={{ display: 'flex', flex: '1 0 0', alignItems: 'stretch' }}>
                    <IconTile name={tile?.name ?? null} weight={tile?.weight} />
                    {i < 7 && DIVIDER}
                  </div>
                ))}
              </div>
            ))}
          </Card>
        )
      })}
    </div>
  )
}
