import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  snowContainer: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
    flexWrap: 'wrap',
  },
  snowItem: {
    display: 'inline-block',
    width: '0.1%',
    color: '#fffafa',
    opacity: 0,
    fontSize: '120px',
    margin: 0,
    padding: 0,
    animation: `$fall 16s linear infinite`,
  },
  '@keyframes fall': {
    '0%': {
      opacity: 0,
    },
    '3%': {
      opacity: 0.3,
    },
    '90%': {
      opacity: 0.5,
    },
    '100%': {
      transform: 'translate(0, 97vh)',
      opacity: 0,
    },
  },
}));

const Snowflake = (props) => {
  const classes = useStyles();
  return (
    <p className={classes.snowItem} id={`item${props.id}`} style={props.style}>
      *
    </p>
  );
};
const Snow = () => {
  const classes = useStyles();
  let fontSize = '100px';
  const buildSnowImg = (arr) => {
    return arr.map((el, i) => {
      fontSize = `${Math.floor(Math.random() * 5) + 10}px`;
      let style = {
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };
  const snow = () => {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from(
      'Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!'
    );
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 5) + 10}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };

  return <div className={classes.snowContainer}>{snow()}</div>;
};

export default Snow;
