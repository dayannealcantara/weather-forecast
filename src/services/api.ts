import axios from 'axios';

const { VITE_WEATHER_APP_API, VITE_WEATHER_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_WEATHER_BASE_URL,
  params: {
    lang: 'pt_br',
    units: 'metric',
    appid: VITE_WEATHER_APP_API,
  },
});
