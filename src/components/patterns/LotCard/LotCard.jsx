import { useState } from 'react'
import { CardFavouriteButton } from '../../actions/Button/index.js'
import { PercentileTag } from '../../display/Tag/index.js'

const LABEL_MD = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-label-md)',
  lineHeight: 'var(--type-lh-label-md)',
}

/* ── Inline lot-type tag ($/Head, Assessed etc.) ────────────── */
function LotTypeTag({ label }) {
  return (
    <span style={{
      ...LABEL_MD,
      fontWeight:      600,
      color:           'var(--color-text-grey-dark)',
      backgroundColor: 'var(--color-brand-primary-light)',
      borderRadius:    'var(--radius-xs)',
      padding:         '0 var(--spacing-xs)',
      whiteSpace:      'nowrap',
    }}>
      {label}
    </span>
  )
}

/* ── Spec row (key + value, 2-col) ──────────────────────────── */
function SpecCol({ label, value, wide }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flex: 1, minWidth: wide ? '135px' : 0 }}>
      <span style={{ ...LABEL_MD, fontWeight: 500, color: 'var(--color-text-grey)', whiteSpace: 'nowrap' }}>
        {label}:
      </span>
      <span style={{ ...LABEL_MD, fontWeight: 400, color: 'var(--color-text-grey)', flex: 1 }}>
        {value}
      </span>
    </div>
  )
}

/* ── ABV col (key + value + percentile tag) ─────────────────── */
function AbvCol({ label, value, percentile, wide }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', flex: 1, minWidth: wide ? '135px' : 0 }}>
      <span style={{ ...LABEL_MD, fontWeight: 500, color: 'var(--color-text-grey)', whiteSpace: 'nowrap' }}>
        {label}:
      </span>
      <span style={{ ...LABEL_MD, fontWeight: 400, color: 'var(--color-text-grey)', whiteSpace: 'nowrap' }}>
        {value}
      </span>
      {percentile && <PercentileTag percentile={percentile} size="sm" />}
    </div>
  )
}

/* ── LotCard ────────────────────────────────────────────────── */
export function LotCard({
  images      = [],
  location,
  title,
  breeder,
  specs       = [],   // [{ key, value }] — rendered in pairs per row
  abvs        = [],   // [{ key, value, percentile }] — rendered in pairs per row
  tags        = [],   // string[] — e.g. ['$/Head', 'Assessed']
  agencyLogo,
  agencyName,
  favourite      = false,
  onFavourite,
  imgObjectPosition = 'center calc(100% + 200px)',
  style,
  className,
}) {
  const [imgIndex, setImgIndex] = useState(0)
  const [fav, setFav]           = useState(favourite)
  const [imgStatus, setImgStatus] = useState('loading')

  const src      = images[imgIndex]
  const multiImg = images.length > 1

  // chunk into rows of 2
  const specRows = []
  for (let i = 0; i < specs.length; i += 2) specRows.push(specs.slice(i, i + 2))
  const abvRows  = []
  for (let i = 0; i < abvs.length;  i += 2) abvRows.push(abvs.slice(i, i + 2))

  const handleFav = () => {
    setFav(f => !f)
    onFavourite?.(!fav)
  }

  return (
    <div
      className={className}
      style={{
        display:         'flex',
        flexDirection:   'column',
        backgroundColor: 'var(--color-bg-white)',
        borderRadius:    'var(--radius-md)',
        overflow:        'hidden',
        width:           '300px',
        flexShrink:      0,
        ...style,
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', height: '200px', flexShrink: 0 }}>
        {/* Shimmer */}
        {imgStatus === 'loading' && (
          <div className="shimmer" style={{ position: 'absolute', inset: 0 }} />
        )}

        {/* Photo */}
        {src && (
          <img
            src={src}
            alt={title ?? ''}
            onLoad={() => setImgStatus('loaded')}
            onError={() => setImgStatus('error')}
            style={{
              position:   'absolute',
              inset:      0,
              width:      '100%',
              height:     '100%',
              objectFit:      'cover',
              objectPosition: imgObjectPosition,
              display:    imgStatus === 'loaded' ? 'block' : 'none',
            }}
          />
        )}

        {/* Favourite */}
        <div style={{ position: 'absolute', top: 'var(--spacing-sm)', right: 'var(--spacing-sm)' }}>
          <CardFavouriteButton selected={fav} onClick={handleFav} />
        </div>

        {/* Image dots */}
        {multiImg && (
          <div style={{
            position:       'absolute',
            bottom:         'var(--spacing-md)',
            left:           0,
            right:          0,
            display:        'flex',
            justifyContent: 'center',
            gap:            '4px',
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setImgIndex(i); setImgStatus('loading') }}
                aria-label={`Image ${i + 1}`}
                style={{
                  width:        i === imgIndex ? '16px' : '6px',
                  height:       '6px',
                  borderRadius: '3px',
                  background:   i === imgIndex ? 'white' : 'rgba(255,255,255,0.55)',
                  border:       'none',
                  padding:      0,
                  cursor:       'pointer',
                  transition:   'width 0.2s ease',
                  flexShrink:   0,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Info ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)' }}>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            {location && (
              <span style={{ ...LABEL_MD, fontWeight: 500, color: 'var(--color-border-grey)' }}>
                {location}
              </span>
            )}
            {title && (
              <span style={{
                fontFamily: 'var(--type-family-primary)',
                fontSize:   'var(--type-size-title-md)',
                lineHeight: 'var(--type-lh-title-md)',
                fontWeight: 500,
                color:      'var(--color-text-dark)',
              }}>
                {title}
              </span>
            )}
            {breeder && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <span aria-hidden="true" style={{
                  fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  fontSize:              '16px',
                  lineHeight:            1,
                  color:                 'var(--color-text-dark)',
                  userSelect:            'none',
                  flexShrink:            0,
                }}>business_center</span>
                <span style={{ ...LABEL_MD, fontWeight: 400, color: 'var(--color-text-dark)' }}>
                  {breeder}
                </span>
              </div>
            )}
          </div>

          {/* Specs */}
          {specRows.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              {specRows.map((row, i) => (
                <div key={i} style={{ display: 'flex' }}>
                  {row[0] && <SpecCol label={row[0].key} value={row[0].value} wide />}
                  {row[1] && <SpecCol label={row[1].key} value={row[1].value} />}
                </div>
              ))}
            </div>
          )}

          {/* ABVs */}
          {abvRows.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              {abvRows.map((row, i) => (
                <div key={i} style={{ display: 'flex' }}>
                  {row[0] && <AbvCol label={row[0].key} value={row[0].value} percentile={row[0].percentile} wide />}
                  {row[1] && <AbvCol label={row[1].key} value={row[1].value} percentile={row[1].percentile} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lot type tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            {tags.map(tag => <LotTypeTag key={tag} label={tag} />)}
          </div>
        )}

        {/* Agency */}
        {(agencyLogo || agencyName) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div style={{ height: '1px', background: 'var(--color-border-grey-light)', marginLeft: 'calc(-1 * var(--spacing-md))', marginRight: 'calc(-1 * var(--spacing-md))' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              {agencyLogo && (
                <img
                  src={agencyLogo}
                  alt={agencyName ?? 'Agency'}
                  style={{ height: '24px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                />
              )}
              {agencyName && (
                <span style={{
                  fontFamily: 'var(--type-family-primary)',
                  fontSize:   'var(--type-size-body-sm)',
                  lineHeight: 'var(--type-lh-body-sm)',
                  fontWeight: 400,
                  color:      'var(--color-text-grey)',
                }}>
                  {agencyName}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LotCard
