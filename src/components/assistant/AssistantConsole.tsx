import type { ConversationMessage } from '../../domain/assistant/types';

interface AssistantConsoleProps {
  messages: ConversationMessage[];
  onSubmit: (value: string) => void;
}

export function AssistantConsole({ messages, onSubmit }: AssistantConsoleProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = String(form.get('command') ?? '').trim();
    if (!value) return;
    onSubmit(value);
    event.currentTarget.reset();
  }

  return (
    <section className="assistant-console" aria-label="Assistant console">
      <div className="assistant-console__messages">
        {messages.map((message) => (
          <article key={message.id} className={`message message--${message.role}`}>
            <span className="message__role">{message.role}</span>
            <p>{message.content}</p>
          </article>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="assistant-console__form">
        <input name="command" placeholder="Ask JARVY to do something..." autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
