import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#58595b',
      contrastText: '#fff',
      highlight: '#d1d703'
    },
    secondary: {
      main: '#363636',
      light: '#787879'
    }
  },
  typography: {
    fontFamily: ['Titillium Web', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      fontWeight: 700
    }
  }
});

export default theme;
