import styled from 'styled-components';

export const Container = styled.div`
  padding: 28px 24px 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray800};
  height: 100%;
`;

export const NextDaysItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const NextDaysTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: 400;
  margin-bottom: 20px;
`;

export const NextDaysDetail = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
`;

export const DayTitle = styled.h2`
  font-size: 0.87rem;
  font-weight: 700;
  text-align: center;
`;

export const WeatherIcon = styled.img`
  width: 5.25rem;
  height: 5.25rem;
`;

export const TemperatureSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray400};
  margin-left: 8px;
`;
