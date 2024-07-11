import { WeatherIconProps } from '../utils/weatherIcons';

interface GetWeatherByCityProps {
  latitude: number;
  longitude: number;
}

export type NextDaysItemProps = {
  day: string;
  icon: string;
  weather: string;
  min: number;
  max: number;
};

export interface WeatherAPIResponseProps {
  city: {
    coord: { lat: number; lon: number };
    id: number;
    name: string;
  };
  list: {
    dt_txt: string;
    pop: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
      temp_kf: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      main: WeatherIconsKeysProps;
      description: string;
    }[];
  }[];
}

export interface WeatherResponseProps {
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
  details: WeatherIconProps;
}

export interface WeatherDetailsResponseProps {
  feels_like: number;
  probability: number;
  wind_speed: number;
  humidity: number;
  temp_kf: number;
}

export interface TodayProps {
  weather: WeatherResponseProps;
  details: WeatherDetailsResponseProps;
}
export interface getWeatherByCityResponseProps {
  city: CityProps;
  today: TodayProps;
  nextDays: NextDaysItemProps[];
}

export interface CityProps {
  name: string;
  longitude: number;
  latitude: number;
}
