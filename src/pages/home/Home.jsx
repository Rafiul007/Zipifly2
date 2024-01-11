import React from "react";
import "./Home.css";
import { Button, TextField } from "@mui/material";
import DeliveryCalculator from "../../components/deliveryCalculator/DeliveryCalculator";
import bd from './Bangladesh-Map.jpg'
import log from './logo.png'
import icon1 from './Icon1.png'
import icon2 from './Icon2.png'
import icon3 from './Icon-6.png'
import google from './google.png'
const Home = () => {
  const data = [
    // "Delivery all over Bangladesh only at Tk99. Inside dhaka Tk45",
    // " Dhaka Express delivery(within 6hr) only at 99tk",
    // "Incognito Deliery. Don't reveile your personal information ",
    {
      id: 1,
      name: "Delivery all over Bangladesh only at Tk99. Inside dhaka Tk45",
      icon: icon1
    },
    {
      id: 2,
      name: "Dhaka Express delivery(within 6hr) only at 99tk",
      icon: icon2
    },
    {
      id: 3,
      name: "Incognito Deliery. Don't reveile your personal information",
      icon: icon3
    },
  ];
  return (
    <div className="home-container">
      {/* Navbar */}
      {/* <Navbar/> */}
      {/* Hero section */}
      <div className="hero-container">
        <div className="hero-banner">
          <div className="img-con">
            <img src={log} alt="" />
          </div>
          <h2>No.1 secure delivery service in Bangladesh</h2>
          <Button variant="contained">Download App</Button>
          <div className="play-logo">
            <img src={google} alt="" />
          </div>
        </div>
        <div className="tracking-container">
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
      </div>
      {/* sub hero section */}
      <div className="sub-hero">
        {data.map((item) => {
          return (
            <div className="feture-container" key={item.id}>
              <img src={item.icon} alt="icon" />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="bd-map-section">
        <div className="bd-map">
          <img src={bd} alt="bd" />
        </div>
        <div className="title-banner">
          <h1>We are all over the <br />Bangladesh</h1>
          <p>Most secure delivery service in Bangladesh</p>
        </div>
      </div>
      <div className="calculator-section">
        <DeliveryCalculator />
      </div>
    </div>
  );
};

export default Home;
