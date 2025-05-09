import { Sol } from '../types';
import { formatSeason } from '../utils';

export const ERRORS = {
   INVALID_CONFIG: 'Invalid .env file',
   NO_KEY_FOUND: 'Key was not found in config',
   NO_WEATHER_DATA:
      "Sorry, the signal is lost in the space as just like the data I've just sent😓"
};
export const MESSAGES = {
   START: (name: string) =>
      `Hello, ${name} 👋. I'm Ingenuity, you can just call me Ginny\nI made first flight on the Mars! I completed 72 flights but then... my rotor blades broke down and since then I've just been a weather station 😅\n\nSo.. you can ask me for the /weather on the Mars but... be patient because I will answer in 6 minutes due to distance between us`,
   WEATHER: (sol: Sol) =>
      `<b>SOL ${sol.sol} (${new Date(sol.terrestrial_date).toLocaleDateString('ru')})</b>\n\n<i>Min. temperature (ground)</i>: ${sol.min_temp}° (${sol.min_gts_temp}°)\n<i>Max. temperature (ground)</i>: ${sol.max_temp}° (${sol.max_gts_temp}°)\n<i>Season</i>: ${formatSeason(sol.season)}\n<i>Pressure</i>: ${sol.pressure} Pa (${sol.pressure_string})\n<i>Absolute humidity</i>: ${sol.abs_humidity}\n<i>Wind speed (direction)</i>: ${sol.wind_speed} (${sol.wind_direction})\n<i>Atmosphere opacity</i>: ${sol.atmo_opacity}\n<i>Sunrise</i>: ${sol.sunrise}\n<i>Sunset</i>: ${sol.sunset}\n<i>UV radiation intensity</i>: ${sol.local_uv_irradiance_index}\n<i>Solar longitude</i>: ${sol.ls}`
};

export const TIMEOUT = 1 * 1000;
