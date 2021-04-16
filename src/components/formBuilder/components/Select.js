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

export default function Select(props) {
  const classes = useStyles();
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    onBlur,
    options,
    width,
    required = false,
    emptyRow = true,
    ...other
  } = props;

  return (
    <TextField
      style={width ? { width: width } : { width: '100%' }}
      name={name}
      className={classes.textField}
      select
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      SelectProps={{
        native: true,
      }}
      error={error}
      size='small'
      onBlur={onBlur}
      variant='outlined'
      fullWidth={width ? false : true}
      {...other}>
      {emptyRow ? <option value=''></option> : ''}

      {options &&
        options.map((item, index) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
    </TextField>
  );
}
