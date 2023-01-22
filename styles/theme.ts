import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material/styles';

// create a theme instance
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8C6954',
      contrastText: '#261914',
    },
    secondary: {
      main: '#F2B9B3',
      contrastText: '#0E1E29',
    },
    background: {
      default: '#f4ded3',
      paper: '#D9C1B4',
    },
    text: {
      primary: '#261914',
    },
    divider: '#ffb4ac',
    info: {
      main: '#F2DFA7',
    },
    success: {
      main: '#abd45f',
    },
    error: {
      main: '#ba1a1a',
    },
  },
  typography: {
    fontFamily: [
      '"Rubik"',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.75rem',
      lineHeight: 1.12,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.35,
      letterSpacing: '0.03em',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
    },
    body2: {
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 500,
      textTransform: 'uppercase',
      fontSize: '1rem',
      letterSpacing: '0.03em',
    },
  },
});

export default theme;
