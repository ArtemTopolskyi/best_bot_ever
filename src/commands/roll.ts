import { makeCommand } from '@/core/makeCommand';
import { Context } from 'telegraf';

const handler = (ctx: Context) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const answerEmoji = getRollAnswerEmoji(randomNumber);
  const sender = ctx.from?.username;

  const answer = `@${sender} rolls: <b>${randomNumber}</b>${answerEmoji}`;
  
  ctx.replyWithHTML(answer);
}

export const rollCommand = makeCommand({
  name: 'roll',
  description: 'Rolls a number from 1 to 100',
  handler,
})

function getRollAnswerEmoji(generatedNumber: number) {
  switch(generatedNumber) {
    case 1:
      return '😢';
    case 100:
      return '🎉';
    default:
      return '';
  }
}
