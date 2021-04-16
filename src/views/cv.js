import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Paper,
  Fade,
  Divider,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Link,
  ListItem,
  ListItemText,
  Chip,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  heroContent: {
    textAlign: 'center',
  },
  cv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexBasis: '100%',
  },
  cvName: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  cvSubName: {
    textTransform: 'uppercase',
    letterSpacing: '5px',
  },
  grid: {
    justifyContent: 'space-between',
  },
  cvSectionTitle: {
    textTransform: 'uppercase',
  },
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  thCell: {
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  gridItem: {
    marginTop: theme.spacing(2),
  },
}));

const skills = [
  {
    name: 'Main',
    values: [
      'React',
      'Redux',
      'Material UI',
      'GraphQL',
      'AWS',
      'JavaScript',
      'Typescript',
      'HTML5/CSS3 with Emmet, SASS(preferable)/SCSS/LESS',
      'Bootstrap',
      'Photoshop(converting psd to html)',
      'Responsive, adaptive, cross-browser web design',
      'SMACSS, BEM methodologies',
    ],
  },
  {
    name: 'Project set-ups',
    values: ['Git/SVN', 'Bitbucket'],
  },
  {
    name: 'Additional',
    values: ['OOP', 'Design Patterns', 'Experience with CMS(Wordpress, Joomla'],
  },
];

const languages = [
  {
    name: 'English',
    value: 'Upper Intermediate',
  },
  {
    name: 'Ukrainian',
    value: 'Native',
  },
  {
    name: 'Russian',
    value: 'Conversational',
  },
];
const profile = [
  {
    name: 'Phone',
    value: '+38(063)215-16-13',
  },
  {
    name: 'Email',
    value: 'oksanavitol@gmail.com',
  },
  {
    name: 'Location',
    value: 'Lviv, Ukraine',
  },
];

const Cv = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cv}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container={true}>
          <Grid
            item={true}
            xs={12}
            md={12}
            lg={12}
            className={classes.gridItem}>
            <div className={classes.heroContent}>
              <Typography
                component='h1'
                variant='h1'
                gutterBottom
                className={classes.cvName}>
                Oksana Korobanova
              </Typography>
              <Typography
                component='h1'
                variant='h2'
                color='textSecondary'
                gutterBottom
                className={classes.cvSubName}>
                Front End Developer
              </Typography>
              <Grid container className={classes.grid}>
                <Grid item>
                  <Typography variant='body1'>
                    <Link target='_blank' rel='noreferrer'>
                      korobanova.com
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body1'>+38(063)215-16-13</Typography>
                </Grid>
              </Grid>
              <Divider />
            </div>
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={12}
            lg={12}
            className={classes.gridItem}>
            <div className={classes.box}>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.cvSectionTitle}>
                Objective
              </Typography>
              <Typography variant='body1'>
                Front end Developer in professional team. Full-time, remote
                work. Looking for interesting projects in high-skilled team.
              </Typography>
            </div>
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={12}
            lg={12}
            className={classes.gridItem}>
            <div className={classes.box}>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.cvSectionTitle}>
                Summary
              </Typography>
              <Typography variant='body1'>
                I work for more than 3 years in the IT industry. The main area
                of my expertise is front end development: building small and
                medium web apps with React, website development, HTML/CSS/JS,
                responsive cross-browser web design, etc...
              </Typography>
            </div>
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={12}
            lg={12}
            className={classes.gridItem}>
            <div className={classes.box}>
              <Typography
                variant='h6'
                gutterBottom
                className={classes.cvSectionTitle}>
                Skills
              </Typography>

              <Table className={classes.table}>
                <TableBody>
                  {skills.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        component='th'
                        align='center'
                        scope='row'
                        className={classes.thCell}>
                        {row.name}
                      </TableCell>
                      <TableCell>
                        {row.values.map((item, index) => (
                          <Chip
                            key={item + index}
                            label={item}
                            variant='outlined'
                            className={classes.chip}
                          />
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cv;
