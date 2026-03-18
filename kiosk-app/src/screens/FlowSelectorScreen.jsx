import { useState } from 'react'

const PersonIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.7909 14.2091 4 12 4C9.7909 4 8 5.7909 8 8C8 10.2091 9.7909 12 12 12Z" stroke={color} strokeWidth="2"/>
    <path d="M4 20C4 15.6 7.6 12 12 12C16.4 12 20 15.6 20 20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const WorkerIcon = ({ color }) => (
  <svg width="22" height="22" viewBox="75 342 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M91.3776 346.706L91.3251 346.665C91.2241 345.898 90.8572 345.1 90.2844 344.427C89.354 343.333 87.8373 342.5 85.8073 342.5C83.8065 342.5 82.3966 343.412 81.5647 344.543C81.1765 345.067 80.8992 345.663 80.7498 346.297C80.7227 346.416 80.7009 346.536 80.6845 346.657L80.6215 346.705C79.9658 347.213 79.4846 347.829 79.5989 348.536C79.7086 349.218 80.3257 349.634 80.8997 349.887C81.0459 349.952 81.2029 350.013 81.3705 350.069C81.2861 350.727 81.3429 351.395 81.5369 352.029C81.7309 352.663 82.0578 353.248 82.4958 353.746C82.9337 354.244 83.4727 354.642 84.0768 354.915C84.6809 355.188 85.3363 355.33 85.9992 355.33C86.6622 355.33 87.3175 355.188 87.9216 354.915C88.5257 354.642 89.0647 354.244 89.5027 353.746C89.9406 353.248 90.2675 352.663 90.4615 352.029C90.6556 351.395 90.7123 350.727 90.628 350.069C90.7956 350.013 90.9525 349.952 91.0987 349.887C91.6727 349.634 92.2893 349.218 92.3996 348.536C92.5139 347.829 92.0326 347.213 91.377 346.705M81.8838 347.558C81.808 347.34 81.7881 346.989 81.8867 346.556C81.9836 346.133 82.1842 345.669 82.4992 345.24V346.875C82.4992 347.03 82.5607 347.178 82.6701 347.287C82.7795 347.397 82.9278 347.458 83.0826 347.458C83.2373 347.458 83.3856 347.397 83.495 347.287C83.6044 347.178 83.6659 347.03 83.6659 346.875V344.197C84.146 343.924 84.7264 343.734 85.4159 343.681V345.708C85.4159 345.863 85.4773 346.011 85.5867 346.121C85.6961 346.23 85.8445 346.292 85.9992 346.292C86.1539 346.292 86.3023 346.23 86.4117 346.121C86.5211 346.011 86.5826 345.863 86.5826 345.708V343.717C87.1985 343.795 87.7932 343.993 88.3326 344.301V346.875C88.3326 347.03 88.394 347.178 88.5034 347.287C88.6128 347.397 88.7612 347.458 88.9159 347.458C89.0706 347.458 89.219 347.397 89.3284 347.287C89.4378 347.178 89.4992 347.03 89.4992 346.875V345.31C90.1438 346.136 90.2949 347.028 90.1135 347.563C90.0685 347.695 90.0726 347.839 90.125 347.969C90.1774 348.099 90.2746 348.205 90.399 348.269C90.5233 348.333 90.6665 348.35 90.8024 348.317C90.9383 348.285 91.058 348.204 91.1396 348.091C91.2545 348.251 91.2504 348.336 91.2481 348.35C91.2405 348.396 91.1512 348.589 90.6268 348.821C90.3993 348.921 90.1286 349.012 89.8247 349.092L89.8107 349.095C89.4811 349.18 89.1142 349.253 88.7216 349.312C87.9935 349.417 87.2597 349.477 86.5242 349.493C86.0186 349.506 85.5127 349.5 85.0076 349.477C84.4265 349.45 83.8471 349.395 83.2716 349.311C82.9067 349.258 82.545 349.186 82.1877 349.095L82.1737 349.092C81.8995 349.023 81.6313 348.933 81.3716 348.821C80.8472 348.589 80.758 348.396 80.7504 348.35C80.7481 348.336 80.744 348.251 80.8589 348.091C80.9406 348.205 81.0607 348.285 81.1972 348.318C81.3336 348.351 81.4773 348.333 81.6018 348.269C81.7263 348.204 81.8234 348.097 81.8752 347.966C81.927 347.836 81.93 347.691 81.8838 347.559M82.5121 350.364C82.7061 350.402 82.906 350.436 83.1117 350.467C83.7347 350.561 84.4056 350.62 85.0881 350.648C85.6964 350.673 86.3055 350.673 86.9139 350.648C87.5929 350.62 88.2614 350.561 88.8815 350.467C89.0891 350.437 89.2908 350.402 89.4864 350.364C89.5279 350.847 89.4685 351.333 89.3121 351.792C89.1557 352.251 88.9056 352.673 88.5778 353.03C88.2499 353.387 87.8514 353.672 87.4075 353.868C86.9637 354.063 86.4841 354.163 85.9992 354.163C85.5144 354.163 85.0348 354.063 84.5909 353.868C84.147 353.672 83.7485 353.387 83.4206 353.03C83.0928 352.673 82.8427 352.251 82.6863 351.792C82.5299 351.333 82.4706 350.847 82.5121 350.364Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M88.9167 355.619C89.3005 355.686 89.6913 355.764 90.0833 355.854C93.2584 356.579 96.5 358.028 96.5 360V363.5H75.5V360C75.5 358.028 78.7416 356.579 81.9167 355.854C82.3035 355.766 82.6925 355.687 83.0833 355.619V358.25H88.9167V355.619ZM80.75 357.369C81.1315 357.252 81.5229 357.147 81.9167 357.052V359.417H90.0833V357.052C90.6743 357.193 91.2583 357.362 91.8333 357.559V362.333H93V358.015C93.1696 358.09 93.3325 358.168 93.4888 358.248C94.1521 358.585 94.6438 358.932 94.9553 359.265C95.2616 359.592 95.3333 359.833 95.3333 360V362.333H76.6667V360C76.6667 359.833 76.7384 359.592 77.0447 359.265C77.3562 358.932 77.8479 358.585 78.5112 358.248C78.8431 358.078 79.203 357.92 79.5833 357.772V362.333H80.75V357.369Z" fill={color}/>
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#6B7280" strokeWidth="2"/>
    <path d="M12 7V12L16 14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#EBF1FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FLOWS = [
  {
    id: 'visitor',
    label: 'Visitor check-in',
    multiline: false,
    duration: '~1 minute',
    heading: ['Visitor', 'check-in'],
    desc: 'A visitor walks in for a meeting, or for any occasion',
    icon: 'person',
  },
  {
    id: 'returning_complete',
    label: 'Returning /\npre-onboarded contractor',
    multiline: true,
    duration: '~1 minute',
    heading: ['Returning /', 'pre-onboarded contractor'],
    desc: 'A contractor who has fully completed onboarding and safety training',
    icon: 'worker',
  },
  {
    id: 'returning_incomplete',
    label: 'Incomplete contractor',
    multiline: false,
    duration: '~3 minutes',
    heading: ['Incomplete', 'contractor'],
    desc: 'A contractor who pre-onboarded online but has not yet completed safety training',
    icon: 'worker',
  },
  {
    id: 'new_contractor',
    label: 'New / walk-in contractor',
    multiline: false,
    duration: '~5 minutes',
    heading: ['New / walk-in', 'contractor'],
    desc: 'A contractor visiting for the first time who needs to complete full onboarding at the kiosk',
    icon: 'worker',
  },
]

