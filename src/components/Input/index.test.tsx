import { render, screen, fireEvent } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';
import { Input, Props } from '.';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

describe('Input', () => {
  const mockProps: Props = {
    placeholder: 'Digite algo',
    onChange: vi.fn(),
  };

  it('renderiza corretamente sem indicador de carregamento', () => {
    render(
      <ThemeProviderWrapper>
        <Input {...mockProps} />
      </ThemeProviderWrapper>
    );

    const inputElement = screen.getByPlaceholderText('Digite algo');
    expect(inputElement).toBeInTheDocument();

    const spinWrapper = screen.queryByTestId('spin-wrapper');
    expect(spinWrapper).toBeNull();
  });

  it('renderiza corretamente com indicador de carregamento', () => {
    render(
      <ThemeProviderWrapper>
        <Input {...mockProps} isLoading />{' '}
      </ThemeProviderWrapper>
    );

    const inputElement = screen.getByPlaceholderText('Digite algo');
    expect(inputElement).toBeInTheDocument();

    const spinWrapper = screen.getByTestId('spin-wrapper');
    expect(spinWrapper).toBeInTheDocument();

    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement).toBeInTheDocument();
  });

  it('chama a função onChange ao digitar no input', () => {
    render(
      <ThemeProviderWrapper>
        <Input {...mockProps} />{' '}
      </ThemeProviderWrapper>
    );

    const inputElement = screen.getByPlaceholderText('Digite algo');
    fireEvent.change(inputElement, { target: { value: 'Texto de teste' } });

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
  });
});
