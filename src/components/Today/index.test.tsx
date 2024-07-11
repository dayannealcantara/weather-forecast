import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Today } from './';
import { CityProps, WeatherResponseProps } from '../../@types/weather';

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { convertToFahrenheit } from '../../utils/convertToFahrenheit';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

const mockWeather: WeatherResponseProps = {
  temp: 25,
  temp_min: 20,
  temp_max: 30,
  description: 'Sunny',
  details: {
    name: 'Limpo',
    bg_day: 'mockBgDay',
    bg_night: 'mockBgNight',
    icon_day: 'mockIconDay',
    icon_night: 'mockIconNight',
  },
};

const mockCity: CityProps = {
  name: 'New York, US',
  longitude: -74.006,
  latitude: 40.7128,
};

const mockToggleTemperatureUnit = vi.fn();
const mockOnSearchValue = vi.fn();

describe('Today Component', () => {
  beforeEach(() => {
    render(
      <ThemeProviderWrapper>
        <Today
          city={mockCity.name}
          weather={mockWeather}
          isCelsius={true}
          toggleTemperatureUnit={mockToggleTemperatureUnit}
          onSearchValue={mockOnSearchValue}
        />
      </ThemeProviderWrapper>
    );
  });

  it('should render correctly with provided props', () => {
    expect(screen.getByText(mockCity.name)).toBeInTheDocument();
    expect(screen.getByText(/Sunny/i)).toBeInTheDocument();
    expect(screen.getByText('25ºC')).toBeInTheDocument();
    expect(screen.getByAltText('Tempo')).toBeInTheDocument();
  });

  it('should toggle temperature unit on button click', () => {
    const button = screen.getByText('Alterar para Fahrenheit');
    fireEvent.click(button);
    expect(mockToggleTemperatureUnit).toHaveBeenCalled();
  });

  it('should display temperatures in Fahrenheit when isCelsius is false', () => {
    render(
      <ThemeProviderWrapper>
        <Today
          city={mockCity.name}
          weather={mockWeather}
          isCelsius={false}
          toggleTemperatureUnit={mockToggleTemperatureUnit}
          onSearchValue={mockOnSearchValue}
        />
      </ThemeProviderWrapper>
    );

    const tempInFahrenheit = convertToFahrenheit(mockWeather.temp);
    expect(screen.getByText(`${tempInFahrenheit}ºF`)).toBeInTheDocument();
  });
});
