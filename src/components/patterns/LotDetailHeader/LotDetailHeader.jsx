/* ─────────────────────────────────────────────────────────────
   LotDetailHeader — Design System pattern library
   Figma node: 298:10434
   File: TI2QRswI37Xh8W8h5CrypW
   ───────────────────────────────────────────────────────────── */

const matIcon = (name, size = '24px', color = 'var(--color-text-grey-dark)') => (
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

function IconBtn({ icon, label, onClick }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           '36px',
        height:          '36px',
        background:      'none',
        border:          'none',
        borderRadius:    'var(--radius-sm)',
        cursor:          'pointer',
        flexShrink:      0,
        padding:         0,
      }}
    >
      {matIcon(icon, '22px', 'var(--color-text-grey-dark)')}
    </button>
  )
}

export function LotDetailHeader({
  title        = 'Pepperton Poll Dorset - Tag 512',
  location     = 'Elmore, VIC',
  lotNumber    = 'Lot 12',
  cta,
  onFavourite,
  onMore,
  onShare,
  style,
}) {
  return (
    <div style={{
      display:         'flex',
      alignItems:      'flex-start',
      justifyContent:  'space-between',
      gap:             'var(--spacing-md)',
      backgroundColor: 'var(--color-bg-white)',
      ...style,
      paddingTop:      'var(--spacing-lg)',
      paddingBottom:   'var(--spacing-lg)',
      paddingLeft:     'var(--spacing-lg)',
      paddingRight:    'var(--spacing-lg)',
    }}>

      {/* Left — title + metadata */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', minWidth: 0 }}>
        <span style={{
          fontFamily:  'var(--type-family-primary)',
          fontSize:    'var(--type-size-headline-sm)',
          lineHeight:  'var(--type-lh-headline-sm)',
          fontWeight:  700,
          color:       'var(--color-text-dark)',
        }}>{title}</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            {matIcon('location_on', '18px')}
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-md)',
              lineHeight: 'var(--type-lh-body-md)',
              color:      'var(--color-text-grey-dark)',
              whiteSpace: 'nowrap',
            }}>{location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            {matIcon('tag', '18px')}
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-md)',
              lineHeight: 'var(--type-lh-body-md)',
              color:      'var(--color-text-grey-dark)',
              whiteSpace: 'nowrap',
            }}>{lotNumber}</span>
          </div>
        </div>
      </div>

      {/* Right — icon buttons + CTA, top-aligned */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <IconBtn icon="star"       label="Favourite" onClick={onFavourite} />
          <IconBtn icon="ios_share"  label="Share"     onClick={onShare} />
          <IconBtn icon="more_vert"  label="More"      />
        </div>
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
            }}
          >{cta.label}</button>
        )}
      </div>

    </div>
  )
}

export default LotDetailHeader
