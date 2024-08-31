import { commands } from '@/commands';
import { helpHandler } from '@/commands/help';
import { getStorage } from '@/db/storage';
import { Telegraf } from 'telegraf';

const startBot = async () => {
  if (!process.env.BOT_TOKEN) {
    throw new Error('BOT_TOKEN is required');
  }

  const bot = new Telegraf(process.env.BOT_TOKEN || '')

  commands.forEach((command) => {
    bot.command(command.name, command.handler);
  })

  bot.command('help', helpHandler(commands));

  console.log(JSON.stringify(getStorage().getRooms()));

  bot.launch()

  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
};

startBot();

