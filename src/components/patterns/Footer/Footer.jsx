/* ─────────────────────────────────────────────────────────────
   Footer — Design System pattern library
   Figma node: 2286:14270  ·  File: TI2QRswI37Xh8W8h5CrypW
   ───────────────────────────────────────────────────────────── */

import { Logo } from '../../display/Logo/index.js'

const BASE = import.meta.env.BASE_URL
const APP_STORE_URL   = `${BASE}badges/app-store.svg`
const GOOGLE_PLAY_URL = `${BASE}badges/google-play.svg`

const NAV_COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Meet Our Team', 'Awards', 'Careers', 'Logos & Brand Guidelines'],
  },
  {
    title: 'Tools & Resources',
    links: ['Find Assessors', 'Livestock Finance', 'Accreditations', 'Assessment Forms', 'Biosecurity Awareness'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Help Centre'],
  },
  {
    title: 'Selling',
    links: ['Sell Livestock', 'Sell Machinery', 'Sell Property', 'Listing Fees', 'Advertise on AuctionsPlus'],
  },
]

const LEGAL_LINKS = ['User Agreement & Sale Terms', 'Website Terms', 'Privacy Policy']

/* ── Social icon SVGs ───────────────────────────────────────── */

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.25 11.25H13.125L13.875 8.75H11.25V7.5C11.25 6.8125 11.25 6.25 12.5 6.25H13.875V4.1C13.6469 4.07013 12.8106 4 11.9269 4C10.0806 4 8.75 5.1175 8.75 7.15V8.75H6.875V11.25H8.75V17.5H11.25V11.25Z" fill="white"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15.75 4H18.25L12.75 10.27L19.25 18H14.13L9.96 12.72L5.18 18H2.67L8.55 11.3L2.25 4H7.5L11.28 8.83L15.75 4ZM14.87 16.5H16.25L6.7 5.42H5.22L14.87 16.5Z" fill="white"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.5 7H6.5V15.5H4.5V7ZM5.5 4C4.67 4 4 4.67 4 5.5C4 6.33 4.67 7 5.5 7C6.33 7 7 6.33 7 5.5C7 4.67 6.33 4 5.5 4ZM14.5 7C13.12 7 12.15 7.62 11.75 8.25V7H9.75V15.5H11.75V11C11.75 9.9 12.65 9 13.75 9C14.85 9 15.75 9.9 15.75 11V15.5H17.75V10.75C17.75 8.68 16.32 7 14.5 7Z" fill="white"/>
    </svg>
  )
}

