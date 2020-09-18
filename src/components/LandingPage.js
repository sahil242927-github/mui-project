import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';

// this is a Lottie JSON file
import animationData from '../animations/33187-rabbit-in-a-hat';
import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareIcon from '@material-ui/icons/Bookmarks';
import MobileAppIcon from '@material-ui/icons/ImportantDevices';
import WebsiteIcon from '@material-ui/icons/Web';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    borderRadius: 50,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '2rem',
    },
  },
  learnButtonHero: {
    height: 50,
    width: 145,
    fontSize: '.9rem',
    ...theme.typography.learnButton,
  },
  mainContainer: {
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1.5rem',
    },
  },
  heroTextContainer: {
    minWidth: '20rem',
  },
  // Services Block CSS Styles
  customSoftwareIcon: {
    fontSize: 150,
    marginRight: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1rem',
      marginTop: '1.5rem',
    },
  },
  mobileAppIcon: {
    fontSize: 150,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1rem',
      marginTop: '1.5rem',
    },
  },
  specialtext: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
  },
  subtitle: {
    marginBottom: '1rem',
  },
  serviceComtainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: '4rem',
    },
    marginTop: '7rem',
  },
}));

export default () => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/*----- Hero Block Starts here ----- */}
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Brinking West Coast Technology
              <br /> to the Midest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
              spacing={1}
              alignItems='center'
            >
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm>
            <Lottie options={defaultOptions} height={300} width={300} />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Services Block Starts----- */}
      <Grid item>
        <Grid
          container
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceComtainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '3rem',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete Digital Solutions, from investigation to{' '}
              <span className={classes.specialtext}>celebration.</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <CustomSoftwareIcon
              className={classes.customSoftwareIcon}
              color='primary'
            />
          </Grid>
        </Grid>
      </Grid>

      {/* -----Mobile App Block Starts Here----- */}
      <Grid item>
        <Grid
          container
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceComtainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Mobile App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone App
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '3rem' }}>
            <MobileAppIcon className={classes.mobileAppIcon} color='primary' />
          </Grid>
        </Grid>
      </Grid>

      {/* -----Website Block Starts Here----- */}
      <Grid item>
        <Grid
          container
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceComtainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '3rem',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover more. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for search Engines, built for speed.
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <WebsiteIcon
              className={classes.customSoftwareIcon}
              color='primary'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
