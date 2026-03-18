import { useState, useRef, useEffect } from 'react'
import NavBar from '../../components/NavBar'

const HOSTS = [
  'Alice Johnson', 'Bob Smith', 'Carol White', 'David Brown', 'Emma Davis',
  'Frank Miller', 'Grace Wilson', 'Henry Moore', 'Isabel Taylor', 'James Anderson',
  'Karen Thomas', 'Liam Jackson', 'Mia Harris', 'Noah Martin', 'Olivia Thompson',
  'Paul Garcia', 'Quinn Martinez', 'Rachel Robinson', 'Sam Clark', 'Tina Lewis',
]

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function VisitorDetailsScreen({ onSubmit, onBack }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', host: '', reason: '' })
  const [emailTouched, setEmailTouched] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [hostSuggestions, setHostSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [hostNoMatch, setHostNoMatch] = useState(false)
  const hostRef = useRef(null)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const emailError = emailTouched && !emailFocused && form.email.length > 0 && !isValidEmail(form.email)
  const canSubmit = form.firstName.trim() && form.lastName.trim() && form.email.trim() && isValidEmail(form.email)

  function handleHostChange(val) {
    set('host', val)
    if (val.trim().length > 0) {
      const matches = HOSTS.filter(h => h.toLowerCase().includes(val.toLowerCase()))
      setHostSuggestions(matches)
      setShowSuggestions(matches.length > 0)
      setHostNoMatch(matches.length === 0)
    } else {
      setShowSuggestions(false)
      setHostNoMatch(false)
    }
  }

  function selectHost(name) {
    set('host', name)
    setShowSuggestions(false)
    setHostNoMatch(false)
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (hostRef.current && !hostRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="kiosk-root">
      <NavBar title="Visitor check-in" />

      <div className="screen-body">
        <div className="screen-content">
          <div className="page-heading">
            <h1>Visitor details</h1>
            <p>Please fill in your details to check in</p>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">First name <span className="required">*</span></label>
              <input className="form-input" placeholder="Enter first name"
                value={form.firstName} onChange={e => set('firstName', e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Last name <span className="required">*</span></label>
              <input className="form-input" placeholder="Enter last name"
                value={form.lastName} onChange={e => set('lastName', e.target.value)} />
            </div>

            <div className="form-group full-width">
              <label className="form-label">Email <span className="required">*</span></label>
              <input
                className={`form-input${emailError ? ' form-input--error' : ''}`}
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={e => { set('email', e.target.value); if (!e.target.value) setEmailTouched(false) }}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => { setEmailTouched(true); setEmailFocused(false) }}
              />
              {emailError && <span className="form-error">Please enter a valid email address</span>}
            </div>

            <div className="optional-divider">
              <span>OPTIONAL (SKIP IF NOT NEEDED)</span>
            </div>

            <div className="form-group" ref={hostRef} style={{ position: 'relative' }}>
              <label className="form-label">Host</label>
              <input
                className={`form-input${hostNoMatch ? ' form-input--error' : ''}`}
                placeholder="Who are you visiting?"
                value={form.host}
                onChange={e => handleHostChange(e.target.value)}
                onFocus={() => form.host && setShowSuggestions(hostSuggestions.length > 0)}
                autoComplete="off"
              />
              {hostNoMatch && <span className="form-error">No host with that name found at this facility</span>}
              {showSuggestions && (
                <ul className="host-suggestions">
                  {hostSuggestions.map(name => (
                    <li key={name} className="host-suggestion-item" onMouseDown={() => selectHost(name)}>
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Reason for visit</label>
              <input className="form-input" placeholder="e.g. Meeting, Delivery"
                value={form.reason} onChange={e => set('reason', e.target.value)} />
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <button className="btn btn-primary" disabled={!canSubmit} onClick={() => onSubmit(form)}>
            Check-in
          </button>
        </div>
      </div>
    </div>
  )
}