function SocialButton({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           '40px',
        height:          '40px',
        borderRadius:    'var(--radius-full)',
        border:          '1px solid rgba(255,255,255,0.3)',
        flexShrink:      0,
        color:           'var(--color-text-white)',
        textDecoration:  'none',
      }}
    >
      {children}
    </a>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', maxWidth: '160px' }}>
      <span style={{
        fontFamily:  'var(--type-family-primary)',
        fontSize:    'var(--type-size-body-md)',
        lineHeight:  'var(--type-lh-body-md)',
        fontWeight:  500,
        color:       'var(--color-text-white)',
      }}>
        {title}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {links.map(link => (
          <a
            key={link}
            href="#"
            style={{
              fontFamily:      'var(--type-family-primary)',
              fontSize:        'var(--type-size-body-sm)',
              lineHeight:      'var(--type-lh-body-sm)',
              fontWeight:      400,
              color:           'var(--color-border-grey-light)',
              textDecoration:  'none',
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Mobile Footer ──────────────────────────────────────────── */

export function MobileFooter({ style }) {
  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-dark)',
      display:         'flex',
      flexDirection:   'column',
      padding:         'var(--spacing-xl) var(--spacing-md)',
      gap:             'var(--spacing-lg)',
      ...style,
    }}>

      {/* Logo + app badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <Logo variant="light" width="160px" />
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <a href="#" aria-label="Download on the App Store" style={{ display: 'block', lineHeight: 0 }}>
            <img src={APP_STORE_URL} alt="Download on the App Store" style={{ width: '135px', height: '40px' }} />
          </a>
          <a href="#" aria-label="Get it on Google Play" style={{ display: 'block', lineHeight: 0 }}>
            <img src={GOOGLE_PLAY_URL} alt="Get it on Google Play" style={{ width: '135px', height: '40px' }} />
          </a>
        </div>
      </div>

      {/* Nav columns stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        {NAV_COLUMNS.map(col => (
          <FooterColumn key={col.title} title={col.title} links={col.links} />
        ))}
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: 0 }} />

      {/* Social icons */}
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
        <SocialButton label="Facebook"><FacebookIcon /></SocialButton>
        <SocialButton label="Instagram"><InstagramIcon /></SocialButton>
        <SocialButton label="Twitter / X"><TwitterIcon /></SocialButton>
        <SocialButton label="LinkedIn"><LinkedInIcon /></SocialButton>
      </div>

      {/* Legal */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {LEGAL_LINKS.map(link => (
          <a key={link} href="#" style={{
            fontFamily:     'var(--type-family-primary)',
            fontSize:       'var(--type-size-body-sm)',
            lineHeight:     'var(--type-lh-body-sm)',
            fontWeight:     400,
            color:          'var(--color-border-grey-light)',
            textDecoration: 'none',
          }}>{link}</a>
        ))}
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          lineHeight: 'var(--type-lh-body-sm)',
          fontWeight: 400,
          color:      'var(--color-text-grey-light)',
        }}>
          2023 AuctionsPlus Pty Ltd. All rights reserved.
        </span>
      </div>

    </footer>
  )
}

/* ── Footer ─────────────────────────────────────────────────── */

export function Footer({ style }) {
  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-dark)',
      display:         'flex',
      justifyContent:  'center',
      padding:         'var(--spacing-2xl) var(--spacing-lg)',
      ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', width: '100%', maxWidth: '1248px' }}>

        {/* Top row — logo/badges + nav columns */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

          {/* Left — logo + app badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <Logo variant="light" width="200px" />
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
              <a href="#" aria-label="Download on the App Store" style={{ display: 'block', lineHeight: 0 }}>
                <img src={APP_STORE_URL} alt="Download on the App Store" style={{ width: '135px', height: '40px' }} />
              </a>
              <a href="#" aria-label="Get it on Google Play" style={{ display: 'block', lineHeight: 0 }}>
                <img src={GOOGLE_PLAY_URL} alt="Get it on Google Play" style={{ width: '135px', height: '40px' }} />
              </a>
            </div>
          </div>

          {/* Right — nav columns */}
          <div style={{ display: 'flex', gap: '72px' }}>
            {NAV_COLUMNS.map(col => (
              <FooterColumn key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: 0 }} />

        {/* Bottom row — legal + social */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-xl)' }}>
              {LEGAL_LINKS.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily:     'var(--type-family-primary)',
                    fontSize:       'var(--type-size-body-sm)',
                    lineHeight:     'var(--type-lh-body-sm)',
                    fontWeight:     400,
                    color:          'var(--color-border-grey-light)',
                    textDecoration: 'none',
                    whiteSpace:     'nowrap',
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
            <span style={{
              fontFamily:  'var(--type-family-primary)',
              fontSize:    'var(--type-size-body-sm)',
              lineHeight:  'var(--type-lh-body-sm)',
              fontWeight:  400,
              color:       'var(--color-text-grey-light)',
            }}>
              2023 AuctionsPlus Pty Ltd. All rights reserved.
            </span>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <SocialButton label="Facebook"><FacebookIcon /></SocialButton>
            <SocialButton label="Instagram"><InstagramIcon /></SocialButton>
            <SocialButton label="Twitter / X"><TwitterIcon /></SocialButton>
            <SocialButton label="LinkedIn"><LinkedInIcon /></SocialButton>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
