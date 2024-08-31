import { makeCommand } from '@/core/makeCommand';
import { Command } from '@/typedefs';

export const hiCommand: Command = makeCommand({
  name: 'hi',
  description: 'Says hi',
  handler: (ctx) => {
    ctx.reply('Hello!');
  },
});
