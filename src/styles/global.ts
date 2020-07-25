import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body, #__next {
      height: 100%;
    }

    body {
      font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 10px;
    }
`;
