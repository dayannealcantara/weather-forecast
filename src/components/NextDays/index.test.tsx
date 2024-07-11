import { render, screen } from '@testing-library/react';
import { NextDays } from './';
import { describe, expect, it } from 'vitest';
import { NextDaysItemProps } from '../../@types/weather';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';
import { getFormattedTemperature } from '../../utils/getFormattedTemperature';

const mockDataNextDays: NextDaysItemProps[] = [
  {
    day: 'Segunda-feira',
    icon: 'icon-url-1',
    weather: 'Ensolarado',
    min: 20,
    max: 30,
  },
  {
    day: 'Terça-feira',
    icon: 'icon-url-2',
    weather: 'Nublado',
    min: 18,
    max: 28,
  },
];

describe('NextDays', () => {
  it('should render NextDays component correctly in Celsius', () => {
    render(
      <ThemeProviderWrapper>
        <NextDays dataNextDays={mockDataNextDays} isCelsius={true} />
      </ThemeProviderWrapper>
    );

    expect(
      screen.getByText('Previsão para os próximos 4 dias')
    ).toBeInTheDocument();

    mockDataNextDays.forEach((item) => {
      expect(screen.getByText(item.day)).toBeInTheDocument();
      expect(screen.getByAltText(item.weather)).toBeInTheDocument();
      expect(screen.getByText(item.weather)).toBeInTheDocument();
      expect(screen.getByText(`min ${item.min}ºC`)).toBeInTheDocument();
      expect(screen.getByText(`max ${item.max}ºC`)).toBeInTheDocument();
    });
  });

  it('should render NextDays component correctly in Fahrenheit', () => {
    render(
      <ThemeProviderWrapper>
        <NextDays dataNextDays={mockDataNextDays} isCelsius={false} />
      </ThemeProviderWrapper>
    );

    expect(
      screen.getByText('Previsão para os próximos 4 dias')
    ).toBeInTheDocument();

    mockDataNextDays.forEach((item) => {
      expect(screen.getByText(item.day)).toBeInTheDocument();
      expect(screen.getByAltText(item.weather)).toBeInTheDocument();
      expect(screen.getByText(item.weather)).toBeInTheDocument();

      expect(
        screen.getByText(`min ${getFormattedTemperature(item.min, false)}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`max ${getFormattedTemperature(item.max, false)}`)
      ).toBeInTheDocument();
    });
  });
});
