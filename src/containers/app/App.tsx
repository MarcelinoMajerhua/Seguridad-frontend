import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import themeMui from '../../themes/theme-mui';
import Dashboard from '../../components/dashboard/dashboard';
import BodyCustomized from '../../components/body-custom/body-customized';

function App() {
   return (
      <MuiThemeProvider theme={themeMui}>
         <Dashboard>
            <BodyCustomized />
         </Dashboard>
      </MuiThemeProvider>
   );
}

export default App;
