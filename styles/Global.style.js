import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      color: ${(props) => props.theme.color} !important;
      background: ${(props) => props.theme.background} !important;
      transition: all 490ms linear;
  }
`;

export default GlobalStyle;
