import { TodayProps } from '../../@types/weather';
import { WeatherIconsKeysProps, weatherIcons } from '../weatherIcons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapTodayData(data: any): TodayProps {
  const { main, weather, wind, pop } = data.list[0];

  return {
    weather: {
      temp: Math.ceil(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      description: weather[0]?.description ?? '',
      details:
        weatherIcons[(weather[0]?.main as WeatherIconsKeysProps) ?? 'Clouds'],
    },
    details: {
      feels_like: Math.floor(main.feels_like),
      probability: pop * 100,
      wind_speed: wind.speed,
      humidity: main.humidity,
      temp_kf: Math.floor(main.temp_kf),
    },
  };
}
