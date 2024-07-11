import { convertToFahrenheit } from '../convertToFahrenheit';

export const getFormattedTemperature = (
  temp: number,
  isCelsius: boolean
): string => {
  return isCelsius ? `${temp}ºC` : `${convertToFahrenheit(temp)}ºF`;
};
