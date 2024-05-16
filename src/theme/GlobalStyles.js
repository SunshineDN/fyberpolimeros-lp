import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1920px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1440px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 900px) {
    html {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 8px;
    }
  }
`;

export default GlobalStyles;
