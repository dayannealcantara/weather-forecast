
import { InputHTMLAttributes } from 'react';
import { InputWrapper, StyledInput, SpinWrapper } from './styles';
import { Loading } from '../Loading';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean; 
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <InputWrapper>
      <StyledInput type='text' {...rest} />
      {isLoading && (
        <SpinWrapper>
          <Loading />
        </SpinWrapper>
      )}
    </InputWrapper>
  );
}
