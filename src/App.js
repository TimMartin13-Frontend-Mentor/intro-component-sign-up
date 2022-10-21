import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import './App.css';
import Main from './components/Main';
import Attribution from './components/Attribution';

const theme = {
  red: 'hsl(0, 100%, 74%)',
  green: 'hsl(154, 59%, 51%)',
  blue: 'hsl(248, 32%, 49%)',
  darkBlue: 'hsl(249, 10%, 26%)',
  grayishBlue: 'hsl(246, 25%, 77%)',
  white: 'hsl(0, 0%, 100%)',
  lightGrey: 'hsl(204, 8%, 76%)',
};

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
        <Attribution />
      </ThemeProvider>
    </div>
  );
}

export default App;
