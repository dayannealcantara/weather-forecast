import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: ${theme.colors.gray900};
    color: ${theme.colors.white}; 
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.gray600};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray200};
  }

  @media (max-width: 768px) {
    :root {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
