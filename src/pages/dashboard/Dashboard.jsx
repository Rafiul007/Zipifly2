import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Parcel from '../../components/parcel/Parcel';

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
      axios.get("https://zipifly2-server.vercel.app/user/profile/" + userId, {
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
  // track a parcel
  const [trackNumber, setTrackNumber] = useState('');
  const [parcel, setParcel] = useState({
    id: '',
    status: '',
    sender: '',
    receiver: '',
    weight: 0,
    category: '',
    totalCash: 0
  })
  const handleTrackParcel = async () => {
    try {
      // GET method: get parcel details by parcel _id
      let response = await axios.get("https://zipifly2-server.vercel.app/parcel/" + trackNumber,
        { headers: { Authorization: "Bearer " + token } })
      // check if the parcel is found or not
      if (!response.data) {
        alert("No Parcel Found with this Tracking Number");
      } else {
        setParcel({
          id: response.data._id,
          status: response.data.status,
          sender: response.data.sender.fullname,
          receiver: response.data.receiver.fullname,
          weight: response.data.weight,
          category: response.data.category,
          totalCash: response.data.totalCash,
        }
        );
        console.log(parcel)
      }
    } catch (error) {
      alert(`Error tracking parcel: ${error}`);
    }
  }
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
          onChange={e => setTrackNumber(e.target.value)}
        />
        <div className="btn-con">
          <Button variant="contained" color="success" onClick={handleTrackParcel}>Track</Button>
          <Button variant="contained" color="error" onClick={() => setParcel({})}>Cancel</Button>
        </div>
      </div>
      {/* display information of the parcel */}
      {parcel.weight > 0 ? <Parcel id={parcel.id}
        status={parcel.status}
        sender={parcel.sender}
        receiver={parcel.receiver}
        weight={`${parcel.weight} kg`}
        category={parcel.category}
        totalCash={parcel.totalCash}
      /> : <div className="null"></div>}

      <div className="create-parcel-container">
        <h1>Create your parcel</h1>
        <p>Our rider will deliver your parcel without reveling your location</p>
        <div className="btn-cnt">
          <Button variant="contained"><Link to='/create-parcel'>Create</Link></Button>
        </div>
      </div>
      <div className="create-parcel-container">
        <h1>See your all parcels</h1>
        <p>Track all of your parcels easily</p>
        <Button variant="contained"><Link to='/all-parcels'>All Parcels</Link></Button>
      </div>
      <Button variant="contained" color='error' onClick={onLogout}>Logout</Button>
    </div>
  )
}

export default Dashboard