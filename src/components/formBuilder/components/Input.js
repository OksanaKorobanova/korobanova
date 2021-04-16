import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: '8px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

export default function Input(props) {
  const classes = useStyles();
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    onBlur,
    width,
    required = false,
    ...other
  } = props;

  return (
    <TextField
      style={width ? { width: width } : { width: '100%' }}
      name={name}
      className={classes.textField}
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      error={error}
      size='small'
      onBlur={onBlur}
      variant='outlined'
      inputProps={{ maxLength: 100 }}
      fullWidth={width ? false : true}
      {...other}
    />
  );
}
