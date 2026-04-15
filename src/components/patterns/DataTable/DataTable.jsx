/* ─────────────────────────────────────────────────────────────
   DataTable — Design System component library

   Named exports:
     DataTable   Generic sortable table with custom cell rendering

   columns:      { id, label, sortable?, width?, minWidth?, align? }[]
   rows:         object[] — data rows, each must have a unique `id`
   renderCell:   (colId, row) => ReactNode
   sortBy:       string — currently sorted column id
   sortDir:      'asc' | 'desc'
   onSort:       (colId) => void
   stickyHeader: boolean (default true)
   ───────────────────────────────────────────────────────────── */


const cellBase = {
  fontFamily:    'var(--type-family-primary)',
  fontSize:      'var(--type-size-body-sm)',
  lineHeight:    'var(--type-lh-body-sm)',
  color:         'var(--color-text-dark)',
  padding:       'var(--spacing-sm-md) var(--spacing-md)',
  borderBottom:  '1px solid var(--color-border-grey-light)',
  verticalAlign: 'middle',
}

const headerCellBase = {
  ...cellBase,
  fontSize:        'var(--type-size-label-md)',
  lineHeight:      'var(--type-lh-label-md)',
  fontWeight:      600,
  textTransform:   'uppercase',
  color:           'var(--color-text-grey-dark)',
  backgroundColor: 'var(--color-bg-light)',
  borderBottom:    '1px solid var(--color-border-grey-light)',
  whiteSpace:      'nowrap',
  userSelect:      'none',
}

function SortIcon({ dir, active }) {
  return (
    <span aria-hidden="true" style={{
      fontFamily:            "'Material Symbols Rounded'",
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      fontSize:              '16px',
      lineHeight:            1,
      color:                 active ? 'var(--color-brand-primary)' : 'var(--color-text-grey-light)',
      userSelect:            'none',
      display:               'block',
    }}>
      {active && dir === 'desc' ? 'arrow_downward' : 'arrow_upward'}
    </span>
  )
}

export function DataTable({
  columns = [],
  rows = [],
  renderCell,
  sortBy,
  sortDir = 'asc',
  onSort,
  stickyHeader = true,
  style,
}) {
  return (
    <div style={{ overflowX: 'auto', width: '100%', ...style }}>
      <table style={{
        width:           '100%',
        borderCollapse:  'collapse',
        tableLayout:     'auto',
        backgroundColor: 'var(--color-bg-white)',
      }}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.id}
                style={{
                  ...headerCellBase,
                  width:    col.width    ? `${col.width}px`    : undefined,
                  minWidth: col.minWidth ? `${col.minWidth}px` : undefined,
                  textAlign: col.align ?? 'left',
                  position: stickyHeader ? 'sticky' : undefined,
                  top:      stickyHeader ? 0 : undefined,
                  zIndex:   stickyHeader ? 1 : undefined,
                }}
              >
                {col.sortable ? (
                  <button
                    onClick={() => onSort?.(col.id)}
                    style={{
                      display:    'inline-flex',
                      alignItems: 'center',
                      gap:        'var(--spacing-xs)',
                      background: 'none',
                      border:     'none',
                      padding:    0,
                      cursor:     'pointer',
                      fontFamily: 'var(--type-family-primary)',
                      fontSize:   'var(--type-size-label-md)',
                      lineHeight: 'var(--type-lh-label-md)',
                      fontWeight:     600,
                      textTransform: 'uppercase',
                      color:         sortBy === col.id
                        ? 'var(--color-brand-primary)'
                        : 'var(--color-text-grey-dark)',
                    }}
                  >
                    {col.label}
                    <SortIcon dir={sortDir} active={sortBy === col.id} />
                  </button>
                ) : col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.id ?? i}
            >
              {columns.map(col => (
                <td
                  key={col.id}
                  style={{
                    ...cellBase,
                    textAlign:     col.align         ?? 'left',
                    verticalAlign: col.verticalAlign ?? 'middle',
                  }}
                >
                  {renderCell?.(col.id, row) ?? row[col.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
