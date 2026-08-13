import { useState } from 'react'

type AssistantStatus = 'idle' | 'listening' | 'thinking' | 'speaking'

const statusLabel: Record<AssistantStatus, string> = {
  idle: 'Standby',
  listening: 'Listening',
  thinking: 'Thinking',
  speaking: 'Speaking',
}

export function App() {
  const [status, setStatus] = useState<AssistantStatus>('idle')
  const [message, setMessage] = useState('System online. Awaiting your first command.')

  function simulateInteraction() {
    setStatus('listening')
    setMessage('Listening for an instruction...')

    window.setTimeout(() => {
      setStatus('thinking')
      setMessage('Processing intent and preparing a response...')
    }, 700)

    window.setTimeout(() => {
      setStatus('speaking')
      setMessage('Foundation complete. AI runtime is the next milestone.')
    }, 1500)

    window.setTimeout(() => setStatus('idle'), 2400)
  }

  return (
    <main className="shell">
      <section className="assistant-card" aria-label="J.A.R.V.Y. assistant">
        <div className="topbar">
          <div>
            <p className="eyebrow">AI ENGINEERING LAB</p>
            <h1>J.A.R.V.Y.</h1>
          </div>
          <span className={`status status-${status}`}>
            <span className="status-dot" />
            {statusLabel[status]}
          </span>
        </div>

        <div className="core" aria-hidden="true">
          <div className="core-ring ring-outer" />
          <div className="core-ring ring-inner" />
          <div className="core-orb" />
        </div>

        <div className="console">
          <span className="console-label">SYSTEM MESSAGE</span>
          <p>{message}</p>
        </div>

        <button className="command-button" onClick={simulateInteraction} disabled={status !== 'idle'}>
          {status === 'idle' ? 'Initialize Interaction' : 'Processing...'}
        </button>

        <footer>
          <span>v0.1.0</span>
          <span>Foundation / M0</span>
          <span>AI-first engineering portfolio</span>
        </footer>
      </section>
    </main>
  )
}
