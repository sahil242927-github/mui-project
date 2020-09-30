import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { Grid, Hidden, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Energy from '@material-ui/icons/EmojiObjects';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SpaIcon from '@material-ui/icons/Spa';

import IconButton from '@material-ui/core/IconButton';

import animationData from '../animations/digitalDocument';
import UserEx from '../animations/user-experience.json';
import Automation from '../animations/automation.json';
import ScaleBusiness from '../animations/scale-your-business.json';

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: '40rem',
  },
  arrowIcon: {
    marginTop: '-0.5rem',
  },
  mainContainer: {
    padding: '2rem 5rem 10rem 5rem',
  },
  icon: {
    fontSize: '5rem',
  },
  itemContainer: {
    maxWidth: '40rem',
  },
}));

export default (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matches800Down = useMediaQuery(theme.breakpoints.down('800'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsScale = {
    loop: true,
    autoplay: true,
    animationData: ScaleBusiness,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsUserEx = {
    loop: true,
    autoplay: true,
    animationData: UserEx,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsAutomation = {
    loop: true,
    autoplay: true,
    animationData: Automation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        container
        direction='row'
        justify={matchesMD ? 'center' : 'inherit'}
      >
        <Hidden mdDown>
          <Grid item style={{ marginLeft: '-3.5rem', marginRight: '1rem' }}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/services'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <ArrowBackIcon color='primary' className={classes.arrowIcon} />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h4' align={matchesMD ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Whether we are replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology
            </Typography>
            <Typography variant='body1' paragraph>
              Using Regular commercial software or inventing new solutions, Arc
              Development is here to help your business tackle technology. We
              are appy to help you with your ease. Give us little time to
              understand what you need.
            </Typography>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed software or inventing new
              solutions, Arc Development is here to help.
            </Typography>
            <Typography variant='body1' paragraph>
              We created exactly what you want, exactly how you want!
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/mobileapps'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <ArrowForwardIcon color='primary' className={classes.arrowIcon} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        style={{ marginTop: '5rem' }}
      >
        <Grid
          item
          container
          direction='column'
          md
          style={{ maxWidth: '20rem' }}
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h5'>Save Energy!</Typography>
          </Grid>
          <Grid item>
            <Energy color='secondary' className={classes.icon} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          style={{
            maxWidth: '20rem',
            margin: matchesXS | matches800Down ? '3rem 0' : 0,
          }}
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h5'>Save Time!</Typography>
          </Grid>
          <Grid item>
            <AccessTimeIcon color='secondary' className={classes.icon} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          style={{ maxWidth: '20rem' }}
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h5'>Save Money!</Typography>
          </Grid>
          <Grid item>
            <LocalAtmIcon color='secondary' className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='space-between'
        style={{ marginTop: '5rem' }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h5' align={matchesMD ? 'center' : 'left'}>
                Digital Document & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'left'}
              >
                Reduce Error. Reduce Waste. Reduce Cost.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'left'}
              >
                Billions are spent anually on the purchasing, printing, and
                distribution of paper. On of of the massive environmental impact
                this has, it causes bottom line as well.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'left'}
              >
                By utilizing digital forms and documents, you can remove these
                obsolete expenses, accelerate you communication, and help he
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={defaultOptions} height={230} width={230} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md>
            <Lottie options={defaultOptionsScale} height={150} width={150} />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h5' align={matchesMD ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'right'}
              >
                Billions are spent anually on the purchasing, printing, and
                distribution of paper. On of of the massive environmental impact
                this has, it causes bottom line as well.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' style={{ marginBottom: '1rem' }}>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <SpaIcon
              color='secondary'
              className={classes.icon}
              style={{ fontSize: '10rem' }}
            />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography variant='h5' gutterBottom align='center'>
                Root-Cause Analysis
              </Typography>
              <Typography variant='body1' paragraph align='center'>
                My problems are marely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant='body1' paragraph align='center'>
                We will help you thoroughly examin all area of your business do
                develop a holistic plan.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='space-between'
        style={{ marginTop: '5rem' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h5' align={matchesSM ? 'center' : 'left'}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'left'}
              >
                Reduce Error. Reduce Waste. Reduce Cost.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'left'}
              >
                Billions are spent anually on the purchasing, printing, and
                distribution of paper. On of of the massive environmental impact
                this has, it causes bottom line as well.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'left'}
              >
                By utilizing digital forms and documents, you can remove these
                obsolete expenses, accelerate you communication, and help he
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={defaultOptionsAutomation}
              height={150}
              width={150}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md>
            <Lottie options={defaultOptionsUserEx} height={150} width={150} />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h5' align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Billions are spent anually on the purchasing, printing, and
                distribution of paper. On of of the massive environmental impact
                this has, it causes bottom line as well.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
