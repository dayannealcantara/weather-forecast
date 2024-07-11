import styled from 'styled-components';

export const TodayWrapper = styled.section`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TodayForm = styled.form`
  display: flex;
  flex: 1;
  gap: 12px;
`;

export const TodayDetails = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 32px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
`;

export const TodayDetailsHeader = styled.header`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray100};

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    text-align: left;
  }

  p {
    font-size: 1rem;
    margin-top: 8px;
    text-align: left;
  }
`;

export const TemperatureDetails = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;

  &::first-letter {
    text-transform: uppercase;
  }

  span {
    opacity: 0.4;
  }
`;

export const TodayDetailsFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;

  h1 {
    font-size: 80px;
    font-weight: 800;
    text-align: left;
  }

  img {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    img {
      width: 12rem;
      margin-bottom: -124px;
      margin-right: -42px;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray600};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const BtnTemperature = styled.button`
  width: 200px;
  height: 50px;
  padding: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray500};
  border-radius: 5px;
  font-size: 16px;
  margin-top: 16px;
  cursor: pointer;
  font-weight: bold;
`;
