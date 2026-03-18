export default function Stepper({ steps, current }) {
  // Progress bar width: evenly divided across steps
  const progressPct = ((current) / (steps.length - 1)) * 100
  // For step 0 show ~37%, step 1 ~67%, step 2 ~100%
  const progressWidths = ['37.5%', '66%', '100%']

  return (
    <div className="stepper-wrap">
      {/* Top progress bar */}
      <div className="stepper-progress-track">
        <div className="stepper-progress-fill" style={{ width: progressWidths[current] ?? '37.5%' }} />
      </div>

      {/* Step pills */}
      <div className="stepper-row">
        {steps.map((s, i) => {
          const state = i < current ? 'done' : i === current ? 'active' : 'pending'
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className={`stepper-pill stepper-pill--${state}`}>
                <div className={`stepper-circle stepper-circle--${state}`}>
                  {state === 'done' ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span className={`stepper-label stepper-label--${state}`}>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '0 4px' }}>
                  <path d="M6 4l4 4-4 4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
