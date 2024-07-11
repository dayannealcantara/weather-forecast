import { NextDaysItemProps } from '../../@types/weather';
import { getFormattedTemperature } from '../../utils/getFormattedTemperature';

import {
  Container,
  DayTitle,
  NextDaysDetail,
  NextDaysItemWrapper,
  NextDaysTitle,
  TemperatureSpan,
  WeatherIcon,
} from './styles';

type Props = {
  dataNextDays: NextDaysItemProps[];
  isCelsius: boolean;
};

export function NextDays({ dataNextDays, isCelsius }: Props) {
  return (
    <Container>
      <NextDaysTitle>Previsão para os próximos 4 dias</NextDaysTitle>

      <NextDaysDetail>
        {dataNextDays.map((item) => (
          <NextDaysItemWrapper key={item.day}>
            <DayTitle>{item.day}</DayTitle>
            <WeatherIcon src={item.icon} alt={item.weather} />
            <DayTitle>{item.weather}</DayTitle>
            <DayTitle>
              min {getFormattedTemperature(item.min, isCelsius)}{' '}
              <TemperatureSpan>
                {' '}
                max {getFormattedTemperature(item.max, isCelsius)}
              </TemperatureSpan>
            </DayTitle>
          </NextDaysItemWrapper>
        ))}
      </NextDaysDetail>
    </Container>
  );
}
