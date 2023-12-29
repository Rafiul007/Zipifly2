import { TextField,Button } from '@mui/material'
import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-heading">
        <h1>Registration</h1>
        <p>Join most secure and fastest deliery service in Bangladesh</p>
      </div>

      <form className='form-container'>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth />
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' fullWidth />
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' fullWidth />
        <Button variant="contained">Registration</Button>
      </form>
    </div>
  )
}

export default Signup