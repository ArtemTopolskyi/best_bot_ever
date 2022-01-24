const truefalse = (ctx) => {
  const randomValue = Math.random() < 0.5;
  const answer = randomValue ? 'True✔️' : 'False❌';
  const sender = ctx.from.username;

  ctx.replyWithHTML(`@${sender} rolls: <b>${answer}</b>`);
}

module.exports = truefalse;
