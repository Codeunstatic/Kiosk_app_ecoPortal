import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'

const RESET_DELAY = 10000

export default function ContractorSuccessScreen({ isNew, onReset }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const a = setTimeout(() => setAnimate(true), 100)
    const t = setTimeout(onReset, RESET_DELAY)
    return () => { clearTimeout(a); clearTimeout(t) }
  }, [onReset])

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />
      <div className="vsuccess-screen">
        <div
          className={`vsuccess-card${animate ? ' vsuccess-card--in' : ''}`}
          style={{ width: 542, borderRadius: 16 }}
        >
          {/* Animated checkmark circle */}
          <div className={`vsuccess-circle${animate ? ' vsuccess-circle--in' : ''}`}>
            <svg viewBox="0 0 88 88" width="88" height="88" fill="none">
              <circle cx="44" cy="44" r="44" fill="#5B8FDE"/>
              <path
                d="M30 44L40.889 54.889L59.556 33.111"
                stroke="#EBF1FC"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="50"
                strokeDashoffset={animate ? '0' : '50'}
                style={{ transition: animate ? 'stroke-dashoffset 0.5s ease 0.3s' : 'none' }}
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="vsuccess-title">Welcome on-site</h2>

          {/* Body text */}
          <p className="vsuccess-sub" style={{ marginBottom: 28 }}>
            {isNew ? (
              <>
                <span style={{ color: '#9CA3AF' }}>You're all set!</span>
                {' '}
                <span style={{ color: 'white' }}>A QR code has been sent to your email for fast check-in next time.</span>
                {' '}
                <span style={{ color: '#9CA3AF' }}>Have a safe and productive day.</span>
              </>
            ) : (
              <span style={{ color: '#9CA3AF' }}>You're all set. Have a safe and productive day.</span>
            )}
          </p>

          {/* Reminder pill */}
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
