import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard({ token, onLogout }) {
  const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  };
  const userData = decodeToken(token);
  const userId = userData.userId;
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    email: "",
    contactNumber: "",
    fullname: ""
  });
  useEffect(() => {
    try {
      axios.get("http://localhost:3002/user/profile/" + userId, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          if (!res.data) throw new Error();
          else {
            const { username, email, contactNumber, fullname } = res.data;
            setProfileInfo({
              username: username || "",
              email: email || "",
              contactNumber: contactNumber || "",
              fullname: fullname || ""
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data: ", error);
        });
    } catch (error) {
      console.error("Error in useEffect: ", error);
    }
  }, [userId, token]);
  return (
    <div className='dashboard-container'>
      <h1>Welcome to {profileInfo.fullname}!</h1>
      <div className="packaging">
        <h1>Packaging convenience!</h1>
        <p>Worried about the packaging of your parcel? Don't worry, the right packaging solution is now available at Zipifly. Order now...</p>
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
      <Button variant="contained" color='error' onClick={onLogout}>Logout</Button>
      {/* <Button variant="contained" color='error' onClick={fetchUser}>click</Button> */}
    </div>
  )
}

export default Dashboard