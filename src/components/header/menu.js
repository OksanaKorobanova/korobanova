import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Link,
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
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import EnImage from '../../images/languages/en.webp';
import UaImage from '../../images/languages/ua.webp';
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
  const { t, i18n } = useTranslation();
  const { selectedIndex, handleNavigation } = useContext(MainContext);
  const { toggleDrawer } = props;
  return (
    <React.Fragment>
      <List className={classes.firstList}>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          selected={selectedIndex === '/'}
          classes={{ root: classes.listItem, selected: classes.selected }}
          onClick={(event) => handleNavigation(event, '/', toggleDrawer)}>
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
          onClick={(event) => handleNavigation(event, '/about', toggleDrawer)}
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
          onClick={(event) =>
            handleNavigation(event, '/projects', toggleDrawer)
          }
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
          onClick={(event) => handleNavigation(event, '/contact', toggleDrawer)}
          classes={{ root: classes.listItem, selected: classes.selected }}>
          <ListItemIcon className={classes.listItemIcon}>
            <MailIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary={t('menu.contact')}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      </List>

      <List className={classes.langs}>
        {Object.keys(lngs).map((lng) => (
          <ListItem
            key={lng}
            disableGutters={true}
            dense={true}
            button
            classes={{ root: classes.langItem }}
            onClick={() => i18n.changeLanguage(lng)}>
            <img
              className={classes.avatar}
              style={{ opacity: i18n.language === lng ? 1 : 0.5 }}
              alt={lngs[lng].nativeName}
              src={lngs[lng].img}
            />
          </ListItem>
        ))}
      </List>
      <div className={classes.socialContainer}>
        <Link
          href={process.env.REACT_APP_TWITTER}
          target='_blank'
          rel='noopener'
          className={classes.socialLink}>
          <TwitterIcon className={classes.socialIcon} />
        </Link>
        <Link
          href={process.env.REACT_APP_LINKEDIN}
          target='_blank'
          rel='noopener'
          className={classes.socialLink}>
          <LinkedInIcon className={classes.socialIcon} />
        </Link>
        <Link
          href={process.env.REACT_APP_FACEBOOK}
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
