import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  RadioGroup as MyRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  radioGroupContainer: {
    padding: theme.spacing(1),
    // width: '100%',
    // minWidth: '300px',
    marginBottom: '8px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

export default function RadioGroup(props) {
  const classes = useStyles();
  const {
    name,
    label,
    value,
    onChange,
    options,
    row = false,
    error,
    width,
    align = 'flex-start',
    ...other
  } = props;

  return (
    <FormControl
      style={error ? { border: '1px solid red' } : { border: '1px solid #ccc' }}
      variant='outlined'
      component='fieldset'
      className={classes.radioGroupContainer}
      onChange={onChange}
      fullWidth={width ? false : true}
      {...other}>
      <FormLabel component='legend' className={classes.formLabelRoot}>
        {label}
      </FormLabel>
      <MyRadioGroup
        style={{ justifyContent: align }}
        row={row}
        name={name}
        className={classes.radioGroup}
        value={value}>
        {options.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.title}
              control={<Radio color='primary' />}
              label={item.title}
            />
          );
        })}
      </MyRadioGroup>
    </FormControl>
  );
}
