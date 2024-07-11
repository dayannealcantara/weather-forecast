import styled from 'styled-components';

export const ContainerWeatherItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px 0;
`;
export const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;
export const Description = styled.span`
  flex: 1;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.gray200};
  font-size: 0.87rem;
  font-weight: 700;
  text-align: left;
`;
export const Value = styled.strong`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 1rem;
  font-weight: 700;
`;
