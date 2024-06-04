import React, { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: theme.spacing(2),
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
    name: '',
    email: '',
    password: '',
    phone_no: '',
    whatsapp_no: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      phone_no: '',
      whatsapp_no: ''
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        User Registration
      </Typography>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="Phone Number"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="WhatsApp Number"
            name="whatsapp_no"
            value={formData.whatsapp_no}
            onChange={handleChange}
            required
          />
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default User_log;
