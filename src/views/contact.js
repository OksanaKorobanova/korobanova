import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import {
  Send as SendIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
} from '@material-ui/icons';
import { Form, useForm } from '../components/formBuilder/useForm';
import FormBuilder from '../components/formBuilder/FormBuilder';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import SocialComponent from '../components/contact/socialComponent';
import MapImg from '../images/contact/map.webp';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  gridContent: {
    justifyContent: 'space-between',
  },
  map: {
    position: 'relative',
    backgroundImage: `url(${MapImg})`,
    backgroundPosition: 'center top ',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
      backgroundPosition: 'center',
      marginTop: 0,
    },
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: '3rem',
    color: theme.palette.text.secondary,
  },
  contactInfo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '50px',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  bgOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const emptyState = { name: '', email: '', subject: '', message: '' };
const initialValidateObj = {
  name: false,
  email: false,
  subject: false,
  message: false,
};
const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [result, setResult] = useState(null);
  const {
    values,
    handleInputChange,
    setValues,
    errors,
    setErrors,
    validateOnBlur,
  } = useForm(emptyState, initialValidateObj);

  const validate = () => {
    let tempErrors = { ...errors };

    setErrors(tempErrors);

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //   api call
      console.log('from');
      console.log(process.env.REACT_APP_USER_FROM);
      console.log('validate=true');
      axios
        .post('/api/send', { ...values })
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            setResult(response.data);
            setValues(emptyState);
            setErrors(initialValidateObj);
          }
        })
        .catch(() => {
          console.log('Something went wrong.');
        });
    }
  };

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container={true} className={classes.gridContent}>
        <Grid item={true} xs={12} md={12} lg={12}>
          <div className={classes.box}>
            <Typography component='h1' variant='h1' gutterBottom>
              {t('contacts.contact')}
            </Typography>
          </div>
        </Grid>
        <Grid item={true} xs={12} md={5} lg={5}>
          <div className={classes.box}>
            {result && (
              <Alert severity={`${result.success ? 'success' : 'error'}`}>
                {result.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormBuilder.Input
                name='name'
                label='Name'
                value={values.name}
                onChange={handleInputChange}
                onBlur={validateOnBlur}
                error={errors.name}
                width='100%'
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              <FormBuilder.Input
                name='email'
                label='Email'
                value={values.email}
                onChange={handleInputChange}
                onBlur={validateOnBlur}
                error={errors.email}
                width='100%'
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              <FormBuilder.Input
                name='subject'
                label='Subject'
                value={values.subject}
                onChange={handleInputChange}
                onBlur={validateOnBlur}
                error={errors.subject}
                width='100%'
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              <FormBuilder.TextArea
                name='message'
                label='Message'
                value={values.message}
                onChange={handleInputChange}
                onBlur={validateOnBlur}
                error={errors.message}
                width='100%'
                height='200px'
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              <div className={classes.btnGroup}>
                <Button
                  type='submit'
                  variant='outlined'
                  color='primary'
                  className={classes.btn}
                  startIcon={<SendIcon />}>
                  {t('contacts.btn')}
                </Button>
              </div>
            </Form>
          </div>
        </Grid>
        <Grid item={true} xs={12} md={6} lg={6} className={classes.map}>
          <div className={classes.bgOpacity}></div>
          <div className={classes.contactInfo}>
            <div className={classes.location}>
              <LocationOnOutlinedIcon className={classes.locationIcon} />
              <Typography variant='body1'>Ukraine, Lviv</Typography>
            </div>
            <SocialComponent />
          </div>

          {/* <div className={classNames(classes.box, classes.dark)}>
            <Game />
          </div> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
