import { makeCommand } from '@/core/makeCommand';
import { Context } from 'telegraf';

const handler = (ctx: Context) => {
  const randomValue = Math.random() < 0.5;
  const answer = randomValue ? 'True ✅' : 'False ❌';
  const sender = ctx.from?.username;

  ctx.replyWithHTML(`@${sender} rolls: <b>${answer}</b>`);
}

export const tfCommand = makeCommand({
  name: 'tf',
  description: 'Rolls a true or false',
  handler,
});
