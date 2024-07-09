import styled, { keyframes } from 'styled-components';

 const spin = keyframes`
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 34px;
  height: 34px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--blue-light);
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;
