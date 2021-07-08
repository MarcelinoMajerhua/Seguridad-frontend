import { createMuiTheme } from '@material-ui/core';

const themeMui = createMuiTheme({
   palette: {
      primary: {
         light: '#ff5f52',
         main: '#c62828',
         dark: '#8e0000',
         contrastText: '#ffffff',
      },
   },
});

export default themeMui;
