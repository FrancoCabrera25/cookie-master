import { createTheme } from '@mui/material';
import { red, grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0},
      styleOverrides: {
        root: {
          backgroundColor: grey[800]  // '#4a148c',
        }
      }
    }
  }
});