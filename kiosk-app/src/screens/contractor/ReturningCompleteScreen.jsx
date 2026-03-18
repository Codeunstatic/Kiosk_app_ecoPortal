import { useState } from 'react'
import NavBar from '../../components/NavBar'

export default function ReturningCompleteScreen({ contractor, onCheckin, onBack }) {
  const [host, setHost] = useState('')
  const [reason, setReason] = useState('')

  const initials = contractor.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Navy hero band — 223px, text at matching SVG positions */}
        <div className="wb-header">
          <h1>Welcome back</h1>
          <p>Confirm your details and check in</p>
        </div>

        {/* Scroll area — margin-top: -62px makes profile card overlap the hero */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          marginTop: '-62px',
          padding: '0 47px',
        }}>

          {/* Profile card — sits on top of the bottom part of the hero band */}
          <div className="profile-card">
            <div className="profile-top">
              <div className="profile-avatar">{initials}</div>
              <div className="profile-info">
                <div className="profile-name">{contractor.name}</div>
                <div className="profile-details-row">
                  <span>{contractor.email}</span>
                  <span>{contractor.phone}</span>
                  <span className="detail-company">{contractor.company}</span>
                </div>
              </div>
            </div>

            <div className="profile-sep" />

            <div className="profile-badges">
              <span className="badge badge-blue">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#032461" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Onboarded
              </span>
              <span className="badge badge-blue">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#032461" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Training complete
              </span>
            </div>
          </div>

          {/* Optional fields */}
          <div className="optional-divider" style={{ marginTop: 49 }}>
            <span>OPTIONAL (SKIP IF NOT NEEDED)</span>
          </div>

          <div className="form-grid-2" style={{ marginTop: 20 }}>
            <div className="form-group">
              <label className="form-label">Host</label>
              <input className="form-input" placeholder="Who are you visiting?"
                value={host} onChange={e => setHost(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Reason for visit</label>
              <input className="form-input" placeholder="e.g. Maintenance, Inspection"
                value={reason} onChange={e => setReason(e.target.value)} />
            </div>
          </div>

          {/* Bottom padding so footer doesn't cover content */}
          <div style={{ height: 24 }} />
        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <button className="btn btn-primary" onClick={() => onCheckin({ host, reason })}>
            Check-in
          </button>
        </div>

      </div>
    </div>
  )
}
