/* ─────────────────────────────────────────────────────────────
   Tag — Design System component library
   Figma file: TI2QRswI37Xh8W8h5CrypW · Components page (4:3877)

   Named exports:
     PriceTag           $/Head · $/Lot · $/Unit · c/kg L · c/kg D   (162:8789)
     AssessmentTag      Assessed · Described                          (162:8800)
     AccreditationTag   EU · PCAS Elig · PCAS Cert · NE              (162:8805)
     LotStatusTag       Published · In Progress · Live · Stud Verified (162:8824)
     PercentileTag      Top 5% · 10% · 20% · 50%  ·  sm / md size   (301:10593)
     SoldStatusTag      Sold · Passed In · Withdrawn · No Bids        (69:192)
     NewTag             New · Beta                                    (162:8604)
     CardKeyInfoTag     Buy Now · Make an Offer · Reoffered · Withdrawn (162:8829)
     AuctionTypeTag     Stud · Commercial · Machinery · Property · Special Commercial · Charity (57:1281)
     PackageTypeTag     Premium · Prime · Classic · Sim/Online · Attended (57:1261)
     BidStatusTag       Your Bid · On Market · Near Reserve · Outbid · Withdrawn (746:5914)
     ListingStatusTag   Published · Draft · Unpublished              (1124:680)
     WHPESITag          WHP/ESI                                      (162:8821)
     FeederOptimisedTag Feeder Optimised                             (1683:3431)
   ───────────────────────────────────────────────────────────── */

const LABEL_MD = {
  fontFamily:  'var(--type-family-primary)',
  fontSize:    'var(--type-size-label-md)',
  lineHeight:  'var(--type-lh-label-md)',
  fontWeight:  500,
  whiteSpace:  'nowrap',
}

/* ── PriceTag ──────────────────────────────────────────────── */
// label: '$/Head' | '$/Lot' | '$/Unit' | 'c/kg L' | 'c/kg D'

export function PriceTag({ label = '$/Head', className, style }) {
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: 'var(--color-brand-primary-light)',
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {label}
    </span>
  )
}

/* ── AssessmentTag ─────────────────────────────────────────── */
// label: 'Assessed' | 'Described'

export function AssessmentTag({ label = 'Assessed', className, style }) {
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: 'var(--color-brand-primary-light)',
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {label}
    </span>
  )
}

/* ── AccreditationTag ──────────────────────────────────────── */
// label: 'EU' | 'PCAS Elig' | 'PCAS Cert' | 'NE'

export function AccreditationTag({ label = 'EU', className, style }) {
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: 'var(--color-bg-grey-light)',
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {label}
    </span>
  )
}

/* ── LotStatusTag ──────────────────────────────────────────── */
// variant: 'published' | 'in-progress' | 'live' | 'stud-verified'

const LOT_STATUS = {
  published: {
    bg:    'var(--color-bg-green-light)',
    color: 'var(--color-text-grey-dark)',
    label: 'Published',
    icon:  null,
  },
  'in-progress': {
    bg:    'var(--color-accent-yellow-light)',
    color: 'var(--color-text-grey-dark)',
    label: 'Lot In Progress',
    icon:  null,
  },
  live: {
    bg:    'var(--color-bg-green)',
    color: 'var(--color-text-white)',
    label: 'LIVE',
    icon:  'dot',
  },
  'stud-verified': {
    bg:    'var(--color-bg-light)',
    color: 'var(--color-text-grey-dark)',
    label: 'Stud Verified',
    icon:  'verified',
  },
}

export function LotStatusTag({ variant = 'published', className, style }) {
  const v = LOT_STATUS[variant] ?? LOT_STATUS.published
  const hasIcon = !!v.icon

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           v.color,
        height:          '20px',
        borderRadius:    'var(--radius-full)',
        paddingLeft:     hasIcon ? 'var(--spacing-xs)'  : 'var(--spacing-sm)',
        paddingRight:    'var(--spacing-sm)',
        gap:             hasIcon ? 'var(--spacing-0-5)' : 0,
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.icon === 'dot' && (
        <span style={{
          display:         'inline-block',
          width:           '8px',
          height:          '8px',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'currentColor',
          flexShrink:      0,
        }} />
      )}
      {v.icon === 'verified' && (
        <span
          aria-hidden="true"
          style={{
            fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize:              'var(--size-icon-sm)',
            lineHeight:            1,
            color:                 'var(--color-brand-primary)',
            flexShrink:            0,
          }}
        >
          verified
        </span>
      )}
      {v.label}
    </span>
  )
}

/* ── PercentileTag ─────────────────────────────────────────── */
// percentile: 5 | 10 | 20 | 50
// size: 'sm' | 'md'

