import { TextField, Button, Autocomplete, FormControlLabel, Checkbox, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import React from 'react'
import axios from "axios";
import './Signup.css'

const validationSchema = yup.object({
  fullname: yup.string('Enter you name').min(3, "Name can't be less than 3 character").required("Name is required"),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  confirmPassword: yup.string("Enter confirm password").oneOf([yup.ref('password')], "Password must match"),
  contactNumber: yup.string("Enter valid phone number").min(11, "contactNumber number has 11 numebrs").max(11, "contactNumber number has 11 numbers").required("contactNumber number is required"),
  address: yup.string("Enter valid address").required("Address is required"),
  district: yup.string("Enter valid district").required("District is required"),

});
function Signup() {
  const navigate = useNavigate();
  const dis = [
    { label: "Dhaka", value: 1 },
    { label: "Rajshahi", value: 2 },
    { label: "Khulna", value: 3 },
    { label: "Chattogram", value: 4 },
    { label: " Sylhet", value: 5 },
    { label: " Mymensingh ", value: 6 },
    { label: " Rangpur", value: 7 },
  ]
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
      address: '',
      district: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // use post method to send the to the backend
        const newUser = {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
          contactNumber: values.contactNumber,
          address: values.address,
          district: values.district
        }
        const res = await axios.post('https://zipifly2-server.vercel.app/user/', newUser);
        console.log(res.data);
        alert('Registration successful!');
        resetForm()
        navigate("/welcome")

      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');
      }
    },
  });
  return (
    <div className="signup-container">
      <div className="signup-heading">
        <h1>Registration</h1>
        <p>Join most secure and fastest deliery service in Bangladesh</p>
      </div>

      <form onSubmit={formik.handleSubmit} className='form-container'>
        <TextField id="fullname" name='fullname' label="Full Name" variant="outlined" value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname} fullWidth />

        <TextField id="contactNumber" name='contactNumber' label="Phone number" variant="outlined" value={formik.values.contactNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
          helperText={formik.touched.contactNumber && formik.errors.contactNumber} fullWidth />

        <TextField id="email" name='email' label="Email" variant="outlined" value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} fullWidth />

        <TextField id="password" name='password' label="Password" variant="outlined" value={formik.values.password} type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password} fullWidth />

        <TextField id="confirmPassword" name='confirmPassword' label="Confirm Password" variant="outlined" value={formik.values.confirmPassword}
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} fullWidth />
        <TextField id="address" name='address' label="address" variant="outlined" value={formik.values.address}
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address} fullWidth />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Division</InputLabel>
          <Select
            labelId="district"
            id="district"
            name="district"
            value={formik.values.district}
            label="Division"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.district && Boolean(formik.errors.district)}
          >
            {dis.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type='submit'>Registration</Button>
      </form>
    </div>
  )
}

export default Signup