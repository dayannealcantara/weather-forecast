import { ContainerWeatherItem, Description, Image, Value } from './styles';

interface Props {
  icon: string;
  title: string;
  value: string;
}

export function WeatherItem({ icon, title, value }: Props) {
  return (
    <ContainerWeatherItem>
      <Image src={icon} alt={title} />
      <Description>{title}</Description>
      <Value>{value}</Value>
    </ContainerWeatherItem>
  );
}
