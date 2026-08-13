import { describe, expect, it } from 'vitest';
import { createInteractionController } from './interactionController';

describe('interaction controller', () => {
  it('rejects empty commands without invoking the agent runtime', async () => {
    const result = await createInteractionController().submit('   ');

    expect(result.state).toBe('idle');
    expect(result.response).toBe('Please provide a command.');
  });

  it('returns a speaking response for a valid command', async () => {
    const result = await createInteractionController().submit('open dashboard');

    expect(result.state).toBe('speaking');
    expect(result.response).toContain('open dashboard');
  });
});
