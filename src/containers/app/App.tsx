import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import themeMui from '../../themes/theme-mui';
import Dashboard from '../../components/dashboard/dashboard';
import Routers from './router/routers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
   return (
      <Router>
         <MuiThemeProvider theme={themeMui}>
            <Dashboard>
               <Switch>
                  <Routers />
               </Switch>
            </Dashboard>
         </MuiThemeProvider>
      </Router>
   );
}

export default App;
