import React, { useContext } from 'react';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Hidden } from '@material-ui/core';
import { MainContext } from '../context/mainContext';
import { ThemeProvider } from '@material-ui/styles';
import darkTheme from '../darkTheme';
import lightTheme from '../lightTheme';
import { createMuiTheme } from '@material-ui/core/styles';
import Snow from './snow/snowFallCanvas';
import Options from '../components/header/options';

const useStyles = makeStyles((theme) => ({
  content: {
    width: 'calc(100% - 60px)',
    height: 'auto',
    minHeight: '100vh',
    marginLeft: '60px',
    display: 'inline-flex',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 0,
      marginTop: '70px',
      minHeight: 'calc(100vh - 70px)',
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { snowActive, darkMode } = useContext(MainContext);
  const dark = createMuiTheme(darkTheme);
  const light = createMuiTheme(lightTheme);
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline />
      <Header />
      {snowActive ? <Snow /> : ''}
      <Hidden mdDown>
        <Options />
      </Hidden>
      <main className={classes.content}>{props.children}</main>
    </ThemeProvider>
  );
};

export default Layout;
