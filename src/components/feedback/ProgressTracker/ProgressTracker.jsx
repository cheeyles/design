/* ─────────────────────────────────────────────────────────────
   ProgressTracker — Design System component library

   Named exports:
     ProgressTracker   Multi-step workflow tracker
   ───────────────────────────────────────────────────────────── */

/*
  steps:       array of { label, description? }
  activeStep:  0-based index of the current step
  variant:     'horizontal' | 'vertical'
*/

function StepIcon({ state }) {
  if (state === 'complete') {
    return (
      <div style={{
        width:           '28px',
        height:          '28px',
        borderRadius:    'var(--radius-full)',
        backgroundColor: 'var(--color-bg-green)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
      }}>
        <span aria-hidden="true" style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              '16px',
          lineHeight:            1,
          color:                 'var(--color-text-white)',
          userSelect:            'none',
        }}>check</span>
      </div>
    )
  }

  if (state === 'active') {
    return (
      <div style={{
        width:           '28px',
        height:          '28px',
        borderRadius:    'var(--radius-full)',
        backgroundColor: 'var(--color-brand-primary)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
        boxShadow:       '0 0 0 4px var(--color-brand-primary-light)',
      }}>
        <div style={{
          width:           '10px',
          height:          '10px',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-text-white)',
        }} />
      </div>
    )
  }

  // upcoming
  return (
    <div style={{
      width:           '28px',
      height:          '28px',
      borderRadius:    'var(--radius-full)',
      backgroundColor: 'var(--color-bg-white)',
      border:          '2px solid var(--color-border-grey)',
      flexShrink:      0,
    }} />
  )
}

function stepState(index, activeStep) {
  if (index < activeStep)  return 'complete'
  if (index === activeStep) return 'active'
  return 'upcoming'
}

export function ProgressTracker({
  steps      = [],
  activeStep = 0,
  variant    = 'horizontal',
  style,
}) {
  if (variant === 'vertical') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
        {steps.map((step, i) => {
          const state   = stepState(i, activeStep)
          const isLast  = i === steps.length - 1
          const labelColor = state === 'upcoming' ? 'var(--color-text-grey)' : 'var(--color-text-dark)'
          const descColor  = 'var(--color-text-grey-dark)'

          return (
            <div key={i} style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              {/* Left — icon + connector */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StepIcon state={state} />
                {!isLast && (
                  <div style={{
                    width:           '2px',
                    flex:            1,
                    minHeight:       '24px',
                    backgroundColor: state === 'complete' ? 'var(--color-bg-green)' : 'var(--color-border-grey-light)',
                    margin:          'var(--spacing-xs) 0',
                  }} />
                )}
              </div>
              {/* Right — text */}
              <div style={{ paddingBottom: isLast ? 0 : 'var(--spacing-lg)', paddingTop: '2px' }}>
                <span style={{
                  display:    'block',
                  fontFamily: 'var(--type-family-primary)',
                  fontSize:   'var(--type-size-body-sm)',
                  lineHeight: 'var(--type-lh-body-sm)',
                  fontWeight: state === 'active' ? 600 : 400,
                  color:      labelColor,
                }}>
                  {step.label}
                </span>
                {step.description && (
                  <span style={{
                    display:    'block',
                    fontFamily: 'var(--type-family-primary)',
                    fontSize:   'var(--type-size-body-sm)',
                    lineHeight: 'var(--type-lh-body-sm)',
                    fontWeight: 400,
                    color:      descColor,
                    marginTop:  'var(--spacing-xs)',
                  }}>
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // horizontal
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', ...style }}>
      {steps.map((step, i) => {
        const state   = stepState(i, activeStep)
        const isLast  = i === steps.length - 1
        const labelColor = state === 'upcoming' ? 'var(--color-text-grey)' : 'var(--color-text-dark)'

        return (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flex: isLast ? 0 : 1 }}>
            {/* Step */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
              <StepIcon state={state} />
              <span style={{
                fontFamily:  'var(--type-family-primary)',
                fontSize:    'var(--type-size-body-sm)',
                lineHeight:  'var(--type-lh-body-sm)',
                fontWeight:  state === 'active' ? 600 : 400,
                color:       labelColor,
                whiteSpace:  'nowrap',
                textAlign:   'center',
              }}>
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {!isLast && (
              <div style={{
                flex:            1,
                height:          '2px',
                backgroundColor: state === 'complete' ? 'var(--color-bg-green)' : 'var(--color-border-grey-light)',
                marginTop:       '13px',
                marginLeft:      'var(--spacing-sm)',
                marginRight:     'var(--spacing-sm)',
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProgressTracker
