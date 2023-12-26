import React from 'react'
import './Home.css'
import { Button } from '@mui/material'
const Home = () => {
    return (
        <div className='home-container'>
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Zipifly</h1>
                </div>
                <div className="button-container">
                    <Button variant="contained">Login</Button>
                    <Button variant="contained">Registration</Button>
                </div>
            </div>
        </div>
    )
}

export default Home