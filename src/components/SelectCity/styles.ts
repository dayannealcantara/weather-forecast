import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectList = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 8px;
  position: absolute;
`;

export const SelectButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray500};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  }
`;

export const SelectButtonText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray100};
  padding: 16px 20px;
  text-align: left;
`;
