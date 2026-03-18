import { useState, useEffect } from 'react'

export default function WelcomeScreen({ onCheckin, onCheckout, onQrScan, qrDisabled = false }) {
  const [time, setTime] = useState(new Date())
  const [scanState, setScanState] = useState('idle') // idle | scanning | processing

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const dateStr = time.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
  const weekday = time.toLocaleDateString('en-GB', { weekday: 'long' })

  function handleQrClick() {
    if (scanState !== 'idle') return
    setScanState('scanning')
    setTimeout(() => setScanState('processing'), 1800)
    setTimeout(() => {
      setScanState('idle')
      ;(onQrScan || onCheckin)()
    }, 3000)
  }

  return (
    <div className="welcome-screen">
      <div className="welcome-bg" style={{ backgroundImage: 'url(/bg.jpg)' }} />
      <div className="welcome-overlay" />

      {/* Navbar */}
      <div className="welcome-navbar">
        <div className="welcome-navbar-logo">
          <img src="/logo.svg" alt="logo" />
          <span>Nexus Technologies</span>
        </div>
        <div className="welcome-navbar-center">
          Powered by <strong>ADA</strong>
        </div>
        <div className="welcome-navbar-right">
          <div className="welcome-navbar-date">
            <div>{weekday}</div>
            <div>{dateStr}</div>
          </div>
          <div className="welcome-navbar-div" />
          <div className="welcome-navbar-time">{timeStr}</div>
        </div>
      </div>

      {/* Body */}
      <div className="welcome-body">
        <div className="welcome-left">
          <div className="welcome-tag">Welcome to</div>
          <h1>Nexus<br />Technologies</h1>
          <p>Scan your QR code for faster check-in, or tap Check-in below to get started.</p>
        </div>

        {/* QR scanner */}
        <div className="qr-box-wrapper">
          <div className={`qr-box ${scanState !== 'idle' ? 'qr-box--active' : ''}`} onClick={!qrDisabled ? handleQrClick : undefined} style={{ cursor: qrDisabled ? 'default' : scanState === 'idle' ? 'pointer' : 'default' }}>
            {/* Frosted glass — blurs the bg image then re-applies the same dark overlay so it matches surrounding area */}
            <div aria-hidden="true" style={{ position:'absolute', inset:-24, backgroundImage:'url(/bg.jpg)', backgroundSize:'cover', backgroundPosition:'center', filter:'blur(20px)', zIndex:0 }} />
            <div aria-hidden="true" style={{ position:'absolute', inset:0, background:'rgba(8,18,42,0.82)', zIndex:0 }} />
            <div aria-hidden="true" style={{ position:'absolute', inset:0, background:'rgba(255,255,255,0.14)', zIndex:0 }} />
            <div className="qr-corner tl" />
            <div className="qr-corner tr" />
            <div className="qr-corner bl" />
            <div className="qr-corner br" />

            {/* Scanning line */}
            {scanState === 'scanning' && <div className="qr-scan-line" />}

            <div className="qr-inner">
              {scanState === 'idle' && (
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="10" y="10" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="38" y="4" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="44" y="10" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="4" y="38" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="10" y="44" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="38" y="38" width="6" height="6" fill="#4B8EF5"/>
                  <rect x="50" y="38" width="10" height="6" fill="#4B8EF5"/>
                  <rect x="38" y="50" width="10" height="6" fill="#4B8EF5"/>
                  <rect x="54" y="50" width="6" height="10" fill="#4B8EF5"/>
                </svg>
              )}

              {scanState === 'scanning' && (
                <svg width="70" height="70" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="10" y="10" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="38" y="4" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="44" y="10" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="4" y="38" width="22" height="22" rx="2" stroke="#4B8EF5" strokeWidth="3" fill="none"/>
                  <rect x="10" y="44" width="10" height="10" rx="1" fill="#4B8EF5"/>
                  <rect x="38" y="38" width="6" height="6" fill="#4B8EF5"/>
                  <rect x="50" y="38" width="10" height="6" fill="#4B8EF5"/>
                  <rect x="38" y="50" width="10" height="6" fill="#4B8EF5"/>
                  <rect x="54" y="50" width="6" height="10" fill="#4B8EF5"/>
                </svg>
              )}

              {scanState === 'processing' && (
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="qr-spinner">
                  <circle cx="35" cy="35" r="28" stroke="rgba(75,142,245,0.2)" strokeWidth="5" fill="none"/>
                  <circle cx="35" cy="35" r="28" stroke="#4B8EF5" strokeWidth="5" fill="none"
                    strokeDasharray="60 116" strokeLinecap="round"/>
                </svg>
              )}

              <h4>{scanState === 'idle' ? 'Scan here for faster check-in' : 'Reading code...'}</h4>
              <p>{scanState === 'idle' ? 'Open the invitation email sent to you and hold your QR code here.' : 'Please hold still.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — full-width split buttons */}
      <div className="welcome-footer">
        <div className="welcome-btn-group">
          <button className="btn-welcome-out" onClick={onCheckout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform:'scaleX(-1)'}}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Check-out
          </button>
          <button className="btn-welcome-in" onClick={onCheckin}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Check-in without QR code
          </button>
        </div>
      </div>
    </div>
  )
}
