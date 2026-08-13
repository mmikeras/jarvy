import type { ModelProvider, ModelRequest, ModelResponse } from '../../domain/agent/types';

export class MockModelProvider implements ModelProvider {
  readonly id = 'mock';

  async generate(request: ModelRequest): Promise<ModelResponse> {
    const last = [...request.messages].reverse().find((message) => message.role === 'user');

    return {
      model: this.id,
      content: last
        ? `Mock runtime received: ${last.content}`
        : 'Mock runtime is ready.',
    };
  }
}
