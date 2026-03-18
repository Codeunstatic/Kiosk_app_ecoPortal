import { useState, useEffect, useRef } from 'react'
import NavBar from '../../components/NavBar'

const CONTRACTORS = {
  'john.pedro@example.com': { name: 'John Pedro', email: 'john.pedro@example.com', company: 'Green Life Plumbers', phone: '+64 21 555 0001', trainingComplete: true },
  'john@example.com':       { name: 'John Pedro', email: 'john@example.com', company: 'Green Life Plumbers', phone: '+64 21 555 0001', trainingComplete: true },
  'jane.smith@example.com': { name: 'Jane Smith', email: 'jane.smith@example.com', company: 'BuildRight Ltd', phone: '+64 21 555 0002', trainingComplete: false },
  'incomplete@test.com':    { name: 'Alex Taylor', email: 'incomplete@test.com', company: 'Pacific Electrical', phone: '+64 21 555 0003', trainingComplete: false },
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function EmailCheckScreen({ onResult, onBack }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const debounceRef = useRef(null)
  const errorRef = useRef(null)

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!isValidEmail(email.trim())) {
      setLoading(false)
      // Show error after a short pause so it doesn't flash while typing
      if (errorRef.current) clearTimeout(errorRef.current)
      if (email.trim().length > 0) {
        errorRef.current = setTimeout(() => setShowError(true), 800)
      } else {
        setShowError(false)
      }
      return
    }

    setShowError(false)
    if (errorRef.current) clearTimeout(errorRef.current)
    // Show spinner after short pause, then look up
    setLoading(true)
    debounceRef.current = setTimeout(() => {
      const trimmed = email.trim().toLowerCase()
      const contractor = CONTRACTORS[trimmed]
      if (contractor) {
        onResult({ type: contractor.trainingComplete ? 'returning_complete' : 'returning_incomplete', contractor })
      } else {
        onResult({ type: 'new', email: trimmed })
      }
      setLoading(false)
    }, 1200)

    return () => clearTimeout(debounceRef.current)
  }, [email])

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />

      <div className="screen-body">
        <div className="email-check-screen">
          <h1 className="email-check-title">Enter your email</h1>
          <p className="email-check-sub">We'll look you up in the system to check your registration status</p>

          <div className="email-check-input-wrap">
            <input
              className={`email-check-input form-input${showError ? ' form-input--error' : ''}`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => { setEmail(e.target.value); setShowError(false) }}
              autoFocus
            />
            {showError && <span className="form-error" style={{ marginTop: 6, display: 'block' }}>Please enter a valid email address</span>}
            {loading && (
              <span className="email-check-spinner">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#E5E7EB" strokeWidth="2.5"/>
                  <path d="M10 2a8 8 0 0 1 8 8" stroke="#0846C3" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>
            )}
          </div>
        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <span className="powered-by">Powered by <strong>ADA</strong></span>
        </div>
      </div>
    </div>
  )
}
