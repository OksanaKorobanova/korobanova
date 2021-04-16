import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Link,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { MainContext } from '../context/mainContext';
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Launch as LaunchIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

import Img1 from '../images/markroid/demoPhotos/1.png';
import Img2 from '../images/markroid/demoPhotos/2.png';
import Img3 from '../images/markroid/demoPhotos/3.png';
import Img4 from '../images/markroid/demoPhotos/4.png';
import Img5 from '../images/markroid/demoPhotos/5.png';
import Img6 from '../images/markroid/demoPhotos/6.png';
import Img7 from '../images/markroid/demoPhotos/7.png';

import Gallery from '../components/project/gallery';
const useStyles = makeStyles((theme) => ({
  home: {
    flex: 1,
  },
  hero: {
    height: '100vh',
    paddingTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    zIndex: 1,
  },
  info: {
    transition: '0.2s all ease-in-out',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: theme.palette.background.opacityOverlay,
  },
  statusChip: {
    marginLeft: theme.spacing(6),
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
  },
  box: {
    marginTop: theme.spacing(5),
  },
  link: {
    alignSelf: 'flex-start',
  },
  listItemText: {
    color: theme.palette.text.secondary,
  },
  aboutProject: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(2),
  },
  doneIcon: {
    color: theme.palette.success.main,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  heroDesc: {
    marginTop: theme.spacing(2),
    alignItems: 'center',
  },
  technologies: {
    paddingBottom: theme.spacing(3),
  },
}));

const tileData = [
  {
    img: Img1,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: Img2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
];

const Project = () => {
  const classes = useStyles();
  const history = useHistory();

  const { projects } = useContext(MainContext);
  const [project, setProject] = useState({});
  useEffect(() => {
    const historyArr = history.location.pathname.split('/');
    const projectName = historyArr[historyArr.length - 1];
    const tempProject = projects.find((item) => item.name === projectName);
    setProject(tempProject);
  }, []);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const parallaxShift = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', parallaxShift);

    return () => {
      window.removeEventListener('scroll', parallaxShift);
    };
  }, []);
  useEffect(() => {
    console.log(project);
  }, [project]);
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.home}>
        <div
          className={classes.hero}
          style={{
            backgroundImage: `url(${project.background})`,
            backgroundPositionY: offset / 2,
          }}>
          <div className={classes.overlay}></div>
          <Container maxWidth='lg' className={classes.container}>
            <Grid
              container={true}
              className={classes.info}
              style={{ bottom: offset * 2 }}>
              <Grid item={true} xs={12} md={12} lg={12}>
                <div className={classes.flexContainer}>
                  <Typography component='h1' variant='h1'>
                    {project.name}
                  </Typography>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener'
                    className={classes.link}>
                    <LaunchIcon />
                  </Link>
                  <Chip
                    label={project.status}
                    variant='outlined'
                    className={classes.statusChip}
                  />
                </div>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <div className={classes.heroDesc}>
                  <Typography
                    component='h2'
                    color='textSecondary'
                    variant='body1'>
                    {project.description}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.aboutProject}>
          <Container maxWidth='lg' className={classes.container}>
            <Grid container={true} alignItems='center'>
              <Grid item={true} xs={12} md={12} lg={6}>
                <Typography
                  component='p'
                  color='textSecondary'
                  variant='h4'
                  gutterBottom>
                  What had been done?
                </Typography>
                <div className={classes.box}>
                  <Typography
                    component='p'
                    color='textSecondary'
                    variant='body1'
                    gutterBottom>
                    {project.business}
                  </Typography>
                  <List dense={false}>
                    {project.solution
                      ? project.solution.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon
                                className={classes.doneIcon}
                              />
                            </ListItemIcon>
                            <ListItemText
                              classes={{ primary: classes.listItemText }}
                              primary={item}
                            />
                          </ListItem>
                        ))
                      : ''}
                  </List>
                </div>
              </Grid>
              <Grid item={true} xs={12} md={6} lg={6}>
                {/* <Gallery /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.technologies}>
          <Container maxWidth='lg' className={classes.container}>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                  {/* <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                          <IconButton
                            aria-label={`info about ${tile.title}`}
                            className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      /> */}
                </GridListTile>
              ))}
            </GridList>
          </Container>
        </div>
        <div className={classes.technologies}>
          <Container maxWidth='lg' className={classes.container}>
            <Typography
              component='p'
              color='textSecondary'
              variant='h4'
              gutterBottom>
              Technologies
            </Typography>
            <div className={classes.box}>
              {project.technologies
                ? project.technologies.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      variant='outlined'
                      className={classes.chip}
                      size='medium'
                    />
                  ))
                : ''}
            </div>
          </Container>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
