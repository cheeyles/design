import { Button } from '../../actions/Button/index.js'

export function EmptyState({
  icon    = 'inbox',
  title,
  message,
  action,
  style,
  className,
}) {
  return (
    <div
      className={className}
      style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        textAlign:      'center',
        gap:            'var(--spacing-md)',
        padding:        'var(--spacing-xl)',
        ...style,
      }}
    >
      {/* Icon */}
      <div style={{
        width:           '64px',
        height:          '64px',
        borderRadius:    'var(--radius-full)',
        backgroundColor: 'var(--color-bg-grey-light)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
      }}>
        <span
          aria-hidden="true"
          style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '28px',
            lineHeight:            1,
            color:                 'var(--color-text-grey-light)',
            userSelect:            'none',
          }}
        >
          {icon}
        </span>
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', maxWidth: '320px' }}>
        {title && (
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-title-sm)',
            lineHeight: 'var(--type-lh-title-sm)',
            fontWeight: 500,
            color:      'var(--color-text-dark)',
          }}>
            {title}
          </span>
        )}
        {message && (
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            lineHeight: 'var(--type-lh-body-sm)',
            fontWeight: 400,
            color:      'var(--color-text-grey)',
          }}>
            {message}
          </span>
        )}
      </div>

      {/* Action */}
      {action && (
        <Button variant="primary" size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
