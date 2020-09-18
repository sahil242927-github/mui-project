import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import foorterAdornment from '../../assets/footerAdornment.svg';

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    marginTop: '2rem',
  },
  adornment: {
    width: '25rem',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '7rem',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '2rem',
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6rem',
    right: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3.2rem',
    },
  },
}));

export default (props) => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              component={Link}
              onClick={() => props.setValue(0)}
              container
              direction='column'
              className={classes.link}
              to='/'
            >
              Home
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
                to='/services'
              >
                Services
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                item
                className={classes.link}
                to='/customsoftware'
              >
                Customer Software Development
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                item
                className={classes.link}
                to='/mobileapps'
              >
                Mobile Application
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                item
                className={classes.link}
                to='/websites'
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(2)}
                item
                className={classes.link}
                to='/revolution'
              >
                The Revolution
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(2)}
                item
                className={classes.link}
                to='/revolution'
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(2)}
                item
                className={classes.link}
                to='/revolution'
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(2)}
                item
                className={classes.link}
                to='/revolution'
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(3)}
                item
                className={classes.link}
                to='/about'
              >
                About Us
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(3)}
                item
                className={classes.link}
                to='/about'
              >
                History
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(3)}
                item
                className={classes.link}
                to='/about'
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(4)}
                item
                className={classes.link}
                to='/contact'
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='footer Adornment'
        src={foorterAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href='http://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Icon>
            <FacebookIcon className={classes.icon} />
          </Icon>
        </Grid>
        <Grid
          item
          component={'a'}
          rel='noopener noreferrer'
          target='_blank'
          href='http://www.twitter.com'
        >
          <Icon>
            <TwitterIcon className={classes.icon} />
          </Icon>
        </Grid>
        <Grid
          item
          component={'a'}
          rel='noopener noreferrer'
          target='_blank'
          href='http://www.instagram.com'
        >
          <Icon>
            <InstagramIcon className={classes.icon} />
          </Icon>
        </Grid>
      </Grid>
    </footer>
  );
};
