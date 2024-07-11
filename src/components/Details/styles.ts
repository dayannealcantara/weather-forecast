import styled from 'styled-components';

export const Container = styled.div`
  padding: 28px 24px 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
export const Title = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: 400;
  margin-bottom: 20px;
`;
export const WeatherDetails = styled.div`
  margin-top: 36px;

  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
  }
`;
