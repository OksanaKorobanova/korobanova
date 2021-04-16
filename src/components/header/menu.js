import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Link,
  IconButton,
  Button,
  Avatar,
} from '@material-ui/core';
import { MainContext } from '../../context/mainContext';
import {
  HomeOutlined as HomeIcon,
  PersonOutlined as PersonIcon,
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  MailOutlined as MailIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  NoteOutlined as NoteOutlinedIcon,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import EnImage from '../../images/languages/en2.png';
import UaImage from '../../images/languages/ua2.png';
const useStyles = makeStyles((theme) => ({
  firstList: {
    width: '100%',
    color: theme.palette.text.secondary,
    fontFamily: 'Open Sans, sans-serif',
  },
  listItem: {
    paddingTop: '8px',
    paddingBottom: '8px',
    flexDirection: 'column',
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      },
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  listItemIcon: {
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  listItemText: {
    textTransform: 'uppercase',
    fontSize: '0.6rem',
    color: theme.palette.text.secondary,
  },
  listItemTextOption: {
    fontSize: '0.7rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  svgIcon: {
    fontSize: '1.6rem',
  },
  svgIconOption: {
    fontSize: '1.2rem',
  },
  socialContainer: {
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  socialIcon: {
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
  },
  socialLink: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  avatar: {
    height: '30px',
    width: 'auto',
    margin: 'auto',
  },
}));

const lngs = {
  en: { nativeName: 'English', img: EnImage },
  ua: { nativeName: 'Ukrainian', img: UaImage },
};
const Menu = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { selectedIndex, setSelectedIndex } = useContext(MainContext);
  function handleClick(event, url) {
    setSelectedIndex(url);
    history.push(url);
    if (props.toggleDrawer) {
      props.toggleDrawer(event);
    }
  }

  console.log('language');
  console.log();
  return (
    <React.Fragment>
      <List className={classes.firstList}>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex === '/'}
          classes={{ root: classes.listItem, selected: classes.selected }}
          onClick={(event) => handleClick(event, '/')}>
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            <HomeIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary={t('menu.home')}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex.includes('/about')}
          onClick={(event) => handleClick(event, '/about')}
          classes={{ root: classes.listItem, selected: classes.selected }}>
          <ListItemIcon className={classes.listItemIcon}>
            <PersonIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary={t('menu.about')}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex.includes('/projects')}
          onClick={(event) => handleClick(event, '/projects')}
          style={{ flexDirection: 'column' }}
          classes={{ root: classes.listItem, selected: classes.selected }}>
          <ListItemIcon className={classes.listItemIcon}>
            <WorkOutlineOutlinedIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary={t('menu.projects')}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex === '/contact'}
          onClick={(event) => handleClick(event, '/contact')}
          classes={{ root: classes.listItem, selected: classes.selected }}>
          <ListItemIcon className={classes.listItemIcon}>
            <MailIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary={t('menu.contact')}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        {/* <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex.includes('/blog')}
          onClick={(event) => handleClick(event, '/blog')}
          classes={{ root: classes.listItem, selected: classes.selected }}>
          <ListItemIcon className={classes.listItemIcon}>
            <NoteOutlinedIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary='Blog'
            classes={{ primary: classes.listItemText }}
          />
        </ListItem> */}
      </List>
      {/* <div className={classes.options}>
        <List className={classes.firstList}>
          <ListItem
            disableGutters={true}
            dense={true}
            button
            classes={{ root: classes.listItem }}
            onClick={(event) => changeSnowActive()}>
            <ListItemIcon className={classes.listItemIcon}>
              <AcUnitIcon className={classes.svgIconOption} />
            </ListItemIcon>
            <ListItemText
              classes={{ secondary: classes.listItemTextOption }}
              secondary={snowActive ? 'Snow: On' : 'Snow: Off'}
            />
          </ListItem>
          <ListItem
            disableGutters={true}
            dense={true}
            button
            classes={{ root: classes.listItem }}
            onClick={(event) => changeAudioPlayerStatus()}>
            <ListItemIcon className={classes.listItemIcon}>
              {audioPlayerStatus ? (
                <VolumeUpIcon className={classes.svgIconOption} />
              ) : (
                <VolumeOffIcon className={classes.svgIconOption} />
              )}
            </ListItemIcon>
            <ListItemText
              classes={{ secondary: classes.listItemTextOption }}
              secondary={audioPlayerStatus ? 'Music: On' : 'Music: Off'}
            />
          </ListItem>
          <ListItem
            disableGutters={true}
            dense={true}
            button
            classes={{ root: classes.listItem }}
            onClick={(event) => changeDarkMode((prevState) => !prevState)}>
            <ListItemIcon className={classes.listItemIcon}>
              <NightsStayIcon className={classes.svgIconOption} />
            </ListItemIcon>
            <ListItemText
              classes={{ secondary: classes.listItemTextOption }}
              secondary={darkMode ? 'Dark Mode: On' : 'Dark Mode: Off'}
            />
          </ListItem>
        </List>
      </div> */}
      <List className={classes.langs}>
        {Object.keys(lngs).map((lng) => (
          <ListItem
            disableGutters={true}
            dense={true}
            button
            selected={i18n.language === lng}
            classes={{ root: classes.langItem }}
            onClick={() => i18n.changeLanguage(lng)}>
            <img
              className={classes.avatar}
              alt={lngs[lng].nativeName}
              src={lngs[lng].img}
            />
          </ListItem>
        ))}
      </List>
      <div className={classes.socialContainer}>
        <Link
          href='https://twitter.com/oksanawebdev'
          target='_blank'
          rel='noopener'
          className={classes.socialLink}>
          <TwitterIcon className={classes.socialIcon} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/oksana-vitol-49b299b6/'
          target='_blank'
          rel='noopener'
          className={classes.socialLink}>
          <LinkedInIcon className={classes.socialIcon} />
        </Link>
        <Link
          href='https://www.facebook.com/oksana.vitol'
          target='_blank'
          rel='noopener'
          className={classes.socialLink}>
          <FacebookIcon className={classes.socialIcon} />
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Menu;
