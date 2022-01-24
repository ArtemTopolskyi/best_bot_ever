const roll = (ctx) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const answerEmoji = getRollAnswerEmoji(randomNumber);
  const sender = ctx.from.username;

  const answer = `@${sender} rolls: <b>${randomNumber}</b>${answerEmoji}`;
  
  ctx.replyWithHTML(answer);
}

function getRollAnswerEmoji(number) {
  switch(number) {
    case 1:
      return '😢';
    case 100:
      return '🎉';
    default:
      return '';
  }
}

module.exports = roll;