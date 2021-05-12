import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from '@material-ui/core';

import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: '2rem',
    color: theme.palette.text.secondary,
  },
  socialLink: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: '1px solid ' + theme.palette.secondary.main,
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
}));

const SocialComponent = (props) => {
  const classes = useStyles();
  return (
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
  );
};
export default SocialComponent;
