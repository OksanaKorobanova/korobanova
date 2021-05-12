import HomeImg from './images/home/homeLightBg.webp';

const lightTheme = {
  homeBg: `url(${HomeImg})`,
  homeBgPosition: 'center',
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
    type: 'light',
    primary: {
      main: 'rgb(107, 132, 92)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(107, 132, 92, 0.3)',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
      // header: 'rgb(176, 190, 170)',
      header: '#eee',
      mode: 'white',
      modeBg: 'rgb(107, 132, 92)',
      opacityOverlay: 'rgba(255, 255, 255, 0.9)'
    },
    text: {
      primary: '#000000',
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
      containedPrimary: {
        padding: '10px 18px',
        borderWidth: '2px',
        letterSpacing: '2px',
        transition: '0.2s all',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgb(107, 132, 92)',
      },
    },
  },
};

export default lightTheme;
