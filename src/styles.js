import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialised;
  text-rendering: optimizeLegibility;
  font-family: 'Poppins', sans-serif;
  background-color: ${props => props.theme.red};
}

@media screen and (max-width: 374px) {
  body {
    background-color: ${props => props.theme.blue};
  }
}
`