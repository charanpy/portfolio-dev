import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
color: ${(props) => props.theme.color} !important;
      background-color: ${(props) => props.theme.background} !important;
}
  body {
      
      transition: all 490ms linear;
  }
`;

export default GlobalStyle;
