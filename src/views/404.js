import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: theme.spacing(1),
  },
}));

const NotFoundPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (event) => {
    history.push('/');
  };
  return (
    <div className={classes.root}>
      <Typography variant='h3' component='h1'>
        404: Not found page!
      </Typography>
      <Button variant='outlined' onClick={handleClick} className={classes.btn}>
        Return to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
