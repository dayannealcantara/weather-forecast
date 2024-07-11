import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 24px;
  padding: 24px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const WrapperRight = styled.div`
  width: 100%;

  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
`;