const PERCENTILE_BG = {
  5:  'var(--color-accent-purple-light)',
  10: 'var(--color-accent-teal-light)',
  20: 'var(--color-status-orange-light)',
  50: 'var(--color-bg-grey-light)',
}

export function PercentileTag({ percentile = 5, size = 'sm', className, style }) {
  const bg   = PERCENTILE_BG[percentile] ?? PERCENTILE_BG[5]
  const isLg = size === 'md'

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: bg,
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        fontFamily:      'var(--type-family-primary)',
        fontSize:        isLg ? 'var(--type-size-label-md)' : 'var(--type-size-label-sm)',
        lineHeight:      isLg ? 'var(--type-lh-label-md)'   : 'var(--type-lh-label-sm)',
        fontWeight:      500,
        whiteSpace:      'nowrap',
        ...style,
      }}
    >
      Top {percentile}%
    </span>
  )
}

/* ── SoldStatusTag ─────────────────────────────────────────── */
// variant: 'sold' | 'passed-in' | 'withdrawn' | 'no-bids'

const SOLD_STATUS = {
  sold:        { bg: 'var(--color-bg-green)',        color: 'var(--color-text-white)', label: 'SOLD'       },
  'passed-in': { bg: 'var(--color-bg-orange)',        color: 'var(--color-text-white)', label: 'PASSED IN'  },
  withdrawn:   { bg: 'var(--color-bg-dark)',           color: 'var(--color-text-white)', label: 'WITHDRAWN'  },
  'no-bids':   { bg: 'var(--color-bg-grey-light)',    color: 'var(--color-text-dark)',  label: 'NO BIDS'    },
}

export function SoldStatusTag({ variant = 'sold', className, style }) {
  const v = SOLD_STATUS[variant] ?? SOLD_STATUS.sold

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           v.color,
        height:          '20px',
        padding:         '0 var(--spacing-sm)',
        borderRadius:    'var(--radius-full)',
        textTransform:   'uppercase',
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.label}
    </span>
  )
}

/* ── NewTag ────────────────────────────────────────────────── */
// variant: 'new' | 'beta'

const NEW_TAG = {
  new:  { bg: 'var(--color-bg-green)',          label: 'New'  },
  beta: { bg: 'var(--color-brand-primary-dark)', label: 'Beta' },
}

export function NewTag({ variant = 'new', className, style }) {
  const v = NEW_TAG[variant] ?? NEW_TAG.new

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           'var(--color-text-white)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.label}
    </span>
  )
}

/* ── CardKeyInfoTag ────────────────────────────────────────── */
// variant: 'buy-now' | 'make-offer' | 'reoffered' | 'withdrawn'
// label: optional override for the text

const CARD_KEY_INFO = {
  'buy-now': {
    bg:           'var(--color-accent-teal-light)',
    borderColor:  'var(--color-accent-teal)',
    color:        'var(--color-accent-teal)',
    icon:         'sell',
    defaultLabel: 'Buy Now',
  },
  'make-offer': {
    bg:           'var(--color-accent-purple-light)',
    borderColor:  'var(--color-accent-purple)',
    color:        'var(--color-accent-purple)',
    icon:         'sell',
    defaultLabel: 'Make an Offer',
  },
  reoffered: {
    bg:           'var(--color-brand-primary-light)',
    borderColor:  'var(--color-brand-primary-dark)',
    color:        'var(--color-brand-primary-dark)',
    icon:         'info',
    defaultLabel: 'Reoffered',
  },
  withdrawn: {
    bg:           'var(--color-bg-grey-light)',
    borderColor:  'var(--color-text-dark)',
    color:        'var(--color-text-dark)',
    icon:         'info',
    defaultLabel: 'Lot has been withdrawn',
  },
}

export function CardKeyInfoTag({ variant = 'buy-now', label, className, style }) {
  const v = CARD_KEY_INFO[variant] ?? CARD_KEY_INFO['buy-now']

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        gap:             'var(--spacing-xs)',
        backgroundColor: v.bg,
        color:           v.color,
        border:          `1px solid ${v.borderColor}`,
        padding:         'var(--spacing-xs)',
        borderRadius:    'var(--radius-sm)',
        ...LABEL_MD,
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              'var(--size-icon-sm)',
          lineHeight:            1,
          flexShrink:            0,
        }}
      >
        {v.icon}
      </span>
      {label ?? v.defaultLabel}
    </span>
  )
}

/* ── AuctionTypeTag ────────────────────────────────────────── */
// variant: 'stud' | 'commercial' | 'machinery' | 'property' | 'special-commercial' | 'charity'

