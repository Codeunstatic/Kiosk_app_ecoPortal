const FLOWS = [
  { id: 'visitor',              label: 'Visitor',               color: '#0846C3' },
  { id: 'new_contractor',       label: 'New/walk-in contractor', color: '#0846C3' },
  { id: 'returning_complete',   label: 'Returning (complete)',   color: '#0846C3' },
  { id: 'returning_incomplete', label: 'Returning (incomplete)', color: '#0846C3' },
]

export default function FlowSwitcher({ activeFlowId, onSwitch }) {
  return (
    <div style={{
      position: 'fixed',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      zIndex: 9999,
      alignItems: 'flex-end',
    }}>
      <div style={{
        fontSize: 9,
        fontWeight: 700,
        color: '#6B7280',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
        marginBottom: 4,
        textAlign: 'right',
      }}>
        Demo flows
      </div>

      {FLOWS.map(flow => {
        const isActive = activeFlowId === flow.id
        return (
          <button
            key={flow.id}
            onClick={() => onSwitch(flow.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 10px 6px 8px',
              borderRadius: 20,
              border: `1.5px solid ${isActive ? flow.color : '#374151'}`,
              background: isActive ? `${flow.color}22` : 'rgba(17,24,39,0.7)',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(4px)',
              boxShadow: isActive ? `0 0 10px ${flow.color}44` : 'none',
            }}
          >
            {/* Dot indicator */}
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: isActive ? flow.color : '#4B5563',
              flexShrink: 0,
              boxShadow: isActive ? `0 0 6px ${flow.color}` : 'none',
              transition: 'all 0.2s ease',
            }} />
            {/* Label */}
            <span style={{
              fontSize: 11,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? flow.color : '#9CA3AF',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s ease',
            }}>
              {flow.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
