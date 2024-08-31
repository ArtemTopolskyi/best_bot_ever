import { makeCommand } from '@/core/makeCommand';
import { getStorage } from '@/db/storage';
import { Command } from '@/typedefs';
import { Context } from 'telegraf';

const handler = async (ctx: Context) => {
  const commandText = String(ctx.text);

  const params = commandText.split(' ').slice(1);

  const roomName = params[0];

  if (!roomName) {
    throw new Error('Room name is required');
  }

  const storage = getStorage();

  const room = storage.getRoom(roomName);

  if (!room) {
    throw new Error('Room not found');
  }

  if (!room.members.length) {
    throw new Error('Room is empty');
  }

  const membersPingString = room.members.join(' ');

  await ctx.reply(membersPingString);
};

export const pingCommand: Command = makeCommand({
  name: 'ping',
  description: 'Pings all members in a room. Example: "/ping room_name"',
  handler,
});
