import { transition } from '../domain/assistant/stateMachine';
import type { AssistantState } from '../domain/assistant/types';

export interface InteractionController {
  submit(command: string): Promise<{ state: AssistantState; response: string }>;
}

export function createInteractionController(): InteractionController {
  return {
    async submit(command) {
      const normalized = command.trim();
      if (!normalized) {
        return { state: 'idle', response: 'Please provide a command.' };
      }

      // M2 will replace this deterministic response with the real agent runtime.
      const state = transition('idle', 'thinking');
      await Promise.resolve();

      return {
        state: transition(state, 'speaking'),
        response: `Command received: “${normalized}”. Agent runtime is next.`,
      };
    },
  };
}
