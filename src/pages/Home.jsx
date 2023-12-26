import React from 'react'
import './Home.css'
import { Button, TextField } from '@mui/material'
const Home = () => {
    return (
        <div className='home-container'>
            {/* Navbar */}
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Zipifly</h1>
                </div>
                <div className="button-container">
                    <Button variant="contained">Login</Button>
                    <Button variant="contained">Registration</Button>
                </div>
            </div>
            {/* Hero section */}
            <div className="hero-container">
                <div className="hero-banner">
                    <h2>No.1 secure delivery service in Bangladesh</h2>
                    <Button variant="contained">Download App</Button>
                </div>
                <div className="tracking-container">
                    <h2>Track your parcel</h2>
                    <TextField id="outlined-basic" label="Parcel Id" fullWidth variant="outlined" />
                    <Button variant="contained" color='success' >Track</Button>
                </div>
            </div>
        </div>
    )
}

export default Home