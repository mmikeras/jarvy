import type { AssistantState } from '../../domain/assistant/types';

interface AssistantCoreProps {
  state: AssistantState;
}

export function AssistantCore({ state }: AssistantCoreProps) {
  return (
    <div className={`assistant-core assistant-core--${state}`} aria-label={`JARVY is ${state}`}>
      <div className="assistant-core__ring" />
      <div className="assistant-core__orb">
        <span>{state === 'thinking' ? '...' : 'J'}</span>
      </div>
    </div>
  );
}
