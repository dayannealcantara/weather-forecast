import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Props, SelectCity } from './';
import { getCityByNameService } from '../../services/getCityByNameService';
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

vi.mock('../../services/getCityByNameService');

describe('SelectCity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockProps: Props = {
    onSelect: vi.fn(),
  };

  it('renderiza o componente com o placeholder correto', () => {
    render(
      <ThemeProviderWrapper>
        <SelectCity {...mockProps} />{' '}
      </ThemeProviderWrapper>
    );
    const inputElement = screen.getByPlaceholderText('Buscar local');
    expect(inputElement).toBeInTheDocument();
  });

  it('exibe "Nenhuma cidade encontrada" quando o serviço retorna um array vazio', async () => {
    (getCityByNameService as Mock).mockResolvedValue(undefined);

    render(
      <ThemeProviderWrapper>
        <SelectCity {...mockProps} />
      </ThemeProviderWrapper>
    );
    fireEvent.change(screen.getByPlaceholderText('Buscar local'), {
      target: { value: 'Cidade Inexistente' },
    });

    await waitFor(() => {
      const elementoSemCidade = screen.getByText('Nenhuma cidade encontrada');
      expect(elementoSemCidade).toBeInTheDocument();
    });
  });

  it('manipula entrada de pesquisa vazia', async () => {
    render(
      <ThemeProviderWrapper>
        <SelectCity {...mockProps} />
      </ThemeProviderWrapper>
    );
    fireEvent.change(screen.getByPlaceholderText('Buscar local'), {
      target: { value: '' },
    });

    await waitFor(() => {
      expect(screen.queryByText('Nenhuma cidade encontrada')).toBeNull();
    });
  });
});
