import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Fade, Grid } from '@material-ui/core';
import { MainContext } from '../context/mainContext';
import Typical from 'react-typical';
// import { getAllUsers, test } from '../services/userService';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  home: {
    flex: 1,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: theme.homeBg,
    backgroundPosition: theme.homeBgPosition,
    backgroundSize: 'cover',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  btnContainer: {
    marginTop: '25px',
  },
  btn: {
    '&:hover': {
      borderWidth: '2px',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { darkMode, handleNavigation } = useContext(MainContext);
  const { t } = useTranslation();
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.home}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container={true} className={classes.heroContent}>
            <Grid item={true} xs={12} md={9} lg={5}>
              <Typography component='h1' variant='h1' gutterBottom>
                {t('home.hi')}
                ,
                <br />
                {t('home.name')}.
              </Typography>

              <Typography
                className={classes.h2}
                component='h2'
                variant='h2'
                gutterBottom>
                <Typical
                  steps={['Front End Developer | Web Developer | Freelancer']}
                />
              </Typography>
              <div className={classes.btnContainer}>
                <Button
                  variant={darkMode ? 'outlined' : 'contained'}
                  color='primary'
                  onClick={(event) => handleNavigation(event, '/contact')}
                  className={classes.btn}>
                  {t('home.btn')}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
};

export default Home;
