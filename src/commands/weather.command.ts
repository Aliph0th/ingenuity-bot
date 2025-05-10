import { Telegraf } from 'telegraf';
import { Command } from './command.class';
import { ERRORS, MESSAGES, TIMEOUT } from '../constants';
import { getMarsWeather } from '../api';

export class WeatherCommand extends Command {
   constructor(protected readonly bot: Telegraf) {
      super(bot);
   }

   handle() {
      this.bot.command('weather', async ctx => {
         await ctx.react('👌');
         const weather = await getMarsWeather();
         setTimeout(async () => {
            if (!weather || !weather?.soles?.length) {
               await ctx.reply(ERRORS.NO_WEATHER_DATA);
               return;
            }
            const sol = weather.soles[0];
            await ctx.replyWithHTML(MESSAGES.WEATHER(sol), {
               reply_parameters: { message_id: ctx.message.message_id }
            });
         }, TIMEOUT);
      });
   }
}
