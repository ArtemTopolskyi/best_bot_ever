require('dotenv').config()
const { Telegraf } = require('telegraf');

const roll = require('./commands/roll');
const truefalse = require('./commands/truefalse');
const hi = require('./commands/hi');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome!');
});

bot.command('roll', roll);
bot.command('tf', truefalse);
bot.command('hi', hi);

bot.launch();
