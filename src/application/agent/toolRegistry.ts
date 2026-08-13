import type { AgentTool } from '../../domain/agent/types';

export class ToolRegistry {
  private readonly tools = new Map<string, AgentTool>();

  register(tool: AgentTool): void {
    if (this.tools.has(tool.name)) {
      throw new Error(`Tool already registered: ${tool.name}`);
    }
    this.tools.set(tool.name, tool);
  }

  list(): AgentTool[] {
    return [...this.tools.values()];
  }

  get(name: string): AgentTool | undefined {
    return this.tools.get(name);
  }

  async execute(name: string, input: unknown): Promise<unknown> {
    const tool = this.tools.get(name);
    if (!tool) throw new Error(`Unknown tool: ${name}`);
    if (tool.permission === 'blocked') throw new Error(`Tool blocked: ${name}`);
    return tool.execute(input);
  }
}
