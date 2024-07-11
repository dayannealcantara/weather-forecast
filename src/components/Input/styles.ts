import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray600};
  padding: 16px 20px;
  border: none;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blueLight};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const SpinWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
