import { useState, useEffect } from 'react'

export default function TabletFrame({ children }) {
  const [scale, setScale] = useState(1)

  // Screen is 1024×768; bezels: 18px sides, 26px top/bottom
  const frameW = 1024 + 18 * 2   // 1060
  const frameH = 768  + 26 * 2   // 820

  useEffect(() => {
    function calcScale() {
      const sx = (window.innerWidth  * 0.97) / frameW
      const sy = (window.innerHeight * 0.97) / frameH
      setScale(Math.min(sx, sy))
    }
    calcScale()
    window.addEventListener('resize', calcScale)
    return () => window.removeEventListener('resize', calcScale)
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#0d0d0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        width: frameW,
        height: frameH,
        flexShrink: 0,
      }}>
        {/* Tablet bezel */}
        <div style={{
          width: frameW,
          height: frameH,
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #141414 100%)',
          borderRadius: 22,
          boxShadow: '0 0 0 1px #3a3a3a, 0 24px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Front camera — top bezel center */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#2c2c2c',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6), 0 0 0 1px #383838',
          }} />

          {/* Power button — right edge */}
          <div style={{
            position: 'absolute',
            right: -2,
            top: '38%',
            width: 3,
            height: 32,
            background: '#252525',
            borderRadius: '0 2px 2px 0',
            boxShadow: '1px 0 3px rgba(0,0,0,0.4)',
          }} />

          {/* Volume up — right edge */}
          <div style={{
            position: 'absolute',
            right: -2,
            top: '54%',
            width: 3,
            height: 20,
            background: '#252525',
            borderRadius: '0 2px 2px 0',
            boxShadow: '1px 0 3px rgba(0,0,0,0.4)',
          }} />

          {/* Volume down — right edge */}
          <div style={{
            position: 'absolute',
            right: -2,
            top: '63%',
            width: 3,
            height: 20,
            background: '#252525',
            borderRadius: '0 2px 2px 0',
            boxShadow: '1px 0 3px rgba(0,0,0,0.4)',
          }} />

          {/* Screen aperture */}
          <div
            style={{
              width: 1024,
              height: 768,
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)',
              position: 'relative',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
