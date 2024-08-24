import { Context } from 'telegraf';

export type Command = {
  name: string;
  description?: string;
  handler: (ctx: Context) => Promise<void> | void;
};
