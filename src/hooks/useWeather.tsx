import { useState, useEffect, useCallback } from 'react';
import { CityProps, getWeatherByCityResponseProps } from '../@types/weather';

import { getWeatherByCity } from '../services/weatherService';

const initialCity = {
  id: 3397147,
  name: 'Barbalha',
  longitude: -39.3042,
  latitude: -7.3111,
};
export const useWeather = () => {
  const [data, setData] = useState<getWeatherByCityResponseProps | null>(null);
  const [city, setCity] = useState<CityProps>(initialCity);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleTemperatureUnit = useCallback(
    () => setIsCelsius((prev) => !prev),
    []
  );

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocalização não é suportada pelo navegador.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => setError('Erro ao obter localização.')
    );
  }, []);

  const fetchWeatherData = useCallback(
    async (latitude: number, longitude: number) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getWeatherByCity({ latitude, longitude });
        setData(response);
      } catch {
        setError('Erro ao buscar dados do clima.');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (location) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location, fetchWeatherData]);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city.latitude, city.longitude);
    }
  }, [city, fetchWeatherData]);

  return {
    data,
    city: data?.city || city,
    setCity,
    isCelsius,
    toggleTemperatureUnit,
    isLoading,
    error,
  };
};
