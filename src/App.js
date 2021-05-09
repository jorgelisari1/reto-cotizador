import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Login } from './views/Login';
import { Home } from './views/Home';
import { Continuar} from './views/Continuar';

import './index.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E69526',
    },
  },
});

const App = () => {
  return (
      <Router>
        <Switch>
        <Route path="/home/continuar/">
            <Continuar />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <ThemeProvider theme={theme}>
              <Login />
            </ThemeProvider>
          </Route>
        </Switch>
      </Router>
  );
};

export default App;