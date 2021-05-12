import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { MainContext } from '../context/mainContext';
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
  const { handleNavigation } = useContext(MainContext);

  return (
    <div className={classes.root}>
      <Typography variant='h3' component='h1'>
        404: Not found page!
      </Typography>
      <Button variant='outlined' onClick={(event) => handleNavigation(event, '/')} className={classes.btn}>
        Return to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
