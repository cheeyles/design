/* ─────────────────────────────────────────────────────────────
   Announcement — Design System component library

   Named exports:
     Announcement   Top-of-site dismissible banner

   title:     string (required)
   message:   string
   action:    { label, onClick }
   onDismiss: () => void
   ───────────────────────────────────────────────────────────── */

export function Announcement({ title, message, action, onDismiss, style }) {
  return (
    <div style={{
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      width:           '100%',
      backgroundColor: 'var(--color-brand-primary)',
      padding:         'var(--spacing-sm) var(--spacing-lg)',
      gap:             'var(--spacing-md)',
      boxSizing:       'border-box',
      position:        'relative',
      ...style,
    }}>

      {/* Content — centred */}
      <div style={{
        display:    'flex',
        alignItems: 'center',
        gap:        'var(--spacing-sm)',
        flexWrap:   'wrap',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          lineHeight: 'var(--type-lh-body-sm)',
          fontWeight: 500,
          color:      'var(--color-text-white)',
        }}>
          {title}
        </span>
        {message && (
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            lineHeight: 'var(--type-lh-body-sm)',
            fontWeight: 400,
            color:      'rgba(255,255,255,0.8)',
          }}>
            {message}
          </span>
        )}
        {action && (
          <button onClick={action.onClick} style={{
            background:     'none',
            border:         'none',
            padding:        0,
            cursor:         'pointer',
            fontFamily:     'var(--type-family-primary)',
            fontSize:       'var(--type-size-body-sm)',
            lineHeight:     'var(--type-lh-body-sm)',
            fontWeight:     600,
            color:          'var(--color-text-white)',
            textDecoration: 'underline',
            whiteSpace:     'nowrap',
          }}>
            {action.label}
          </button>
        )}
      </div>

      {/* Dismiss — pinned right */}
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss" style={{
          position:   'absolute',
          right:      'var(--spacing-lg)',
          top:        '50%',
          transform:  'translateY(-50%)',
          display:    'inline-flex',
          alignItems: 'center',
          background: 'none',
          border:     'none',
          padding:    0,
          cursor:     'pointer',
          color:      'rgba(255,255,255,0.7)',
        }}>
          <span aria-hidden="true" style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '18px',
            lineHeight:            1,
            userSelect:            'none',
          }}>close</span>
        </button>
      )}

    </div>
  )
}

export default Announcement
