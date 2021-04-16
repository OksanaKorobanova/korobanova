import React from 'react';
import Square from './square';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  squareContainer: {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/ repeat(3, 1fr)',
  },
}));
const Board = ({ squares, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.squareContainer}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
