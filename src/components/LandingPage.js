import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';

// this is a Lottie JSON file
import animationData from '../animations/33187-rabbit-in-a-hat';
import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';

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
    borderColor: theme.palette.common.blue,
    height: 50,
    width: 145,
    fontFamily: 'Roboto',
    fontSize: '.9rem',
    fontWeight: 'bold',
    textTransform: 'none',
    borderRadius: 50,
    borderWidth: 2,
    color: theme.palette.common.blue,
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
}));

export default () => {
  const classes = useStyle();
  const theme = useTheme();

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
        {' '}
        {/*----- Hero Block ----- */}
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
      </Grid>{' '}
      {/*----- Hero Block Ends----- */}
      <Grid item>{/*----- Services----- */}
          
      
      </Grid>
    </Grid>
  );
};
