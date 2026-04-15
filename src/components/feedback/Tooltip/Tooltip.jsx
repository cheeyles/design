import { useState } from 'react'

const BUBBLE = {
  top: {
    bottom:    'calc(100% + 8px)',
    left:      '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    top:       'calc(100% + 8px)',
    left:      '50%',
    transform: 'translateX(-50%)',
  },
  left: {
    right:     'calc(100% + 8px)',
    top:       '50%',
    transform: 'translateY(-50%)',
  },
  right: {
    left:      'calc(100% + 8px)',
    top:       '50%',
    transform: 'translateY(-50%)',
  },
}

const ARROW = {
  top: {
    bottom:    '-6px',
    left:      '50%',
    transform: 'translateX(-50%)',
    borderLeft:   '6px solid transparent',
    borderRight:  '6px solid transparent',
    borderTop:    '6px solid var(--color-bg-dark)',
  },
  bottom: {
    top:       '-6px',
    left:      '50%',
    transform: 'translateX(-50%)',
    borderLeft:   '6px solid transparent',
    borderRight:  '6px solid transparent',
    borderBottom: '6px solid var(--color-bg-dark)',
  },
  left: {
    right:     '-6px',
    top:       '50%',
    transform: 'translateY(-50%)',
    borderTop:    '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft:   '6px solid var(--color-bg-dark)',
  },
  right: {
    left:      '-6px',
    top:       '50%',
    transform: 'translateY(-50%)',
    borderTop:    '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderRight:  '6px solid var(--color-bg-dark)',
  },
}

export function Tooltip({ content, placement = 'top', children, style }) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          style={{
            position:        'absolute',
            zIndex:          'var(--z-tooltip)',
            whiteSpace:      'nowrap',
            pointerEvents:   'none',
            backgroundColor: 'var(--color-bg-dark)',
            color:           'var(--color-text-white)',
            fontFamily:      'var(--type-family-primary)',
            fontSize:        'var(--type-size-label-md)',
            lineHeight:      'var(--type-lh-label-md)',
            fontWeight:      500,
            padding:         'var(--spacing-xs) var(--spacing-sm)',
            borderRadius:    'var(--radius-sm)',
            boxShadow:       'var(--shadow-light)',
            ...BUBBLE[placement],
            ...style,
          }}
        >
          <span style={{
            position:  'absolute',
            width:     0,
            height:    0,
            ...ARROW[placement],
          }} />
          {content}
        </span>
      )}
    </span>
  )
}

export default Tooltip
