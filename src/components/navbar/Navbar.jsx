import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []); // Run this effect once on component mount

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to='/'>
          <h1>Zipifly</h1>
        </Link>
      </div>
      <div className="menu-container">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/offers'>Offers</Link></li>
        </ul>
      </div>
      <div className="button-container">
        <Button variant="outlined" color='success'>
          <Link to='/welcome'>
            {token ? `Dashboard` : `Log in`}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
