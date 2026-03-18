import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'

const RESET_DELAY = 10000 // 10 seconds

export default function VisitorSuccessScreen({ onReset }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Trigger animations on mount
    const a = setTimeout(() => setAnimate(true), 100)
    const t = setTimeout(onReset, RESET_DELAY)
    return () => { clearTimeout(a); clearTimeout(t) }
  }, [onReset])

  return (
    <div className="kiosk-root">
      <NavBar title="Visitor check-in" />
      <div className="vsuccess-screen">
        <div className={`vsuccess-card${animate ? ' vsuccess-card--in' : ''}`}>

          {/* Animated checkmark circle */}
          <div className={`vsuccess-circle${animate ? ' vsuccess-circle--in' : ''}`}>
            <svg viewBox="0 0 88 88" width="88" height="88" fill="none">
              <circle cx="44" cy="44" r="44" fill="#5B8FDE"/>
              <path
                className={animate ? 'check-path--draw' : ''}
                d="M30 44L40.889 54.889L59.556 33.111"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="50"
                strokeDashoffset={animate ? '0' : '50'}
                style={{ transition: animate ? 'stroke-dashoffset 0.5s ease 0.3s' : 'none' }}
              />
            </svg>
          </div>

          {/* Text */}
          <h2 className="vsuccess-title">Welcome on-site</h2>
          <p className="vsuccess-sub">You're all set. Have a safe and productive day.</p>

          {/* Reminder banner */}
          <div className="vsuccess-reminder--pill">
            Remember to check out when leaving the building
          </div>

          {/* Auto-reset progress */}
          <p className="vsuccess-reset-label">THIS SCREEN WILL RESET AUTOMATICALLY</p>
          <div className="vsuccess-progress-track">
            <div
              className="vsuccess-progress-fill"
              style={{
                width: animate ? '100%' : '0%',
                transition: animate ? `width ${RESET_DELAY}ms linear` : 'none',
              }}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
