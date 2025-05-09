import { Telegraf } from 'telegraf';
import { Command } from './command.class';
import { MESSAGES, TIMEOUT } from '../constants';

export class StartCommand extends Command {
   constructor(protected readonly bot: Telegraf) {
      super(bot);
   }

   handle() {
      this.bot.start(async ctx => {
         await ctx.react('👌');
         setTimeout(async () => {
            await ctx.replyWithHTML(MESSAGES.START(ctx.from.first_name));
         }, TIMEOUT);
      });
   }
}
