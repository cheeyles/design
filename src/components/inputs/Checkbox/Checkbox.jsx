const LABEL_TEXT = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  color:      'var(--color-text-grey-dark)',
}

export function Checkbox({ label, checked, onChange, disabled, indeterminate, style, className }) {
  const iconName  = indeterminate ? 'indeterminate_check_box' : checked ? 'check_box' : 'check_box_outline_blank'
  const iconColor = (checked || indeterminate) ? 'var(--color-brand-primary)' : 'var(--color-border-grey)'

  return (
    <label
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        gap:        'var(--spacing-sm)',
        cursor:     disabled ? 'not-allowed' : 'pointer',
        opacity:    disabled ? 'var(--opacity-disabled)' : 1,
        ...style,
      }}
      className={className}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ display: 'none' }}
      />
      <span
        style={{
          fontFamily:            'Material Symbols Rounded',
          fontSize:              'var(--size-icon-lg)',
          lineHeight:            1,
          color:                 iconColor,
          userSelect:            'none',
          flexShrink:            0,
        }}
        aria-hidden="true"
      >
        {iconName}
      </span>
      {label && <span style={LABEL_TEXT}>{label}</span>}
    </label>
  )
}

export default Checkbox
