import React, { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles, Grid } from '@material-ui/core';
import myImage from './hospital-building1.jpg';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  Container:{
    backgroundColor:'#91B8F4',
  },
  formContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Main: {
    position: 'absolute',
    right: '10%',
    top: '6%',
    fontSize: '34px',
    color: '#4F9A8A',
    fontWeight: 800,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: theme.spacing(2),
    position: 'absolute',
    right: '10%',
    top: '15%',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  root: {
    position: 'absolute',
    backgroundColor: '#F4F8FE',
    height: '950px',
    width: '750px',
    top: '0%',
    left: '0%',
  },
  image: {
    marginTop:'20%',
    width: '100%', // Adjust this value to control the image width
    height: 'auto', // Maintain aspect ratio
    maxHeight: '100%', // Ensure the image fits within the container height
    objectFit: 'cover',
    opacity:'90%', // Ensure the image covers the entire container
  },
}));

const Hospital_Reg = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    description: '',
    facilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/hospital/signup-hospital', formData);
    console.log('Registration successful:', response.data);
    // Reset form fields after successful registration
    setFormData({ name: '', address: '', phone: '', email: '', password: '', description: '', facilities: '' });


  } catch (error) {
    console.error('Error registering hospital:', error.response.data);
    // Handle error, e.g., display error message to user
  }
};


  return (
    <>
    <div>
      <Container>
        <div className={classes.Main}>
          Hospital Registration
        </div>
     
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Hospital Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phone"
              value={formData.phone}
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
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              label="Facilities"
              name="facilities"
              value={formData.facilities}
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
      <Container>
        <div className={classes.root}>
          <img src={myImage} alt="Hospital Building" className={classes.image} />
        </div>
      </Container>
          </div>

    </>
  );
};

export default Hospital_Reg;
