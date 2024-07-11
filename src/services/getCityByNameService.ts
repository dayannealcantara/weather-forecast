import { CityProps } from '../@types/weather';
import { api } from './api';

export interface CityAPIResponse {
  id: string;
  name: string;
  sys: {
    country?: string;
  };
  coord: {
    lon: number;
    lat: number;
  };
}

export async function getCityByNameService(name: string): Promise<CityProps> {
  const { data } = await api.get<CityAPIResponse>(`/weather?q=${name}`);

  const city = {
    id: data.id,
    name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
    longitude: data.coord.lon,
    latitude: data.coord.lat,
  };

  return city as unknown as CityProps;
}
