import { createGlobalStyle } from 'styled-components';
import mobileBg from './assets/bg-intro-mobile.png';
import desktopBg from './assets/bg-intro-desktop.png';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialised;
  text-rendering: optimizeLegibility;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background: url(${mobileBg}) top left;
  background-size: 100%;
  background-color: ${props => props.theme.red};
}

@media screen and (min-width: 768px) {
  body {
    background: url(${desktopBg}) top left;
    background-color: ${props => props.theme.red};
  }
}
`