import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.2rem',
    maxWidth: '40rem',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
  },
}));

export default (props) => {
  const classes = useStyle();
  //const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2rem' }}>
        <Typography variant='h4'>About Us</Typography>
      </Grid>
      <Grid item container justify='center' className={classes.rowContainer}>
        <Typography variant='h5' className={classes.missionStatement}>
          Whether it be person to person, business to customer, or an individual
          to their interest, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Develoment will use that
          principle to provide fast, modern, inexpensive and asthetic software
          to the midest.
        </Typography>
      </Grid>
    </Grid>
  );
};
