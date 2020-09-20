import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import ButtonArrow from './ButtonArrow';
import CallToActionBackground from '../../assets/callToAction.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
  },
  background: {
    backgroundImage: `linear-gradient(to left bottom,
        rgba(11, 114, 185, 0.1) 20%,
        ${theme.palette.common.blue} 70%
      ), url(${CallToActionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '50rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '60%',
      // we dont't want paralax effect on mobile devices
      backgroundAttachment: 'inherit',
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 50,
    width: 180,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1rem',
    marginRight: '5rem',
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '2rem',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  //

  return (
    <Grid
      container
      style={{ height: '50rem' }}
      alignItems='center'
      className={classes.background}
      justify={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5rem' }}>
        <Grid container>
          <Grid item>
            <Typography
              variant='h2'
              style={{
                color: 'white',
                textAlign: matchesSM ? 'center' : 'inherit',
              }}
            >
              Simple Software. <br />
              Revolutionary Result
            </Typography>
            <Typography
              variant='subtitle2'
              style={{
                fontSize: '1.5rem',
                textAlign: matchesXS ? 'center' : 'inherit',
              }}
            >
              Take the advantage of the 21st Century.
            </Typography>
            <Grid item container justify={matchesSM ? 'center' : 'inherit'}>
              <Button
                variant='outlined'
                className={classes.learnButton}
                style={{ color: 'white', borderColor: 'white' }}
                component={Link}
                to='/revolution'
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.white}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          className={classes.estimate}
          component={Link}
          to='/estimate'
          onClick={() => props.setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};