const AUCTION_TYPE = {
  stud:               { bg: 'var(--color-bg-green-light)',      border: 'var(--color-status-green-dark)',  color: 'var(--color-text-green)',          label: 'Stud'               },
  commercial:         { bg: 'var(--color-bg-red-light)',        border: 'var(--color-text-red)',           color: 'var(--color-text-red)',            label: 'Commercial'         },
  machinery:          { bg: 'var(--color-bg-orange-light)',      border: 'var(--color-text-orange)',         color: 'var(--color-text-orange)',          label: 'Machinery'          },
  property:           { bg: 'var(--color-accent-purple-light)',   border: 'var(--color-accent-purple)',        color: 'var(--color-accent-purple)',         label: 'Property'           },
  'special-commercial': { bg: 'var(--color-brand-primary-light)', border: 'var(--color-brand-primary-dark)', color: 'var(--color-brand-primary-dark)',   label: 'Special Commercial' },
  charity:            { bg: 'var(--color-accent-teal-light)',     border: 'var(--color-accent-teal)',          color: 'var(--color-accent-teal)',           label: 'Charity'            },
}

export function AuctionTypeTag({ variant = 'stud', className, style }) {
  const v = AUCTION_TYPE[variant] ?? AUCTION_TYPE.stud
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           v.color,
        border:          `1px solid ${v.border}`,
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-sm)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.label}
    </span>
  )
}

/* ── PackageTypeTag ────────────────────────────────────────── */
// variant: 'premium' | 'prime' | 'classic' | 'sim-online' | 'attended'

const PACKAGE_TYPE = {
  premium:    { icon: 'support_agent',    label: 'Premium'    },
  prime:      { icon: 'headphones',       label: 'Prime'      },
  classic:    { icon: 'computer',         label: 'Classic'    },
  'sim-online': { icon: 'computer',       label: 'SIM/Online' },
  attended:   { icon: 'person_raised_hand', label: 'Attended' },
}

export function PackageTypeTag({ variant = 'premium', className, style }) {
  const v = PACKAGE_TYPE[variant] ?? PACKAGE_TYPE.premium
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        gap:             'var(--spacing-xs)',
        backgroundColor: 'var(--color-bg-grey-light)',
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          fontSize:              'var(--size-icon-xs)',
          lineHeight:            1,
          flexShrink:            0,
        }}
      >
        {v.icon}
      </span>
      {v.label}
    </span>
  )
}

/* ── BidStatusTag ──────────────────────────────────────────── */
// variant: 'your-bid' | 'on-market' | 'near-reserve' | 'outbid' | 'withdrawn'

const BID_STATUS = {
  'your-bid':     { bg: 'var(--color-bg-green-light)',    label: 'Your Bid'     },
  'on-market':    { bg: 'var(--color-brand-primary-light)', label: 'On Market'    },
  'near-reserve': { bg: 'var(--color-bg-orange-light)',    label: 'Near Reserve' },
  outbid:         { bg: 'var(--color-bg-red-light)',      label: 'Outbid'       },
  withdrawn:      { bg: 'var(--color-bg-grey-medium)', label: 'Withdrawn'    },
}

export function BidStatusTag({ variant = 'your-bid', className, style }) {
  const v = BID_STATUS[variant] ?? BID_STATUS['your-bid']
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           'var(--color-text-grey-dark)',
        height:          '20px',
        padding:         '0 var(--spacing-sm)',
        borderRadius:    'var(--radius-full)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.label}
    </span>
  )
}

/* ── ListingStatusTag ──────────────────────────────────────── */
// variant: 'published' | 'draft' | 'unpublished' | 'withdrawn'

const LISTING_STATUS = {
  published:   { bg: 'var(--color-bg-green)',          label: 'Published'   },
  draft:       { bg: 'var(--color-brand-primary-dark)', label: 'Draft'       },
  unpublished: { bg: 'var(--color-bg-orange)',          label: 'Unpublished' },
  withdrawn:   { bg: 'var(--color-bg-grey-medium)',     label: 'Withdrawn'   },
}

export function ListingStatusTag({ variant = 'published', className, style }) {
  const v = LISTING_STATUS[variant] ?? LISTING_STATUS.published
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: v.bg,
        color:           'var(--color-text-white)',
        height:          '20px',
        padding:         '0 var(--spacing-sm)',
        borderRadius:    'var(--radius-full)',
        ...LABEL_MD,
        ...style,
      }}
    >
      {v.label}
    </span>
  )
}

/* ── FeederOptimisedTag ────────────────────────────────────── */

export function FeederOptimisedTag({ className, style }) {
  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        backgroundColor: 'var(--color-accent-teal-light)',
        color:           'var(--color-text-grey-dark)',
        padding:         'var(--spacing-0-5) var(--spacing-xs)',
        borderRadius:    'var(--radius-xs)',
        ...LABEL_MD,
        ...style,
      }}
    >
      Feeder Optimised
    </span>
  )
}
