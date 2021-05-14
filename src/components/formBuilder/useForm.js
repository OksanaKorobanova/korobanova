import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(
  initialFValues,
  initialFErrors
  // validateOnChange = false,
  // validate
) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState(initialFErrors);

  // function for changing state object in depth (obj.property.name)
  function set(obj, path, value) {
    var schema = obj; // a moving reference to internal objects within obj
    var pList = path.split('.');
    var len = pList.length;
    for (var i = 0; i < len - 1; i++) {
      var elem = pList[i];
      if (!schema[elem]) schema[elem] = {};
      schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // if (validateOnChange) validate({ [name]: value });
  };

  const handleDepthInputChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...values };
    set(obj, name, value);
    setValues(obj);

    // if (validateOnChange) validate({ [name]: value });
  };

  // File uploader
  const handleChangeFile = (logoRef, logoTitleRef) => (event) => {
    event.preventDefault();

    const { name } = event.target;
    let reader = new FileReader();
    let file = event.target.files[0];

    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log('read as data url', err);
    }

    reader.onloadend = () => {
      setValues({
        ...values,
        [name]: file,
        [name + '_url']: URL.createObjectURL(file),
      });
    };
    logoRef.current.style.border = 'none';
    logoTitleRef.current.style.color = 'rgba(0, 0, 0, 0.87)';
  };

  // on blur
  const validateOnBlur = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const obj = { ...errors };
      if (value.length > 0) {
        set(obj, name, false);
        setErrors(obj);
      } else {
        set(obj, name, true);
        setErrors(obj);
      }
    } else {
      if (value.length > 0) {
        setErrors({
          ...errors,
          [name]: false,
        });
      } else {
        setErrors({
          ...errors,
          [name]: true,
        });
      }
    }
  };

  const isValidEmail = (value) => {
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(value);
  };

  const validateEmailOnBlur = (e) => {
    const { name, value } = e.target;
    if (value.length > 0 && isValidEmail(value)) {
      setErrors({
        ...errors,
        [name]: false,
      });
    } else {
      setErrors({
        ...errors,
        [name]: true,
      });
    }
  };

  const resetForm = () => {
    setValues(() => {
      const newObj = initialFValues;
      return newObj;
    });
    setErrors(() => {
      const newObj = initialFErrors;
      return newObj;
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleDepthInputChange,
    handleChangeFile,
    validateOnBlur,
    validateEmailOnBlur,
    isValidEmail,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    '& .MuiToolbar-gutters': {
      paddingLeft: 0,
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {props.children}
    </form>
  );
}
