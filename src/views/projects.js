import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Chip,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/mainContext';
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
  skills: {
    marginTop: theme.spacing(1),
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
  },
  educationBox: {
    marginTop: theme.spacing(1),
  },
  rightColumn: {
    marginLeft: theme.spacing(3),
  },
  media: {
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },
  root: {
    border: '2px solid transparent',
    '&:hover': {
      border: '2px solid ' + theme.palette.primary.main,
    },
  },
  cardContent: {
    background: theme.palette.secondary.main,
  },
}));

const Projects = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (url) => (event) => {
    history.push(url);
  };
  const { t } = useTranslation();
  const { projects } = useContext(MainContext);

  // Currently have problems with backend deployment
  // useEffect(() => {
  //   fetch('/api/projects')
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log(data);
  //       changeProjectList(data);
  //     });
  // }, []);

  return (
    <div className={classes.home}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container={true} className={classes.heroContent} spacing={2}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Typography component='h1' variant='h1' gutterBottom>
              {t('projects.projects')}
            </Typography>
          </Grid>
          {projects.map((item, index) => {
            return (
              <Grid key={index} item={true} xs={12} md={6} lg={6}>
                <Card className={classes.root}>
                  <CardActionArea
                    onClick={handleClick('/projects/' + item.name)}>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5'>
                        {item.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {item.description}
                      </Typography>
                      <div className={classes.skills}>
                        {item.technologies.map((item, index) => (
                          <Chip
                            key={index}
                            label={item}
                            variant='outlined'
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
