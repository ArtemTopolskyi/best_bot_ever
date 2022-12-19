const hi = (ctx) => {
  const sender = ctx.from.username;

  ctx.replyWithHTML(`Hello, @${sender}!`);
}

module.exports = hi;
