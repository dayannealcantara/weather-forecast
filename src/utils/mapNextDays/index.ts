import dayjs from 'dayjs';
import {
  NextDaysItemProps,
  WeatherAPIResponseProps,
} from '../../@types/weather';
import { WeatherIconsKeysProps, weatherIcons } from '../weatherIcons';
import { getNextDays } from '../getNextDays';

export function mapNextDays(
  data: WeatherAPIResponseProps
): NextDaysItemProps[] {
  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: NextDaysItemProps[] = [];

  data?.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM');

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status = item.weather[0].main as WeatherIconsKeysProps;
      const details = weatherIcons[status ?? 'Clouds'];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: Math.floor(item.main.temp_min),
        max: Math.ceil(item.main.temp_max),
        weather: item.weather[0].description,
        icon: details.icon_day,
      });
    }
  });

  return nextDays;
}
