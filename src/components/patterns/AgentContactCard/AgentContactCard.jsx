/* ─────────────────────────────────────────────────────────────
   AgentContactCard — Design System pattern library
   Figma node: 2364:16265
   File: TI2QRswI37Xh8W8h5CrypW
   ───────────────────────────────────────────────────────────── */

import { Avatar } from '../../display/Avatar/index.js'

const matIcon = (name, size = '18px', color = 'var(--color-text-grey-dark)') => (
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

function ContactButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex:            '1 0 0',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             'var(--spacing-sm)',
        height:          '40px',
        paddingLeft:     'var(--spacing-md)',
        paddingRight:    'var(--spacing-lg)',
        background:      'none',
        border:          '1px solid var(--color-border-grey-light)',
        borderRadius:    'var(--radius-sm)',
        cursor:          'pointer',
        fontFamily:      'var(--type-family-primary)',
        fontSize:        'var(--type-size-body-sm)',
        fontWeight:      500,
        color:           'var(--color-text-grey-dark)',
        whiteSpace:      'nowrap',
      }}
    >
      {matIcon(icon)}
      {label}
    </button>
  )
}

export function AgentContactCard({
  agentName    = 'Tim Smith',
  agentRole    = 'Agent/Assessor',
  avatarSrc,
  agencyLogo,
  agencyName   = 'Elders Roma',
  onPhone,
  onEmail,
  style,
}) {
  return (
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      backgroundColor: 'var(--color-bg-white)',
      borderRadius:    'var(--radius-md)',
      width:           '300px',
      flexShrink:      0,
      ...style,
    }}>

      {/* Top section */}
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           'var(--spacing-md)',
        padding:       'var(--spacing-lg)',
      }}>

        {/* Agent identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <Avatar src={avatarSrc} size={56} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily:  'var(--type-family-primary)',
              fontSize:    'var(--type-size-title-md)',
              lineHeight:  'var(--type-lh-title-md)',
              fontWeight:  500,
              color:       'var(--color-text-dark)',
            }}>{agentName}</span>
            <span style={{
              fontFamily:  'var(--type-family-primary)',
              fontSize:    'var(--type-size-body-md)',
              lineHeight:  'var(--type-lh-body-md)',
              fontWeight:  400,
              color:       'var(--color-text-grey-dark)',
            }}>{agentRole}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 'var(--spacing-sm-md)' }}>
          <ContactButton icon="call"  label="Phone" onClick={onPhone} />
          <ContactButton icon="mail"  label="Email" onClick={onEmail} />
        </div>

      </div>

      {/* Agency footer */}
      <div style={{
        display:     'flex',
        alignItems:  'center',
        gap:         'var(--spacing-sm)',
        padding:     'var(--spacing-sm-md) var(--spacing-lg)',
        borderTop:   '1px solid var(--color-border-grey-light)',
      }}>
        {agencyLogo && (
          <img
            src={agencyLogo}
            alt={agencyName}
            style={{ height: '24px', width: 'auto', flexShrink: 0 }}
          />
        )}
        <span style={{
          fontFamily:  'var(--type-family-primary)',
          fontSize:    'var(--type-size-body-md)',
          lineHeight:  'var(--type-lh-body-md)',
          fontWeight:  500,
          color:       'var(--color-text-dark)',
        }}>{agencyName}</span>
      </div>

    </div>
  )
}

export default AgentContactCard
