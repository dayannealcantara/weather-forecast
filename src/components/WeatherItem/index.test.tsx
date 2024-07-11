import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WeatherItem } from './';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

describe('WeatherItem Component', () => {
  const mockProps = {
    icon: 'test-icon.png',
    title: 'Temperature',
    value: '25ºC',
  };

  it('should render correctly with provided props', () => {
    render(
      <ThemeProviderWrapper>
        <WeatherItem {...mockProps} />{' '}
      </ThemeProviderWrapper>
    );

    const imgElement = screen.getByAltText(mockProps.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.icon);

    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    const valueElement = screen.getByText(mockProps.value);
    expect(valueElement).toBeInTheDocument();
  });
});
