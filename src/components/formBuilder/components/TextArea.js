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
  selectHeight: {
    // height: '40px !important',
  },
}));

export default function TextArea(props) {
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
      multiline={true}
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
      rows={10}
      rowsMax={5}
      inputProps={{ maxLength: 100, className: classes.selectHeight }}
      fullWidth={width ? false : true}
      {...other}
    />
  );
}
