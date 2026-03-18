import { useState } from 'react'
import NavBar from '../../../components/NavBar'
import Stepper from '../../../components/Stepper'

const STEPS = [{ label: 'Company details' }, { label: 'Personal details' }, { label: 'Safety training' }]

export default function Step2Personal({ email, onNext, onBack }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', mobile: '', role: '', host: '', reason: '',
  })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const canProceed = form.firstName.trim() && form.lastName.trim()

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />
      <Stepper steps={STEPS} current={1} />
      <div className="screen-body">
        <div className="screen-content">
          <div className="form-grid-2">

            {/* Required fields */}
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

            {/* Optional divider */}
            <div className="optional-divider">
              <span>OPTIONAL (SKIP IF NOT NEEDED)</span>
            </div>

            <div className="form-group">
              <label className="form-label">Mobile number</label>
              <input className="form-input" placeholder="+64"
                value={form.mobile} onChange={e => set('mobile', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <input className="form-input" placeholder="e.g. Electrician, Site Manager"
                value={form.role} onChange={e => set('role', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Host</label>
              <input className="form-input" placeholder="Who are you visiting?"
                value={form.host} onChange={e => set('host', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Reason for visit</label>
              <input className="form-input" placeholder="e.g. Maintenance, Installation"
                value={form.reason} onChange={e => set('reason', e.target.value)} />
            </div>

          </div>
        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <button className="btn btn-primary" disabled={!canProceed} onClick={() => onNext(form)}>
            Next (Safety training)
          </button>
        </div>
      </div>
    </div>
  )
}
