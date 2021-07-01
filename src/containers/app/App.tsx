import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import themeMui from '../../themes/theme-mui';
import Dashboard from '../../components/dashboard/dashboard';
import Routers from './router/routers';
import { Route, Switch } from 'react-router-dom';
import LoginRoute from './router/login-route';
import SignIn from '../users/sign-in/sign-in';

function App() {
   return (
      <MuiThemeProvider theme={themeMui}>
         <LoginRoute />
         <Route
            path={'/(.+)'}
            render={() => (
               <>
                  <Switch>
                     <Dashboard>
                        <Routers />
                     </Dashboard>
                  </Switch>
               </>
            )}
         />
      </MuiThemeProvider>
   );
}

export default App;
