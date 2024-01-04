import { TextField, Button } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import axios from "axios";
import './Signup.css'

const validationSchema = yup.object({
  fullname: yup.string('Enter you name').min(3, "Name can't be less than 3 character").required("Name is required"),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  confirmPassword: yup.string("Enter confirm password").oneOf([yup.ref('password')], "Password must match"),
  contactNumber: yup.string("Enter valid phone number").min(11, "contactNumber number has 11 numebrs").max(11, "contactNumber number has 11 numbers").required("contactNumber number is required")
});
function Signup() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(e);
      // console.log(values.email)
      try {
        // // alert(JSON.stringify(values, null, 2));
        // console.log(values)
        // use post method to send the to the backend
        const newUser = {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
          contactNumber: values.contactNumber
        }
        console.log(newUser)
        const res = await axios.post('http://localhost:3002/user/', newUser);
        console.log(res.data);
        alert('Registration successful!');
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

        <TextField id="contactNumber" name='contactNumber' label="contactNumber number" variant="outlined" value={formik.values.contactNumber}
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
          error={formik.touched.email && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} fullWidth />
        <Button variant="contained" type='submit'>Registration</Button>
      </form>
    </div>
  )
}

export default Signup