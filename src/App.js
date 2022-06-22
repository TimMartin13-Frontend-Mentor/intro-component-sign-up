import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import './App.css';
import Attribution from './components/Attribution';
import Main from './components/Main';

const theme = {
  red: "hsl(0, 100%, 74%)",
  green: "hsl(154, 59%, 51%)",
  blue: "hsl(248, 32%, 49%)",
  darkBlue: "hsl(249, 10%, 26%)",
  grayishBlue: "hsl(246, 25%, 77%)",
  white: "hsl(0, 0%, 100%)"
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Main />
        <Attribution />
      </ThemeProvider>
    </div>
  );
}

export default App;

//   Try it free 7 days then $20/mo. thereafter

//   First Name 
//   Last Name 
//   Email Address
//   Password

//   Claim your free trial 

//   By clicking the button, you are agreeing to our Terms and Services