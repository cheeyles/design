import { createContext, useContext, useState, useCallback, useRef } from 'react'

const ToastContext = createContext(null)

const VARIANTS = {
  success: { border: 'var(--color-bg-green-dark)',      icon: 'check_circle', color: 'var(--color-text-green)'         },
  error:   { border: 'var(--color-border-red)',         icon: 'error',        color: 'var(--color-text-red)'           },
  warning: { border: 'var(--color-border-orange)',      icon: 'warning',      color: 'var(--color-text-orange)'        },
  info:    { border: 'var(--color-brand-primary-dark)', icon: 'info',         color: 'var(--color-brand-primary-dark)' },
}

const EXIT_DURATION = 200

function ToastCard({ title, message, variant = 'info', exiting, onDismiss, action }) {
  const v = VARIANTS[variant] ?? VARIANTS.info

  return (
    <div
      role="alert"
      className={exiting ? 'toast-exit' : 'toast-enter'}
      style={{
        display:         'flex',
        alignItems:      'flex-start',
        gap:             'var(--spacing-sm)',
        width:           '320px',
        backgroundColor: 'var(--color-bg-white)',
        borderRadius:    'var(--radius-md)',
        boxShadow:       'var(--shadow-light)',
        border:          '1px solid var(--color-border-grey-light)',
        padding:         'var(--spacing-md)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              '20px',
          lineHeight:            1,
          color:                 v.color,
          flexShrink:            0,
          paddingTop:            '1px',
          userSelect:            'none',
        }}
      >
        {v.icon}
      </span>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {title && (
          <span style={{
            fontFamily: 'var(--type-family-primary)',
            fontSize:   'var(--type-size-body-sm)',
            lineHeight: 'var(--type-lh-body-sm)',
            fontWeight: 600,
            color:      'var(--color-text-dark)',
          }}>
            {title}
          </span>
        )}
        <span style={{
          fontFamily: 'var(--type-family-primary)',
          fontSize:   'var(--type-size-body-sm)',
          lineHeight: 'var(--type-lh-body-sm)',
          fontWeight: 400,
          color:      'var(--color-text-grey-dark)',
        }}>
          {message}
        </span>
        {action && (
          <button
            onClick={action.onClick}
            style={{
              background:  'none',
              border:      'none',
              padding:     0,
              cursor:      'pointer',
              fontFamily:  'var(--type-family-primary)',
              fontSize:    'var(--type-size-body-sm)',
              lineHeight:  'var(--type-lh-body-sm)',
              fontWeight:  500,
              color:       'var(--color-brand-primary)',
              textAlign:   'left',
            }}
          >
            {action.label}
          </button>
        )}
      </div>

      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border:     'none',
          padding:    0,
          cursor:     'pointer',
          flexShrink: 0,
          display:    'flex',
          alignItems: 'center',
          color:      'var(--color-text-grey)',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              '18px',
            lineHeight:            1,
            userSelect:            'none',
          }}
        >
          close
        </span>
      </button>
    </div>
  )
}

let nextId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts]     = useState([])
  const [exiting, setExiting]   = useState(new Set())
  const autoTimers              = useRef({})
  const exitTimers              = useRef({})

  const remove = useCallback((id) => {
    setExiting(s => { const n = new Set(s); n.delete(id); return n })
    setToasts(t => t.filter(toast => toast.id !== id))
  }, [])

  const dismiss = useCallback((id) => {
    clearTimeout(autoTimers.current[id])
    delete autoTimers.current[id]
    // Play exit animation then remove
    setExiting(s => new Set(s).add(id))
    exitTimers.current[id] = setTimeout(() => remove(id), EXIT_DURATION)
  }, [remove])

  const show = useCallback(({ message, title, variant = 'info', duration = 4000, action }) => {
    const id = ++nextId
    setToasts(t => [...t, { id, message, title, variant, action }])
    if (duration > 0) {
      autoTimers.current[id] = setTimeout(() => dismiss(id), duration)
    }
    return id
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      {children}
      <div style={{
        position:      'fixed',
        bottom:        'var(--spacing-xl)',
        right:         'var(--spacing-xl)',
        zIndex:        9999,
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'flex-end',
        pointerEvents: 'none',
      }}>
        {toasts.map(toast => {
          const isExiting = exiting.has(toast.id)
          return (
            <div
              key={toast.id}
              style={{
                pointerEvents:    'auto',
                display:          'grid',
                gridTemplateRows: isExiting ? '0fr' : '1fr',
                marginBottom:     isExiting ? '0' : 'var(--spacing-sm)',
                transition:       `grid-template-rows ${EXIT_DURATION}ms ease, margin-bottom ${EXIT_DURATION}ms ease`,
              }}
            >
              <div style={{ minHeight: 0, padding: '20px', margin: '-20px' }}>
                <ToastCard
                  {...toast}
                  exiting={isExiting}
                  onDismiss={() => dismiss(toast.id)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}

export default ToastCard
