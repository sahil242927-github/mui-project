import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';

// this is a Lottie JSON file
import animationData from '../animations/rabbit-in-a-hat';
import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareIcon from '@material-ui/icons/Bookmarks';
import MobileAppIcon from '@material-ui/icons/ImportantDevices';
import WebsiteIcon from '@material-ui/icons/Web';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import revolutionBg from '../assets/revolutionBg.jpg';
import infoBackground from '../assets/infoBackground.jpg';
import CallToAction from './ui/CallToAction';

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
    marginRight: '1rem',
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

  // Revolution CSS Styles
  revolutionBackground: {
    backgroundImage: `linear-gradient(to left top,
      rgba(11, 114, 185, 0.2) 10%,
      ${theme.palette.common.blue} 90%
    ), url(${revolutionBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '30%',
    },
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10rem',
    [theme.breakpoints.down('sm')]: {
      padding: '4rem 0',
      borderRadius: 0,
      width: '100%',
    },
  },

  // info Background CSS Style
  infoBackground: {
    backgroundImage: `linear-gradient(to left top,
      rgba(255, 186, 96, 0.9) 90%,
      ${theme.palette.common.orange} 100%
    ), url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
              alignItems='center'
            >
              <Grid item>
                <Button
                  component={Link}
                  to='/estimate'
                  className={classes.estimateButton}
                  variant='contained'
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  className={classes.learnButtonHero}
                  component={Link}
                  to='/revolution'
                  onClick={() => {
                    props.setValue(2);
                  }}
                >
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

      {/* Revolution Block Starts Here */}
      <Grid item style={{ marginTop: matchesSM ? '0' : '5rem' }}>
        <Grid
          container
          style={{ height: matchesSM ? '25rem' : '50rem' }}
          justify='center'
          alignItems='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary Insights Coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    component={Link}
                    to='/revolution'
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* Information Block Starts Here */}
      <Grid item>
        <Grid
          container
          style={{
            height: matchesXS ? '30rem' : '40rem',
          }}
          alignItems='center'
        >
          <Grid
            item
            container
            style={{
              position: 'absolute',
              textAlign: matchesXS ? 'center' : 'inherit',
            }} // inherit : as it was earlier
            direction={matchesXS ? 'column' : 'row'}
          >
            <Grid
              sm
              item
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                direction='column'
                justify={matchesXS ? 'center' : 'inherit'}
              >
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get Personal</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link}
                    to='/about'
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
                marginTop: matchesXS ? '4rem' : 'inherit',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  <span role='img' aria-label='waving hand'>
                    Say Hello! 👋{' '}
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link}
                    to='/contact'
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>

      {/* CallToAction Block Starts Here */}
      <Grid>
        <CallToAction {...props} />
      </Grid>
    </Grid>
  );
};
