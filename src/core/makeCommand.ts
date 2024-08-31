import { Context } from 'telegraf';
import { Command } from '@/typedefs';

interface CommandOptions {
  name: string;
  description: string;
  handler: (ctx: Context) => Promise<void> | void;
}

export const makeCommand = ({
  name,
  description,
  handler,
}: CommandOptions): Command => {
  const securedHandler = async (ctx: Context) => {
    try {
      await handler(ctx);
    } catch (err) {
      console.error(err);

      const errorText = err instanceof Error ? err.message : 'something went wrong';

      ctx.reply(`An error occurred while processing your command: ${errorText}`);
    }
  }

  return {
    name,
    description,
    handler: securedHandler,
  };
}
