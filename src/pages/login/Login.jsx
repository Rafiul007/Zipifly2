import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import './Login.css'; // Assuming you have a CSS file for styling

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required*'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required*'),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  })
  return (
    <div className="login-container">
      <div className="login-heading">
        <h1>Login</h1>
        <p>Welcome back</p>
      </div>
      <form onSubmit={formik.handleSubmit} className='form-container'>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit">
          Login
        </Button>
      </form>

    </div>
  );
}

export default Login;
