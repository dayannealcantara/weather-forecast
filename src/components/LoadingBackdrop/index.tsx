import React from 'react';
import styled from 'styled-components';
import { Loading } from '../Loading';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingBackdrop: React.FC = () => {
  return (
    <Backdrop>
      <Loading />
    </Backdrop>
  );
};

export default LoadingBackdrop;
