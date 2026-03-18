import { useState, useEffect } from 'react'

export default function NavBar({ title = '' }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const dateStr = time.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
  const weekday = time.toLocaleDateString('en-GB', { weekday: 'long' })
  const timeStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.svg" alt="logo" />
        <span>Nexus Technologies</span>
      </div>
      {title && <div className="navbar-title">{title}</div>}
      <div className="navbar-right">
        <div className="navbar-date">
          <div>{dateStr}</div>
          <div>{weekday}</div>
        </div>
        <div className="navbar-divider" />
        <div className="navbar-time">{timeStr}</div>
      </div>
    </nav>
  )
}
