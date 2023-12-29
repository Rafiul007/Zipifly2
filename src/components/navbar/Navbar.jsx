import React from 'react'
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <h1>Zipifly</h1>
            </div>
            <div className="button-container">
                <Button variant="contained"><Link to='/login'>Login</Link></Button>
                <Button variant="contained"><Link to='/signup'>Signup</Link></Button>
            </div>
        </div>
    )
}

export default Navbar