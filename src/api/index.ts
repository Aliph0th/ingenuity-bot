import axios from 'axios';
import { WeatherResponse } from '../types';

const API = axios.create({
   baseURL: 'https://mars.nasa.gov/rss/api',
   params: {
      feed: 'weather',
      category: 'msl',
      feedtype: 'json'
   }
});

export const getMarsWeather = async () => {
   try {
      const { data } = await API.get<WeatherResponse>('/');
      return data;
   } catch (error) {
      console.error(error);
      return null;
   }
};
