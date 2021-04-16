import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import Board from './board';
import { calculateWinner } from './helper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  game: {
    position: 'relative',
    zIndex: 10,
  },
}));

const Game = () => {
  const classes = useStyles();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return;
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };
  const jumpTo = () => {};
  const renderMoves = () => {
    return (
      <Button
        size='small'
        variant='outlined'
        onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
      </Button>
    );
  };
  return (
    <div className={classes.game}>
      <Board squares={board} handleClick={handleClick} />
      <div className={classes.winner}>
        <Typography component='p' variant='body1'>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </Typography>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
