import { useState } from 'react';
import { AssistantConsole } from '../components/assistant/AssistantConsole';
import { AssistantCore } from '../components/assistant/AssistantCore';
import { AssistantStatus } from '../components/assistant/AssistantStatus';
import { transition } from '../domain/assistant/stateMachine';
import type { AssistantState, ConversationMessage } from '../domain/assistant/types';

export function App() {
  const [state, setState] = useState<AssistantState>('idle');
  const [messages, setMessages] = useState<ConversationMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Systems online. JARVY foundation is ready.',
      createdAt: Date.now(),
    },
  ]);

  function handleCommand(command: string) {
    setState((current) => transition(current, 'thinking'));
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: 'user', content: command, createdAt: Date.now() },
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Command received. Agent runtime will process this in M2.',
        createdAt: Date.now(),
      },
    ]);
    window.setTimeout(() => setState('idle'), 500);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">AI AGENT SYSTEM</p>
          <h1>J.A.R.V.Y.</h1>
        </div>
        <AssistantStatus state={state} />
      </header>

      <section className="workspace">
        <div className="assistant-panel">
          <AssistantCore state={state} />
          <p className="assistant-panel__caption">Personal AI Desktop Assistant</p>
        </div>
        <AssistantConsole messages={messages} onSubmit={handleCommand} />
      </section>
    </main>
  );
}
