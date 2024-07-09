import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    --gray-900: #13131A;
    --gray-800: #16161F;
 
    --gray-600: #1E1E29;
    --gray-500: #3B3B54;
    --gray-400: #7F7F98;
    
    --gray-200: #BFBFD4;
    --gray-100: #FAFAFA;
    
    --white: #FFFFFF;
    --blue-light: #8FB2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: var(--gray-900);
    color: var(--white); 
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--gray-600);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-200);
  }

  @media (max-width: 768px) {
    :root {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
