// User_log.css

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Image from '../assets/preg-women.png'; // Import your image

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  leftSection: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Left section background color
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '80%',
    maxWidth: 400,
    marginBottom: theme.spacing(2),
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'19%',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const User_log = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ email: '', password: '' });
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftSection}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome Back!
        </Typography>
        <img src={Image} alt="Your Image" className={classes.image} />
        <Typography variant="body1" align="center">
          Add some text content here...
        </Typography>
      </div>
      <div className={classes.formContainer}>
        <Container>
          <Typography variant="h4" gutterBottom  >
            User Registration
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Link to={'/User_Portal'}>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Link>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default User_log;
