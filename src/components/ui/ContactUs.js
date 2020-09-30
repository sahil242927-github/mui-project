import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhoneIcon from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

import PaperPlane from '../../assets/paperplane.svg';

import callToAction from '../../assets/callToAction.jpg';

const useStyle = makeStyles((theme) => ({
  background: {
    backgroundImage: `linear-gradient(to left top,
        rgba(11, 114, 185, 0.2) 10%,
        ${theme.palette.common.blue} 90%
      ), url(${callToAction})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40rem',
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '3rem',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 200,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 180,
    },
  },
}));

export default (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const formStatus = () => {
    return (
      name.length === 0 ||
      message.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      phoneHelper.length !== 0 ||
      emailHelper.length !== 0
    );
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid Email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid Phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setAlert({
        open: true,
        message: 'Message sent Successfully',
        backgroundColor: '#4BB543',
      });

      return { data: 'Mail sent successfully!' };
    }, 2000);
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const sendButtonContent = (
    <React.Fragment>
      Send Message
      <img
        src={PaperPlane}
        alt='paperplane'
        style={{ width: 15, marginLeft: '.5rem' }}
      />
    </React.Fragment>
  );

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        lg={4}
        xl={3}
        md={5}
      >
        <Grid item>
          <Grid container alignItems='center' direction='column'>
            <Grid item style={{ marginTop: '2rem' }}>
              <Typography variant='h2' style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                style={{
                  color: theme.palette.common.blue,
                  fontSize: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '.3rem',
                }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container justify='center'>
              <Grid item style={{ marginRight: '0.5rem' }}>
                <PhoneIcon color='primary' />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='tel:5555555555'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555 5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify='center'>
              <Grid item style={{ marginRight: '0.5rem' }}>
                <Email color='primary' />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href='mailto:service@kashrid.com'
                  >
                    service@kashrid.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify='center' direction='column'>
              <Grid item>
                <TextField
                  label='Name'
                  fullWidth
                  helperText=''
                  id='name'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Phone'
                  error={phoneHelper.length !== 0}
                  fullWidth
                  id='phone'
                  value={phone}
                  onChange={onChange}
                  helperText={phoneHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  error={emailHelper.length !== 0}
                  label='Email'
                  helperText={emailHelper}
                  fullWidth
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }} // it will disable the underline
                multiline
                fullWidth
                rows={10}
                id='message'
                className={classes.message}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginTop: '2rem' }}>
              <Button
                disabled={formStatus()}
                variant='contained'
                className={classes.sendButton}
                style={{
                  backgroundColor: formStatus()
                    ? '#ccc'
                    : theme.palette.common.orange,
                }}
                onClick={() => setOpen(true)}
              >
                Send Message
                <img
                  src={PaperPlane}
                  alt='paperplane'
                  style={{ width: 15, marginLeft: '.5rem' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Dialog
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1305 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1rem' : '3rem',
            paddingBottom: matchesXS ? '1rem' : '3rem',
            paddingLeft: matchesXS
              ? '0'
              : matchesSM
              ? '2rem'
              : matchesMD
              ? '3rem'
              : '10rem',
            paddingRight: matchesXS
              ? '0'
              : matchesSM
              ? '2rem'
              : matchesMD
              ? '3rem'
              : '10rem',
          },
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h5' align='center' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container justify='center' direction='column'>
              <Grid item>
                <TextField
                  label='Name'
                  fullWidth
                  helperText=''
                  id='name'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Phone'
                  error={phoneHelper.length !== 0}
                  fullWidth
                  id='phone'
                  value={phone}
                  onChange={onChange}
                  helperText={phoneHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  error={emailHelper.length !== 0}
                  label='Email'
                  helperText={emailHelper}
                  fullWidth
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }} // it will disable the underline
                multiline
                fullWidth
                rows={10}
                id='message'
                className={classes.message}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: '2rem' }}
            alignItems='center'
            direction={matchesSM ? 'column' : 'row'}
            justify='center'
          >
            <Grid item>
              <Button color='primary' onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={formStatus()}
                variant='contained'
                className={classes.sendButton}
                style={{
                  backgroundColor: theme.palette.common.orange,
                }}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={20} /> : sendButtonContent}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        className={classes.background}
        lg={8}
        xl={9}
        md={7}
      ></Grid>
    </Grid>
  );
};
