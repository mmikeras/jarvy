import type { ConversationMessage } from './types';

export interface ConversationStore {
  getMessages(): ConversationMessage[];
  append(message: ConversationMessage): void;
  clear(): void;
}

export function createConversationStore(initial: ConversationMessage[] = []): ConversationStore {
  let messages = [...initial];

  return {
    getMessages: () => [...messages],
    append: (message) => {
      messages = [...messages, message];
    },
    clear: () => {
      messages = [];
    },
  };
}