export default function FlowSelectorScreen({ onLaunch }) {
  const [selected, setSelected] = useState(FLOWS[0])

  return (
    <div style={{ display: 'flex', width: 1024, height: 768, fontFamily: 'Inter, sans-serif' }}>

      {/* ── Left panel ── */}
      <div style={{
        width: 384,
        flexShrink: 0,
        background: '#010C20',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Title */}
        <div style={{ padding: '56px 40px 0' }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#EBF1FC', lineHeight: 1.3, marginBottom: 16 }}>
            Who is checking in?
          </div>
          <div style={{ fontSize: 14, color: '#EBF1FC', opacity: 0.55, lineHeight: 1.6, marginBottom: 96 }}>
            Select a scenario to experience the check-in flow for a specific user type
          </div>
        </div>

        {/* Nav items */}
        <div style={{ position: 'relative' }}>
          {FLOWS.map((flow, i) => {
            const isActive = selected.id === flow.id
            return (
              <div
                key={flow.id}
                onClick={() => setSelected(flow)}
                style={{ position: 'relative', cursor: 'pointer', marginBottom: i === 0 ? 8 : 0 }}
              >
                {/* Active: white card */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 40,
                    right: 40,
                    top: 0,
                    height: 76,
                    background: '#F8F9FB',
                    borderRadius: 14,
                  }} />
                )}

                {/* Active: blue left indicator line */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 41,
                    top: 9,
                    width: 3,
                    height: 58,
                    background: '#0846C3',
                    borderRadius: 2,
                  }} />
                )}

                {/* Content row */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: isActive ? '16px 16px 16px 64px' : '16px 16px 16px 64px',
                  height: isActive ? 76 : 'auto',
                  minHeight: flow.multiline ? 76 : 60,
                }}>
                  {/* Icon box */}
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive ? 'rgba(8,70,195,0.10)' : 'rgba(8,70,195,0.22)',
                  }}>
                    {flow.icon === 'person'
                      ? <PersonIcon color={isActive ? '#0846C3' : '#EBF1FC'} />
                      : <WorkerIcon color={isActive ? '#0846C3' : '#EBF1FC'} />
                    }
                  </div>

                  {/* Label */}
                  <span style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: isActive ? '#0846C3' : '#EBF1FC',
                    lineHeight: 1.35,
                    whiteSpace: 'pre-line',
                  }}>
                    {flow.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Right panel ── */}
      <div style={{
        flex: 1,
        background: '#F3F4F6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 66,
        paddingRight: 48,
      }}>

        {/* Duration badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#ffffff',
          border: '1.5px solid #e5e7eb',
          borderRadius: 18,
          padding: '8px 16px',
          marginBottom: 28,
          alignSelf: 'flex-start',
          fontSize: 14,
          fontWeight: 500,
        }}>
          <ClockIcon />
          <span style={{ color: '#111827' }}>Duration: </span>
          <span style={{ color: '#0846C3', fontWeight: 600 }}>{selected.duration}</span>
        </div>

        {/* Heading */}
        <div style={{
          fontSize: 46,
          fontWeight: 800,
          color: '#111827',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          {selected.heading[0]}<br />{selected.heading[1]}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 16,
          color: '#6B7280',
          lineHeight: 1.6,
          marginBottom: 40,
          maxWidth: 440,
        }}>
          {selected.desc}
        </p>

        {/* Launch button */}
        <button
          onClick={() => onLaunch(selected.id)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: '#0846C3',
            color: '#ffffff',
            border: 'none',
            borderRadius: 28,
            width: 205,
            height: 56,
            paddingLeft: 24,
            paddingRight: 20,
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#0638a0'}
          onMouseLeave={e => e.currentTarget.style.background = '#0846C3'}
        >
          Launch experience
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
