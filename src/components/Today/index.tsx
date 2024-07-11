import dayjs from 'dayjs';

import { SelectCity } from '../SelectCity';
import { isDayTime } from '../../utils/isDayTime';
import { Logo } from '../Logo';

import {
  BtnTemperature,
  LogoWrapper,
  TemperatureDetails,
  TodayDetails,
  TodayDetailsFooter,
  TodayDetailsHeader,
  TodayForm,
  TodayWrapper,
} from './styles';

import { CityProps, WeatherResponseProps } from '../../@types/weather';
import { getFormattedTemperature } from '../../utils/getFormattedTemperature';

type PropsToday = {
  city: string;
  weather: WeatherResponseProps;
  onSearchValue: (value: CityProps) => void;
  isCelsius: boolean;
  toggleTemperatureUnit: () => void;
};

export function Today({
  city,
  onSearchValue,
  weather,
  isCelsius,
  toggleTemperatureUnit,
}: PropsToday) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY');
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <TodayWrapper>
      <TodayForm>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SelectCity onSelect={onSearchValue} />
      </TodayForm>

      <TodayDetails style={{ backgroundImage: `url(${bgImg})` }}>
        <TodayDetailsHeader>
          <h3>{city}</h3>
          <p>{today}</p>
        </TodayDetailsHeader>

        <TodayDetailsFooter>
          <h1>{getFormattedTemperature(weather?.temp, isCelsius)}</h1>
          <img src={icon} alt="Tempo" />
        </TodayDetailsFooter>

        <TemperatureDetails>
          {getFormattedTemperature(weather?.temp_min, isCelsius)} /{' '}
          {getFormattedTemperature(weather?.temp_max, isCelsius)}{' '}
          <span>&#8226;</span> {weather?.description}
        </TemperatureDetails>
        <BtnTemperature onClick={toggleTemperatureUnit}>
          Alterar para {isCelsius ? 'Fahrenheit' : 'Celsius'}
        </BtnTemperature>
      </TodayDetails>
    </TodayWrapper>
  );
}
