/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';
import { mapNextDays } from '.';
import dayjs from 'dayjs';
import { weatherIcons } from '../weatherIcons';
import { WeatherAPIResponseProps } from '../../@types/weather';

const mockData: WeatherAPIResponseProps = {
  city: {
    coord: { lat: 0, lon: 0 },
    id: 0,
    name: 'Mock City',
  },
  list: [
    {
      dt: 1720656000,
      main: {
        temp: 26.67,
        feels_like: 28.11,
        temp_min: 26.06,
        temp_max: 26.67,
        pressure: 1014,
        humidity: 67,
        temp_kf: 0.61,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      wind: {
        speed: 2.45,
        deg: 111,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-07-11 00:00:00',
    },
    {
      dt: 1720666800,
      main: {
        temp: 23.23,
        feels_like: 23.59,
        temp_min: 21.36,
        temp_max: 23.23,
        pressure: 1015,
        humidity: 76,
        temp_kf: 1.87,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      wind: {
        speed: 1.45,
        deg: 147,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-07-11 03:00:00',
    },
  ],
};

describe('mapNextDays', () => {
  it('should map WeatherAPIResponseProps to NextDaysItemProps', () => {
    const result = mapNextDays(mockData);

    const expected = [
      {
        day: dayjs(new Date('2024-07-11 00:00:00')).format('ddd'),
        min: 26,
        max: 27,
        weather: 'nublado',
        icon: weatherIcons['Clouds'].icon_day,
      },
    ];

    expect(result).toEqual(expected);
  });

  it('should handle empty list in WeatherAPIResponseProps', () => {
    const mockData: any = {
      list: [],
    };

    const result = mapNextDays(mockData);
    expect(result).toEqual([]);
  });
});
