import { DepartureBoard } from '@material-ui/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  btn: {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
  },
}));

const Square = ({ value, onClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.btn} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
