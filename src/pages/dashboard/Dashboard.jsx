import React from 'react'
import './Dashboard.css'
import { Button, TextField } from "@mui/material";
import { Link } from 'react-router-dom';

function Dashboard({token}) {
  console.log(token);
  return (
    <div className='dashboard-container'>
      <h1>Welcome to mrRafie!</h1>
      <div className="packaging">
        <h1>Packaging convenience!</h1>
        <p>Worried about the packaging of your parcel? Don't worry, the right packaging solution is now available at RedX. Order now...</p>
        <Button variant="contained" color="success">Order now</Button>
      </div>
      <div className="tracking-parcel-container">
        <h2>Track your parcel</h2>
        <TextField
          id="outlined-basic"
          label="Parcel Id"
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" color="success">
          Track
        </Button>
      </div>
      <div className="create-parcel-container">
        <h1>Create your parcel</h1>
        <p>Our rider will deliver your parcel without reveling your location</p>
        <div className="btn-cnt">
          <Button variant="contained"><Link to='/create-parcel'>Create</Link></Button>
        </div>
      </div>

    </div>
  )
}

export default Dashboard