import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Button,
  Fade,
  Divider,
  Grid,
  Avatar,
  Chip,
  Card,
  CardContent,
} from '@material-ui/core';
import { MainContext } from '../context/mainContext';
import Logo from '../images/avatar/logo.webp';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  home: {
    flex: 1,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  ribbon: {
    width: '150px',
    height: '150px',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  ribbonContent: {
    left: '-20px',
    top: '30px',
    transform: 'rotate(45deg)',
    position: 'absolute',
    display: 'block',
    width: '225px',
    padding: '10px 0',
    backgroundColor: theme.palette.primary.light,
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.192)',
    color: '#fff',
    textShadow: '0 1px 1px rgba(0,0,0,.2)',
    textTransform: 'uppercase',
    textAlign: 'center',
    border: '2px dotted #fff',
    outline: '5px solid ' + theme.palette.primary.light,
    cursor: 'pointer',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: '80px',
    width: '80px',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  aboutTitle: {
    marginLeft: theme.spacing(2),
  },
  aboutDescrition: {
    marginTop: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  textVal: {
    marginLeft: theme.spacing(1),
  },
  heroContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  extraContent: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  box: {
    padding: theme.spacing(1),
    height: '100%',
  },
  card: {
    height: '100%',
  },
}));

const skills = [
  'React',
  'Redux',
  'Material UI',
  'GraphQL',
  'AWS',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Typescript',
  'Bootstrap',
];
const About = () => {
  const classes = useStyles();
  const { handleNavigation } = useContext(MainContext);
  const { t } = useTranslation();
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.home}>
        <div className={classes.ribbon}>
          <div
            className={classes.ribbonContent}
            onClick={(event) => handleNavigation(event, '/cv')}>
            CV
          </div>
        </div>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container={true} className={classes.heroContent}>
            <Grid item={true} xs={12} md={12} lg={12}>
              <div className={classes.box}>
                <Typography component='h1' variant='h1' gutterBottom>
                  {t('about.about')}
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} md={6} lg={6}>
              <div className={classes.box}>
                <div className={classes.flexContainer}>
                  <Avatar
                    className={classes.avatar}
                    alt='Oksana Korobanova'
                    src={Logo}
                  />
                  <div className={classes.aboutTitle}>
                    <Typography variant='body1'> {t('about.name')}</Typography>
                    <Typography variant='body1' color='textSecondary'>
                      Front End Developer | Web Developer | Freelancer
                    </Typography>
                  </div>
                </div>
                <div className={classes.aboutDescrition}>
                  <Typography color='textSecondary' gutterBottom>
                    {t('about.description1')}
                  </Typography>
                  <Typography color='textSecondary' gutterBottom>
                    {t('about.description2')}
                  </Typography>
                  <Typography color='textSecondary' gutterBottom>
                    {t('about.description3')}
                  </Typography>
                </div>
                <Divider className={classes.divider} />

                <div className={classes.skills}>
                  {skills.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      variant='outlined'
                      className={classes.chip}
                    />
                  ))}
                </div>
                <div className={classes.btnContainer}>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.btn}
                    onClick={(event) => handleNavigation(event, '/contact')}>
                    {t('about.btn')}
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item={true} xs={12} md={6} lg={5}>
              <Grid container={true} className={classes.extraContent}>
                <Grid item={true} xs={12} md={12} lg={6}>
                  <div className={classes.box}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant='body2' gutterBottom>
                          {t('about.languages')}
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.flexContainer}>
                          <Typography variant='body2'>
                            {' '}
                            {t('about.en')}:{' '}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            className={classes.textVal}>
                            {t('about.enRate')}
                          </Typography>
                        </div>
                        <div className={classes.flexContainer}>
                          <Typography variant='body2'>
                            {' '}
                            {t('about.ua')}:{' '}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            className={classes.textVal}>
                            {t('about.uaRate')}
                          </Typography>
                        </div>
                        <div className={classes.flexContainer}>
                          <Typography variant='body2'>
                            {' '}
                            {t('about.ru')}:{' '}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            className={classes.textVal}>
                            {t('about.ruRate')}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
                <Grid item={true} xs={12} md={12} lg={6}>
                  <div className={classes.box}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant='body2' gutterBottom>
                          {t('about.education')}
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant='body2'>
                          {t('about.place')}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {t('about.master')},
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {t('about.field')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              </Grid>
              {/* <Grid container={true} className={classes.heroContent}>
                <Grid item={true} xs={12} md={12} lg={12}>
                  <Reviews />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
};

export default About;
