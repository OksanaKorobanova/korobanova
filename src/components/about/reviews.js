import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  MobileStepper,
  Card,
  Typography,
  Button,
  Paper,
  CardContent,
  Divider,
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    label:
      'Oksana is just great. Very meticulous with her work and take care for the tiny details. Keen eye to every detail which save you efforts on endless Q/A with non qualified freelancers. She is definitely a pro so I will be happy to work with her in the future (and probably so do you!)',
  },
  {
    label:
      'Oksana did a very good job, understanding and fixing my problem quickly and efficiently. I highly recommend her!',
  },
  {
    label:
      'Oksana exactly did what I asked, very fast delivering as I needed. Thank you so much Oksana :)',
  },
  {
    label:
      'Awesome to work with her. She is really expert in Web designing field. Thanks oksana. I will really use your services soon.',
  },
  {
    label:
      'I have been working with freelancers for over 8+ years and Oksana is easily one of the best in terms of getting things done quickly!',
  },
  {
    label:
      'Oksana was a a pleasure to deal with. The work was exactly as described, and she was extremely helpful in implementing/supporting. We are using her work on public projects. Excellent communication, and fulfilled every deadline.',
  },
  {
    label:
      'Once again, Oksanas work & performance were excellent. She was quick to complete the work to our specifications, provided excellent documentation and was available for feedback & questions. We highly recommend working with her, and we look forward to doing so again in the future.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 150,
  },
  box: {
    padding: theme.spacing(1),
  },
}));

function Reviews() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.box}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='body2' gutterBottom>
            Reviews
          </Typography>

          <Divider className={classes.divider} />
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {steps.map((step, index) => (
              <div key={step.label} className={classes.header}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography variant='body2' color='textSecondary'>
                    {step.label}
                  </Typography>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            style={{ background: 'inherit' }}
            steps={maxSteps}
            position='static'
            variant='text'
            activeStep={activeStep}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Reviews;
