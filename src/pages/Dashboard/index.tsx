import { Today } from '../../components/Today';
import { Details } from '../../components/Details';
import { NextDays } from '../../components/NextDays';

import { Container, WrapperRight } from './styles';
import { useWeather } from '../../hooks/useWeather';
import LoadingBackdrop from '../../components/LoadingBackdrop';

export function Dashboard() {
  const { data, city, isCelsius, setCity, toggleTemperatureUnit, isLoading } =
    useWeather();

  if (!data || isLoading) {
    return <LoadingBackdrop />;
  }

  return (
    <Container>
      <Today
        city={city.name}
        onSearchValue={setCity}
        weather={data.today.weather}
        isCelsius={isCelsius}
        toggleTemperatureUnit={toggleTemperatureUnit}
      />
      <WrapperRight>
        <Details detailsToday={data.today.details} isCelsius={isCelsius} />
        <NextDays dataNextDays={data.nextDays} isCelsius={isCelsius} />
      </WrapperRight>
    </Container>
  );
}
