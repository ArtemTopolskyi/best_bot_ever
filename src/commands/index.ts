import { hiCommand } from '@/commands/hi';
import { Command } from '@/typedefs';
import { rollCommand } from '@/commands/roll';
import { tfCommand } from '@/commands/truefalse';
import { createRoomCommand } from '@/commands/createRoom';
import { addMemberToRoomCommand } from '@/commands/addMemberToRoom';
import { pingCommand } from '@/commands/ping';

export const commands: Command[] = [
  hiCommand,
  tfCommand,
  rollCommand,
  pingCommand,
  addMemberToRoomCommand,
  createRoomCommand
];
