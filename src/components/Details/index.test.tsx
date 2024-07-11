import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Details } from '.';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

const mockDetailsToday = {
  feels_like: 20,
  probability: 50,
  wind_speed: 10,
  humidity: 70,
  temp_kf: 5,
};

describe('Details component', () => {
  it('should render Details component correctly in Celsius', () => {
    render(
      <ThemeProviderWrapper>
        <Details detailsToday={mockDetailsToday} isCelsius={true} />
      </ThemeProviderWrapper>
    );

    expect(screen.getByText('Detalhes do clima hoje')).toBeInTheDocument();
    expect(screen.getByText('Sensação térmica')).toBeInTheDocument();
    expect(screen.getByText('20ºC')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('10 Km/h')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should render Details component correctly in Fahrenheit', () => {
    render(
      <ThemeProviderWrapper>
        <Details detailsToday={mockDetailsToday} isCelsius={false} />
      </ThemeProviderWrapper>
    );

    expect(screen.getByText('Detalhes do clima hoje')).toBeInTheDocument();
    expect(screen.getByText('Sensação térmica')).toBeInTheDocument();
    expect(screen.getByText('68ºF')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('10 Km/h')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
