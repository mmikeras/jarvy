import type { AssistantState } from '../../domain/assistant/types';

const labels: Record<AssistantState, string> = {
  idle: 'Ready',
  listening: 'Listening',
  thinking: 'Thinking',
  speaking: 'Speaking',
  error: 'Attention required',
};

export function AssistantStatus({ state }: { state: AssistantState }) {
  return (
    <div className="assistant-status" role="status" aria-live="polite">
      <span className="assistant-status__dot" />
      <span>{labels[state]}</span>
    </div>
  );
}
