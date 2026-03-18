import { useState } from 'react'

const ROWS = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['shift','z','x','c','v','b','n','m','backspace'],
  ['123','space','return'],
]

// flex weight for special keys (standard keys = 1)
const FLEX = {
  shift: 1.55,
  backspace: 1.55,
  '123': 1.4,
  space: 5.5,
  return: 1.8,
}

// keys that use the darker "modifier" background
const IS_MODIFIER = { shift: true, backspace: true, '123': true, return: true }

const KEY_LABELS = {
  shift: (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
      <path d="M9 1.5L1.5 9H5.5V13.5H12.5V9H16.5L9 1.5Z"
        stroke="#000" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  backspace: (
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
      <path d="M8 1.5L1.5 7.5L8 13.5H20.5V1.5H8Z"
        stroke="#333" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <path d="M12.5 5L17 10M17 5L12.5 10"
        stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  space: 'space',
  '123': '123',
  return: 'return',
}

export default function VirtualKeyboard({ show }) {
  const [pressed, setPressed] = useState(null)

  function handleKeyDown(e, pressedId, key) {
    e.preventDefault() // never steal focus
    setPressed(pressedId)
    if (key === 'return' && document.activeElement) {
      document.activeElement.blur()
    }
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 272,
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.26s cubic-bezier(0.32, 0.72, 0, 1)',
        background: '#CDD1D6',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '10px 4px 16px',
        boxSizing: 'border-box',
        zIndex: 200,
        // subtle top shadow to look like it's lifting over content
        boxShadow: show ? '0 -4px 20px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      {ROWS.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'flex',
            gap: 6,
            justifyContent: 'center',
            flex: 1,
            padding: '4px 8px',
          }}
        >
          {row.map(key => {
            const isActive = pressed === `${ri}-${key}`
            const isMod = IS_MODIFIER[key]
            return (
              <button
                key={key}
                onMouseDown={e => handleKeyDown(e, `${ri}-${key}`, key)}
                onMouseUp={() => setPressed(null)}
                onMouseLeave={() => setPressed(null)}
                style={{
                  flex: FLEX[key] || 1,
                  height: '100%',
                  borderRadius: 5,
                  border: 'none',
                  background: isActive
                    ? '#9DA2A8'
                    : isMod ? '#ACB0B8' : '#FFFFFF',
                  boxShadow: isActive
                    ? 'none'
                    : '0 1px 0 #8C9099, 0 0 0 0.5px rgba(0,0,0,0.12)',
                  cursor: 'default',
                  fontSize: key === 'space' || key === '123' || key === 'return' ? 14 : 18,
                  fontFamily: '-apple-system, "SF Pro Text", Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.06s, box-shadow 0.06s',
                  outline: 'none',
                  userSelect: 'none',
                  letterSpacing: key === 'space' ? 0.5 : 0,
                  textTransform: key.length === 1 ? 'uppercase' : 'none',
                }}
              >
                {KEY_LABELS[key] !== undefined ? KEY_LABELS[key] : key.toUpperCase()}
              </button>
            )
          })}
        </div>
      ))}

      {/* iOS-style home indicator */}
      <div style={{
        width: 120,
        height: 4,
        borderRadius: 2,
        background: 'rgba(0,0,0,0.18)',
        margin: '2px auto 0',
        flexShrink: 0,
      }} />
    </div>
  )
}
