import { useState } from 'react'
import NavBar from '../../../components/NavBar'
import Stepper from '../../../components/Stepper'

const STEPS = [{ label: 'Company details' }, { label: 'Personal details' }, { label: 'Safety training' }]

export default function Step1Company({ email, onNext, onBack }) {
  const [form, setForm] = useState({
    companyName: '', country: '', city: '', address: '', suburb: '', postcode: '',
    industry: '', employees: '',
  })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const canNext = form.companyName.trim() && form.country && form.city.trim() && form.address.trim() && form.suburb.trim() && form.postcode.trim()

  return (
    <div className="kiosk-root">
      <NavBar title="Contractor check-in" />
      <Stepper steps={STEPS} current={0} />
      <div className="screen-body">
        <div className="screen-content">

          {/* Info banner */}
          <div className="alert alert-warning" style={{ marginBottom: 24 }}>
            <div className="alert-icon-wrap warning">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#F59E0B" strokeWidth="1.5"/>
                <path d="M11 7v4.5M11 14h.01" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="alert-body">
              <h4>First time here? Let's get you set up</h4>
              <p>Please complete the onboarding below to get started — it takes less than 5 minutes.</p>
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Company name <span className="required">*</span></label>
              <input className="form-input" placeholder="Enter company name"
                value={form.companyName} onChange={e => set('companyName', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Country <span className="required">*</span></label>
              <div className="select-wrapper">
                <select className="form-select" value={form.country} onChange={e => set('country', e.target.value)}>
                  <option value="">Select country</option>
                  <option>New Zealand</option><option>Australia</option>
                  <option>United Kingdom</option><option>United States</option><option>Canada</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">City <span className="required">*</span></label>
              <input className="form-input" placeholder="Start typing to search"
                value={form.city} onChange={e => set('city', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Address <span className="required">*</span></label>
              <input className="form-input" placeholder="Street address"
                value={form.address} onChange={e => set('address', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Suburb <span className="required">*</span></label>
              <input className="form-input" placeholder="Start typing to search"
                value={form.suburb} onChange={e => set('suburb', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Postcode <span className="required">*</span></label>
              <input className="form-input" placeholder="e.g. 1010"
                value={form.postcode} onChange={e => set('postcode', e.target.value)} />
            </div>

            <div className="optional-divider">
              <span>OPTIONAL (SKIP IF NOT NEEDED)</span>
            </div>

            <div className="form-group">
              <label className="form-label">Industry</label>
              <div className="select-wrapper">
                <select className="form-select" value={form.industry} onChange={e => set('industry', e.target.value)}>
                  <option value="">Select Industry</option>
                  <option>Construction</option><option>Electrical</option><option>Plumbing</option>
                  <option>IT Services</option><option>Cleaning</option><option>Security</option><option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Employees</label>
              <div className="select-wrapper">
                <select className="form-select" value={form.employees} onChange={e => set('employees', e.target.value)}>
                  <option value="">Select range</option>
                  <option>1–10</option><option>11–50</option><option>51–200</option>
                  <option>201–500</option><option>500+</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
          <button className="btn btn-primary" disabled={!canNext} onClick={() => onNext(form)}>
            Next (Personal details)
          </button>
        </div>
      </div>
    </div>
  )
}
