import type { AgentMessage, ModelProvider } from '../../domain/agent/types';
import { ToolRegistry } from './toolRegistry';

export interface AgentRunResult {
  response: string;
  model: string;
  toolCalls: string[];
}

export class AgentRuntime {
  constructor(
    private readonly model: ModelProvider,
    private readonly tools: ToolRegistry,
  ) {}

  async run(messages: AgentMessage[]): Promise<AgentRunResult> {
    const response = await this.model.generate({ messages });

    return {
      response: response.content,
      model: response.model,
      toolCalls: [],
    };
  }

  getToolRegistry(): ToolRegistry {
    return this.tools;
  }
}
