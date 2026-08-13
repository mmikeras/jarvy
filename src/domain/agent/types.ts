export type ToolPermission = 'safe' | 'confirm' | 'blocked';

export interface AgentMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
}

export interface ModelRequest {
  messages: AgentMessage[];
  temperature?: number;
  maxTokens?: number;
}

export interface ModelResponse {
  content: string;
  model: string;
  usage?: { inputTokens: number; outputTokens: number };
}

export interface ModelProvider {
  readonly id: string;
  generate(request: ModelRequest): Promise<ModelResponse>;
}

export interface AgentTool<Input = unknown, Output = unknown> {
  readonly name: string;
  readonly description: string;
  readonly permission: ToolPermission;
  execute(input: Input): Promise<Output>;
}
