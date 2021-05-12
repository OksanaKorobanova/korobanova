import HomeImg from './images/home/homeDark.webp';

const darkTheme = {
  homeBg: `url(${HomeImg})`,
  homeBgPosition: 'top left',
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 500,
    },
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      lineHeight: '65px',
      fontSize: '3.75rem',
    },
    h2: {
      fontWeight: 400,
      fontSize: '0.8rem',
      letterSpacing: '2px',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#f67a20',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(24,24,24,0.3)',
    },
    background: {
      paper: '#424242',
      default: '#303030',
      header: '#181818',
      mode: 'black',
      modeBg: '#181818',
      opacityOverlay: 'rgba(0, 0, 0, 0.7)'
    },
    text: {
      primary: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        padding: '10px 18px',
        borderWidth: '2px',
        fontWeight: 700,
        letterSpacing: '2px',
        transition: '0.2s all',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: '#181818',
      },
    },
  },
};

export default darkTheme;
