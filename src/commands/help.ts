import { Command } from '@/typedefs';
import { Context } from 'telegraf';

export const helpHandler = (commands: Command[]) => (ctx: Context) => {
  const helpMessage = commands.map(
    (command) => `/${command.name} - ${command.description}`
  ).join('\n');

  ctx.reply(helpMessage);
};
