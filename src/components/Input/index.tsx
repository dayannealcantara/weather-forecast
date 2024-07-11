import { InputHTMLAttributes } from 'react';
import { InputWrapper, StyledInput, SpinWrapper } from './styles';
import { Loading } from '../Loading';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <InputWrapper>
      <StyledInput type="text" {...rest} />
      {isLoading && (
        <SpinWrapper data-testid="spin-wrapper">
          <Loading />
        </SpinWrapper>
      )}
    </InputWrapper>
  );
}
