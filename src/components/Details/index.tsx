import dropLight from '../../assets/svg/drop_light.svg';
import windLight from '../../assets/svg/wind_light.svg';
import sunDimLight from '../../assets/svg/sun_dim_light.svg';
import cloudRainLight from '../../assets/svg/cloud_rain_light.svg';
import thermometerSimpleLight from '../../assets/svg/thermometer_simple_light.svg';

import { WeatherItem } from '../WeatherItem';

import { Container, Title, WeatherDetails } from './styles';

import { WeatherDetailsResponseProps } from '../../@types/weather';
import { getFormattedTemperature } from '../../utils/getFormattedTemperature';

interface Props {
  detailsToday: WeatherDetailsResponseProps;
  isCelsius: boolean;
}

export function Details({ detailsToday, isCelsius }: Props) {
  return (
    <Container>
      <Title>Detalhes do clima hoje</Title>
      <WeatherDetails>
        <WeatherItem
          icon={thermometerSimpleLight}
          title="Sensação térmica"
          value={getFormattedTemperature(detailsToday.feels_like, isCelsius)}
        />

        <WeatherItem
          icon={cloudRainLight}
          title="Probabilidade de chuva"
          value={`${detailsToday.probability}%`}
        />

        <WeatherItem
          icon={windLight}
          title="Velocidade do vento"
          value={`${detailsToday.wind_speed} Km/h`}
        />

        <WeatherItem
          icon={dropLight}
          title="Umidade do ar"
          value={`${detailsToday.humidity}%`}
        />

        <WeatherItem
          icon={sunDimLight}
          title="Variação da temperatura"
          value={detailsToday.temp_kf.toString()}
        />
      </WeatherDetails>
    </Container>
  );
}
