import { describe, expect, it } from 'vitest';
import { AgentRuntime } from './agentRuntime';
import { ToolRegistry } from './toolRegistry';
import { MockModelProvider } from '../../infrastructure/ai/mockModelProvider';

describe('AgentRuntime', () => {
  it('delegates generation to the configured model provider', async () => {
    const runtime = new AgentRuntime(new MockModelProvider(), new ToolRegistry());

    const result = await runtime.run([
      { role: 'user', content: 'Hello JARVY' },
    ]);

    expect(result.model).toBe('mock');
    expect(result.response).toContain('Hello JARVY');
  });
});
