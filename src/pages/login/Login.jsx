import React from 'react'
import { TextField,Button } from '@mui/material'
import './Login.css'
function Login() {
  return (
    <div className="login-container">
      <div className="login-heading">
        <h1>Login</h1>
        <p>Welcome back</p>
      </div>

      <form className='form-container'>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' fullWidth />
        <Button variant="contained">Login</Button>
      </form>
    </div>
  )
}

export default Login