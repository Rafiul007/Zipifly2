import React from 'react'
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <Link to='/'><h1>Zipifly</h1></Link>
            </div>
            <div className="menu-container">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/about-us'>About us</Link></li>
                </ul>
            </div>
            <div className="button-container">
                <Button variant="contained"><Link to='/welcome'>Login</Link></Button>
                <Button variant="contained"><Link to='/signup'>Signup</Link></Button>
            </div>
        </div>
    )
}

export default Navbar