import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './constants/theme';
import { RootNavigator } from './navigation/root-navigator';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <RootNavigator />
      </BrowserRouter>
    </ThemeProvider>
  </div>
  );
}

export default App;
