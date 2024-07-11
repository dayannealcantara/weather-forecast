import { useEffect, useRef, useState } from 'react';
import { Input } from '../Input';
import { getCityByNameService } from '../../services/getCityByNameService';
import {
  SelectButton,
  SelectButtonText,
  SelectList,
  SelectWrapper,
} from './styles';
import { CityProps } from '../../@types/weather';

export interface Props {
  onSelect: (item: CityProps) => void;
}

export function SelectCity({ onSelect }: Props) {
  const [city, setCity] = useState<CityProps>();
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function getCities(name: string) {
    setIsLoading(true);
    try {
      const response = await getCityByNameService(name);
      setIsListVisible(true);
      setCity(response);
    } catch (error) {
      setIsListVisible(true);
      setCity(undefined);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      setCity(undefined);
      setIsListVisible(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => getCities(search), 500);
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [search]);

  const handleSelect = (item: CityProps) => {
    onSelect(item);
    setIsListVisible(false);
    setSearch('');
  };

  return (
    <SelectWrapper>
      <Input
        isLoading={isLoading}
        placeholder="Buscar local"
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search city"
        value={search}
      />

      {isListVisible && (
        <SelectList>
          {city ? (
            <SelectButton
              type="button"
              key={city.id}
              onClick={() => handleSelect(city)}
              aria-label={`Select ${city.name}`}
            >
              <SelectButtonText>{city.name}</SelectButtonText>
            </SelectButton>
          ) : (
            <SelectButton>
              <SelectButtonText>Nenhuma cidade encontrada</SelectButtonText>
            </SelectButton>
          )}
        </SelectList>
      )}
    </SelectWrapper>
  );
}
