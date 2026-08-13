export type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'error';

export interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: number;
}
