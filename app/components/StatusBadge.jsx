'use client'

const STATUS_STYLES = {
  live: {
    background: 'color-mix(in srgb, #22c55e 15%, transparent)',
    color: '#16a34a',
    border: '1px solid color-mix(in srgb, #22c55e 30%, transparent)',
  },
  deprecated: {
    background: 'color-mix(in srgb, #ef4444 15%, transparent)',
    color: '#dc2626',
    border: '1px solid color-mix(in srgb, #ef4444 30%, transparent)',
  },
}

const BADGE_BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.03em',
  padding: '2px 8px',
  borderRadius: '12px',
  fontFamily: 'inherit',
}

export function StatusBadge({ since, status = 'live' }) {
  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES.live
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
      {since && (
        <span style={{
          ...BADGE_BASE,
          background: 'color-mix(in srgb, currentColor 8%, transparent)',
          color: 'inherit',
          border: '1px solid color-mix(in srgb, currentColor 15%, transparent)',
          opacity: 0.75,
        }}>
          Since {since}
        </span>
      )}
      <span style={{ ...BADGE_BASE, ...statusStyle }}>
        {status === 'deprecated' ? 'Deprecated' : 'Live'}
      </span>
    </span>
  )
}
