import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './header/menu';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Hidden, IconButton, Drawer, AppBar } from '@material-ui/core';
import Options from '../components/header/options';
import { MainContext } from '../context/mainContext';
const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
    display: 'inline-flex',
    zIndex: theme.zIndex.appBar,
    width: '60px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '100%',
    },
  },
  toolbar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.header,
    justifyContent: 'space-between',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  drawerPaper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'inherit',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 'auto',
    maxWidth: '100%',
    height: '70px',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { handleNavigation } = useContext(MainContext);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen((prevState) => !prevState);
  };
  return (
    <AppBar className={classes.header} color='secondary'>
      <div className={classes.toolbar}>
        <Link
          to='/'
          className={classes.logo}
          onClick={(event) => handleNavigation(event, '/')}>
          <div style={{ fontSize: '0.7rem' }}>OKSANA</div>
          <div style={{ fontSize: '0.4rem' }}>KOROBANOVA</div>
        </Link>

        <Hidden mdDown>
          <Menu />
        </Hidden>

        <Hidden lgUp>
          <Options direction='row' position='relative' />
        </Hidden>

        <Hidden lgUp>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor={'left'}
          open={open}
          onClose={toggleDrawer}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <Menu toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
    </AppBar>
  );
};

export default Header;
