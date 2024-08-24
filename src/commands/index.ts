import { hiCommand } from '@/commands/hi';
import { mentionCommand } from '@/commands/mention';
import { Command } from '@/typedefs';
import { rollCommand } from '@/commands/roll';
import { tfCommand } from '@/commands/truefalse';

export const commands: Command[] = [
  hiCommand,
  tfCommand,
  rollCommand,
  mentionCommand
];
