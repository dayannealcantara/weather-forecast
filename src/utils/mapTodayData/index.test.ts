import { describe, expect, it } from 'vitest';
import { mapTodayData } from '.';

describe('mapTodayData', () => {
  it('should map WeatherAPIResponseProps to TodayProps', () => {
    const mockData = {
      list: [
        {
          main: {
            temp: 25,
            temp_min: 20,
            temp_max: 30,
            feels_like: 24,
            humidity: 50,
            temp_kf: 2,
          },
          weather: [{ main: 'Clear', description: 'Clear sky' }],
          wind: { speed: 10 },
          pop: 0.1,
        },
      ],
    };

    const result = mapTodayData(mockData);
    expect(result).toEqual({
      weather: {
        temp: 25,
        temp_min: 20,
        temp_max: 30,
        description: 'Clear sky',
        details: {
          bg_day: '/src/assets/img/bg_clear_day.png',
          bg_night: '/src/assets/img/bg_clear_night.png',
          icon_day: '/src/assets/svg/clear_day.svg',
          icon_night: '/src/assets/svg/clear_night.svg',
          name: 'Limpo',
        },
      },
      details: {
        feels_like: 24,
        probability: 10,
        wind_speed: 10,
        humidity: 50,
        temp_kf: 2,
      },
    });
  });

  it('should handle missing weather data', () => {
    const mockData = {
      list: [
        {
          main: {
            temp: 25,
            temp_min: 20,
            temp_max: 30,
            feels_like: 24,
            humidity: 50,
            temp_kf: 2,
          },
          weather: [],
          wind: { speed: 10 },
          pop: 0.1,
        },
      ],
    };

    const result = mapTodayData(mockData);
    expect(result).toEqual({
      weather: {
        temp: 25,
        temp_min: 20,
        temp_max: 30,
        description: '',
        details: {
          bg_day: '/src/assets/img/bg_cloudy_day.png',
          bg_night: '/src/assets/img/bg_cloudy_night.png',
          icon_day: '/src/assets/svg/cloudy_day.svg',
          icon_night: '/src/assets/svg/cloudy_night.svg',
          name: 'Nuvens',
        },
      },
      details: {
        feels_like: 24,
        probability: 10,
        wind_speed: 10,
        humidity: 50,
        temp_kf: 2,
      },
    });
  });
});
