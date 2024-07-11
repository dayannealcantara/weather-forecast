import { api } from './api';

import {
  CityProps,
  GetWeatherByCityProps,
  WeatherAPIResponseProps,
  getWeatherByCityResponseProps,
} from '../@types/weather';
import { mapTodayData } from '../utils/mapTodayData';
import { mapNextDays } from '../utils/mapNextDays';

export async function getWeatherByCity({
  latitude,
  longitude,
}: GetWeatherByCityProps): Promise<getWeatherByCityResponseProps> {
  try {
    const { data } = await api.get<WeatherAPIResponseProps>(
      `/forecast?lat=${latitude}&lon=${longitude}`
    );

    console.log('resposte', data);
    const today = mapTodayData(data);
    const nextDays = mapNextDays(data);
    const city = {
      name: data.city.name,
      longitude: data.city.coord.lon,
      latitude: data.city.coord.lat,
    } as unknown as CityProps;

    return { today, nextDays, city };
  } catch (error) {
    console.error('Erro ao obter dados do clima:', error);
    throw error;
  }
}
