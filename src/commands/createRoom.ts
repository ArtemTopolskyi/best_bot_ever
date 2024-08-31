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

  const room = storage.addRoom(roomName);

  await ctx.reply(`Room ${room.name} created`);
};

export const createRoomCommand: Command = makeCommand({
  name: 'create_room',
  description: 'Creates a room. Example: "/create_room room_name"',
  handler,
});
