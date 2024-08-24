import { Context } from 'telegraf';
import { Command } from '@/typedefs';

interface CommandOptions {
  name: string;
  description?: string;
  handler: (ctx: Context) => Promise<void> | void;
}

export const makeCommand = ({
  name,
  handler,
}: CommandOptions): Command => {
  const securedHandler = (ctx: Context) => {
    try {
      handler(ctx);
    } catch (err) {
      console.error(err);

      ctx.reply('An error occurred while processing your command');
    }
  }

  return {
    name,
    handler: securedHandler,
  };
}
