import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray600};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
