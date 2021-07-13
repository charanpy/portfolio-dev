import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};
    transition: all 500ms linear;
  }
`;

export default GlobalStyle;
