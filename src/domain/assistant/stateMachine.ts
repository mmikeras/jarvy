import type { AssistantState } from './types';

const transitions: Record<AssistantState, AssistantState[]> = {
  idle: ['listening', 'thinking'],
  listening: ['thinking', 'idle', 'error'],
  thinking: ['speaking', 'idle', 'error'],
  speaking: ['idle', 'listening', 'error'],
  error: ['idle'],
};

export function canTransition(from: AssistantState, to: AssistantState) {
  return transitions[from].includes(to);
}

export function transition(from: AssistantState, to: AssistantState): AssistantState {
  if (!canTransition(from, to)) {
    throw new Error(`Invalid assistant transition: ${from} -> ${to}`);
  }
  return to;
}
