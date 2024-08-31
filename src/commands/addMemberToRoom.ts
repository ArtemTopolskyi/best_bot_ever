import { makeCommand } from '@/core/makeCommand';
import { getStorage } from '@/db/storage';
import { Command } from '@/typedefs';
import { Context } from 'telegraf';

const handler = async (ctx: Context) => {
  const commandText = String(ctx.text);

  const [roomName, ...members] = commandText.split(' ').slice(1);

  if (!roomName) {
    throw new Error('Room name is required');
  }

  if (!members.length) {
    throw new Error('At least one member is required');
  }

  const storage = getStorage();

  const room = storage.getRoom(roomName);

  if (!room) {
    throw new Error('Room not found');
  }

  members.forEach((member) => {
    storage.addUserToRoom(roomName, member);
  });

  await ctx.reply(`Added ${members.length} members to room ${roomName}`);
};

export const addMemberToRoomCommand: Command = makeCommand({
  name: 'add_member',
  description: 'Adds a  member to a room. Example: "/add_member room_name @member1 @member2"',
  handler,
});
