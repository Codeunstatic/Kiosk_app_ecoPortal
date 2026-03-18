import { useState } from 'react'
import NavBar from '../../../components/NavBar'
import Stepper from '../../../components/Stepper'

const STEPS = [{ label: 'Company details' }, { label: 'Personal details' }, { label: 'Safety training' }]

export default function Step3Safety({ onComplete, onBack }) {
  const [ack1, setAck1] = useState(false)
  const [ack2, setAck2] = useState(false)

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />
      <Stepper steps={STEPS} current={2} />
      <div className="screen-body">
        <div className="screen-content">

          {/* Page heading */}
          <div className="page-heading">
            <h1>Safety training</h1>
            <p>Carefully review and acknowledge our safety policy to proceed</p>
          </div>

          {/* Health & safety notice card */}
          <div className="safety-card safety-card--health">
            <div className="safety-card-hdr">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5L1.5 17.5H18.5L10 2.5Z" stroke="#92400E" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M10 8.5V11.5" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="10" cy="14.5" r="0.75" fill="#92400E"/>
              </svg>
              Health &amp; safety notices
            </div>
            <p className="safety-notice-text">
              There have been <strong>two recorded cases of COVID at this location.</strong> Use facemasks where required and sanitize hands as needed.
            </p>
            <p className="safety-notice-text">
              <strong>The elevator on L4 is undergoing maintenance;</strong> this will be completed by the end of business day.
            </p>
          </div>

          {/* Security acknowledgement card */}
          <div className="safety-card safety-card--security">
            <div className="safety-card-hdr">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M8 1L1 4.2V9C1 13.2 4.6 16.1 8 17.5C11.4 16.1 15 13.2 15 9V4.2L8 1Z" stroke="#032461" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
              Security acknowledgement
            </div>

            {/* Checkbox 1 */}
            <div className={`ack-item${ack1 ? ' checked' : ''}`} onClick={() => setAck1(v => !v)}>
              <div className={`ack-checkbox${ack1 ? ' checked' : ''}`}>
                {ack1 && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="ack-label">
                I acknowledge that I reviewed the HIAA Security awareness presentation.
              </span>
            </div>

            {/* Checkbox 2 */}
            <div className={`ack-item${ack2 ? ' checked' : ''}`} onClick={() => setAck2(v => !v)}>
              <div className={`ack-checkbox${ack2 ? ' checked' : ''}`} style={{ marginTop: 3 }}>
                {ack2 && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div>
                <span className="ack-label">
                  I am responsible for protecting electronic information:
                </span>
                <ul className="ack-subitems">
                  <li>Locking and logging off my workstation when I leave my work area.</li>
                  <li>Not changing settings which disable security features.</li>
                  <li>Not loading unauthorised software on my workstation.</li>
                  <li>Following all guidelines for electronic mail or messaging.</li>
                  <li>Reporting any security problems to my immediate supervisor.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <button className="btn btn-primary" disabled={!ack1 || !ack2} onClick={onComplete}>
            Complete check-in
          </button>
        </div>
      </div>
    </div>
  )
}
