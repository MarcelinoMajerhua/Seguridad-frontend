import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import themeMui from '../../themes/theme-mui';
import Routers from './router/routers';

function App() {
   return (
      <MuiThemeProvider theme={themeMui}>
         <Routers />
      </MuiThemeProvider>
   );
}

export default App;
