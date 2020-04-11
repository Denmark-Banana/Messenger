import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import themes from '../themes';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyles />
        <Router />
      </>
    </ThemeProvider>
  );
}

export default App;
