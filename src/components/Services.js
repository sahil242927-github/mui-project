import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareIcon from '@material-ui/icons/Bookmarks';
import MobileAppIcon from '@material-ui/icons/ImportantDevices';
import WebsiteIcon from '@material-ui/icons/Web';

const useStyle = makeStyles((theme) => ({
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
  pageHeading: {
    marginLeft: '3rem',
    marginTop: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
      textAlign: 'center',
      marginLeft: 0,
    },
  },
}));

export default (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h4' gutterBottom className={classes.pageHeading}>
          Services
        </Typography>
      </Grid>
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
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to='/customsoftware'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
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
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to='/mobileapps'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
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
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to='/websites'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
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
