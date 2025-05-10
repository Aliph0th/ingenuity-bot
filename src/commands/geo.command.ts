import { Telegraf } from 'telegraf';
import { Command } from './command.class';
import { TIMEOUT } from '../constants';

export class GeoCommand extends Command {
   constructor(protected readonly bot: Telegraf) {
      super(bot);
   }

   handle() {
      this.bot.command('geo', async ctx => {
         await ctx.react('👌');
         setTimeout(async () => {
            await ctx.replyWithLocation(53.67681, 27.200133, {
               reply_parameters: { message_id: ctx.message.message_id }
            });
         }, TIMEOUT);
      });
   }
}
